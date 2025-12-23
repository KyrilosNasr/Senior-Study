/**
 * Type definitions for PrimeNG component references used in dynamic-table component
 * These interfaces provide type safety for ViewChild references and component interactions
 */

/**
 * Interface for PrimeNG Table component reference
 * Provides type safety for table ViewChild and method calls
 */
export interface PrimeNGTable {
  /**
   * Clear all filters from the table
   */
  clear(): void;
  
  /**
   * Current selection state (array of selected rows)
   */
  selection?: unknown[];
  
  /**
   * Expanded row keys (object with row IDs as keys)
   */
  expandedRowKeys?: Record<string | number, boolean>;
}

/**
 * Interface for PrimeNG Menu component reference
 * Provides type safety for menu ViewChild and method calls
 */
export interface PrimeNGMenu {
  /**
   * Toggle menu visibility
   * @param event - Mouse event that triggered the toggle
   */
  toggle(event: MouseEvent): void;
  
  /**
   * Show the menu
   * @param event - Mouse event that triggered the show
   */
  show?(event: MouseEvent): void;
  
  /**
   * Hide the menu
   */
  hide?(): void;
}

/**
 * Interface for PrimeNG Column Toggle Menu component reference
 * Extends PrimeNGMenu with column-specific functionality
 */
export interface PrimeNGColumnToggleMenu extends PrimeNGMenu {
  /**
   * Toggle menu visibility (inherited from PrimeNGMenu)
   */
  toggle(event: MouseEvent): void;
}

