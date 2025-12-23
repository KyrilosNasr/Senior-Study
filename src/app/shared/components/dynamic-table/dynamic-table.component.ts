import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  signal,
  computed,
  TemplateRef,
  ContentChildren,
  QueryList,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenuItem } from 'primeng/api';
import { TableCellEditorComponent } from './components/table-cell-editor.component';

import {
  DynamicTableConfig,
  TableColumn,
  TableEventData,
  TableAction,
  FilterMetadata
} from '../../types/table-config.types';
import { SortOrder } from '../../types/common.types';
import {
  PrimeNGTable,
  PrimeNGMenu,
  PrimeNGColumnToggleMenu
} from '../../types/primeng-table.types';
import { getFontAwesomeIcon } from '../../utils/icon-mapper.util';
import { getFieldValue, getRowId, fieldToString } from '../../utils/table-data.util';
import { TableExportService } from '../../services/table-export.service';
import { TableMenuBuilderService } from '../../services/table-menu-builder.service';
import { TableRowEditingService } from '../../services/table-row-editing.service';
import { TableRowExpansionService } from '../../services/table-row-expansion.service';
import { TableFilterManagementService } from '../../services/table-filter-management.service';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    ContextMenuModule,
    SelectModule,
    DatePickerModule,
    MultiSelectModule,
    InputNumberModule,
    ToggleButtonModule,
    TableCellEditorComponent
  ],
  providers: [
    TableExportService,
    TableMenuBuilderService,
    TableRowEditingService,
    TableRowExpansionService,
    TableFilterManagementService
  ],
  templateUrl: './dynamic-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent<T = unknown> {
  @Input({ required: true }) config!: DynamicTableConfig<T>;
  @Output() tableEvent = new EventEmitter<TableEventData<T>>();
  @Output() rowClick = new EventEmitter<T>();
  @Output() selectionChange = new EventEmitter<T | T[]>();
  @Input() getNestedTableData?: (row: T) => unknown[];
  @Input() getNestedTableConfig?: (row: T) => DynamicTableConfig<unknown>;

  @ContentChildren('cellTemplate') cellTemplates?: QueryList<TemplateRef<unknown>>;
  @ContentChildren('headerTemplate') headerTemplates?: QueryList<TemplateRef<unknown>>;

  @ViewChild('dt') table?: PrimeNGTable;
  @ViewChild('columnToggleMenu') columnToggleMenu?: PrimeNGColumnToggleMenu;
  actionMenuRefs = new Map<T, PrimeNGMenu>();
  selectedRowForMenu = signal<T | null>(null);
  menuItems = signal<MenuItem[]>([]);

  selectedRows = signal<T[]>([]);
  first = signal(0);
  rows = signal(10);
  editingRowKeys = signal<Record<string, boolean>>({});
  editingCells = signal<Record<string, Record<string, unknown>>>({});
  expandedRows = signal<Record<string | number, boolean>>({});
  globalFilterValue = signal('');
  filters = signal<Record<string, FilterMetadata>>({});

  filteredData = computed(() => {
    const data = this.config.data || [];
    const globalFilter = this.globalFilterValue().toLowerCase();

    if (!globalFilter && !this.config.globalFilter) {
      return data;
    }

    return data.filter(row => {
      return this.config.columns.some(column => {
        const value = getFieldValue(row, column.field);
        return String(value).toLowerCase().includes(globalFilter);
      });
    });
  });

  constructor(
    private cdr: ChangeDetectorRef,
    private exportService: TableExportService,
    private menuBuilder: TableMenuBuilderService,
    private editingService: TableRowEditingService,
    private expansionService: TableRowExpansionService,
    private filterService: TableFilterManagementService
  ) {}

  trackByIndex(index: number): number {
    return index;
  }

  trackByField(index: number, column: TableColumn<T>): string {
    return String(column.field);
  }

  fieldToString = fieldToString;
  getFieldValue = getFieldValue;
  getFontAwesomeIcon = getFontAwesomeIcon;

  onSort(event: { field: string; order: number }): void {
    this.tableEvent.emit({
      type: 'sort',
      field: event.field,
      order: event.order as SortOrder,
      data: this.config.data
    });
  }

  onPageChange(event: { first: number; rows: number }): void {
    this.first.set(event.first);
    this.rows.set(event.rows);
    const page = Math.floor(event.first / event.rows) + 1;
    this.tableEvent.emit({
      type: 'page',
      page,
      first: event.first,
      rows: event.rows,
      data: this.config.data
    });
  }

  onGlobalFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.globalFilterValue.set(value);
    this.tableEvent.emit({
      type: 'filter',
      data: this.filteredData()
    });
  }

  onFilter(event: unknown): void {
    this.filterService.onFilter(event, this.filters, (filters) => {
      this.tableEvent.emit({
        type: 'filter',
        filters,
        data: this.config.data
      });
      if (this.config.onFilter) {
        this.config.onFilter({ filters });
      }
    });
  }

  onSelectionChange(event: { data?: T | T[]; type?: string; originalEvent?: Event }): void {
    setTimeout(() => {
      const tableSelection = (this.table?.selection || []) as T[];
      this.selectedRows.set(tableSelection);
      
      const selectionMode = this.config.selection?.mode || 'multiple';
      const data = selectionMode === 'single' 
        ? (tableSelection[0] || undefined) 
        : tableSelection;
      if (data !== undefined) {
        this.selectionChange.emit(data as T | T[]);
        this.tableEvent.emit({
          type: 'select',
          data: data as T | T[]
        });
      }
    }, 0);
  }

  onRowClick(event: unknown): void {
    const rowEvent = event as { data?: T };
    if (!rowEvent?.data) return;
    this.rowClick.emit(rowEvent.data);
    this.tableEvent.emit({
      type: 'rowClick',
      data: rowEvent.data
    });
  }

  getMenuItems(row: T): MenuItem[] {
    if (!this.config.actions || this.config.actions.length === 0) {
      return [];
    }
    
    return this.menuBuilder.buildMenuItems(
      this.config.actions,
      row,
      (action, rowData) => {
        this.tableEvent.emit({
          type: 'action',
          data: rowData
        });
      }
    );
  }
  
  hasVisibleActions(row: T): boolean {
    if (!this.config.actions || this.config.actions.length === 0) {
      return false;
    }
    return this.menuBuilder.hasVisibleActions(this.config.actions, row);
  }

  showActionMenu(event: MouseEvent, row: T, menuRef?: PrimeNGMenu): void {
    event.stopPropagation();
    this.selectedRowForMenu.set(row);
    const menuItems = this.getMenuItems(row);
    this.menuItems.set(menuItems);
    
    const menu = menuRef || this.actionMenuRefs.get(row);
    if (menu && typeof menu.toggle === 'function') {
      menu.toggle(event);
    }
  }
  
  registerActionMenu(row: T, menuRef: PrimeNGMenu): void {
    this.actionMenuRefs.set(row, menuRef);
  }

  onActionClick(action: TableAction<T>, row: T): void {
    if (action.visible && !action.visible(row)) {
      return;
    }
    if (action.disabled && action.disabled(row)) {
      return;
    }
    action.handler(row);
    this.tableEvent.emit({
      type: 'action',
      data: row
    });
  }

  onRowExpand(event: { data: T }): void {
    this.expansionService.expandRow(
      event.data,
      this.config.columns,
      this.expandedRows,
      this.table,
      (row) => {
        this.cdr.markForCheck();
        this.tableEvent.emit({
          type: 'expand',
          data: row
        });
      }
    );
  }

  onRowCollapse(event: { data: T }): void {
    this.expansionService.collapseRow(
      event.data,
      this.config.columns,
      this.expandedRows,
      this.table,
      (row: T) => {
        this.cdr.markForCheck();
        this.tableEvent.emit({
          type: 'collapse',
          data: row
        });
      }
    );
  }

  toggleRowExpansion(row: T, currentExpanded: boolean): void {
    this.expansionService.toggleRowExpansion(
      row,
      currentExpanded,
      this.config.columns,
      this.expandedRows,
      this.table,
      (expandedRow: T) => {
        setTimeout(() => this.cdr.markForCheck(), 0);
        this.tableEvent.emit({
          type: 'expand',
          data: expandedRow
        });
      },
      (collapsedRow: T) => {
        setTimeout(() => this.cdr.markForCheck(), 0);
        this.tableEvent.emit({
          type: 'collapse',
          data: collapsedRow
        });
      }
    );
  }

  getNestedDataForRow(row: T): unknown[] {
    return this.expansionService.getNestedDataForRow(row, this.getNestedTableData);
  }

  getNestedConfigForRow(row: T): DynamicTableConfig<unknown> | null {
    return this.expansionService.getNestedConfigForRow(row, this.getNestedTableConfig);
  }

  isRowExpanded(row: T): boolean {
    return this.expansionService.isRowExpanded(row, this.config.columns, this.expandedRows);
  }

  updateCellValue(row: T, field: string, value: unknown): void {
    this.editingService.updateCellValue(row, field, value, this.config.columns, this.editingCells);
  }

  startRowEdit(row: T): void {
    this.editingService.startRowEdit(row, this.config.columns, this.editingRowKeys, this.editingCells);
  }

  saveRowEdit(row: T): void {
    const updatedRow = this.editingService.saveRowEdit(row, this.config.columns, this.editingCells);
    
    const rowRecord = row as Record<string, unknown>;
    const updatedRecord = updatedRow as Record<string, unknown>;
    Object.keys(updatedRecord).forEach(key => {
      rowRecord[key] = updatedRecord[key];
    });
    
    const rowId = getRowId(row, this.config.columns);
    this.editingService.clearEditingState(rowId, this.editingRowKeys, this.editingCells);
    
    if (this.config.rowEditing?.onSave) {
      this.config.rowEditing.onSave(row);
    }
    
    this.tableEvent.emit({
      type: 'edit',
      data: row
    });
  }

  cancelRowEdit(row: T): void {
    const rowId = getRowId(row, this.config.columns);
    this.editingService.clearEditingState(rowId, this.editingRowKeys, this.editingCells);
    
    if (this.config.rowEditing?.onCancel) {
      this.config.rowEditing.onCancel(row);
    }
  }

  isRowEditing(row: T): boolean {
    return this.editingService.isRowEditing(row, this.config.columns, this.editingRowKeys);
  }

  getEditingValue(row: T, field: string): unknown {
    return this.editingService.getEditingValue(row, field, this.config.columns, this.editingCells);
  }

  onColumnResize(event: unknown): void {
    this.tableEvent.emit({
      type: 'resize',
      data: this.config.data
    });
  }

  onColumnReorder(event: { columns?: unknown[] }): void {
    const columns = (event.columns || []).map(c => String(c));
    this.tableEvent.emit({
      type: 'reorder',
      columns,
      data: this.config.data
    });
    if (this.config.columnReorder?.onReorder) {
      this.config.columnReorder.onReorder({ columns });
    }
  }

  getFilterableColumns(): string[] {
    return this.filterService.getFilterableColumns(this.config.columns);
  }

  getFilterMatchModes(col: TableColumn<T>): Array<{ label: string; value: string }> {
    return this.filterService.getFilterMatchModes(col);
  }

  getFilterMatchModeOptions(filterType?: string): { label: string; value: string }[] {
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

  onRowReorder(event: unknown): void {
    const reorderEvent = event as { dragIndex?: number; dropIndex?: number };
    if (reorderEvent.dragIndex === undefined || reorderEvent.dropIndex === undefined) {
      return;
    }
    
    const data = [...this.config.data];
    const draggedItem = data[reorderEvent.dragIndex];
    data.splice(reorderEvent.dragIndex, 1);
    data.splice(reorderEvent.dropIndex, 0, draggedItem);
    this.config.data = data;
    
    if (this.config.rowReorder?.onReorder) {
      this.config.rowReorder.onReorder({ rows: data });
    }
    
    this.tableEvent.emit({
      type: 'reorder',
      data: data
    });
  }

  exportCSV(): void {
    const data = this.filteredData();
    this.exportService.exportTable(this.config, data);
  }

  clearFilters(table?: PrimeNGTable): void {
    this.filterService.clearFilters(table, this.filters, this.globalFilterValue, () => {
      this.tableEvent.emit({
        type: 'filter',
        filters: {},
        data: this.config.data
      });
    });
  }

  hasActiveFilters(): boolean {
    return this.filterService.hasActiveFilters(this.filters, this.globalFilterValue);
  }

  getColumnTemplate(column: TableColumn<T>): TemplateRef<unknown> | null {
    if (!column.cellTemplateKey || !this.cellTemplates) {
      return null;
    }
    return null;
  }

  getExpansionTemplate(row: T): TemplateRef<unknown> | null {
    return null;
  }
}
