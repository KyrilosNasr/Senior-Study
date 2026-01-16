import { Injectable, signal, Signal } from '@angular/core';
import { DynamicTableConfig, TableColumn, FilterMetadata } from '../../../types/table-config.types';
import { PrimeNGTable } from '../../../types/primeng-table.types';
import { getFieldValue, getRowId, fieldToString } from '../../../utils/table-data.util';

/**
 * Service for managing table state (expansion, editing, filtering)
 * Owns all state signals and provides methods for state operations
 * Each table instance gets its own service instance via component providers
 */
@Injectable()
export class TableStateService<T> {
  // State signals (owned by service)
  readonly expandedRows = signal<Record<string | number, boolean>>({});
  readonly editingRowKeys = signal<Record<string, boolean>>({});
  readonly editingCells = signal<Record<string, Record<string, unknown>>>({});
  readonly filters = signal<Record<string, FilterMetadata>>({});
  readonly globalFilterValue = signal('');

  // ==================== Expansion Methods ====================

  /**
   * Toggle row expansion state
   * @param rowId - Row identifier
   * @param table - Optional PrimeNG table reference for syncing
   * @returns True if row is now expanded, false if collapsed
   */
  toggleExpansion(rowId: string | number, table?: PrimeNGTable): boolean {
    const isExpanded = this.expandedRows()[rowId] || false;
    
    if (isExpanded) {
      this.expandedRows.update(rows => {
        const newRows = { ...rows };
        delete newRows[rowId];
        return newRows;
      });
      
      // Sync with PrimeNG table
      if (table && table.expandedRowKeys) {
        const updatedKeys = { ...table.expandedRowKeys };
        delete updatedKeys[rowId];
        table.expandedRowKeys = updatedKeys;
      }
      
      return false;
    } else {
      this.expandedRows.update(rows => ({ ...rows, [rowId]: true }));
      
      // Sync with PrimeNG table
      if (table && table.expandedRowKeys) {
        table.expandedRowKeys = { ...table.expandedRowKeys, [rowId]: true };
      }
      
      return true;
    }
  }

  /**
   * Check if row is expanded
   * @param rowId - Row identifier
   * @returns True if row is currently expanded
   */
  isExpanded(rowId: string | number): boolean {
    return this.expandedRows()[rowId] || false;
  }

  /**
   * Expand a row
   * @param rowId - Row identifier
   * @param table - Optional PrimeNG table reference for syncing
   */
  expandRow(rowId: string | number, table?: PrimeNGTable): void {
    this.expandedRows.update(rows => ({ ...rows, [rowId]: true }));
    
    if (table && table.expandedRowKeys) {
      table.expandedRowKeys = { ...table.expandedRowKeys, [rowId]: true };
    }
  }

  /**
   * Collapse a row
   * @param rowId - Row identifier
   * @param table - Optional PrimeNG table reference for syncing
   */
  collapseRow(rowId: string | number, table?: PrimeNGTable): void {
    this.expandedRows.update(rows => {
      const newRows = { ...rows };
      delete newRows[rowId];
      return newRows;
    });
    
    if (table && table.expandedRowKeys) {
      const updatedKeys = { ...table.expandedRowKeys };
      delete updatedKeys[rowId];
      table.expandedRowKeys = updatedKeys;
    }
  }

  // ==================== Editing Methods ====================

  /**
   * Start editing a row
   * Initializes editing state and stores current cell values
   * @param rowId - Row identifier
   * @param row - Row data
   * @param columns - Table columns configuration
   */
  startEdit(rowId: string, row: T, columns: TableColumn<T>[]): void {
    this.editingRowKeys.update(keys => ({ ...keys, [rowId]: true }));
    
    // Initialize editing cells with current values
    const rowCells: Record<string, unknown> = {};
    columns.forEach(col => {
      if (col.editable) {
        rowCells[String(col.field)] = getFieldValue(row, col.field);
      }
    });
    
    this.editingCells.update(cells => ({
      ...cells,
      [rowId]: rowCells
    }));
  }

  /**
   * Save row edits
   * Applies edited values to row and returns updated row
   * @param rowId - Row identifier
   * @param row - Row data
   * @param columns - Table columns configuration
   * @returns Updated row with edited values applied
   */
  saveEdit(rowId: string, row: T, columns: TableColumn<T>[]): T {
    const editedCells = this.editingCells()[rowId] || {};
    
    // Apply edits to row (create a copy to avoid mutation)
    const updatedRow = { ...row } as T;
    
    Object.keys(editedCells).forEach(field => {
      if (typeof field === 'string' && field.includes('.')) {
        // Handle nested field access
        const keys = field.split('.');
        let obj: Record<string, unknown> = updatedRow as Record<string, unknown>;
        for (let i = 0; i < keys.length - 1; i++) {
          obj = obj[keys[i]] as Record<string, unknown>;
        }
        obj[keys[keys.length - 1]] = editedCells[field];
      } else {
        // Handle direct field access
        (updatedRow as Record<string, unknown>)[field] = editedCells[field];
      }
    });
    
    return updatedRow;
  }

  /**
   * Cancel row editing
   * Clears editing state for a specific row
   * @param rowId - Row identifier
   */
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

  /**
   * Check if row is currently being edited
   * @param rowId - Row identifier
   * @returns True if row is in editing mode
   */
  isEditing(rowId: string): boolean {
    return this.editingRowKeys()[rowId] || false;
  }

