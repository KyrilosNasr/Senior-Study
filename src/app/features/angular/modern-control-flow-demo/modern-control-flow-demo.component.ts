import { NgIcon } from '@ng-icons/core';
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';

interface DemoItem {
  id: string;
  name: string;
}

/**
 * Modern Control Flow Demo Component
 * Demonstrates Angular's modern control flow syntax (@if, @for, @switch)
 */
@Component({
  selector: 'app-modern-control-flow-demo',
  standalone: true,
  imports: [
    NgIcon,
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ToggleButtonModule,
    SelectButtonModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels
  ],
  templateUrl: './modern-control-flow-demo.component.html',
  styleUrl: './modern-control-flow-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModernControlFlowDemoComponent {
  activeTab = signal('0');

  // @if demo signals
  showContent = signal(true);

  // @for demo signals
  items = signal<DemoItem[]>([
    { id: '1', name: 'Angular 17+' },
    { id: '2', name: 'Signals API' },
    { id: '3', name: 'Modern Control Flow' }
  ]);

  // @switch demo signals
  currentRole = signal('admin');
  userRoles = signal([
    { label: 'Admin', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Viewer', value: 'viewer' }
  ]);

  // Computed values
  itemCount = computed(() => this.items().length);

  /**
   * Add item to @for list
   */
  addItem(): void {
    const id = Math.random().toString(36).substring(7);
    const names = ['Server-Side Rendering', 'Hydration', 'Deferrable Views', 'Zoneless Change Detection'];
    const name = names[Math.floor(Math.random() * names.length)];
    this.items.update(items => [...items, { id, name: `${name} (${id})` }]);
  }

  /**
   * Remove item from @for list
   */
  removeItem(id: string): void {
    this.items.update(items => items.filter(item => item.id !== id));
  }

  /**
   * Clear all items
   */
  clearItems(): void {
    this.items.set([]);
  }
}

