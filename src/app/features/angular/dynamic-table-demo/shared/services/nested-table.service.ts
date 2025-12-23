import { Injectable, inject } from '@angular/core';
import { User, Order } from '../models/demo-table.models';
import { TableDataService } from './table-data.service';
import { DynamicTableConfig } from '../../../../../shared/types';

/**
 * Service for managing nested table configurations and data
 */
@Injectable()
export class NestedTableService {
  private readonly dataService = inject(TableDataService);

  /**
   * Get nested table data (orders) for a user row
   */
  getNestedTableData(row: unknown): Order[] {
    const user = row as User;
    return this.dataService.getOrdersByUserId(user.id);
  }

  /**
   * Get nested table configuration for a user row
   */
  getNestedTableConfig(row: unknown): DynamicTableConfig<unknown> {
    const user = row as User;
    return {
      columns: [
        { field: 'orderNumber', header: 'Order #', sortable: true, filterable: true, width: '120px' },
        { field: 'product', header: 'Product', sortable: true, filterable: true },
        {
          field: 'quantity',
          header: 'Quantity',
          sortable: true,
          filterable: true,
          filterType: 'number',
          align: 'right',
          width: '100px'
        },
        {
          field: 'amount',
          header: 'Amount',
          sortable: true,
          filterable: true,
          filterType: 'number',
          align: 'right',
          formatter: (value) => {
            return `$${(value as number).toFixed(2)}`;
          },
          width: '120px'
        },
        {
          field: 'status',
          header: 'Status',
          sortable: true,
          filterable: true,
          filterType: 'select',
          filterOptions: [
            { label: 'Pending', value: 'pending' },
            { label: 'Completed', value: 'completed' },
            { label: 'Cancelled', value: 'cancelled' }
          ],
          formatter: (value) => {
            const status = value as string;
            const statusColors: Record<string, string> = {
              'completed': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
              'pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
              'cancelled': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            };
            const color = statusColors[status] || statusColors['pending'];
            const label = status.charAt(0).toUpperCase() + status.slice(1);
            return `<span class="px-2 py-1 rounded-full text-xs font-semibold ${color}">${label}</span>`;
          },
          width: '120px'
        },
        {
          field: 'orderDate',
          header: 'Order Date',
          sortable: true,
          filterable: true,
          filterType: 'date',
          formatter: (value) => {
            return new Date(value as Date).toLocaleDateString();
          },
          width: '130px'
        }
      ],
      data: this.getNestedTableData(user),
      pagination: true,
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10],
      sortMode: 'multiple',
      globalFilter: true,
      advancedFilter: true,
      stripedRows: true,
      showGridlines: false,
      size: 'small',
      responsive: true
    } as DynamicTableConfig<unknown>;
  }
}

