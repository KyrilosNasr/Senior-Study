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
  ViewChild,
  inject
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
import { TableStateService } from './services/table-state.service';

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
    TableStateService
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

  // Inject state service
  private readonly state = inject(TableStateService<T>);

  // Expose state signals to template
  readonly expandedRows = this.state.expandedRows;
  readonly editingRowKeys = this.state.editingRowKeys;
  readonly editingCells = this.state.editingCells;
  readonly globalFilterValue = this.state.globalFilterValue;
  readonly filters = this.state.filters;

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
    private menuBuilder: TableMenuBuilderService
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
    this.state.setGlobalFilter(value);
    this.tableEvent.emit({
      type: 'filter',
      data: this.filteredData()
    });
  }

  onFilter(event: unknown): void {
    this.state.onFilter(event);
    const filters = this.state.filters();
    this.tableEvent.emit({
      type: 'filter',
      filters,
      data: this.config.data
    });
    if (this.config.onFilter) {
      this.config.onFilter({ filters });
    }
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
    const rowId = getRowId(event.data, this.config.columns);
    this.state.expandRow(rowId, this.table);
    this.cdr.markForCheck();
    this.tableEvent.emit({
      type: 'expand',
      data: event.data
    });
  }

  onRowCollapse(event: { data: T }): void {
    const rowId = getRowId(event.data, this.config.columns);
    this.state.collapseRow(rowId, this.table);
    this.cdr.markForCheck();
    this.tableEvent.emit({
      type: 'collapse',
      data: event.data
    });
  }

  toggleRowExpansion(row: T): void {
    const rowId = getRowId(row, this.config.columns);
    const expanded = this.state.toggleExpansion(rowId, this.table);
    this.cdr.markForCheck();
    this.tableEvent.emit({
      type: expanded ? 'expand' : 'collapse',
      data: row
    });
  }

  getNestedDataForRow(row: T): unknown[] {
    return this.getNestedTableData?.(row) ?? [];
  }

  getNestedConfigForRow(row: T): DynamicTableConfig<unknown> | null {
    return this.getNestedTableConfig?.(row) ?? null;
  }

  isRowExpanded(row: T): boolean {
    const rowId = getRowId(row, this.config.columns);
    return this.state.isExpanded(rowId);
  }

  updateCellValue(row: T, field: string, value: unknown): void {
    const rowId = getRowId(row, this.config.columns);
    this.state.updateCellValue(String(rowId), field, value);
  }

  startRowEdit(row: T): void {
    const rowId = getRowId(row, this.config.columns);
    this.state.startEdit(String(rowId), row, this.config.columns);
  }

  saveRowEdit(row: T): void {
    const rowId = getRowId(row, this.config.columns);
    const updatedRow = this.state.saveEdit(String(rowId), row, this.config.columns);
    
    // Apply updates to original row
    const rowRecord = row as Record<string, unknown>;
    const updatedRecord = updatedRow as Record<string, unknown>;
    Object.keys(updatedRecord).forEach(key => {
      rowRecord[key] = updatedRecord[key];
    });
    
    this.state.cancelEdit(String(rowId));
    
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
    this.state.cancelEdit(String(rowId));
    
    if (this.config.rowEditing?.onCancel) {
      this.config.rowEditing.onCancel(row);
    }
  }

  isRowEditing(row: T): boolean {
    const rowId = getRowId(row, this.config.columns);
    return this.state.isEditing(String(rowId));
  }

  getEditingValue(row: T, field: string): unknown {
    const rowId = getRowId(row, this.config.columns);
    return this.state.getEditingValue(String(rowId), field, row);
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
    return this.state.getFilterableColumns(this.config.columns);
  }

  getFilterMatchModes(col: TableColumn<T>): Array<{ label: string; value: string }> {
    return this.state.getFilterMatchModes(col);
  }

  getFilterMatchModeOptions(filterType?: string): Array<{ label: string; value: string }> {
    return this.state.getFilterMatchModeOptions(filterType);
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
    this.state.clearFilters(table);
    this.tableEvent.emit({
      type: 'filter',
      filters: {},
      data: this.config.data
    });
  }

  hasActiveFilters(): boolean {
    return this.state.hasActiveFilters();
  }

}
