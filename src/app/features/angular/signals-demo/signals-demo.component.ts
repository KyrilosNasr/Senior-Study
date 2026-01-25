import { Component, ChangeDetectionStrategy, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';

import { DynamicFormComponent } from '../../../shared/components/dynamic-form/dynamic-form.component';
import { DynamicTableComponent } from '../../../shared/components/dynamic-table/dynamic-table.component';
import { DynamicModalComponent } from '../../../shared/components/dynamic-modal/dynamic-modal.component';
import { DynamicModalService } from '../../../shared/components/dynamic-modal/dynamic-modal.service';
import { DynamicFormConfig } from '../../../shared/types/form-field.types';
import { DynamicTableConfig } from '../../../shared/types/table-config.types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

/**
 * Angular Signals Demo Component
 * Demonstrates Angular Signals with dynamic components
 */
@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    DynamicFormComponent,
    DynamicTableComponent,
    DynamicModalComponent
  ],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsDemoComponent {
  activeTab = signal('0');
  private readonly modalService = inject(DynamicModalService);

  // Basic Signals
  count = signal(0);
  name = signal('Angular Signals');
  items = signal<string[]>(['Item 1', 'Item 2', 'Item 3']);

  // Computed Signals
  doubleCount = computed(() => this.count() * 2);
  greeting = computed(() => `Hello, ${this.name()}!`);
  itemCount = computed(() => this.items().length);

  // Complex computed signal
  summary = computed(() => ({
    count: this.count(),
    double: this.doubleCount(),
    name: this.name(),
    items: this.itemCount()
  }));

  // Form configuration signal
  formConfig = signal<DynamicFormConfig<{ name: string; email: string }>>({
    fields: [
      {
        key: 'name',
        type: 'text',
        label: 'Name',
        required: true,
        placeholder: 'Enter your name'
      },
      {
        key: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        placeholder: 'Enter your email'
      }
    ],
    submitLabel: 'Submit',
    showCancel: true
  });

  // Table data signal
  tableData = signal<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
  ]);

  tableConfig = computed<DynamicTableConfig<User>>(() => ({
    columns: [
      { field: 'id', header: 'ID', sortable: true, width: '80px' },
      { field: 'name', header: 'Name', sortable: true, filterable: true },
      { field: 'email', header: 'Email', sortable: true },
      { field: 'role', header: 'Role', sortable: true, filterable: true }
    ],
    data: this.tableData(),
    pagination: true,
    rowsPerPage: 5,
    globalFilter: true
  }));

  constructor() {
    // Effect to demonstrate side effects
    effect(() => {
      const currentCount = this.count();
      if (currentCount > 10) {
        console.log('Count exceeded 10!', currentCount);
      }
    });

    // Effect with cleanup
    effect(() => {
      const name = this.name();
    });
  }

  /**
   * Increment count signal
   */
  increment(): void {
    this.count.update(value => value + 1);
  }

  /**
   * Decrement count signal
   */
  decrement(): void {
    this.count.update(value => value - 1);
  }

  /**
   * Reset count signal
   */
  reset(): void {
    this.count.set(0);
  }

  /**
   * Update name signal
   */
  updateName(newName: string): void {
    this.name.set(newName);
  }

  /**
   * Add item to array signal
   */
  addItem(): void {
    this.items.update(items => [...items, `Item ${items.length + 1}`]);
  }

  /**
   * Remove item from array signal
   */
  removeItem(index: number): void {
    this.items.update(items => items.filter((_, i) => i !== index));
  }

  /**
   * Add user to table
   */
  addUser(): void {
    const newUser: User = {
      id: this.tableData().length + 1,
      name: `User ${this.tableData().length + 1}`,
      email: `user${this.tableData().length + 1}@example.com`,
      role: 'User'
    };
    this.tableData.update(users => [...users, newUser]);
  }

  /**
   * Show modal with signal data
   */
  showSignalModal(): void {
    this.modalService.info(
      'Signals Summary',
      `Count: ${this.count()}, Double: ${this.doubleCount()}, Items: ${this.itemCount()}`
    );
  }

  /**
   * Handle form submission
   */
  onFormSubmit(result: unknown): void {
    console.log('Form submitted:', result);
    this.modalService.info('Success', 'Form submitted successfully!');
  }
}

