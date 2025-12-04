import { Component, ChangeDetectionStrategy, inject, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, AccentColor } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {
  private readonly themeService = inject(ThemeService);
  private readonly elementRef = inject(ElementRef);

  readonly themeMode = this.themeService.themeMode;
  readonly accentColor = this.themeService.accentColor;
  readonly accentColors = this.themeService.accentColors;
  readonly colorPickerOpen = signal(false);

  /**
   * Toggle between light and dark mode
   */
  toggleMode(): void {
    this.themeService.toggleTheme();
  }

  /**
   * Set accent color
   */
  selectAccentColor(color: AccentColor): void {
    this.themeService.setAccentColor(color);
    this.colorPickerOpen.set(false);
  }

  /**
   * Toggle color picker
   */
  toggleColorPicker(): void {
    this.colorPickerOpen.update(v => !v);
  }

  /**
   * Get color display name
   */
  getColorName(color: AccentColor): string {
    return color.charAt(0).toUpperCase() + color.slice(1);
  }

  /**
   * Get color classes for swatch
   */
  getColorClasses(color: AccentColor): string {
    const colorMap: Record<AccentColor, string> = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      teal: 'bg-teal-500',
      pink: 'bg-pink-500',
      red: 'bg-red-500',
      indigo: 'bg-indigo-500',
      cyan: 'bg-cyan-500',
      amber: 'bg-amber-500'
    };
    return colorMap[color] || 'bg-blue-500';
  }

  /**
   * Check if color is selected
   */
  isSelected(color: AccentColor): boolean {
    return this.accentColor() === color;
  }

  /**
   * Close color picker when clicking outside
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.colorPickerOpen() && !this.elementRef.nativeElement.contains(event.target)) {
      this.colorPickerOpen.set(false);
    }
  }
}

