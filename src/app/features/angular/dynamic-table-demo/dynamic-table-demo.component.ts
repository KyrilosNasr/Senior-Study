import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';

import { DynamicTableComponent } from '../../../shared/components/dynamic-table/dynamic-table.component';
import {
  DynamicTableConfig,
  TableEventData,
  TableAction
} from '../../../shared/types/table-config.types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

interface Order {
  id: number;
  orderNumber: string;
  product: string;
  quantity: number;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  orderDate: Date;
  userId: number;
}

@Component({
  selector: 'app-dynamic-table-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    DynamicTableComponent
  ],
  templateUrl: './dynamic-table-demo.component.html',
  styleUrl: './dynamic-table-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableDemoComponent {
  activeTab = signal(0);
  
  // Sample orders data for nested table
  private ordersData: Order[] = [
    { id: 1, orderNumber: 'ORD-001', product: 'Laptop', quantity: 1, amount: 999.99, status: 'completed', orderDate: new Date('2024-01-20'), userId: 1 },
    { id: 2, orderNumber: 'ORD-002', product: 'Mouse', quantity: 2, amount: 49.98, status: 'completed', orderDate: new Date('2024-01-25'), userId: 1 },
    { id: 3, orderNumber: 'ORD-003', product: 'Keyboard', quantity: 1, amount: 79.99, status: 'pending', orderDate: new Date('2024-02-01'), userId: 1 },
    { id: 4, orderNumber: 'ORD-004', product: 'Smartphone', quantity: 1, amount: 699.99, status: 'completed', orderDate: new Date('2024-02-15'), userId: 2 },
    { id: 5, orderNumber: 'ORD-005', product: 'Headphones', quantity: 1, amount: 199.99, status: 'completed', orderDate: new Date('2024-02-20'), userId: 2 },
    { id: 6, orderNumber: 'ORD-006', product: 'T-Shirt', quantity: 3, amount: 89.97, status: 'cancelled', orderDate: new Date('2024-03-05'), userId: 2 },
    { id: 7, orderNumber: 'ORD-007', product: 'Book', quantity: 5, amount: 99.95, status: 'completed', orderDate: new Date('2024-03-10'), userId: 3 },
    { id: 8, orderNumber: 'ORD-008', product: 'Jeans', quantity: 2, amount: 159.98, status: 'pending', orderDate: new Date('2024-03-12'), userId: 3 },
    { id: 9, orderNumber: 'ORD-009', product: 'Laptop', quantity: 1, amount: 999.99, status: 'completed', orderDate: new Date('2024-01-10'), userId: 4 },
    { id: 10, orderNumber: 'ORD-010', product: 'Monitor', quantity: 2, amount: 599.98, status: 'completed', orderDate: new Date('2024-01-18'), userId: 4 },
    { id: 11, orderNumber: 'ORD-011', product: 'Webcam', quantity: 1, amount: 129.99, status: 'pending', orderDate: new Date('2024-04-01'), userId: 5 },
    { id: 12, orderNumber: 'ORD-012', product: 'USB Drive', quantity: 4, amount: 79.96, status: 'completed', orderDate: new Date('2024-04-05'), userId: 5 }
  ];

  usersTableConfig: DynamicTableConfig<User> = {
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
    data: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
        status: 'active',
        createdAt: new Date('2024-01-15')
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
        status: 'active',
        createdAt: new Date('2024-02-20')
      },
      {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob@example.com',
        role: 'User',
        status: 'inactive',
        createdAt: new Date('2024-03-10')
      },
      {
        id: 4,
        name: 'Alice Williams',
        email: 'alice@example.com',
        role: 'Moderator',
        status: 'active',
        createdAt: new Date('2024-01-05')
      },
      {
        id: 5,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        role: 'User',
        status: 'active',
        createdAt: new Date('2024-04-12')
      }
    ],
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
        console.log('Row saved:', row);
        alert('Row saved successfully!');
      },
      onCancel: (row) => {
        console.log('Edit cancelled for:', row);
      }
    },
    rowReorder: {
      enabled: true,
      onReorder: (event) => {
        console.log('Rows reordered:', event.rows);
      }
    },
    stripedRows: true,
    showGridlines: false,
    size: 'normal',
    actions: [
      {
        label: 'View Details',
        icon: 'pi pi-eye',
        severity: 'info',
        handler: (row) => {
          alert(`Viewing details for: ${row.name}\nEmail: ${row.email}\nRole: ${row.role}\nStatus: ${row.status}`);
        }
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        severity: 'primary',
        handler: (row) => {
          alert(`Edit user: ${row.name}\nClick the Edit button in the Edit column to edit this row.`);
        }
      },
      {
        label: 'Duplicate',
        icon: 'pi pi-copy',
        severity: 'secondary',
        handler: (row) => {
          alert(`Duplicating user: ${row.name}`);
        }
      },
      {
        separator: true
      },
      {
        label: 'Activate',
        icon: 'pi pi-check-circle',
        severity: 'success',
        visible: (row) => row.status === 'inactive',
        handler: (row: User) => {
          row.status = 'active';
          alert(`${row.name} has been activated!`);
        }
      },
      {
        label: 'Deactivate',
        icon: 'pi pi-times-circle',
        severity: 'warn',
        visible: (row) => row.status === 'active',
        handler: (row: User) => {
          row.status = 'inactive';
          alert(`${row.name} has been deactivated!`);
        }
      },
      {
        separator: true
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        severity: 'danger',
        visible: (row) => row.role !== 'Admin', // Admins cannot be deleted
        handler: (row: User) => {
          if (confirm(`Delete user ${row.name}?`)) {
            alert(`Deleted: ${row.name}`);
          }
        }
      }
    ] as TableAction<User>[],
    actionMenuIcon: 'pi pi-ellipsis-v',
    exportable: true,
    exportFileName: 'users',
    responsive: true
  };

  productsTableConfig: DynamicTableConfig<Product> = {
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
    data: [
      { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, rating: 4.5 },
      { id: 2, name: 'Smartphone', category: 'Electronics', price: 699.99, stock: 8, rating: 4.8 },
      { id: 3, name: 'Headphones', category: 'Electronics', price: 199.99, stock: 25, rating: 4.2 },
      { id: 4, name: 'T-Shirt', category: 'Clothing', price: 29.99, stock: 50, rating: 4.0 },
      { id: 5, name: 'Jeans', category: 'Clothing', price: 79.99, stock: 30, rating: 4.3 },
      { id: 6, name: 'Book', category: 'Books', price: 19.99, stock: 100, rating: 4.7 }
    ],
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

  onTableEvent(event: TableEventData): void {
    console.log('Table event:', event);
  }

  onRowClick(row: User | Product): void {
    console.log('Row clicked:', row);
  }

  onSelectionChange(selection: User | User[] | Product | Product[]): void {
    console.log('Selection changed:', selection);
  }
  
  /**
   * Get nested table data (orders) for a user row
   * Using arrow function to maintain 'this' context
   */
  getNestedTableData = (row: User): Order[] => {
    return this.ordersData.filter(order => order.userId === row.id);
  };
  
  /**
   * Get nested table configuration for a user row
   * Using arrow function to maintain 'this' context
   */
  getNestedTableConfig = (row: User): DynamicTableConfig<unknown> => {
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
      data: this.getNestedTableData(row),
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
  };
}

