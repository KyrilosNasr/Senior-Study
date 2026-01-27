import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-enhanced-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enhanced-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnhancedButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() icon?: string;
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() buttonClick = new EventEmitter<void>();

  getIconClass(): string {
    if (!this.icon) return '';
    return this.icon;
  }

  getSizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'px-6 py-3 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-8 py-4 text-base sm:text-lg';
    }
  }

  getIconSizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'text-base';
      case 'lg':
        return 'text-xl';
      default:
        return 'text-lg sm:text-xl';
    }
  }

  onClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}

