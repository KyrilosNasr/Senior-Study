import { TableColumn } from '../types/table-config.types';

export const fieldToString = <T>(field: string | keyof T): string => String(field);

export function getFieldValue<T>(obj: T, field: string | keyof T): unknown {
  const fieldStr = String(field);
  if (fieldStr.includes('.')) {
    return fieldStr.split('.').reduce((o: any, k: string) => o?.[k], obj);
  }
  return (obj as any)[fieldStr];
}

export function getRowId<T>(row: T, columns: TableColumn<T>[]): string | number {
  const id = getFieldValue(row, 'id');
  if (id !== null && id !== undefined) return id as string | number;

  const idField = columns.find(col => String(col.field).toLowerCase().includes('id'))?.field;
  if (idField) {
    const fallbackId = getFieldValue(row, idField);
    if (fallbackId !== null && fallbackId !== undefined) return fallbackId as string | number;
  }

  return String(JSON.stringify(row));
}

export function getFilterMatchModeOptions(filterType?: string) {
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
    default:
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

