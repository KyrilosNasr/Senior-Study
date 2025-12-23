import { TableColumn } from '../types/table-config.types';

/**
 * Table data manipulation utilities
 * Pure utility functions for working with table row data
 */

/**
 * Converts a field identifier to a string representation
 * 
 * @param field - Field identifier (string or keyof T)
 * @returns String representation of the field
 * 
 * @example
 * ```typescript
 * fieldToString('name') // Returns 'name'
 * fieldToString('user.name') // Returns 'user.name'
 * ```
 */
export function fieldToString<T>(field: string | keyof T): string {
  return String(field);
}

/**
 * Gets a field value from an object, supporting nested field access via dot notation
 * 
 * @param obj - The object to extract the value from
 * @param field - Field path (supports nested paths like 'user.name')
 * @returns The field value or undefined if not found
 * 
 * @example
 * ```typescript
 * const user = { name: 'John', address: { city: 'NYC' } };
 * getFieldValue(user, 'name') // Returns 'John'
 * getFieldValue(user, 'address.city') // Returns 'NYC'
 * getFieldValue(user, 'nonexistent') // Returns undefined
 * ```
 */
export function getFieldValue<T>(obj: T, field: string | keyof T): unknown {
  const fieldStr = String(field);
  
  // Handle nested field access (e.g., 'user.name')
  if (fieldStr.includes('.')) {
    return fieldStr.split('.').reduce((o: unknown, k: string) => {
      return (o as Record<string, unknown>)?.[k];
    }, obj);
  }
  
  // Direct field access
  return (obj as Record<string, unknown>)[fieldStr];
}

/**
 * Gets the row ID for tracking purposes
 * Attempts to find an 'id' field, with fallback to any field containing 'id'
 * 
 * @param row - The row object
 * @param columns - Array of table columns to search for ID field
 * @returns The row ID (string or number) or a JSON string representation as last resort
 * 
 * @example
 * ```typescript
 * const row = { id: 1, name: 'John' };
 * const columns = [{ field: 'id', header: 'ID' }, { field: 'name', header: 'Name' }];
 * getRowId(row, columns) // Returns 1
 * 
 * const row2 = { userId: 123, name: 'Jane' };
 * getRowId(row2, columns) // Returns 123 (finds userId field)
 * ```
 */
export function getRowId<T>(row: T, columns: TableColumn<T>[]): string | number {
  // Try to get 'id' field first
  const id = getFieldValue(row, 'id');
  if (id !== null && id !== undefined) {
    return id as string | number;
  }
  
  // Fallback: try to find any field named 'id' in columns
  const idField = columns.find(col => 
    String(col.field).toLowerCase().includes('id')
  )?.field;
  
  if (idField) {
    const fallbackId = getFieldValue(row, idField);
    if (fallbackId !== null && fallbackId !== undefined) {
      return fallbackId as string | number;
    }
  }
  
  // Last resort: use string representation of the entire row
  return String(JSON.stringify(row));
}

