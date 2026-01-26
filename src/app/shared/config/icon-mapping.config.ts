/**
 * Icon Mapping Configuration
 * 
 * Centralized icon mappings for all navigation items across the application.
 * Uses FontAwesome icons for consistent visual representation.
 */

export interface IconMapping {
  [key: string]: string;
}

/**
 * Icon mappings for all navigation items
 * Maps topic labels to their corresponding FontAwesome icon classes
 */
export const ICON_MAP: IconMapping = {
  // SOLID Principles
  'Single Responsibility': 'pi pi-cube',
  'Open/Closed': 'pi pi-door-open',
  'Liskov Substitution': 'pi pi-exchange-alt',
  'Interface Segregation': 'pi pi-layer-group',
  'Dependency Inversion': 'pi pi-arrows-alt-v',

  // OOP Concepts
  'Encapsulation': 'pi pi-lock',
  'Inheritance': 'pi pi-sitemap',
  'Polymorphism': 'pi pi-shapes',
  'Abstraction': 'pi pi-eye-slash',

  // RxJS Patterns - Foundational Operators
  'Part 1: Creation Operators': 'pi pi-plus-circle',
  'Part 2: Transformation Operators': 'pi pi-random',
  'Part 3: Filtering Operators': 'pi pi-filter',
  'Part 4: Combination Operators': 'pi pi-code-branch',
  'Part 5: Error Handling': 'pi pi-exclamation-triangle',
  'Part 6: Utility Operators': 'pi pi-tools',
  'Part 7: Multicasting Operators': 'pi pi-broadcast-tower',

  // RxJS Patterns - Advanced
  'Custom Operators': 'pi pi-puzzle-piece',
  'Higher-Order Observables': 'pi pi-layer-group',
  'Subject Patterns': 'pi pi-share',
  'Memory Leak Prevention': 'pi pi-shield',
  'Backpressure': 'pi pi-compress-arrows',
  'Route Guards': 'pi pi-lock',
  'RxJS Reactive Forms': 'pi pi-edit',
  'WebSockets': 'pi pi-plug',
  'Advanced Caching': 'pi pi-database',
  'Race Conditions': 'pi pi-flag-checkered',

  // TypeScript Topics
  'Advanced Types': 'pi pi-code',
  'Type Guards': 'pi pi-shield',
  'Generics': 'pi pi-cog',
  'Utility Types': 'pi pi-wrench',
  'Decorators': 'pi pi-star',
  'TypeScript 5.x': 'pi pi-bolt',
  'Function Types': 'pi pi-code',
  'Module Augmentation': 'pi pi-objects-column',

  // Navigation/Switch Topic
  'SOLID Principles': 'pi pi-cube',
  'OOP Concepts': 'pi pi-object-group',
  'RxJS Patterns': 'pi pi-stream',
  'Advanced TypeScript': 'pi pi-code',
  'Angular': 'pi pi-database',

  // Angular Components
  'Dynamic Form': 'pi pi-edit',
  'Dynamic Table': 'pi pi-table',
  'Dynamic Modal': 'pi pi-window-maximize',

  // Angular Topics
  'Angular Signals': 'pi pi-signal',
  'Reactive Forms': 'pi pi-edit',
  'ControlValueAccessor': 'pi pi-plug',
  'Multi-Step Form': 'pi pi-list-ol',
  'Modern Control Flow': 'pi pi-code-branch',

  // Default fallback
  'default': 'pi pi-circle'
};

/**
 * Get icon class for a given label
 * @param label - The navigation item label
 * @returns FontAwesome icon class string
 */
export function getIconForLabel(label: string): string {
  return ICON_MAP[label] || ICON_MAP['default'];
}
