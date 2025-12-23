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
  'Single Responsibility': 'fas fa-cube',
  'Open/Closed': 'fas fa-door-open',
  'Liskov Substitution': 'fas fa-exchange-alt',
  'Interface Segregation': 'fas fa-layer-group',
  'Dependency Inversion': 'fas fa-arrows-alt-v',
  
  // OOP Concepts
  'Encapsulation': 'fas fa-lock',
  'Inheritance': 'fas fa-sitemap',
  'Polymorphism': 'fas fa-shapes',
  'Abstraction': 'fas fa-eye-slash',
  
  // RxJS Patterns - Foundational Operators
  'Part 1: Creation Operators': 'fas fa-plus-circle',
  'Part 2: Transformation Operators': 'fas fa-random',
  'Part 3: Filtering Operators': 'fas fa-filter',
  'Part 4: Combination Operators': 'fas fa-code-branch',
  'Part 5: Error Handling': 'fas fa-exclamation-triangle',
  'Part 6: Utility Operators': 'fas fa-tools',
  'Part 7: Multicasting Operators': 'fas fa-broadcast-tower',
  
  // RxJS Patterns - Advanced
  'Custom Operators': 'fas fa-puzzle-piece',
  'Higher-Order Observables': 'fas fa-layer-group',
  'Subject Patterns': 'fas fa-share-alt',
  'Memory Leak Prevention': 'fas fa-shield-alt',
  'Backpressure': 'fas fa-compress-arrows-alt',
  'Route Guards': 'fas fa-lock',
  'RxJS Reactive Forms': 'fas fa-edit',
  'WebSockets': 'fas fa-plug',
  'Advanced Caching': 'fas fa-database',
  'Race Conditions': 'fas fa-flag-checkered',
  
  // TypeScript Topics
  'Advanced Types': 'fas fa-code',
  'Type Guards': 'fas fa-shield-alt',
  'Generics': 'fas fa-cog',
  'Utility Types': 'fas fa-wrench',
  'Decorators': 'fas fa-star',
  'TypeScript 5.x': 'fas fa-bolt',
  'Function Types': 'fas fa-function',
  'Module Augmentation': 'fas fa-puzzle-piece',
  
  // Navigation/Switch Topic
  'SOLID Principles': 'fas fa-cube',
  'OOP Concepts': 'fas fa-object-group',
  'RxJS Patterns': 'fas fa-stream',
  'Advanced TypeScript': 'fas fa-code',
  'Angular': 'fas fa-angular',
  
  // Angular Components
  'Dynamic Form': 'fas fa-edit',
  'Dynamic Table': 'fas fa-table',
  'Dynamic Modal': 'fas fa-window-maximize',
  
  // Angular Topics
  'Angular Signals': 'fas fa-signal',
  'Reactive Forms': 'fas fa-edit',
  'ControlValueAccessor': 'fas fa-plug',
  'Multi-Step Form': 'fas fa-list-ol',
  'Modern Control Flow': 'fas fa-code-branch',
  
  // Default fallback
  'default': 'fas fa-circle'
};

/**
 * Get icon class for a given label
 * @param label - The navigation item label
 * @returns FontAwesome icon class string
 */
export function getIconForLabel(label: string): string {
  return ICON_MAP[label] || ICON_MAP['default'];
}
