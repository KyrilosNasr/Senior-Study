import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DemoBadge } from '../../types/common.types';

/**
 * Demo Header Component
 * 
 * Reusable header card component for demo pages with title, description, and optional feature badges.
 * Follows the consistent styling pattern used across demo components.
 */
@Component({
  selector: 'app-demo-header',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './demo-header.component.html',
  styleUrl: './demo-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input() badges?: DemoBadge[];

  /**
   * Get badge CSS classes based on color
   */
  getBadgeClasses(color?: string): string {
    const baseClasses = 'px-3 py-1 rounded-full text-xs font-semibold';
    
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

