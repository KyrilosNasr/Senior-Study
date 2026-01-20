import { Injectable, effect, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';
export type AccentColor = 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'red' | 'indigo' | 'cyan' | 'amber';

interface PrimeNGThemeConfig {
  light: string;
  dark: string;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_MODE_KEY = 'theme-mode';
  private readonly ACCENT_COLOR_KEY = 'accent-color';
  private readonly THEME_LINK_ID = 'primeng-theme';

  // PrimeNG theme mappings
  private readonly primeNGThemes: Record<AccentColor, PrimeNGThemeConfig> = {
    blue: { light: 'lara-light-blue', dark: 'lara-dark-blue' },
    green: { light: 'lara-light-green', dark: 'lara-dark-green' },
    purple: { light: 'lara-light-purple', dark: 'lara-dark-purple' },
    orange: { light: 'lara-light-orange', dark: 'lara-dark-orange' },
    teal: { light: 'lara-light-teal', dark: 'lara-dark-teal' },
    pink: { light: 'lara-light-pink', dark: 'lara-dark-pink' },
    red: { light: 'lara-light-red', dark: 'lara-dark-red' },
    indigo: { light: 'lara-light-indigo', dark: 'lara-dark-indigo' },
    cyan: { light: 'lara-light-cyan', dark: 'lara-dark-cyan' },
    amber: { light: 'lara-light-amber', dark: 'lara-dark-amber' }
  };

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
    this.initializePrimeNGThemeLink();
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
   * Initialize PrimeNG theme link element in document head
   * Critical for dynamic theme switching without bundling both themes
   */
  private initializePrimeNGThemeLink(): void {
    if (typeof document === 'undefined') return;

    let themeLink = document.getElementById(this.THEME_LINK_ID) as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.id = this.THEME_LINK_ID;
      themeLink.rel = 'stylesheet';
      themeLink.type = 'text/css';

      // Insert before other stylesheets for proper cascade
      const firstStylesheet = document.querySelector('link[rel="stylesheet"]');
      if (firstStylesheet) {
        firstStylesheet.parentNode?.insertBefore(themeLink, firstStylesheet);
      } else {
        document.head.appendChild(themeLink);
      }
    }
  }

  /**
   * Apply theme with optimized transition handling
   * Prevents FOUC and ensures smooth PrimeNG component updates
   */
  private applyTheme(): void {
    if (typeof document === 'undefined') return;

    this.isTransitioning.set(true);

    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const mode = this.themeMode();
    const color = this.accentColor();

    // 1. Update PrimeNG theme dynamically
    this.loadPrimeNGTheme(mode, color);

    // 2. Apply Tailwind dark mode class
    if (mode === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    // 3. Apply accent color class
    htmlElement.classList.remove(...this.accentColorsArray.map(c => `accent-${c}`));
    htmlElement.classList.add(`accent-${color}`);

    // 4. Set data attributes for CSS variable access
    htmlElement.setAttribute('data-theme', mode);
    htmlElement.setAttribute('data-accent', color);

    // 5. Apply body background gradient
    this.applyBodyBackground(bodyElement, mode, color);

    // Reset transition flag after theme loads
    requestAnimationFrame(() => {
      setTimeout(() => this.isTransitioning.set(false), 100);
    });
  }

  /**
   * Dynamically load PrimeNG theme CSS
   * Performance optimization: Only loads the required theme
   */
  private loadPrimeNGTheme(mode: ThemeMode, color: AccentColor): void {
    const themeLink = document.getElementById(this.THEME_LINK_ID) as HTMLLinkElement;
    if (!themeLink) return;

    const themeConfig = this.primeNGThemes[color];
    const themeName = mode === 'dark' ? themeConfig.dark : themeConfig.light;
    const themePath = `node_modules/primeng/resources/themes/${themeName}/theme.css`;

    // Only update if theme actually changed (performance optimization)
    if (themeLink.href.includes(themeName)) return;

    // Preload new theme to prevent FOUC
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'style';
    preloadLink.href = themePath;

    preloadLink.onload = () => {
      themeLink.href = themePath;
      preloadLink.remove();
    };

    document.head.appendChild(preloadLink);
  }

  /**
   * Apply body background with atomic class updates
   */
  private applyBodyBackground(body: HTMLElement, mode: ThemeMode, color: AccentColor): void {
    // Remove all theme background classes efficiently
    body.className = body.className
      .split(' ')
      .filter(cls => !cls.match(/^(light|dark)-\w+$/))
      .join(' ');

    body.classList.add(`${mode}-${color}`);
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
   */
  getGradientClasses(
    direction: 'to-r' | 'to-b' | 'to-br' | 'to-bl' = 'to-br',
    intensity: 'subtle' | 'strong' = 'subtle'
  ): string {
    // In dark mode, we often want a darker base for the content area
    if (this.themeMode() === 'dark') {
      return `bg-gradient-${direction} from-gray-950 via-gray-900 to-gray-900`;
    }

    // In light mode, use subtle accent gradients
    return `bg-gradient-${direction} from-[var(--accent-color-light)]/20 to-white`;
  }

  /**
   * Utility: Get text gradient classes
   */
  getTextGradientClasses(): string {
    return `bg-gradient-to-r from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] bg-clip-text text-transparent`;
  }
}