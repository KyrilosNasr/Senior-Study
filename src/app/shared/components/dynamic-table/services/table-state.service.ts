import { Injectable, signal, inject } from '@angular/core';
import { TableColumn, FilterMetadata, TableAction } from '../../../types/table-config.types';
import { PrimeNGTable } from '../../../types/primeng-table.types';
import { getFieldValue, fieldToString, getFilterMatchModeOptions } from '../../../utils/table-data.util';
import { MenuItem } from 'primeng/api';
import { getFontAwesomeIcon } from '../../../utils/icon-mapper.util';
import { DynamicModalService } from '../../dynamic-modal/dynamic-modal.service';

@Injectable()
export class TableStateService<T> {
  private readonly modalService = inject(DynamicModalService);

  readonly expandedRows = signal<Record<string | number, boolean>>({});
  readonly editingRowKeys = signal<Record<string, boolean>>({});
  readonly editingCells = signal<Record<string, Record<string, unknown>>>({});
  readonly filters = signal<Record<string, FilterMetadata>>({});
  readonly globalFilterValue = signal('');

  toggleExpansion(rowId: string | number, table?: PrimeNGTable): boolean {
    const isExpanded = this.expandedRows()[rowId] || false;
    if (isExpanded) {
      this.expandedRows.update(rows => {
        const newRows = { ...rows };
        delete newRows[rowId];
        return newRows;
      });
      if (table?.expandedRowKeys) {
        delete (table.expandedRowKeys as any)[rowId];
      }
      return false;
    } else {
      this.expandedRows.update(rows => ({ ...rows, [rowId]: true }));
      if (table) table.expandedRowKeys = { ...table.expandedRowKeys, [rowId]: true };
      return true;
    }
  }

  isExpanded = (rowId: string | number) => this.expandedRows()[rowId] || false;

  expandRow(rowId: string | number, table?: PrimeNGTable): void {
    this.expandedRows.update(rows => ({ ...rows, [rowId]: true }));
    if (table) table.expandedRowKeys = { ...table.expandedRowKeys, [rowId]: true };
  }

  collapseRow(rowId: string | number, table?: PrimeNGTable): void {
    this.expandedRows.update(rows => {
      const newRows = { ...rows };
      delete newRows[rowId];
      return newRows;
    });
    if (table?.expandedRowKeys) {
      delete (table.expandedRowKeys as any)[rowId];
    }
  }

  startEdit(rowId: string, row: T, columns: TableColumn<T>[]): void {
    this.editingRowKeys.update(keys => ({ ...keys, [rowId]: true }));
    const rowCells: Record<string, unknown> = {};
    columns.forEach(col => {
      if (col.editable) rowCells[String(col.field)] = getFieldValue(row, col.field);
    });
    this.editingCells.update(cells => ({ ...cells, [rowId]: rowCells }));
  }

  saveEdit(rowId: string, row: T, columns: TableColumn<T>[]): T {
    const editedCells = this.editingCells()[rowId] || {};
    const updatedRow = { ...row } as any;

    Object.keys(editedCells).forEach(field => {
      if (field.includes('.')) {
        const keys = field.split('.');
        let obj = updatedRow;
        for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
        obj[keys[keys.length - 1]] = editedCells[field];
      } else {
        updatedRow[field] = editedCells[field];
      }
    });
    return updatedRow;
  }

  cancelEdit(rowId: string): void {
    this.editingRowKeys.update(keys => {
      const newKeys = { ...keys };
      delete newKeys[rowId];
      return newKeys;
    });
    this.editingCells.update(cells => {
      const newCells = { ...cells };
      delete newCells[rowId];
      return newCells;
    });
  }

  isEditing = (rowId: string) => this.editingRowKeys()[rowId] || false;

  updateCellValue(rowId: string, field: string, value: unknown): void {
    this.editingCells.update(cells => ({
      ...cells,
      [rowId]: { ...(cells[rowId] || {}), [String(field)]: value }
    }));
  }

  getEditingValue(rowId: string, field: string, row: T): unknown {
    const editedCells = this.editingCells()[rowId];
    return (editedCells && editedCells[field] !== undefined) ? editedCells[field] : getFieldValue(row, field);
  }

  setGlobalFilter = (value: string) => this.globalFilterValue.set(value);

  onFilter(event: unknown): void {
    const filterEvent = event as { filters?: Record<string, FilterMetadata | undefined> };
    const newFilters: Record<string, FilterMetadata> = {};
    if (filterEvent.filters) {
      Object.keys(filterEvent.filters).forEach(key => {
        const metadata = filterEvent.filters![key];
        if (metadata) newFilters[key] = metadata;
      });
    }
    this.filters.set(newFilters);
  }

  clearFilters(table?: PrimeNGTable): void {
    table?.clear?.();
    this.filters.set({});
    this.globalFilterValue.set('');
  }

  hasActiveFilters = () => Object.keys(this.filters()).length > 0 || this.globalFilterValue().length > 0;

  getFilterableColumns = (columns: TableColumn<T>[]) => columns.filter(c => c.filterable).map(c => fieldToString(c.field));

  getFilterMatchModes(col: TableColumn<T>) {
    const options = getFilterMatchModeOptions(col.filterType);
    return col.filterType === 'select' ? options : options.filter(o => o.value !== 'in' && o.value !== 'between');
  }

  getFilterMatchModeOptions = getFilterMatchModeOptions;

  // ==================== Action Menu Logic ====================
  buildMenuItems(actions: TableAction<T>[], row: T, onActionClick?: (data: T) => void): MenuItem[] {
    const items: MenuItem[] = [];

    (actions || [])
      .filter(a => !a.visible || a.visible(row))
      .forEach(action => {
        // If the action itself is a separator or its label is 'Separator'
        if (action.separator || action.label === 'Separator') {
          items.push({ separator: true });
          // If it was just a placeholder separator, don't add the item itself
          if (action.label === 'Separator' && !action.icon && !action.confirmDialog) {
            return;
          }
        }

        items.push({
          label: action.label,
          icon: action.icon ? getFontAwesomeIcon(action.icon) : undefined,
          disabled: action.disabled ? action.disabled(row) : false,
          command: () => {
            if (action.disabled && action.disabled(row)) return;
            if (action.confirmDialog) {
              this.handleActionWithConfirmation(action, row, onActionClick);
            } else {
              action.handler(row);
              onActionClick?.(row);
            }
          }
        });
      });

    return items;
  }

  hasVisibleActions = (actions: TableAction<T>[], row: T) => (actions || []).some(a => !a.visible || a.visible(row));

  private handleActionWithConfirmation(action: TableAction<T>, row: T, onActionClick?: (data: T) => void): void {
    const title = typeof action.confirmTitle === 'function' ? action.confirmTitle(row) : (action.confirmTitle || 'Confirm Action');
    const message = typeof action.confirmMessage === 'function' ? action.confirmMessage(row) : (action.confirmMessage || 'Are you sure?');

    this.modalService.confirm(title, message, action.confirmLabel || 'Confirm', action.cancelLabel || 'Cancel')
      .then(res => {
        if (res.action === 'confirm' && !res.cancelled) {
          action.handler(row);
          onActionClick?.(row);
        }
      });
  }
}
