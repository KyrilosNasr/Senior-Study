import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'light' | 'dark';
export type AccentColor = 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'red' | 'indigo' | 'cyan' | 'amber';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_MODE_KEY = 'theme-mode';
  private readonly ACCENT_COLOR_KEY = 'accent-color';

  // Available accent colors (defined before signals to avoid initialization order issues)
  private readonly accentColorsArray: AccentColor[] = [
    'blue',
    'green',
    'purple',
    'orange',
    'teal',
    'pink',
    'red',
    'indigo',
    'cyan',
    'amber'
  ];

  // Reactive signals
  readonly themeMode = signal<ThemeMode>(this.getInitialThemeMode());
  readonly accentColor = signal<AccentColor>(this.getInitialAccentColor());

  // Public getter for accent colors
  get accentColors(): AccentColor[] {
    return this.accentColorsArray;
  }

  constructor() {
    // Apply initial theme
    this.applyTheme();

    // Watch for changes and apply them
    effect(() => {
      const mode = this.themeMode();
      const color = this.accentColor();
      this.applyTheme();
      this.persistTheme(mode, color);
    });
  }

  /**
   * Toggle between light and dark mode
   */
  toggleTheme(): void {
    const currentMode = this.themeMode();
    this.themeMode.set(currentMode === 'light' ? 'dark' : 'light');
  }

  /**
   * Set theme mode explicitly
   */
  setThemeMode(mode: ThemeMode): void {
    this.themeMode.set(mode);
  }

  /**
   * Set accent color
   */
  setAccentColor(color: AccentColor): void {
    this.accentColor.set(color);
  }

  /**
   * Get initial theme mode from localStorage or system preference
   */
  private getInitialThemeMode(): ThemeMode {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const stored = localStorage.getItem(this.THEME_MODE_KEY) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  /**
   * Get initial accent color from localStorage
   */
  private getInitialAccentColor(): AccentColor {
    if (typeof window === 'undefined') {
      return 'blue';
    }

    const stored = localStorage.getItem(this.ACCENT_COLOR_KEY) as AccentColor | null;
    if (stored && this.accentColorsArray.includes(stored)) {
      return stored;
    }

    return 'blue';
  }

  /**
   * Apply theme classes to document
   */
  private applyTheme(): void {
    if (typeof document === 'undefined') {
      return;
    }

    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const mode = this.themeMode();
    const color = this.accentColor();

    // Remove existing theme classes
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.remove(...this.accentColorsArray.map(c => `accent-${c}`));

    // Add current theme classes
    htmlElement.classList.add(mode);
    htmlElement.classList.add(`accent-${color}`);

    // Set data attributes for CSS variable access
    htmlElement.setAttribute('data-theme', mode);
    htmlElement.setAttribute('data-accent', color);

    // Apply background gradient to body
    // Remove all existing theme background classes
    bodyElement.className = bodyElement.className
      .split(' ')
      .filter(cls => !cls.startsWith('light-') && !cls.startsWith('dark-'))
      .join(' ')
      .trim();
    
    // Add new theme background class
    bodyElement.classList.add(`${mode}-${color}`);
    bodyElement.setAttribute('data-theme-bg', `${mode}-${color}`);
  }

  /**
   * Persist theme preferences to localStorage
   */
  private persistTheme(mode: ThemeMode, color: AccentColor): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(this.THEME_MODE_KEY, mode);
      localStorage.setItem(this.ACCENT_COLOR_KEY, color);
    } catch (error) {
      console.warn('Failed to persist theme preferences:', error);
    }
  }

  /**
   * Get gradient classes for a given accent color
   * @param direction - Gradient direction
   * @param intensity - Gradient intensity: 'subtle' (for backgrounds) or 'strong' (for accents)
   */
  getGradientClasses(direction: 'to-r' | 'to-b' | 'to-br' | 'to-bl' = 'to-br', intensity: 'subtle' | 'strong' = 'subtle'): string {
    const color = this.accentColor();
    const mode = this.themeMode();
    
    // Define gradient color mappings with different intensities
    // Light mode: lighter backgrounds (50-100 range), Dark mode: darker backgrounds (800-900 range)
    const gradients: Record<AccentColor, { 
      light: { subtle: string; strong: string }; 
      dark: { subtle: string; strong: string } 
    }> = {
      blue: { 
        light: { subtle: 'from-blue-50 to-blue-100', strong: 'from-blue-200 to-blue-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-blue-900 to-blue-800' }
      },
      green: { 
        light: { subtle: 'from-green-50 to-green-100', strong: 'from-green-200 to-green-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-green-900 to-green-800' }
      },
      purple: { 
        light: { subtle: 'from-purple-50 to-purple-100', strong: 'from-purple-200 to-purple-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-purple-900 to-purple-800' }
      },
      orange: { 
        light: { subtle: 'from-orange-50 to-orange-100', strong: 'from-orange-200 to-orange-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-orange-900 to-orange-800' }
      },
      teal: { 
        light: { subtle: 'from-teal-50 to-teal-100', strong: 'from-teal-200 to-teal-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-teal-900 to-teal-800' }
      },
      pink: { 
        light: { subtle: 'from-pink-50 to-pink-100', strong: 'from-pink-200 to-pink-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-pink-900 to-pink-800' }
      },
      red: { 
        light: { subtle: 'from-red-50 to-red-100', strong: 'from-red-200 to-red-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-red-900 to-red-800' }
      },
      indigo: { 
        light: { subtle: 'from-indigo-50 to-indigo-100', strong: 'from-indigo-200 to-indigo-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-indigo-900 to-indigo-800' }
      },
      cyan: { 
        light: { subtle: 'from-cyan-50 to-cyan-100', strong: 'from-cyan-200 to-cyan-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-cyan-900 to-cyan-800' }
      },
      amber: { 
        light: { subtle: 'from-amber-50 to-amber-100', strong: 'from-amber-200 to-amber-300' },
        dark: { subtle: 'from-gray-900 to-gray-800', strong: 'from-amber-900 to-amber-800' }
      }
    };

    const gradient = gradients[color];
    const colorSet = mode === 'dark' ? gradient.dark : gradient.light;
    const colors = intensity === 'subtle' ? colorSet.subtle : colorSet.strong;
    
    return `bg-gradient-${direction} ${colors}`;
  }

  /**
   * Get text gradient classes for accent color
   */
  getTextGradientClasses(): string {
    const color = this.accentColor();
    const mode = this.themeMode();
    
    // Text gradients: darker in light mode, lighter in dark mode
    const gradients: Record<AccentColor, { light: string; dark: string }> = {
      blue: { light: 'from-blue-700 to-blue-800', dark: 'from-blue-300 to-blue-200' },
      green: { light: 'from-green-700 to-green-800', dark: 'from-green-300 to-green-200' },
      purple: { light: 'from-purple-700 to-purple-800', dark: 'from-purple-300 to-purple-200' },
      orange: { light: 'from-orange-700 to-orange-800', dark: 'from-orange-300 to-orange-200' },
      teal: { light: 'from-teal-700 to-teal-800', dark: 'from-teal-300 to-teal-200' },
      pink: { light: 'from-pink-700 to-pink-800', dark: 'from-pink-300 to-pink-200' },
      red: { light: 'from-red-700 to-red-800', dark: 'from-red-300 to-red-200' },
      indigo: { light: 'from-indigo-700 to-indigo-800', dark: 'from-indigo-300 to-indigo-200' },
      cyan: { light: 'from-cyan-700 to-cyan-800', dark: 'from-cyan-300 to-cyan-200' },
      amber: { light: 'from-amber-700 to-amber-800', dark: 'from-amber-300 to-amber-200' }
    };

    const gradient = gradients[color];
    const colors = mode === 'dark' ? gradient.dark : gradient.light;
    
    return `bg-gradient-to-r ${colors} bg-clip-text text-transparent`;
  }
}

