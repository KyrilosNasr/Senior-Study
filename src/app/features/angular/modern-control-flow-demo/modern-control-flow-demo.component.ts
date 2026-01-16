import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';

/**
 * Modern Control Flow Demo Component
 * Demonstrates Angular's modern control flow syntax (@if, @for, @switch, @defer)
 */
@Component({
  selector: 'app-modern-control-flow-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
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
  // Signals for demo
  count = signal(0);
  items = signal<string[]>(['Item 1', 'Item 2', 'Item 3']);
  selectedOption = signal<'option1' | 'option2' | 'option3'>('option1');
  showDeferred = signal(false);

  // Computed values
  isEven = computed(() => this.count() % 2 === 0);
  itemCount = computed(() => this.items().length);

  /**
   * Increment count
   */
  increment(): void {
    this.count.update(v => v + 1);
  }

  /**
   * Add item
   */
  addItem(): void {
    this.items.update(items => [...items, `Item ${items.length + 1}`]);
  }

  /**
   * Remove item
   */
  removeItem(index: number): void {
    this.items.update(items => items.filter((_, i) => i !== index));
  }

  /**
   * Select option
   */
  selectOption(option: 'option1' | 'option2' | 'option3'): void {
    this.selectedOption.set(option);
  }

  /**
   * Load deferred content
   */
  loadDeferred(): void {
    this.showDeferred.set(true);
  }

  /**
   * Get code example for @for loop
   * This method returns the code as a string to avoid template parsing issues
   */
  getForLoopExample(): string {
    return `@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <p>No items</p>
}`;
  }
}

