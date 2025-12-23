import { Injectable, Signal, WritableSignal } from '@angular/core';
import { TableColumn, FilterMetadata } from '../types/table-config.types';
import { PrimeNGTable } from '../types/primeng-table.types';
import { fieldToString } from '../utils/table-data.util';

/**
 * Stateless service for filter operations in dynamic tables
 * Operates on state signals passed from component (instance-based state)
 */
@Injectable()
export class TableFilterManagementService {

  /**
   * Handle column filter change
   * 
   * @param event - Filter change event with filter metadata
   * @param filters - Writable signal for filters state
   * @param onFilterChange - Optional callback when filters change
   */
  onFilter(
    event: unknown,
    filters: WritableSignal<Record<string, FilterMetadata>>,
    onFilterChange?: (filters: Record<string, FilterMetadata>) => void
  ): void {
    const filterEvent = event as { filters?: Record<string, FilterMetadata | undefined> };
    const newFilters: Record<string, FilterMetadata> = {};
    
    if (filterEvent.filters) {
      Object.keys(filterEvent.filters).forEach(key => {
        const metadata = filterEvent.filters![key];
        if (metadata) {
          newFilters[key] = metadata;
        }
      });
    }
    
    filters.set(newFilters);
    
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  }

  /**
   * Get filterable columns for global filter
   * 
   * @param columns - Table columns configuration
   * @returns Array of filterable column field names
   */
  getFilterableColumns<T>(columns: TableColumn<T>[]): string[] {
    return columns
      .filter(c => c.filterable)
      .map(c => fieldToString(c.field));
  }
  
  /**
   * Get filter match modes for a column based on filter type
   * 
   * @param col - Column configuration
   * @returns Array of filter match mode options
   */
  getFilterMatchModes<T>(col: TableColumn<T>): Array<{ label: string; value: string }> {
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
   * Clear all filters (global and column filters)
   * 
   * @param table - Optional PrimeNG table reference to clear filters
   * @param filters - Writable signal for filters state
   * @param globalFilterValue - Writable signal for global filter value
   * @param onFilterClear - Optional callback when filters are cleared
   */
  clearFilters(
    table: PrimeNGTable | undefined,
    filters: WritableSignal<Record<string, FilterMetadata>>,
    globalFilterValue: WritableSignal<string>,
    onFilterClear?: () => void
  ): void {
    if (table && typeof table.clear === 'function') {
      table.clear();
    }
    filters.set({});
    globalFilterValue.set('');
    
    if (onFilterClear) {
      onFilterClear();
    }
  }

  /**
   * Check if any filters are currently active
   * 
   * @param filters - Signal for filters state
   * @param globalFilterValue - Signal for global filter value
   * @returns True if global filter or any column filters are active
   */
  hasActiveFilters(
    filters: Signal<Record<string, FilterMetadata>>,
    globalFilterValue: Signal<string>
  ): boolean {
    const filterKeys = Object.keys(filters());
    return filterKeys.length > 0 || globalFilterValue().length > 0;
  }
}

