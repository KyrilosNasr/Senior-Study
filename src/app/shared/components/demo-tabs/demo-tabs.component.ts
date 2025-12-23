import { Component, Input, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs, Tab, TabList, TabPanels } from 'primeng/tabs';

export interface DemoTab {
  value: string;
  label: string;
  icon?: string;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'teal' | 'indigo' | 'yellow';
}

@Component({
  selector: 'app-demo-tabs',
  standalone: true,
  imports: [
    CommonModule,
    Tabs,
    Tab,
    TabList,
    TabPanels
],
  templateUrl: './demo-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTabsComponent {
  @Input({ required: true }) tabs!: DemoTab[];
  @Input() initialValue: string | number = 0;

  activeTab = signal<string | number>(this.initialValue);

  getBadgeClasses(color?: string): string {
    const baseClasses = 'px-2 py-0.5 rounded text-xs font-semibold ml-2';
    
    switch (color) {
      case 'blue':
        return `${baseClasses} bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300`;
      case 'green':
        return `${baseClasses} bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300`;
      case 'purple':
        return `${baseClasses} bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300`;
      case 'orange':
        return `${baseClasses} bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300`;
      case 'pink':
        return `${baseClasses} bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300`;
      case 'teal':
        return `${baseClasses} bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300`;
      case 'indigo':
        return `${baseClasses} bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300`;
      case 'yellow':
        return `${baseClasses} bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300`;
      default:
        return `${baseClasses} bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300`;
    }
  }
}

