import { Component, signal, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableComponent } from '../../../shared/components/dynamic-table/dynamic-table.component';
import { DynamicModalComponent } from '../../../shared/components/dynamic-modal/dynamic-modal.component';
import { ToastComponent } from '../../../shared/components/toast/toast.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DemoTabsComponent, DemoTab } from '../../../shared/components/demo-tabs/demo-tabs.component';
import { DemoTabpanelComponent } from '../../../shared/components/demo-tabs/demo-tabpanel.component';
import { DemoSectionComponent } from '../../../shared/components/demo-section/demo-section.component';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { MessageService } from 'primeng/api';
import { TableEventData } from '../../../shared/types/table-config.types';
import { DemoBadge } from '../../../shared/types/common.types';
import { DemoTableConfig } from './shared/models/demo-table.models';
import { TableConfigService } from './shared/services/table-config.service';
import { NestedTableService } from './shared/services/nested-table.service';
import { DYNAMIC_TABLE_DEMO_PROVIDERS } from './shared/providers/dynamic-table-demo.providers';

@Component({
  selector: 'app-dynamic-table-demo',
  standalone: true,
  imports: [
    CommonModule,
    DynamicTableComponent,
    DynamicModalComponent,
    ToastComponent,
    DemoHeaderComponent,
    DemoTabsComponent,
    DemoTabpanelComponent,
    DemoSectionComponent
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
  readonly demoTables = signal<DemoTableConfig[]>([
    {
      id: 'users',
      title: 'Users Table',
      description: 'A comprehensive table demonstrating all available features including icon menu actions, column resizing, reordering, row expansion, advanced filtering, and more.',
      icon: 'pi-users',
      badge: 'Full Features',
      badgeColor: 'blue',
      config: this.configService.getUsersTableConfig() as unknown as DemoTableConfig['config'],
      getNestedTableData: this.nestedTableService.getNestedTableData.bind(this.nestedTableService),
      getNestedTableConfig: this.nestedTableService.getNestedTableConfig.bind(this.nestedTableService)
    },
    {
      id: 'products',
      title: 'Products Table',
      description: 'A simpler table configuration with column resizing, gridlines, and basic filtering enabled.',
      icon: 'pi-shopping-bag',
      config: this.configService.getProductsTableConfig() as unknown as DemoTableConfig['config']
    }
  ]);

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
    console.log('Table event:', event);
  }

  /**
   * Handle row click events
   */
  onRowClick(row: unknown): void {
    console.log('Row clicked:', row);
  }

  /**
   * Handle selection change events
   */
  onSelectionChange(selection: unknown): void {
    console.log('Selection changed:', selection);
  }
}
