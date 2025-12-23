import { Injectable, Signal, WritableSignal } from '@angular/core';
import { DynamicTableConfig, TableColumn } from '../types/table-config.types';
import { getRowId } from '../utils/table-data.util';
import { PrimeNGTable } from '../types/primeng-table.types';

/**
 * Stateless service for row expansion operations in dynamic tables
 * Operates on state signals passed from component (instance-based state)
 */
@Injectable()
export class TableRowExpansionService {

  /**
   * Handle row expansion event
   * Updates expanded rows state and syncs with PrimeNG table
   * 
   * @param row - Row data that was expanded
   * @param columns - Table columns configuration
   * @param expandedRows - Writable signal for expanded rows state
   * @param table - Optional PrimeNG table reference for syncing
   * @param onExpand - Optional callback when row expands
   */
  expandRow<T>(
    row: T,
    columns: TableColumn<T>[],
    expandedRows: WritableSignal<Record<string | number, boolean>>,
    table?: PrimeNGTable,
    onExpand?: (row: T) => void
  ): void {
    const rowId = getRowId(row, columns);
    expandedRows.update(rows => ({ ...rows, [rowId]: true }));
    
    // Sync with PrimeNG table
    if (table && table.expandedRowKeys) {
      table.expandedRowKeys = { ...table.expandedRowKeys, [rowId]: true };
    }
    
    if (onExpand) {
      onExpand(row);
    }
  }

  /**
   * Handle row collapse event
   * Updates expanded rows state and syncs with PrimeNG table
   * 
   * @param row - Row data that was collapsed
   * @param columns - Table columns configuration
   * @param expandedRows - Writable signal for expanded rows state
   * @param table - Optional PrimeNG table reference for syncing
   * @param onCollapse - Optional callback when row collapses
   */
  collapseRow<T>(
    row: T,
    columns: TableColumn<T>[],
    expandedRows: WritableSignal<Record<string | number, boolean>>,
    table?: PrimeNGTable,
    onCollapse?: (row: T) => void
  ): void {
    const rowId = getRowId(row, columns);
    expandedRows.update(rows => {
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
    
    if (onCollapse) {
      onCollapse(row);
    }
  }
  
  /**
   * Toggle row expansion state
   * Expands or collapses a row and syncs with PrimeNG table
   * 
   * @param row - Row data
   * @param currentExpanded - Current expansion state
   * @param columns - Table columns configuration
   * @param expandedRows - Writable signal for expanded rows state
   * @param table - Optional PrimeNG table reference for syncing
   * @param onExpand - Optional callback when row expands
   * @param onCollapse - Optional callback when row collapses
   */
  toggleRowExpansion<T>(
    row: T,
    currentExpanded: boolean,
    columns: TableColumn<T>[],
    expandedRows: WritableSignal<Record<string | number, boolean>>,
    table?: PrimeNGTable,
    onExpand?: (row: T) => void,
    onCollapse?: (row: T) => void
  ): void {
    if (currentExpanded) {
      this.collapseRow(row, columns, expandedRows, table, onCollapse);
    } else {
      this.expandRow(row, columns, expandedRows, table, onExpand);
    }
  }

  /**
   * Check if row is expanded
   * 
   * @param row - Row data
   * @param columns - Table columns configuration
   * @param expandedRows - Signal for expanded rows state
   * @returns True if row is currently expanded
   */
  isRowExpanded<T>(
    row: T,
    columns: TableColumn<T>[],
    expandedRows: Signal<Record<string | number, boolean>>
  ): boolean {
    const rowId = getRowId(row, columns);
    return expandedRows()[rowId] || false;
  }

  /**
   * Get nested table data for a row
   * 
   * @param row - Row data
   * @param getNestedTableData - Optional function to get nested data
   * @returns Array of nested table data
   */
  getNestedDataForRow<T>(
    row: T,
    getNestedTableData?: (row: T) => unknown[]
  ): unknown[] {
    if (getNestedTableData) {
      return getNestedTableData(row);
    }
    return [];
  }
  
  /**
   * Get nested table config for a row
   * 
   * @param row - Row data
   * @param getNestedTableConfig - Optional function to get nested config
   * @returns Nested table configuration or null
   */
  getNestedConfigForRow<T>(
    row: T,
    getNestedTableConfig?: (row: T) => DynamicTableConfig<unknown>
  ): DynamicTableConfig<unknown> | null {
    if (getNestedTableConfig) {
      return getNestedTableConfig(row);
    }
    return null;
  }

}

