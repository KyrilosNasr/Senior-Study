/**
 * Icon mapping utility for converting PrimeNG icons to FontAwesome icons
 * Pure function utility - no side effects, easily testable
 */

/**
 * Icon mapping configuration
 * Maps PrimeNG icon classes to FontAwesome icon classes
 */
const PRIMENG_TO_FONTAWESOME_MAP: Record<string, string> = {
  'pi pi-ellipsis-v': 'fa-ellipsis-v',
  'pi pi-ellipsis-h': 'fa-ellipsis-h',
  'pi pi-eye': 'fa-eye',
  'pi pi-pencil': 'fa-pencil-alt',
  'pi pi-copy': 'fa-copy',
  'pi pi-check-circle': 'fa-check-circle',
  'pi pi-times-circle': 'fa-times-circle',
  'pi pi-trash': 'fa-trash',
  'pi pi-plus': 'fa-plus',
  'pi pi-minus': 'fa-minus',
  'pi pi-search': 'fa-search',
  'pi pi-filter': 'fa-filter',
  'pi pi-filter-slash': 'fa-filter-circle-xmark',
  'pi pi-download': 'fa-download',
  'pi pi-upload': 'fa-upload',
  'pi pi-save': 'fa-save',
  'pi pi-times': 'fa-times',
  'pi pi-check': 'fa-check',
  'pi pi-check-square': 'fa-square-check',
  'pi pi-list': 'fa-list',
  'pi pi-info-circle': 'fa-info-circle',
  'pi pi-exclamation-triangle': 'fa-exclamation-triangle',
  'pi pi-chevron-down': 'fa-chevron-down',
  'pi pi-chevron-right': 'fa-chevron-right',
  'pi pi-chevron-up': 'fa-chevron-up',
  'pi pi-chevron-left': 'fa-chevron-left'
};

/**
 * Default icon to use when no icon is provided
 */
const DEFAULT_ICON = 'fa-ellipsis-v';

/**
 * FontAwesome style prefixes that are valid
 */
const VALID_FA_PREFIXES = ['fas ', 'far ', 'fab '];

/**
 * Converts a PrimeNG icon class to a FontAwesome icon class
 * 
 * @param primeIcon - PrimeNG icon class (e.g., 'pi pi-eye') or FontAwesome icon class
 * @returns FontAwesome icon class with 'fas' prefix (e.g., 'fas fa-eye')
 * 
 * @example
 * ```typescript
 * getFontAwesomeIcon('pi pi-eye') // Returns 'fas fa-eye'
 * getFontAwesomeIcon('fa-eye') // Returns 'fas fa-eye'
 * getFontAwesomeIcon('fas fa-eye') // Returns 'fas fa-eye'
 * getFontAwesomeIcon() // Returns 'fas fa-ellipsis-v'
 * ```
 */
export function getFontAwesomeIcon(primeIcon?: string): string {
  // Return default icon if no icon provided
  if (!primeIcon) {
    return `fas ${DEFAULT_ICON}`;
  }
  
  // If already FontAwesome format, validate and return
  if (primeIcon.startsWith('fa')) {
    // Check if it already has a valid prefix (fas, far, fab)
    const hasValidPrefix = VALID_FA_PREFIXES.some(prefix => primeIcon.startsWith(prefix));
    
    if (hasValidPrefix) {
      return primeIcon;
    }
    
    // Add 'fas' prefix if missing
    return `fas ${primeIcon}`;
  }
  
  // Map PrimeNG icon to FontAwesome
  const faIcon = PRIMENG_TO_FONTAWESOME_MAP[primeIcon] || DEFAULT_ICON;
  return `fas ${faIcon}`;
}

