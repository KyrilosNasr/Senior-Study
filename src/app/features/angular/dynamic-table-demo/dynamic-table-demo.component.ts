import { Component, signal, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableComponent } from '../../../shared/components/dynamic-table/dynamic-table.component';
import { DynamicModalComponent } from '../../../shared/components/dynamic-modal/dynamic-modal.component';
import { ToastComponent } from '../../../shared/components/toast/toast.component';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { DemoTab } from '../../../shared/components/demo-tabs/demo-tabs.component';
import { MessageService } from 'primeng/api';
import { TableEventData } from '../../../shared/types/table-config.types';
import { DemoBadge } from '../../../shared/types/common.types';
import { DemoTableConfig } from './shared/models/demo-table.models';
import { TableConfigService } from './shared/services/table-config.service';
import { NestedTableService } from './shared/services/nested-table.service';
import { DYNAMIC_TABLE_DEMO_PROVIDERS } from './shared/providers/dynamic-table-demo.providers';
import { TableController } from '../../../shared/utils/table-controller';
import { of, delay } from 'rxjs';
import { DynamicTableConfig } from '../../../shared/types/table-config.types';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';


@Component({
  selector: 'app-dynamic-table-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TabsModule,
    DynamicTableComponent,

    DynamicModalComponent,
    ToastComponent
  ],
  providers: [
    MessageService,
    ToastService,
    ...DYNAMIC_TABLE_DEMO_PROVIDERS
  ],
  templateUrl: './dynamic-table-demo.component.html',
  styleUrl: './dynamic-table-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableDemoComponent {
  private readonly configService = inject(TableConfigService);
  private readonly nestedTableService = inject(NestedTableService);

  // TableController Demo Setup
  public serverSideController = new TableController<any, any>(
    (filter) => {
      // Generate 100 realistic users for the server-side demo
      const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Charlie Brown', 'David Miller', 'Eva Davis', 'Frank Wilson', 'Grace Lee', 'Henry Taylor'];
      const roles = ['Admin', 'Editor', 'Viewer', 'Manager'];
      const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'];

      let allData = Array.from({ length: 100 }).map((_, i) => ({
        id: i + 1,
        name: `${names[i % names.length]} ${Math.floor(i / 10) || ''}`.trim(),
        email: `user${i + 1}@example.com`,
        status: i % 3 === 0 ? 'active' : i % 3 === 1 ? 'inactive' : 'pending',
        role: roles[i % roles.length],
        department: departments[i % departments.length],
        createdAt: new Date(2024, 0, 1 + (i % 31)),
        orders_count: Math.floor(Math.random() * 20)
      }));

      // Server-Side Sorting
      if (filter.orderBy) {
        const field = filter.orderBy.field;
        const dir = filter.orderBy.direction === 'asc' ? 1 : -1;
        allData.sort((a: any, b: any) => {
          const valA = a[field];
          const valB = b[field];
          if (valA < valB) return -1 * dir;
          if (valA > valB) return 1 * dir;
          return 0;
        });
      }

      // Server-Side Filtering
      if (filter.data?.keyword) {
        const kw = filter.data.keyword.toLowerCase();
        allData = allData.filter(item =>
          item.name.toLowerCase().includes(kw) ||
          item.email.toLowerCase().includes(kw)
        );
      }

      const count = allData.length;
      const start = filter.pageNumber * filter.pageSize;
      const items = allData.slice(start, start + filter.pageSize);

      return of({
        items,
        count: 100,
        filteredCount: count
      }).pipe(delay(800));
    },
    { pageSize: 10 }
  );

  // Stable configs to avoid recreation loops
  private readonly usersConfig = this.configService.getUsersTableConfig();
  private readonly productsConfig = this.configService.getProductsTableConfig();

  public serverSideConfig = signal<DynamicTableConfig<any>>({
    lazy: true,
    columns: [
      { field: 'id', header: 'ID', sortable: true, width: '70px', align: 'center' },
      { field: 'name', header: 'Name', sortable: true, filterable: true, editable: true },
      { field: 'email', header: 'Email', sortable: true, filterable: true, editable: true },
      {
        field: 'role',
        header: 'Role',
        sortable: true,
        filterable: true,
        filterType: 'select',
        filterOptions: [
          { label: 'Admin', value: 'Admin' },
          { label: 'Editor', value: 'Editor' },
          { label: 'Viewer', value: 'Viewer' },
          { label: 'Manager', value: 'Manager' }
        ],
        formatter: (value) => {
          const colors: any = {
            Admin: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
            Editor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
            Manager: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400'
          };
          const color = colors[value as string] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
          return `<span class="px-2 py-0.5 rounded-full text-xs font-medium ${color}">${value}</span>`;
        }
      },
      {
        field: 'status',
        header: 'Status',
        filterable: true,
        filterType: 'select',
        filterOptions: [
          { label: 'Active', value: 'active' },
          { label: 'Inactive', value: 'inactive' },
          { label: 'Pending', value: 'pending' }
        ],
        formatter: (value) => {
          const colors: any = {
            active: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
            inactive: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
            pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
          };
          const color = colors[value as string] || 'bg-gray-100';
          return `<span class="px-2 py-0.5 rounded-full text-xs font-medium ${color}">${String(value).toUpperCase()}</span>`;
        }
      },
      {
        field: 'createdAt',
        header: 'Registered',
        sortable: true,
        formatter: (value) => value ? new Date(value as any).toLocaleDateString() : '-'
      }
    ],
    data: [],
    totalRecords: 0,
    loading: false,
    pagination: true,
    advancedFilter: true,
    globalFilter: true,
    exportable: true,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 20, 50],
    selection: { enabled: true, mode: 'multiple', checkbox: true },
    rowExpansion: { enabled: true },
    rowEditing: { enabled: true, mode: 'row' },
    actions: [
      {
        label: 'View',
        icon: 'pi pi-eye',
        handler: (row) => { }
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        severity: 'danger',
        confirmDialog: true,
        confirmMessage: (row) => `Delete ${row.name}?`,
        handler: (row) => { }
      }
    ]
  });

  /**
   * Feature badges for the header
   */
  readonly featureBadges: DemoBadge[] = [
    { label: 'Icon Menu Actions', icon: 'pi pi-ellipsis-v', color: 'blue' },
    { label: 'Advanced Filtering', icon: 'pi pi-filter', color: 'green' },
    { label: 'Column Resize', icon: 'pi pi-arrows-h', color: 'purple' },
    { label: 'Column Reorder', icon: 'pi pi-bars', color: 'orange' },
    { label: 'Row Expansion', icon: 'pi pi-chevron-down', color: 'pink' },
    { label: 'Cell Editing', icon: 'pi pi-pencil', color: 'teal' },
    { label: 'Column Toggle', icon: 'pi pi-list', color: 'indigo' },
    { label: 'Export CSV', icon: 'pi pi-download', color: 'yellow' }
  ];

  /**
   * Demo table configurations
   * In a real application, this would come from an API call
   */
  /**
   * Demo table configurations
   * Using computed to ensure reactivity when serverSideConfig or other dependencies change
   */
  readonly demoTables = computed<DemoTableConfig[]>(() => [{
    id: 'server-side',
    title: 'Server-Side Table',
    description: 'Demonstrating integration with TableController for lazy loading, server-side pagination, and remote data fetching.',
    icon: 'pi-server',
    badge: 'TableController',
    badgeColor: 'purple',
    config: this.serverSideConfig() as unknown as DemoTableConfig['config'],
    getNestedTableData: this.nestedTableService.getNestedTableData.bind(this.nestedTableService),
    getNestedTableConfig: this.nestedTableService.getNestedTableConfig.bind(this.nestedTableService)
  },
  {
    id: 'products',
    title: 'Products Table',
    description: 'A simpler table configuration with column resizing, gridlines, and basic filtering enabled.',
    icon: 'pi-shopping-bag',
    config: this.productsConfig as unknown as DemoTableConfig['config']
  },
  {
    id: 'users',
    title: 'Users Table',
    description: 'A comprehensive table demonstrating all available features including icon menu actions, column resizing, reordering, row expansion, advanced filtering, and more.',
    icon: 'pi-users',
    badge: 'Full Features',
    badgeColor: 'blue',
    config: this.usersConfig as unknown as DemoTableConfig['config'],
    getNestedTableData: this.nestedTableService.getNestedTableData.bind(this.nestedTableService),
    getNestedTableConfig: this.nestedTableService.getNestedTableConfig.bind(this.nestedTableService)
  }
  ]);

  constructor() {
    // Sync Controller with Config
    this.serverSideController.refresh$.subscribe(() => {
      this.serverSideConfig.set({
        ...this.serverSideConfig(),
        data: this.serverSideController.items,
        totalRecords: this.serverSideController.count,
        loading: this.serverSideController.isLoading && this.serverSideController.items.length === 0
      });
    });

    // Start with a small delay to avoid NG0103 during initial render
    setTimeout(() => this.serverSideController.start(), 0);
  }

  /**
   * Tabs configuration for demo-tabs component
   */
  readonly tabs = computed<DemoTab[]>(() => {
    return this.demoTables().map((table, index) => ({
      value: index.toString(),
      label: table.title,
      icon: table.icon,
      badge: table.badge,
      badgeColor: table.badgeColor
    }));
  });

  /**
   * Handle table events
   */
  onTableEvent(event: TableEventData): void {
    if (!this.serverSideConfig().lazy) return;

    switch (event.type) {
      case 'page':
        if (event.page !== undefined && (event.page - 1) !== this.serverSideController.filter.pageNumber) {
          Promise.resolve().then(() => {
            this.serverSideController.filter.pageNumber = (event.page || 1) - 1;
            this.serverSideController.filter.pageSize = event.rows || 10;
            this.serverSideController.filter$.next(false);
          });
        }
        break;

      case 'sort':
        if (event.field !== this.serverSideController.filter.orderBy?.field ||
          (event.order === 1 ? 'asc' : 'desc') !== this.serverSideController.filter.orderBy?.direction) {
          Promise.resolve().then(() => {
            this.serverSideController.filter.orderBy = {
              field: event.field || '',
              direction: event.order === 1 ? 'asc' : 'desc'
            };
            this.serverSideController.filter$.next(true); // reset to page 0
          });
        }
        break;

      case 'filter':
        // If it's a keyword filter from global search
        if (typeof event.data === 'string' && event.data !== this.serverSideController.filter.data?.keyword) {
          Promise.resolve().then(() => {
            this.serverSideController.filter.data = { ...this.serverSideController.filter.data, keyword: event.data };
            this.serverSideController.filter$.next(true);
          });
        }
        break;
    }
  }

  /**
   * Handle row click events
   */
  onRowClick(row: unknown): void {
  }

  /**
   * Handle selection change events
   */
  onSelectionChange(selection: unknown): void {
  }
}