  /**
   * Update cell value during row editing
   * @param rowId - Row identifier
   * @param field - Field name to update
   * @param value - New value
   */
  updateCellValue(rowId: string, field: string, value: unknown): void {
    const fieldStr = String(field);
    
    this.editingCells.update(cells => {
      const rowCells = cells[rowId] || {};
      return {
        ...cells,
        [rowId]: {
          ...rowCells,
          [fieldStr]: value
        }
      };
    });
  }

  /**
   * Get editing value for a cell
   * Returns edited value if available, otherwise returns current field value
   * @param rowId - Row identifier
   * @param field - Field name
   * @param row - Row data
   * @returns Editing value or current field value
   */
  getEditingValue(rowId: string, field: string, row: T): unknown {
    const editedCells = this.editingCells()[rowId];
    if (editedCells && editedCells[field]) {
      return editedCells[field];
    }
    return getFieldValue(row, field);
  }

  // ==================== Filter Methods ====================

  /**
   * Set global filter value
   * @param value - Filter value
   */
  setGlobalFilter(value: string): void {
    this.globalFilterValue.set(value);
  }

  /**
   * Update column filters
   * @param filters - Filter metadata
   */
  updateFilters(filters: Record<string, FilterMetadata>): void {
    this.filters.set(filters);
  }

  /**
   * Handle column filter change
   * @param event - Filter change event with filter metadata
   */
  onFilter(event: unknown): void {
    const filterEvent = event as { filters?: Record<string, FilterMetadata | undefined> };
    const newFilters: Record<string, FilterMetadata> = {};
    
    if (filterEvent.filters) {
      Object.keys(filterEvent.filters).forEach(key => {
        const metadata = filterEvent.filters![key];
        if (metadata) {
          newFilters[key] = metadata;
        }
      });
    }
    
    this.filters.set(newFilters);
  }

  /**
   * Clear all filters (global and column filters)
   * @param table - Optional PrimeNG table reference to clear filters
   */
  clearFilters(table?: PrimeNGTable): void {
    if (table && typeof table.clear === 'function') {
      table.clear();
    }
    this.filters.set({});
    this.globalFilterValue.set('');
  }

  /**
   * Check if any filters are currently active
   * @returns True if global filter or any column filters are active
   */
  hasActiveFilters(): boolean {
    const filterKeys = Object.keys(this.filters());
    return filterKeys.length > 0 || this.globalFilterValue().length > 0;
  }

  /**
   * Get filterable columns for global filter
   * @param columns - Table columns configuration
   * @returns Array of filterable column field names
   */
  getFilterableColumns(columns: TableColumn<T>[]): string[] {
    return columns
      .filter(c => c.filterable)
      .map(c => fieldToString(c.field));
  }

  /**
   * Get filter match modes for a column based on filter type
   * @param col - Column configuration
   * @returns Array of filter match mode options
   */
  getFilterMatchModes(col: TableColumn<T>): Array<{ label: string; value: string }> {
    const textModes = [
      { label: 'Starts With', value: 'startsWith' },
      { label: 'Contains', value: 'contains' },
      { label: 'Not Contains', value: 'notContains' },
      { label: 'Ends With', value: 'endsWith' },
      { label: 'Equals', value: 'equals' },
      { label: 'Not Equals', value: 'notEquals' }
    ];
    
    const numberModes = [
      { label: 'Equals', value: 'equals' },
      { label: 'Not Equals', value: 'notEquals' },
      { label: 'Less Than', value: 'lt' },
      { label: 'Less Than or Equal', value: 'lte' },
      { label: 'Greater Than', value: 'gt' },
      { label: 'Greater Than or Equal', value: 'gte' }
    ];
    
    const dateModes = [
      { label: 'Date Is', value: 'dateIs' },
      { label: 'Date Is Not', value: 'dateIsNot' },
      { label: 'Date Before', value: 'dateBefore' },
      { label: 'Date After', value: 'dateAfter' }
    ];
    
    switch (col.filterType) {
      case 'number':
        return numberModes;
      case 'date':
        return dateModes;
      case 'select':
        return [{ label: 'Equals', value: 'equals' }];
      default:
        return textModes;
    }
  }

  /**
   * Get filter match mode options by filter type
   * Used in template for p-columnFilter component
   * @param filterType - Filter type ('text', 'number', 'date', 'select')
   * @returns Array of filter match mode options
   */
  getFilterMatchModeOptions(filterType?: string): Array<{ label: string; value: string }> {
    switch (filterType) {
      case 'number':
        return [
          { label: 'Equals', value: 'equals' },
          { label: 'Not Equals', value: 'notEquals' },
          { label: 'Less Than', value: 'lt' },
          { label: 'Less Than or Equal', value: 'lte' },
          { label: 'Greater Than', value: 'gt' },
          { label: 'Greater Than or Equal', value: 'gte' },
          { label: 'Between', value: 'between' }
        ];
      case 'date':
        return [
          { label: 'Date Is', value: 'dateIs' },
          { label: 'Date Is Not', value: 'dateIsNot' },
          { label: 'Date Before', value: 'dateBefore' },
          { label: 'Date After', value: 'dateAfter' }
        ];
      case 'select':
        return [
          { label: 'Equals', value: 'equals' },
          { label: 'Not Equals', value: 'notEquals' },
          { label: 'In', value: 'in' }
        ];
      default: // text
        return [
          { label: 'Contains', value: 'contains' },
          { label: 'Not Contains', value: 'notContains' },
          { label: 'Starts With', value: 'startsWith' },
          { label: 'Ends With', value: 'endsWith' },
          { label: 'Equals', value: 'equals' },
          { label: 'Not Equals', value: 'notEquals' }
        ];
    }
  }
}
