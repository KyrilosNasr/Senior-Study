import { Component, Input, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

/**
 * Result Display Component
 * 
 * Reusable component for displaying result/output data with success/error states.
 * Automatically formats data as JSON and applies appropriate styling based on success state.
 */
@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './result-display.component.html',
  styleUrl: './result-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultDisplayComponent {
  @Input({ required: true }) result!: unknown;
  @Input() label = 'Result';
  @Input() success?: boolean;

  /**
   * Get background color classes based on success state
   */
  backgroundClasses = computed(() => {
    if (this.success === true) {
      return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
    }
    if (this.success === false) {
      return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
    }
    return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
  });

  /**
   * Get text color classes based on success state
   */
  textClasses = computed(() => {
    if (this.success === true) {
      return 'text-green-900 dark:text-green-100';
    }
    if (this.success === false) {
      return 'text-red-900 dark:text-red-100';
    }
    return 'text-blue-900 dark:text-blue-100';
  });
}

