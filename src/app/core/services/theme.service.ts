import { Injectable, effect, signal } from '@angular/core';
import { updatePrimaryPalette } from '@primeuix/themes';

export type ThemeMode = 'light' | 'dark';
export type AccentColor = 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'red' | 'indigo' | 'cyan' | 'amber';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_MODE_KEY = 'theme-mode';
  private readonly ACCENT_COLOR_KEY = 'accent-color';

  private readonly accentColorsArray: AccentColor[] = [
    'blue', 'green', 'purple', 'orange', 'teal',
    'pink', 'red', 'indigo', 'cyan', 'amber'
  ];

  // Reactive signals
  readonly themeMode = signal<ThemeMode>(this.getInitialThemeMode());
  readonly accentColor = signal<AccentColor>(this.getInitialAccentColor());
  readonly isTransitioning = signal(false);

  get accentColors(): AccentColor[] {
    return this.accentColorsArray;
  }

  constructor() {
    this.applyTheme();

    // Reactive theme application with transition handling
    effect(() => {
      const mode = this.themeMode();
      const color = this.accentColor();
      this.applyTheme();
      this.persistTheme(mode, color);
    });
  }

  toggleTheme(): void {
    this.themeMode.update(mode => mode === 'light' ? 'dark' : 'light');
  }

  setThemeMode(mode: ThemeMode): void {
    this.themeMode.set(mode);
  }

  setAccentColor(color: AccentColor): void {
    this.accentColor.set(color);
  }

  /**
   * Apply theme with optimized transition handling
   */
  private applyTheme(): void {
    if (typeof document === 'undefined') return;

    this.isTransitioning.set(true);

    const htmlElement = document.documentElement;
    const mode = this.themeMode();
    const color = this.accentColor();

    // 1. Update PrimeNG Primary Palette dynamically using v20 API
    this.updatePrimeNGPalette(color);

    // 2. Apply Tailwind & PrimeNG dark mode class
    // Both now sync on the '.dark' class
    if (mode === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    // 3. Set data attributes for additional CSS targeting if needed
    htmlElement.setAttribute('data-theme', mode);
    htmlElement.setAttribute('data-accent', color);

    // Reset transition flag after theme loads
    requestAnimationFrame(() => {
      setTimeout(() => this.isTransitioning.set(false), 100);
    });
  }

  /**
   * Dynamically update PrimeNG primary palette
   */
  private updatePrimeNGPalette(color: AccentColor): void {
    updatePrimaryPalette({
      50: `{${color}.50}`,
      100: `{${color}.100}`,
      200: `{${color}.200}`,
      300: `{${color}.300}`,
      400: `{${color}.400}`,
      500: `{${color}.500}`,
      600: `{${color}.600}`,
      700: `{${color}.700}`,
      800: `{${color}.800}`,
      900: `{${color}.900}`,
      950: `{${color}.950}`
    });
  }

  private getInitialThemeMode(): ThemeMode {
    if (typeof window === 'undefined') return 'light';

    const stored = localStorage.getItem(this.THEME_MODE_KEY) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') return stored;

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private getInitialAccentColor(): AccentColor {
    if (typeof window === 'undefined') return 'blue';

    const stored = localStorage.getItem(this.ACCENT_COLOR_KEY) as AccentColor | null;
    return stored && this.accentColorsArray.includes(stored) ? stored : 'blue';
  }

  private persistTheme(mode: ThemeMode, color: AccentColor): void {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(this.THEME_MODE_KEY, mode);
      localStorage.setItem(this.ACCENT_COLOR_KEY, color);
    } catch (error) {
      console.error('Theme persistence failed:', error);
    }
  }

  /**
   * Utility: Get gradient classes for components
   * Now using PrimeNG semantic tokens which are available in Tailwind
   */
  getGradientClasses(
    direction: 'to-r' | 'to-b' | 'to-br' | 'to-bl' = 'to-br',
    intensity: 'subtle' | 'strong' = 'subtle'
  ): string {
    if (this.themeMode() === 'dark') {
      return `bg-gradient-${direction} from-surface-950 via-surface-900 to-surface-900`;
    }

    return `bg-gradient-${direction} from-primary-500/10 to-white`;
  }

  /**
   * Utility: Get text gradient classes
   */
  getTextGradientClasses(): string {
    return `bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent`;
  }
}