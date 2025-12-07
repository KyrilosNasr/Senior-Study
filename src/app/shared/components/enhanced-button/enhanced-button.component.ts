import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Icon mapping from PrimeNG icons to FontAwesome icons
 */
const ICON_MAP: Record<string, string> = {
  'pi pi-plus': 'fa-plus-circle',
  'pi pi-check': 'fa-check-circle',
  'pi pi-exclamation-triangle': 'fa-exclamation-triangle',
  'pi pi-arrow-down': 'fa-arrow-down',
  'pi pi-arrow-up': 'fa-arrow-up',
  'pi pi-play': 'fa-play',
  'pi pi-stop': 'fa-stop',
  'pi pi-refresh': 'fa-sync-alt',
  'pi pi-info-circle': 'fa-info-circle',
  'pi pi-clock': 'fa-clock',
  'pi pi-shield': 'fa-shield-alt',
  'pi pi-cog': 'fa-cog',
  'pi pi-bolt': 'fa-bolt',
  'pi pi-times-circle': 'fa-times-circle',
  'pi pi-check-circle': 'fa-check-circle',
  'pi pi-database': 'fa-database',
  'pi pi-filter': 'fa-filter',
  'pi pi-list': 'fa-list',
  'pi pi-link': 'fa-link',
  'pi pi-unlink': 'fa-unlink',
  'pi pi-download': 'fa-download',
  'pi pi-code': 'fa-code',
  'pi pi-save': 'fa-save',
  'pi pi-upload': 'fa-upload',
  'pi pi-search': 'fa-search',
  'pi pi-ban': 'fa-ban',
  'pi pi-wrench': 'fa-wrench',
  'pi pi-puzzle': 'fa-puzzle-piece',
  'pi pi-sitemap': 'fa-sitemap',
  'pi pi-globe': 'fa-globe',
  'pi pi-star': 'fa-star',
  'pi pi-lock': 'fa-lock',
  'pi pi-function': 'fa-function',
  'pi pi-send': 'fa-paper-plane',
  'pi pi-trash': 'fa-trash'
};

@Component({
  selector: 'app-enhanced-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enhanced-button.component.html',
  styleUrl: './enhanced-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnhancedButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() icon?: string;
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Output() buttonClick = new EventEmitter<void>();

  /**
   * Get the FontAwesome icon class from PrimeNG icon or direct FontAwesome class
   */
  getIconClass(): string {
    if (!this.icon) return '';
    
    // If it's already a FontAwesome class, return it
    if (this.icon.startsWith('fa')) {
      return this.icon;
    }
    
    // Map PrimeNG icon to FontAwesome
    const faIcon = ICON_MAP[this.icon] || 'fa-circle';
    return `fas ${faIcon}`;
  }

  /**
   * Get size classes based on size input
   */
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

  /**
   * Get icon size classes based on button size
   */
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

  /**
   * Handle button click
   */
  onClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }
}

