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
  'Single Responsibility': 'faSolidBox',
  'Open/Closed': 'faSolidUnlock',
  'Liskov Substitution': 'faSolidArrowRightArrowLeft',
  'Interface Segregation': 'faSolidAlignJustify',
  'Dependency Inversion': 'faSolidArrowsUpDown',

  // OOP Concepts
  'Encapsulation': 'faSolidLock',
  'Inheritance': 'faSolidSitemap',
  'Polymorphism': 'faSolidTableColumns',
  'Abstraction': 'faSolidEyeSlash',

  // RxJS Patterns - Foundational Operators
  'Part 1: Creation Operators': 'faSolidCirclePlus',
  'Part 2: Transformation Operators': 'faSolidArrowRightArrowLeft',
  'Part 3: Filtering Operators': 'faSolidFilter',
  'Part 4: Combination Operators': 'faSolidWandMagicSparkles',
  'Part 5: Error Handling': 'faSolidTriangleExclamation',
  'Part 6: Utility Operators': 'faSolidWrench',
  'Part 7: Multicasting Operators': 'faSolidBullhorn',

  // RxJS Patterns - Advanced
  'Custom Operators': 'faSolidGear',
  'Higher-Order Observables': 'faSolidBars',
  'Subject Patterns': 'faSolidBars',
  'Memory Leak Prevention': 'faSolidShieldHalved',
  'Backpressure': 'faSolidGauge',
  'Route Guards': 'faSolidLock',
  'RxJS Reactive Forms': 'faSolidPencil',
  'WebSockets': 'faSolidPlug',
  'Advanced Caching': 'faSolidDatabase',
  'Race Conditions': 'faSolidBolt',

  // TypeScript Topics
  'Advanced Types': 'faSolidCode',
  'Type Guards': 'faSolidShieldHalved',
  'Generics': 'faSolidGear',
  'Utility Types': 'faSolidWrench',
  'Decorators': 'faSolidStar',
  'TypeScript 5.x': 'faSolidBolt',
  'Function Types': 'faSolidCode',
  'Module Augmentation': 'faSolidTableColumns',

  // Navigation/Switch Topic
  'SOLID Principles': 'faSolidCube',
  'OOP Concepts': 'faSolidObjectGroup',
  'RxJS Patterns': 'faSolidBarsStaggered',
  'Advanced TypeScript': 'faSolidCode',
  'Angular': 'faSolidDatabase',

  // Angular Components
  'Dynamic Form': 'faSolidPenToSquare',
  'Dynamic Table': 'faSolidTable',
  'Dynamic Modal': 'faSolidWindowMaximize',

  // Angular Topics
  'Angular Signals': 'faSolidSignal',
  'Reactive Forms': 'faSolidPenToSquare',
  'ControlValueAccessor': 'faSolidPlug',
  'Multi-Step Form': 'faSolidListOl',
  'Modern Control Flow': 'faSolidShareNodes',

  // Default fallback
  'default': 'faSolidCircle'
};

/**
 * Get icon class for a given label
 * @param label - The navigation item label
 * @returns FontAwesome icon class string
 */
export function getIconForLabel(label: string): string {
  return ICON_MAP[label] || ICON_MAP['default'];
}
