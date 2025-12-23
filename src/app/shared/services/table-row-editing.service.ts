import { Injectable, Signal, WritableSignal } from '@angular/core';
import { TableColumn } from '../types/table-config.types';
import { getFieldValue, getRowId } from '../utils/table-data.util';

/**
 * Stateless service for row editing operations in dynamic tables
 * Operates on state signals passed from component (instance-based state)
 */
@Injectable()
export class TableRowEditingService {

  /**
   * Update cell value during row editing
   * Updates the editing cells signal with the new value
   * 
   * @param row - Row data
   * @param field - Field name to update
   * @param value - New value
   * @param columns - Table columns configuration
   * @param editingCells - Writable signal for editing cells state
   */
  updateCellValue<T>(
    row: T,
    field: string,
    value: unknown,
    columns: TableColumn<T>[],
    editingCells: WritableSignal<Record<string, Record<string, unknown>>>
  ): void {
    const rowId = getRowId(row, columns);
    const fieldStr = String(field);
    
    editingCells.update(cells => {
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
   * Initializes editing state and stores current cell values
   * 
   * @param row - Row data to edit
   * @param columns - Table columns configuration
   * @param editingRowKeys - Writable signal for editing row keys
   * @param editingCells - Writable signal for editing cells
   */
  startRowEdit<T>(
    row: T,
    columns: TableColumn<T>[],
    editingRowKeys: WritableSignal<Record<string, boolean>>,
    editingCells: WritableSignal<Record<string, Record<string, unknown>>>
  ): void {
    const rowId = getRowId(row, columns);
    editingRowKeys.update(keys => ({ ...keys, [rowId]: true }));
    
    // Initialize editing cells with current values
    const rowCells: Record<string, unknown> = {};
    columns.forEach(col => {
      if (col.editable) {
        rowCells[String(col.field)] = getFieldValue(row, col.field);
      }
    });
    editingCells.update(cells => ({
      ...cells,
      [rowId]: rowCells
    }));
  }
  
  /**
   * Save row edits
   * Applies edited values to row and returns updated row
   * 
   * @param row - Row data to save
   * @param columns - Table columns configuration
   * @param editingCells - Signal for editing cells state
   * @returns Updated row with edited values applied
   */
  saveRowEdit<T>(
    row: T,
    columns: TableColumn<T>[],
    editingCells: Signal<Record<string, Record<string, unknown>>>
  ): T {
    const rowId = getRowId(row, columns);
    const editedCells = editingCells()[rowId] || {};
    
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
   * Clear editing state for a specific row
   * 
   * @param rowId - Row ID to clear editing state for
   * @param editingRowKeys - Writable signal for editing row keys
   * @param editingCells - Writable signal for editing cells
   */
  clearEditingState(
    rowId: string | number,
    editingRowKeys: WritableSignal<Record<string, boolean>>,
    editingCells: WritableSignal<Record<string, Record<string, unknown>>>
  ): void {
    editingRowKeys.update(keys => {
      const newKeys = { ...keys };
      delete newKeys[rowId];
      return newKeys;
    });
    editingCells.update(cells => {
      const newCells = { ...cells };
      delete newCells[rowId];
      return newCells;
    });
  }
  
  /**
   * Check if row is currently being edited
   * 
   * @param row - Row data
   * @param columns - Table columns configuration
   * @param editingRowKeys - Signal for editing row keys
   * @returns True if row is in editing mode
   */
  isRowEditing<T>(
    row: T,
    columns: TableColumn<T>[],
    editingRowKeys: Signal<Record<string, boolean>>
  ): boolean {
    const rowId = getRowId(row, columns);
    return editingRowKeys()[rowId] || false;
  }
  
  /**
   * Get editing value for a cell
   * Returns edited value if available, otherwise returns current field value
   * 
   * @param row - Row data
   * @param field - Field name
   * @param columns - Table columns configuration
   * @param editingCells - Signal for editing cells state
   * @returns Editing value or current field value
   */
  getEditingValue<T>(
    row: T,
    field: string,
    columns: TableColumn<T>[],
    editingCells: Signal<Record<string, Record<string, unknown>>>
  ): unknown {
    const rowId = getRowId(row, columns);
    const editedCells = editingCells()[rowId];
    if (editedCells && editedCells[field]) {
      return editedCells[field];
    }
    return getFieldValue(row, field);
  }
}

