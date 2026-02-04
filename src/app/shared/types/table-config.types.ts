import { SelectOption, SortOrder } from './common.types';

/**
 * Filter operator types for advanced filtering
 */
export type FilterOperator =
  | 'equals'
  | 'notEquals'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte'
  | 'dateIs'
  | 'dateIsNot'
  | 'dateBefore'
  | 'dateAfter'
  | 'between'
  | 'in';

/**
 * Filter constraint configuration for advanced filtering
 */
export interface FilterConstraint {
  id?: string;
  field: string;
  operator: FilterOperator;
  value: unknown;
}

/**
 * Filter metadata for advanced filtering
 */
export interface FilterMetadata {
  constraints?: FilterConstraint[];
  operator?: 'and' | 'or';
}

/**
 * Table column configuration with generic type support
 */
export interface TableColumn<T = unknown> {
  field: keyof T | string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  // Basic filter type
  filterType?: 'text' | 'number' | 'date' | 'select' | 'boolean';
  filterOptions?: SelectOption[];
  // Advanced filtering
  advancedFilter?: boolean;
  filterMatchMode?: FilterOperator;
  filterPlaceholder?: string;
  // Column features
  resizable?: boolean;
  reorderable?: boolean;
  frozen?: boolean;
  frozenPosition?: 'left' | 'right';
  // Styling
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  align?: 'left' | 'center' | 'right';
  // Custom templates
  cellTemplateKey?: string;
  headerTemplateKey?: string;
  // Formatters
  formatter?: (value: unknown, row: T) => string;
  exportable?: boolean;
  exportFormatter?: (value: unknown, row: T) => string;
  // Editing
  editable?: boolean;
  editorType?: 'text' | 'number' | 'date' | 'select' | 'boolean';
  editorOptions?: SelectOption[];
}

/**
 * Table action menu item configuration
 */
export interface TableAction<T = unknown> {
  label: string;
  icon?: string;
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger';
  handler: (row: T) => void | Promise<void>;
  visible?: (row: T) => boolean;
  disabled?: (row: T) => boolean;
  separator?: boolean; // Add separator before this item
  command?: (event?: unknown) => void; // Alternative to handler for menu compatibility
  // Confirmation dialog support
  confirmDialog?: boolean; // Show confirmation dialog before executing handler
  confirmMessage?: string | ((row: T) => string); // Custom confirmation message (can be dynamic based on row)
  confirmTitle?: string | ((row: T) => string); // Custom confirmation title (default: 'Confirm Action')
  confirmLabel?: string; // Custom confirm button label (default: 'Confirm')
  cancelLabel?: string; // Custom cancel button label (default: 'Cancel')
}

/**
 * Table row selection configuration
 */
export interface TableSelectionConfig {
  enabled: boolean;
  mode?: 'single' | 'multiple';
  checkbox?: boolean;
}

/**
 * Row expansion configuration
 */
export interface RowExpansionConfig {
  enabled: boolean;
  expandedRows?: unknown[];
  expansionTemplateKey?: string;
}

/**
 * Column resize configuration
 */
export interface ColumnResizeConfig {
  enabled: boolean;
  mode?: 'fit' | 'expand';
}

/**
 * Column reorder configuration
 */
export interface ColumnReorderConfig {
  enabled: boolean;
  onReorder?: (event: { columns: string[] }) => void;
}

/**
 * Column toggle configuration
 */
export interface ColumnToggleConfig {
  enabled: boolean;
  visibleColumns?: string[];
  onToggle?: (event: { columns: string[] }) => void;
}

/**
 * Row editing configuration
 */
export interface RowEditingConfig {
  enabled: boolean;
  mode?: 'cell' | 'row';
  onSave?: (row: unknown) => void | Promise<void>;
  onCancel?: (row: unknown) => void;
}

/**
 * Row reorder configuration
 */
export interface RowReorderConfig {
  enabled: boolean;
  onReorder?: (event: { rows: unknown[] }) => void;
}

/**
 * Dynamic table configuration with all PrimeNG features
 */
export interface DynamicTableConfig<T = unknown> {
  columns: TableColumn<T>[];
  data: T[];
  // Pagination
  pagination?: boolean;
  rowsPerPage?: number;
  rowsPerPageOptions?: number[];
  // Sorting
  sortMode?: 'single' | 'multiple';
  defaultSortField?: string;
  defaultSortOrder?: SortOrder;
  removableSort?: boolean;
  // Filtering
  globalFilter?: boolean;
  advancedFilter?: boolean; // Enable advanced filter menu
  // Selection
  selection?: TableSelectionConfig;
  // Actions (now displayed as icon menu)
  actions?: TableAction<T>[];
  actionMenuIcon?: string; // Icon for action menu button (default: 'faSolidEllipsisVertical')
  // Row expansion
  rowExpansion?: RowExpansionConfig;
  // Column features
  columnResize?: ColumnResizeConfig;
  columnReorder?: ColumnReorderConfig;
  columnToggle?: ColumnToggleConfig;
  // Row editing
  rowEditing?: RowEditingConfig;
  // Row reorder
  rowReorder?: RowReorderConfig;
  // Virtual scrolling
  virtualScroll?: boolean;
  scrollHeight?: string;
  scrollable?: boolean;
  // Styling
  size?: 'small' | 'normal' | 'large';
  stripedRows?: boolean;
  showGridlines?: boolean;
  // Export
  exportable?: boolean;
  exportFileName?: string;
  exportFormats?: ('csv' | 'xlsx' | 'pdf')[];
  // Responsive
  responsive?: boolean;
  breakpoint?: string;
  // Loading state
  loading?: boolean;
  loadingIcon?: string;
  // Empty state
  emptyMessage?: string;
  // State management
  stateKey?: string; // For stateful table
  stateStorage?: 'session' | 'local';
  // Server-side (Lazy) loading
  lazy?: boolean;
  totalRecords?: number;
  // Events
  onRowClick?: (row: T) => void;
  onRowSelect?: (row: T | T[]) => void;
  onRowUnselect?: (row: T | T[]) => void;
  onSort?: (event: { field: string; order: number }) => void;
  onFilter?: (event: { filters: Record<string, FilterMetadata> }) => void;
}

/**
 * Table event data
 */
export interface TableEventData<T = unknown> {
  type: 'sort' | 'filter' | 'select' | 'page' | 'rowClick' | 'action' | 'expand' | 'collapse' | 'edit' | 'resize' | 'reorder' | 'toggle';
  data?: T | T[];
  field?: string;
  order?: SortOrder;
  page?: number;
  first?: number;
  rows?: number;
  filters?: Record<string, FilterMetadata>;
  columns?: string[];
}

