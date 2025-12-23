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
  ElementRef
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

import {
  DynamicTableConfig,
  TableColumn,
  TableEventData,
  TableAction,
  FilterMetadata
} from '../../types/table-config.types';
import { SortOrder } from '../../types/common.types';

/**
 * Generic dynamic table component using PrimeNG Table
 * Supports filtering, sorting, pagination, selection, and custom actions
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
    ToggleButtonModule
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent<T = unknown> {
  @Input({ required: true }) config!: DynamicTableConfig<T>;
  @Output() tableEvent = new EventEmitter<TableEventData<T>>();
  @Output() rowClick = new EventEmitter<T>();
  @Output() selectionChange = new EventEmitter<T | T[]>();

  constructor(private cdr: ChangeDetectorRef) {}

  // Content projection for custom templates
  @ContentChildren('cellTemplate') cellTemplates?: QueryList<TemplateRef<unknown>>;
  @ContentChildren('headerTemplate') headerTemplates?: QueryList<TemplateRef<unknown>>;

  // Menu references - use ElementRef for proper typing
  actionMenuRefs = new Map<T, any>();
  @ViewChild('columnToggleMenu') columnToggleMenu?: any;
  @ViewChild('dt') table?: any;
  selectedRowForMenu = signal<T | null>(null);
  menuItems = signal<MenuItem[]>([]);
  
  // Row editing state
  editingRowKeys = signal<Record<string, boolean>>({});
  editingCells = signal<Record<string, Record<string, unknown>>>({});

  // State
  selectedRows = signal<T[]>([]);
  globalFilterValue = signal('');
  first = signal(0);
  rows = signal(10);
  expandedRows = signal<Record<string | number, boolean>>({});
  filters = signal<Record<string, FilterMetadata>>({});
  
  // Nested table data getter - can be overridden by parent component
  @Input() getNestedTableData?: (row: T) => unknown[];
  @Input() getNestedTableConfig?: (row: T) => DynamicTableConfig<unknown>;

  filteredData = computed(() => {
    const data = this.config.data || [];
    const globalFilter = this.globalFilterValue().toLowerCase();

    if (!globalFilter && !this.config.globalFilter) {
      return data;
    }

    return data.filter(row => {
      return this.config.columns.some(column => {
        const value = this.getFieldValue(row, column.field);
        return String(value).toLowerCase().includes(globalFilter);
      });
    });
  });


  /**
   * Track by function for rows
   */
  trackByIndex(index: number): number {
    return index;
  }

  /**
   * Track by function for columns
   */
  trackByField(index: number, column: TableColumn<T>): string {
    return String(column.field);
  }

  /**
   * Convert field to string for template use
   */
  fieldToString(field: string | keyof T): string {
    return String(field);
  }

  /**
   * Handle sorting
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
   * Handle pagination
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
   * Handle global filter
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
   * Handle row selection
   */
  onSelectionChange(event: { data?: T | T[]; type?: string; originalEvent?: Event }): void {
    // Read the actual selection from PrimeNG table (it manages the selection state)
    // Use setTimeout to ensure PrimeNG has updated its internal selection
    setTimeout(() => {
      const tableSelection = this.table?.selection || [];
      
      // Sync our signal with table's selection
      this.selectedRows.set(tableSelection);
      
      const selectionMode = this.config.selection?.mode || 'multiple';
      const data = selectionMode === 'single' ? (tableSelection[0] || null) : tableSelection;
      this.selectionChange.emit(data as T | T[]);
      this.tableEvent.emit({
        type: 'select',
        data
      });
    }, 0);
  }

  /**
   * Handle row click
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

  /**
   * Convert PrimeNG icon to FontAwesome icon
   */
  getFontAwesomeIcon(primeIcon?: string): string {
    if (!primeIcon) return 'fas fa-ellipsis-v';
    
    // If already FontAwesome, return as is
    if (primeIcon.startsWith('fa')) {
      return primeIcon.startsWith('fas ') || primeIcon.startsWith('far ') || primeIcon.startsWith('fab ') 
        ? primeIcon 
        : `fas ${primeIcon}`;
    }
    
    // Map PrimeNG icons to FontAwesome
    const iconMap: Record<string, string> = {
      'pi pi-ellipsis-v': 'fa-ellipsis-v',
      'pi pi-ellipsis-h': 'fa-ellipsis-h',
      'pi pi-eye': 'fa-eye',
      'pi pi-pencil': 'fa-pencil-alt',
      'pi pi-copy': 'fa-copy',
      'pi pi-check-circle': 'fa-check-circle',
      'pi pi-times-circle': 'fa-times-circle',
      'pi pi-trash': 'fa-trash',
      'pi pi-plus': 'fa-plus',
      'pi pi-minus': 'fa-minus',
      'pi pi-search': 'fa-search',
      'pi pi-filter': 'fa-filter',
      'pi pi-filter-slash': 'fa-filter-circle-xmark',
      'pi pi-download': 'fa-download',
      'pi pi-upload': 'fa-upload',
      'pi pi-save': 'fa-save',
      'pi pi-times': 'fa-times',
      'pi pi-check': 'fa-check',
      'pi pi-check-square': 'fa-square-check',
      'pi pi-list': 'fa-list',
      'pi pi-info-circle': 'fa-info-circle',
      'pi pi-exclamation-triangle': 'fa-exclamation-triangle',
      'pi pi-chevron-down': 'fa-chevron-down',
      'pi pi-chevron-right': 'fa-chevron-right',
      'pi pi-chevron-up': 'fa-chevron-up',
      'pi pi-chevron-left': 'fa-chevron-left'
    };
    
    const faIcon = iconMap[primeIcon] || 'fa-ellipsis-v';
    return `fas ${faIcon}`;
  }

  /**
   * Get menu items for a row
   */
  getMenuItems(row: T): MenuItem[] {
    if (!this.config.actions || this.config.actions.length === 0) {
      return [];
    }

    const filtered = this.config.actions.filter(action => {
      // Filter out actions that are not visible
      if (action.visible && !action.visible(row)) {
        return false;
      }
      return true;
    });
    
    const menuItems = filtered.map(action => ({
      label: action.label,
      icon: action.icon ? this.getFontAwesomeIcon(action.icon) : undefined,
      command: () => {
        if (action.disabled && action.disabled(row)) {
          return;
        }
        action.handler(row);
        this.tableEvent.emit({
          type: 'action',
          data: row
        });
      },
      disabled: action.disabled ? action.disabled(row) : false,
      separator: action.separator
    }));
    
    return menuItems;
  }
  
  /**
   * Check if row has any visible actions
   */
  hasVisibleActions(row: T): boolean {
    return this.getMenuItems(row).length > 0;
  }

  /**
   * Show action menu for a row
   */
  showActionMenu(event: MouseEvent, row: T, menuRef?: any): void {
    event.stopPropagation();
    this.selectedRowForMenu.set(row);
    const menuItems = this.getMenuItems(row);
    this.menuItems.set(menuItems);
    
    // Use the menu reference passed from template, or get from map
    let menu = menuRef || this.actionMenuRefs.get(row);
    
    if (menu && typeof menu.toggle === 'function') {
      menu.toggle(event);
    }
  }
  
  /**
   * Register action menu reference
   */
  registerActionMenu(row: T, menuRef: any): void {
    this.actionMenuRefs.set(row, menuRef);
  }

  /**
   * Handle action menu item click (legacy support)
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

  /**
   * Check if action is visible
   */
  isActionVisible(action: TableAction<T>, row: T): boolean {
    return action.visible ? action.visible(row) : true;
  }

  /**
   * Check if action is disabled
   */
  isActionDisabled(action: TableAction<T>, row: T): boolean {
    return action.disabled ? action.disabled(row) : false;
  }

  /**
   * Export table data to CSV
   */
  exportCSV(): void {
    const data = this.filteredData();
    const headers = this.config.columns
      .filter(col => col.exportable !== false)
      .map(col => col.header);

    const rows = data.map(row =>
      this.config.columns
        .filter(col => col.exportable !== false)
        .map(col => {
          const value = this.getFieldValue(row, col.field);
          if (col.exportFormatter) {
            return col.exportFormatter(value, row);
          }
          return String(value || '');
        })
    );

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${this.config.exportFileName || 'export'}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Get column template if exists
   */
  getColumnTemplate(column: TableColumn<T>): TemplateRef<unknown> | null {
    if (!column.cellTemplateKey || !this.cellTemplates) {
      return null;
    }
    // This would need to be implemented with a more sophisticated template lookup
    return null;
  }

  /**
   * Get field value for display
   */
  getFieldValue(obj: T, field: string | keyof T): unknown {
    if (typeof field === 'string' && field.includes('.')) {
      return field.split('.').reduce((o: unknown, k: string) => {
        return (o as Record<string, unknown>)?.[k];
      }, obj);
    }
    return (obj as Record<string, unknown>)[field as string];
  }

  /**
   * Handle filter change
   */
  onFilter(event: unknown): void {
    const filterEvent = event as { filters?: Record<string, FilterMetadata | undefined> };
    const filters: Record<string, FilterMetadata> = {};
    if (filterEvent.filters) {
      Object.keys(filterEvent.filters).forEach(key => {
        const metadata = filterEvent.filters![key];
        if (metadata) {
          filters[key] = metadata;
        }
      });
    }
    this.filters.set(filters);
    this.tableEvent.emit({
      type: 'filter',
      filters,
      data: this.config.data
    });
    if (this.config.onFilter) {
      this.config.onFilter({ filters });
    }
  }

  /**
   * Handle column resize
   */
  onColumnResize(event: unknown): void {
    this.tableEvent.emit({
      type: 'resize',
      data: this.config.data
    });
  }

  /**
   * Handle column reorder
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
   * Handle row expansion
   */
  onRowExpand(event: { data: T }): void {
    const rowId = this.getRowId(event.data);
    this.expandedRows.update(rows => ({ ...rows, [rowId]: true }));
    // Sync with PrimeNG table
    if (this.table && this.table.expandedRowKeys) {
      this.table.expandedRowKeys = { ...this.table.expandedRowKeys, [rowId]: true };
    }
    this.cdr.markForCheck();
    this.tableEvent.emit({
      type: 'expand',
      data: event.data
    });
  }

  /**
   * Handle row collapse
   */
  onRowCollapse(event: { data: T }): void {
    const rowId = this.getRowId(event.data);
    this.expandedRows.update(rows => {
      const newRows = { ...rows };
      delete newRows[rowId];
      return newRows;
    });
    // Sync with PrimeNG table
    if (this.table && this.table.expandedRowKeys) {
      const updatedKeys = { ...this.table.expandedRowKeys };
      delete updatedKeys[rowId];
      this.table.expandedRowKeys = updatedKeys;
    }
    this.cdr.markForCheck();
    this.tableEvent.emit({
      type: 'collapse',
      data: event.data
    });
  }
  
  /**
   * Toggle row expansion
   */
  toggleRowExpansion(row: T, currentExpanded: boolean): void {
    const rowId = this.getRowId(row);
    
    if (currentExpanded) {
      // Collapse
      this.expandedRows.update(rows => {
        const newRows = { ...rows };
        delete newRows[rowId];
        return newRows;
      });
      // Update PrimeNG table's expandedRowKeys directly
      setTimeout(() => {
        if (this.table) {
          const currentKeys = this.table.expandedRowKeys || {};
          const updatedKeys = { ...currentKeys };
          delete updatedKeys[rowId];
          this.table.expandedRowKeys = updatedKeys;
          this.cdr.markForCheck();
        }
      }, 0);
      this.tableEvent.emit({
        type: 'collapse',
        data: row
      });
    } else {
      // Expand
      this.expandedRows.update(rows => ({ ...rows, [rowId]: true }));
      // Update PrimeNG table's expandedRowKeys directly
      setTimeout(() => {
        if (this.table) {
          const currentKeys = this.table.expandedRowKeys || {};
          this.table.expandedRowKeys = { ...currentKeys, [rowId]: true };
          this.cdr.markForCheck();
        }
      }, 0);
      this.tableEvent.emit({
        type: 'expand',
        data: row
      });
    }
  }
  
  /**
   * Get nested table data for a row
   */
  getNestedDataForRow(row: T): unknown[] {
    if (this.getNestedTableData) {
      return this.getNestedTableData(row);
    }
    return [];
  }
  
  /**
   * Get nested table config for a row
   */
  getNestedConfigForRow(row: T): DynamicTableConfig<unknown> | null {
    if (this.getNestedTableConfig) {
      return this.getNestedTableConfig(row);
    }
    return null;
  }

  /**
   * Get row ID for tracking (returns the value used as dataKey in PrimeNG table)
   */
  private getRowId(row: T): string | number {
    // PrimeNG uses dataKey value, which is 'id' in our case
    const id = this.getFieldValue(row, 'id');
    // Return the actual ID value (number or string) for PrimeNG compatibility
    if (id !== null && id !== undefined) {
      return id as string | number;
    }
    // Fallback: try to find any field named 'id' in columns
    const idField = this.config.columns.find(col => 
      String(col.field).toLowerCase().includes('id')
    )?.field;
    if (idField) {
      const fallbackId = this.getFieldValue(row, idField);
      if (fallbackId !== null && fallbackId !== undefined) {
        return fallbackId as string | number;
      }
    }
    // Last resort: use string representation
    return String(JSON.stringify(row));
  }

  /**
   * Check if row is expanded
   */
  isRowExpanded(row: T): boolean {
    const rowId = this.getRowId(row);
    return this.expandedRows()[rowId] || false;
  }

  /**
   * Get expansion template (placeholder for content projection)
   */
  getExpansionTemplate(row: T): TemplateRef<unknown> | null {
    // This would be implemented with content projection
    return null;
  }

  /**
   * Get filterable columns for global filter
   */
  getFilterableColumns(): string[] {
    return this.config.columns
      .filter(c => c.filterable)
      .map(c => this.fieldToString(c.field));
  }
  
  /**
   * Get filter match modes for a column
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
   * Update cell value for editing
   */
  updateCellValue(row: T, field: string, value: unknown): void {
    const rowId = this.getRowId(row);
    const fieldStr = String(field);
    
    // Store in editing cells
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
   * Start editing a row
   */
  startRowEdit(row: T): void {
    const rowId = this.getRowId(row);
    this.editingRowKeys.update(keys => ({ ...keys, [rowId]: true }));
    
    // Initialize editing cells with current values
    const rowCells: Record<string, unknown> = {};
    this.config.columns.forEach(col => {
      if (col.editable) {
        rowCells[String(col.field)] = this.getFieldValue(row, col.field);
      }
    });
    this.editingCells.update(cells => ({
      ...cells,
      [rowId]: rowCells
    }));
  }
  
  /**
   * Save row edits
   */
  saveRowEdit(row: T): void {
    const rowId = this.getRowId(row);
    const editedCells = this.editingCells()[rowId] || {};
    
    // Apply edits to row
    Object.keys(editedCells).forEach(field => {
      if (typeof field === 'string' && field.includes('.')) {
        const keys = field.split('.');
        let obj: Record<string, unknown> = row as Record<string, unknown>;
        for (let i = 0; i < keys.length - 1; i++) {
          obj = obj[keys[i]] as Record<string, unknown>;
        }
        obj[keys[keys.length - 1]] = editedCells[field];
      } else {
        (row as Record<string, unknown>)[field] = editedCells[field];
      }
    });
    
    // Clear editing state
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
    
    if (this.config.rowEditing?.onSave) {
      this.config.rowEditing.onSave(row);
    }
    
    this.tableEvent.emit({
      type: 'edit',
      data: row
    });
  }
  
  /**
   * Cancel row edits
   */
  cancelRowEdit(row: T): void {
    const rowId = this.getRowId(row);
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
    
    if (this.config.rowEditing?.onCancel) {
      this.config.rowEditing.onCancel(row);
    }
  }
  
  /**
   * Check if row is being edited
   */
  isRowEditing(row: T): boolean {
    const rowId = this.getRowId(row);
    return this.editingRowKeys()[rowId] || false;
  }
  
  /**
   * Get editing value for a cell
   */
  getEditingValue(row: T, field: string): unknown {
    const rowId = this.getRowId(row);
    const editedCells = this.editingCells()[rowId];
    if (editedCells && editedCells[field]) {
      return editedCells[field];
    }
    return this.getFieldValue(row, field);
  }
  
  /**
   * Clear all filters
   */
  clearFilters(table?: any): void {
    if (table && typeof table.clear === 'function') {
      table.clear();
    }
    this.filters.set({});
    this.globalFilterValue.set('');
    this.tableEvent.emit({
      type: 'filter',
      filters: {},
      data: this.config.data
    });
  }
  
  /**
   * Handle row reorder
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
    
    // Update config data
    this.config.data = data;
    
    if (this.config.rowReorder?.onReorder) {
      this.config.rowReorder.onReorder({ rows: data });
    }
    
    this.tableEvent.emit({
      type: 'reorder',
      data: data
    });
  }
  
  /**
   * Check if any filters are active
   */
  hasActiveFilters(): boolean {
    const filterKeys = Object.keys(this.filters());
    return filterKeys.length > 0 || this.globalFilterValue().length > 0;
  }
}

