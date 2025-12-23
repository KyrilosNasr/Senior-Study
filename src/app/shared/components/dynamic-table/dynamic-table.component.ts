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

// PrimeNG Imports
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

/**
 * Dynamic Table Component
 * 
 * A powerful, feature-rich table component built on PrimeNG Table.
 * Supports pagination, sorting, filtering, row selection, editing, expansion, and more.
 * 
 * @example
 * ```typescript
 * const config: DynamicTableConfig<User> = {
 *   columns: [
 *     { field: 'name', header: 'Name', sortable: true },
 *     { field: 'email', header: 'Email', filterable: true }
 *   ],
 *   data: users,
 *   pagination: true,
 *   actions: [
 *     { label: 'Edit', icon: 'pi pi-pencil', handler: (user) => editUser(user) },
 *     { label: 'Delete', icon: 'pi pi-trash', handler: (user) => deleteUser(user), 
 *       confirmDialog: true, confirmMessage: 'Are you sure?' }
 *   ]
 * };
 * ```
 */
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
  styleUrl: './dynamic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent<T = unknown> {
  // ============================================================================
  // INPUTS & OUTPUTS
  // ============================================================================
  
  /** Table configuration - required */
  @Input({ required: true }) config!: DynamicTableConfig<T>;
  
  /** Emits table events (sort, filter, page change, etc.) */
  @Output() tableEvent = new EventEmitter<TableEventData<T>>();
  
  /** Emits when a row is clicked */
  @Output() rowClick = new EventEmitter<T>();
  
  /** Emits when row selection changes */
  @Output() selectionChange = new EventEmitter<T | T[]>();
  
  /** Optional: Function to get nested table data for row expansion */
  @Input() getNestedTableData?: (row: T) => unknown[];
  
  /** Optional: Function to get nested table config for row expansion */
  @Input() getNestedTableConfig?: (row: T) => DynamicTableConfig<unknown>;

  // ============================================================================
  // CONTENT PROJECTION
  // ============================================================================
  
  /** Custom cell templates via content projection */
  @ContentChildren('cellTemplate') cellTemplates?: QueryList<TemplateRef<unknown>>;
  
  /** Custom header templates via content projection */
  @ContentChildren('headerTemplate') headerTemplates?: QueryList<TemplateRef<unknown>>;

  // ============================================================================
  // VIEW CHILDREN & REFERENCES
  // ============================================================================
  
  /** Reference to PrimeNG table component */
  @ViewChild('dt') table?: PrimeNGTable;
  
  /** Reference to column toggle menu */
  @ViewChild('columnToggleMenu') columnToggleMenu?: PrimeNGColumnToggleMenu;
  
  /** Map of action menus per row */
  actionMenuRefs = new Map<T, PrimeNGMenu>();
  
  /** Currently selected row for menu display */
  selectedRowForMenu = signal<T | null>(null);
  
  /** Menu items for action menu */
  menuItems = signal<MenuItem[]>([]);

  // ============================================================================
  // STATE MANAGEMENT (Signals)
  // ============================================================================
  
  /** Currently selected rows */
  selectedRows = signal<T[]>([]);
  
  /** Pagination: first row index */
  first = signal(0);
  
  /** Pagination: rows per page */
  rows = signal(10);
  
  /** Row editing state: which rows are being edited */
  editingRowKeys = signal<Record<string, boolean>>({});
  
  /** Cell editing state: cell values being edited */
  editingCells = signal<Record<string, Record<string, unknown>>>({});
  
  /** Row expansion state: which rows are expanded */
  expandedRows = signal<Record<string | number, boolean>>({});
  
  /** Global filter search value */
  globalFilterValue = signal('');
  
  /** Column filters state */
  filters = signal<Record<string, FilterMetadata>>({});

  // ============================================================================
  // COMPUTED VALUES
  // ============================================================================
  
  /** Filtered data based on global filter */
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

  // ============================================================================
  // CONSTRUCTOR & DEPENDENCIES
  // ============================================================================
  
  constructor(
    private cdr: ChangeDetectorRef,
    private exportService: TableExportService,
    private menuBuilder: TableMenuBuilderService,
    private editingService: TableRowEditingService,
    private expansionService: TableRowExpansionService,
    private filterService: TableFilterManagementService
  ) {}

  // ============================================================================
  // UTILITY METHODS (TrackBy, Field Access)
  // ============================================================================
  
  /** TrackBy function for rows */
  trackByIndex(index: number): number {
    return index;
  }

  /** TrackBy function for columns */
  trackByField(index: number, column: TableColumn<T>): string {
    return String(column.field);
  }

  /** Convert field to string (for PrimeNG compatibility) */
  fieldToString = fieldToString;
  
  /** Get field value from row */
  getFieldValue = getFieldValue;
  
  /** Get FontAwesome icon class */
  getFontAwesomeIcon = getFontAwesomeIcon;

  // ============================================================================
  // TABLE EVENTS (Sort, Page, Filter, Selection, Row Click)
  // ============================================================================
  
  /**
   * Handle sort event
   */
  onSort(event: { field: string; order: number }): void {
    this.tableEvent.emit({
      type: 'sort',
      field: event.field,
      order: event.order as SortOrder,
      data: this.config.data
    });
  }

  /**
   * Handle page change event
   */
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

  /**
   * Handle global filter input
   */
  onGlobalFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.globalFilterValue.set(value);
    this.tableEvent.emit({
      type: 'filter',
      data: this.filteredData()
    });
  }

  /**
   * Handle column filter changes
   */
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

  /**
   * Handle row selection change
   */
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

  /**
   * Handle row click event
   */
  onRowClick(event: unknown): void {
    const rowEvent = event as { data?: T };
    if (!rowEvent?.data) return;
    this.rowClick.emit(rowEvent.data);
    this.tableEvent.emit({
      type: 'rowClick',
      data: rowEvent.data
    });
  }

  // ============================================================================
  // ACTIONS MENU
  // ============================================================================
  
  /**
   * Get menu items for a specific row
   * Note: Confirmation dialogs are handled automatically by TableMenuBuilderService
   */
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
  
  /**
   * Check if row has any visible actions
   */
  hasVisibleActions(row: T): boolean {
    if (!this.config.actions || this.config.actions.length === 0) {
      return false;
    }
    return this.menuBuilder.hasVisibleActions(this.config.actions, row);
  }

  /**
   * Show action menu for a row
   */
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
  
  /**
   * Register action menu reference for a row
   */
  registerActionMenu(row: T, menuRef: PrimeNGMenu): void {
    this.actionMenuRefs.set(row, menuRef);
  }

  /**
   * Handle direct action click (for backward compatibility)
   * Note: Confirmation dialogs should be handled via confirmDialog property in TableAction
   */
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

  // ============================================================================
  // ROW EXPANSION
  // ============================================================================
  
  /**
   * Handle row expand event
   */
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

  /**
   * Handle row collapse event
   */
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
  
  /**
   * Toggle row expansion
   */
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
  
  /**
   * Get nested table data for a row
   */
  getNestedDataForRow(row: T): unknown[] {
    return this.expansionService.getNestedDataForRow(row, this.getNestedTableData);
  }
  
  /**
   * Get nested table config for a row
   */
  getNestedConfigForRow(row: T): DynamicTableConfig<unknown> | null {
    return this.expansionService.getNestedConfigForRow(row, this.getNestedTableConfig);
  }

  /**
   * Check if a row is expanded
   */
  isRowExpanded(row: T): boolean {
    return this.expansionService.isRowExpanded(row, this.config.columns, this.expandedRows);
  }

  // ============================================================================
  // ROW EDITING
  // ============================================================================
  
  /**
   * Update cell value during editing
   */
  updateCellValue(row: T, field: string, value: unknown): void {
    this.editingService.updateCellValue(row, field, value, this.config.columns, this.editingCells);
  }
  
  /**
   * Start editing a row
   */
  startRowEdit(row: T): void {
    this.editingService.startRowEdit(row, this.config.columns, this.editingRowKeys, this.editingCells);
  }
  
  /**
   * Save row edits
   */
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
  
  /**
   * Cancel row editing
   */
  cancelRowEdit(row: T): void {
    const rowId = getRowId(row, this.config.columns);
    this.editingService.clearEditingState(rowId, this.editingRowKeys, this.editingCells);
    
    if (this.config.rowEditing?.onCancel) {
      this.config.rowEditing.onCancel(row);
    }
  }
  
  /**
   * Check if a row is being edited
   */
  isRowEditing(row: T): boolean {
    return this.editingService.isRowEditing(row, this.config.columns, this.editingRowKeys);
  }
  
  /**
   * Get editing value for a cell
   */
  getEditingValue(row: T, field: string): unknown {
    return this.editingService.getEditingValue(row, field, this.config.columns, this.editingCells);
  }

  // ============================================================================
  // COLUMN MANAGEMENT
  // ============================================================================
  
  /**
   * Handle column resize event
   */
  onColumnResize(event: unknown): void {
    this.tableEvent.emit({
      type: 'resize',
      data: this.config.data
    });
  }

  /**
   * Handle column reorder event
   */
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

  /**
   * Get filterable columns
   */
  getFilterableColumns(): string[] {
    return this.filterService.getFilterableColumns(this.config.columns);
  }
  
  /**
   * Get filter match modes for a column
   */
  getFilterMatchModes(col: TableColumn<T>): Array<{ label: string; value: string }> {
    return this.filterService.getFilterMatchModes(col);
  }

  /**
   * Get filter match mode options based on filter type
   */
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

  // ============================================================================
  // ROW REORDER
  // ============================================================================
  
  /**
   * Handle row reorder event
   */
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

  // ============================================================================
  // EXPORT & FILTER UTILITIES
  // ============================================================================
  
  /**
   * Export table data to CSV
   */
  exportCSV(): void {
    const data = this.filteredData();
    this.exportService.exportTable(this.config, data);
  }

  /**
   * Clear all filters
   */
  clearFilters(table?: PrimeNGTable): void {
    this.filterService.clearFilters(table, this.filters, this.globalFilterValue, () => {
      this.tableEvent.emit({
        type: 'filter',
        filters: {},
        data: this.config.data
      });
    });
  }

  /**
   * Check if there are active filters
   */
  hasActiveFilters(): boolean {
    return this.filterService.hasActiveFilters(this.filters, this.globalFilterValue);
  }

  // ============================================================================
  // TEMPLATE HELPERS (Unused but kept for future use)
  // ============================================================================
  
  /**
   * Get column template (for future content projection support)
   */
  getColumnTemplate(column: TableColumn<T>): TemplateRef<unknown> | null {
    if (!column.cellTemplateKey || !this.cellTemplates) {
      return null;
    }
    return null;
  }

  /**
   * Get expansion template (for future content projection support)
   */
  getExpansionTemplate(row: T): TemplateRef<unknown> | null {
    return null;
  }
}
