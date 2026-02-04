import { Injectable, inject } from '@angular/core';
import { User, Product } from '../models/demo-table.models';
import { TableDataService } from './table-data.service';
import { DynamicModalService } from '../../../../../shared/components/dynamic-modal/dynamic-modal.service';
import { ToastService } from '../../../../../shared/components/toast/toast.service';
import { DynamicTableConfig, TableAction } from '../../../../../shared/types';

/**
 * Service for managing table configurations
 * Simulates backend API responses for table configs
 */
@Injectable()
export class TableConfigService {
  private readonly dataService = inject(TableDataService);
  private readonly modalService = inject(DynamicModalService);
  private readonly toastService = inject(ToastService);

  /**
   * Get users table configuration
   * This simulates a backend API response
   */
  getUsersTableConfig(): DynamicTableConfig<User> {
    return {
      columns: [
        { field: 'id', header: 'ID', sortable: true, width: '80px', editable: true, editorType: 'number' },
        { field: 'name', header: 'Name', sortable: true, filterable: true, editable: true, editorType: 'text' },
        { field: 'email', header: 'Email', sortable: true, filterable: true, editable: true, editorType: 'text' },
        {
          field: 'role',
          header: 'Role',
          sortable: true,
          filterable: true,
          filterType: 'select',
          filterOptions: [
            { label: 'Admin', value: 'Admin' },
            { label: 'User', value: 'User' },
            { label: 'Moderator', value: 'Moderator' }
          ],
          formatter: (value) => {
            const roleColors: Record<string, string> = {
              'Admin': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
              'Moderator': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
              'User': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            };
            const color = roleColors[value as string] || roleColors['User'];
            return `<span class="px-2 py-1 rounded-full text-xs font-semibold ${color}">${value}</span>`;
          }
        },
        {
          field: 'status',
          header: 'Status',
          sortable: true,
          filterable: true,
          filterType: 'select',
          filterOptions: [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' }
          ],
          formatter: (value) => {
            const status = value === 'active' ? 'Active' : 'Inactive';
            const color = value === 'active'
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
            return `<span class="px-2 py-1 rounded-full text-xs font-semibold ${color}">${status}</span>`;
          }
        },
        {
          field: 'createdAt',
          header: 'Created',
          sortable: true,
          formatter: (value) => {
            return new Date(value as Date).toLocaleDateString();
          }
        }
      ],
      data: this.dataService.getUsers(),
      pagination: true,
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 25],
      sortMode: 'multiple',
      globalFilter: true,
      advancedFilter: true,
      selection: {
        enabled: true,
        mode: 'multiple',
        checkbox: true
      },
      columnResize: {
        enabled: true,
        mode: 'fit'
      },
      columnReorder: {
        enabled: true
      },
      rowExpansion: {
        enabled: true
      },
      rowEditing: {
        enabled: true,
        mode: 'row',
        onSave: (row) => {

          this.toastService.success('Row saved successfully!', 'Saved');
        },
        onCancel: (row) => {

        }
      },
      rowReorder: {
        enabled: true,
        onReorder: (event) => {

        }
      },
      stripedRows: true,
      showGridlines: false,
      size: 'normal',
      actions: this.getUserActions(),
      actionMenuIcon: 'faSolidEllipsisVertical',
      exportable: true,
      exportFileName: 'users',
      responsive: true
    };
  }

  /**
   * Get products table configuration
   * This simulates a backend API response
   */
  getProductsTableConfig(): DynamicTableConfig<Product> {
    return {
      columns: [
        { field: 'id', header: 'ID', sortable: true, width: '80px' },
        { field: 'name', header: 'Product Name', sortable: true, filterable: true },
        { field: 'category', header: 'Category', sortable: true, filterable: true },
        {
          field: 'price',
          header: 'Price',
          sortable: true,
          align: 'right',
          formatter: (value) => {
            return `$${(value as number).toFixed(2)}`;
          }
        },
        {
          field: 'stock',
          header: 'Stock',
          sortable: true,
          align: 'right',
          formatter: (value) => {
            const stock = value as number;
            if (stock > 10) {
              return `<span class="font-semibold text-gray-900 dark:text-gray-100">${stock}</span>`;
            } else {
              return `<span class="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">${stock} (Low)</span>`;
            }
          }
        },
        {
          field: 'rating',
          header: 'Rating',
          sortable: true,
          align: 'center',
          formatter: (value) => {
            const rating = value as number;
            const stars = '⭐'.repeat(Math.floor(rating));
            return `<div class="flex items-center justify-center gap-1">
              <span class="font-semibold text-yellow-600 dark:text-yellow-400">${stars}</span>
              <span class="text-sm text-gray-600 dark:text-gray-400">${rating}</span>
            </div>`;
          }
        }
      ],
      data: this.dataService.getProducts(),
      pagination: true,
      rowsPerPage: 10,
      sortMode: 'single',
      globalFilter: true,
      advancedFilter: false,
      exportable: true,
      exportFileName: 'products',
      columnResize: {
        enabled: true,
        mode: 'expand'
      },
      stripedRows: true,
      showGridlines: true,
      size: 'normal',
      responsive: true
    };
  }

  /**
   * Get user table actions configuration
   */
  private getUserActions(): TableAction<User>[] {
    return [
      {
        label: 'View Details',
        icon: 'faSolidEye',
        severity: 'info',
        handler: (row) => {
          const detailsMessage = `Name: ${row.name}\nEmail: ${row.email}\nRole: ${row.role}\nStatus: ${row.status}\nCreated: ${new Date(row.createdAt).toLocaleDateString()}`;
          this.modalService.info('User Details', detailsMessage);
        }
      },
      {
        label: 'Edit',
        icon: 'faSolidPencil',
        severity: 'primary',
        handler: (row) => {
          this.toastService.info(
            `Click the Edit button in the Edit column to edit ${row.name}`,
            'Edit User'
          );
        }
      },
      {
        label: 'Duplicate',
        icon: 'faSolidCopy',
        severity: 'secondary',
        handler: (row) => {
          this.toastService.success(
            `User ${row.name} duplicated successfully`,
            'Duplicated'
          );
        }
      },
      {
        label: 'Separator',
        separator: true,
        handler: () => { }
      },
      {
        label: 'Activate',
        icon: 'faSolidCircleCheck',
        severity: 'success',
        visible: (row) => row.status === 'inactive',
        handler: (row: User) => {
          row.status = 'active';
          this.toastService.success(
            `${row.name} has been activated`,
            'User Activated'
          );
        }
      },
      {
        label: 'Deactivate',
        icon: 'faSolidCircleXmark',
        severity: 'warn',
        visible: (row) => row.status === 'active',
        handler: (row: User) => {
          row.status = 'inactive';
          this.toastService.warn(
            `${row.name} has been deactivated`,
            'User Deactivated'
          );
        }
      },
      {
        label: 'Separator',
        separator: true,
        handler: () => { }
      },
      {
        label: 'Delete',
        icon: 'faSolidTrash',
        severity: 'danger',
        visible: (row) => row.role !== 'Admin',
        // Simple confirmation dialog - no manual modal handling needed!
        confirmDialog: true,
        confirmTitle: 'Delete User',
        confirmMessage: (row) => `Are you sure you want to delete ${row.name}? This action cannot be undone.`,
        confirmLabel: 'Delete',
        cancelLabel: 'Cancel',
        handler: (row: User) => {
          // Handler only executes if user confirms
          this.toastService.success(
            `User ${row.name} has been deleted`,
            'User Deleted'
          );
        }
      }
    ];
  }
}

