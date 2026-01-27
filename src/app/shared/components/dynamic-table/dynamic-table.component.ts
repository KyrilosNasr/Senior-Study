import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  signal,
  computed,
  input,
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
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableCellEditorComponent } from './components/table-cell-editor.component';

import {
  DynamicTableConfig,
  TableColumn,
  TableEventData
} from '../../types/table-config.types';
import { SortOrder } from '../../types/common.types';
import {
  PrimeNGTable,
  PrimeNGMenu,
  PrimeNGColumnToggleMenu
} from '../../types/primeng-table.types';

import { getFieldValue, getRowId, fieldToString } from '../../utils/table-data.util';
import { TableExportService } from '../../services/table-export.service';
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
    IconFieldModule,
    InputIconModule,
    TableCellEditorComponent
  ],
  providers: [
    TableExportService,
    TableStateService
  ],
  templateUrl: './dynamic-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent<T = unknown> {
  config = input.required<DynamicTableConfig<T>>();
  @Output() tableEvent = new EventEmitter<TableEventData<T>>();
  @Output() rowClick = new EventEmitter<T>();
  @Output() selectionChange = new EventEmitter<T | T[]>();
  getNestedTableData = input<(row: T) => unknown[]>();
  getNestedTableConfig = input<(row: T) => DynamicTableConfig<unknown>>();

  @ContentChildren('cellTemplate') cellTemplates?: QueryList<TemplateRef<unknown>>;
  @ContentChildren('headerTemplate') headerTemplates?: QueryList<TemplateRef<unknown>>;

  @ViewChild('dt') table?: PrimeNGTable;
  @ViewChild('columnToggleMenu') columnToggleMenu?: PrimeNGColumnToggleMenu;
  selectedRowForMenu = signal<T | null>(null);
  activeRowMenuItems = signal<MenuItem[]>([]);
  menuItems = signal<MenuItem[]>([]); // Deprecated, using activeRowMenuItems instead

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

  // Feature Flags - Computed for better readability in HTML
  readonly showToolbar = computed(() =>
    this.config().globalFilter ||
    this.config().exportable ||
    this.config().columnToggle?.enabled ||
    this.config().advancedFilter
  );

  readonly isSelectionEnabled = computed(() => !!this.config().selection?.enabled);
  readonly isCheckboxSelection = computed(() => !!this.config().selection?.checkbox);
  readonly isExpansionEnabled = computed(() => !!this.config().rowExpansion?.enabled);
  readonly isRowEditingEnabled = computed(() => !!this.config().rowEditing?.enabled);
  readonly isRowEditingMode = computed(() => !!this.config().rowEditing?.enabled && this.config().rowEditing?.mode === 'row');
  readonly isCellEditingMode = computed(() => !!this.config().rowEditing?.enabled && this.config().rowEditing?.mode === 'cell');
  readonly hasActions = computed(() => (this.config().actions?.length ?? 0) > 0);

  // Computed for loading state
  readonly loading = computed(() => this.config().loading || false);

  // Computed for Table Data
  readonly tableValue = computed(() => (this.config().lazy ? this.config().data : this.filteredData()) || []);

  // The "Principal" way: Centralized Colspan Calculation
  readonly totalColspan = computed(() => {
    let count = this.config().columns.length;
    if (this.isSelectionEnabled() && this.isCheckboxSelection()) count++;
    if (this.isExpansionEnabled()) count++;
    if (this.hasActions()) count++;
    if (this.isRowEditingEnabled() && this.isRowEditingMode()) count++;
    return count;
  });

  // Filterable Columns computed
  readonly filterableColumns = computed(() =>
    this.config().columns.filter(c => c.filterable).map(c => fieldToString(c.field))
  );

  // Table Configuration Groups
  readonly paginationSettings = computed(() => ({
    enabled: this.config().pagination !== false,
    rows: this.config().rowsPerPage || 10,
    options: this.config().rowsPerPageOptions || [10, 25, 50, 100]
  }));

  readonly scrollingSettings = computed(() => ({
    scrollable: this.config().scrollable || this.config().virtualScroll || false,
    height: this.config().scrollHeight || '400px',
    virtual: this.config().virtualScroll || false
  }));

  readonly featureSettings = computed(() => ({
    resizable: this.config().columnResize?.enabled || false,
    reorderable: this.config().columnReorder?.enabled || false,
    striped: this.config().stripedRows !== false,
    gridlines: this.config().showGridlines || false
  }));

  readonly editSettings = computed(() => ({
    mode: this.isRowEditingEnabled() && this.isCellEditingMode() ? 'cell' : 'row' as 'cell' | 'row'
  }));

  filteredData = computed(() => {
    const data = this.config().data || [];
    const globalFilter = this.globalFilterValue().toLowerCase();

    if (!globalFilter) return data;

    return data.filter(row => {
      return this.config().columns.some(column => {
        const value = getFieldValue(row, column.field);
        return String(value).toLowerCase().includes(globalFilter);
      });
    });
  });

  constructor(
    private cdr: ChangeDetectorRef,
    private exportService: TableExportService
  ) { }

  // ==================== Utilities ====================
  trackByIndex = (index: number) => index;
  trackByField = (index: number, col: TableColumn<T>) => String(col.field);
  fieldToString = fieldToString;
  getFieldValue = getFieldValue;
  

  private emitEvent(type: TableEventData<T>['type'], data?: any, extra?: Partial<TableEventData<T>>): void {
    this.tableEvent.emit({ type, data, ...extra });
  }

  // ==================== Table Events ====================
  onSort(event: { field: string; order: number }): void {
    this.emitEvent('sort', this.config().data, { field: event.field, order: event.order as SortOrder });
  }

  onPageChange(event: { first: number; rows: number }): void {
    this.first.set(event.first);
    this.rows.set(event.rows);
    this.emitEvent('page', this.config().data, {
      page: Math.floor(event.first / event.rows) + 1,
      first: event.first,
      rows: event.rows
    });
  }

  onGlobalFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.state.setGlobalFilter(value);

    if (this.config().lazy) {
      this.emitEvent('filter', value);
    } else {
      this.emitEvent('filter', this.filteredData());
    }
  }

  onFilter(event: any): void {
    this.state.onFilter(event);
    const filters = this.state.filters();
    this.config().onFilter?.({ filters });
    this.emitEvent('filter', this.config().data, { filters });
  }

  onSelectionChange(event: any): void {
    setTimeout(() => {
      const selection = (this.table?.selection || []) as T[];
      this.selectedRows.set(selection);
      const data = (this.config().selection?.mode === 'single') ? (selection[0] || undefined) : selection;
      if (data !== undefined) {
        this.selectionChange.emit(data as any);
        this.emitEvent('select', data as any);
      }
    }, 0);
  }

  onRowClick(event: any): void {
    if (event?.data) {
      this.rowClick.emit(event.data);
      this.emitEvent('rowClick', event.data);
    }
  }

  // ==================== Row Operations (Expansion/Editing) ====================
  private getRowId = (row: T) => getRowId(row, this.config().columns);

  toggleRowExpansion(row: T): void {
    const expanded = this.state.toggleExpansion(this.getRowId(row), this.table);
    this.emitEvent(expanded ? 'expand' : 'collapse', row);
  }

  onRowExpand(event: { data: T }): void {
    this.state.expandRow(this.getRowId(event.data), this.table);
    this.emitEvent('expand', event.data);
  }

  onRowCollapse(event: { data: T }): void {
    this.state.collapseRow(this.getRowId(event.data), this.table);
    this.emitEvent('collapse', event.data);
  }

  startRowEdit = (row: T) => this.state.startEdit(String(this.getRowId(row)), row, this.config().columns);
  cancelRowEdit = (row: T) => (this.state.cancelEdit(String(this.getRowId(row))), this.config().rowEditing?.onCancel?.(row));

  saveRowEdit(row: T): void {
    const id = String(this.getRowId(row));
    const updated = this.state.saveEdit(id, row, this.config().columns);
    Object.assign(row as any, updated);
    this.state.cancelEdit(id);
    this.config().rowEditing?.onSave?.(row);
    this.emitEvent('edit', row);
  }

  isRowEditing = (row: T) => this.state.isEditing(String(this.getRowId(row)));
  getEditingValue = (row: T, field: string) => this.state.getEditingValue(String(this.getRowId(row)), field, row);
  updateCellValue = (row: T, field: string, val: any) => this.state.updateCellValue(String(this.getRowId(row)), field, val);
  isRowExpanded = (row: T) => this.state.isExpanded(this.getRowId(row));

  // ==================== Action Menu ====================
  getMenuItems = (row: T) => this.state.buildMenuItems(this.config().actions || [], row, (data) => this.emitEvent('action', data));
  hasVisibleActions = (row: T) => this.state.hasVisibleActions(this.config().actions || [], row);

  showActionMenu(event: MouseEvent, row: T, menuRef?: any): void {
    event.stopPropagation();

    // Capture target element now while the event is active
    const target = event.currentTarget || event.target;

    this.selectedRowForMenu.set(row);
    const items = this.getMenuItems(row);
    this.activeRowMenuItems.set(items);

    if (menuRef) {
      // Small timeout to ensure signal update has propagated to the menu's [model]
      setTimeout(() => {
        // Toggle uses the target for positioning
        menuRef.toggle({
          currentTarget: target,
          target: target,
          preventDefault: () => { },
          stopPropagation: () => { }
        });
      }, 0);
    }
  }

  // ==================== Miscellaneous ====================
  onColumnResize(event?: any): void {
    this.emitEvent('resize', this.config().data);
  }
  onColumnReorder(event: { columns?: any[] }): void {
    const columns = (event.columns || []).map(c => String(c));
    this.config().columnReorder?.onReorder?.({ columns });
    this.emitEvent('reorder', this.config().data, { columns });
  }

  onRowReorder(event: any): void {
    const { dragIndex, dropIndex } = event;
    if (dragIndex === undefined || dropIndex === undefined) return;
    const data = [...this.config().data];
    const [draggedItem] = data.splice(dragIndex, 1);
    data.splice(dropIndex, 0, draggedItem);
    // Note: Since config is a signal input, we can't mutate it directly like this
    // The parent should handle the reorder, but for now we emit the event
    this.config().rowReorder?.onReorder?.({ rows: data });
    this.emitEvent('reorder', data);
  }

  exportCSV = () => this.exportService.exportTable(this.config(), this.filteredData());

  clearFilters(table?: PrimeNGTable): void {
    this.state.clearFilters(table);
    this.emitEvent('filter', this.config().data, { filters: {} });
  }

  getNestedDataForRow = (row: T) => this.getNestedTableData()?.(row) ?? [];
  getNestedConfigForRow = (row: T) => this.getNestedTableConfig()?.(row) ?? null;
  getFilterMatchModes = (col: TableColumn<T>) => this.state.getFilterMatchModes(col);
  getFilterMatchModeOptions = (type?: string) => this.state.getFilterMatchModeOptions(type);
  hasActiveFilters = () => this.state.hasActiveFilters();
  registerActionMenu = (row: T, menu: PrimeNGMenu) => { }; // No longer needed for single menu
}
