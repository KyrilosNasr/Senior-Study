import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

/**
 * Demo Section Component
 * 
 * Reusable card section component for demo pages with optional title and description.
 * Provides consistent styling for content sections within tabs or standalone.
 */
@Component({
  selector: 'app-demo-section',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './demo-section.component.html',
  styleUrl: './demo-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSectionComponent {
  @Input() title?: string;
  @Input() description?: string;
  @Input() spacing: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Get spacing classes based on spacing input
   */
  getSpacingClasses(): string {
    switch (this.spacing) {
      case 'sm':
        return 'space-y-2';
      case 'md':
        return 'space-y-4';
      case 'lg':
        return 'space-y-6';
      default:
        return 'space-y-4';
    }
  }
}

