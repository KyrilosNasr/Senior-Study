import { Severity } from './common.types';

/**
 * Modal action button configuration
 */
export interface ModalAction {
  label: string;
  icon?: string;
  severity?: Severity;
  handler: () => void | Promise<void>;
  loading?: boolean;
  disabled?: boolean;
}

/**
 * Dynamic modal configuration
 */
export interface DynamicModalConfig {
  title?: string;
  message?: string;
  // Content projection
  contentTemplate?: string;
  // Header/Footer templates
  headerTemplate?: string;
  footerTemplate?: string;
  // Actions
  actions?: ModalAction[];
  // Size
  width?: string;
  height?: string;
  // Responsive
  fullScreen?: boolean; // Full screen on mobile
  // Behavior
  closable?: boolean;
  dismissableMask?: boolean;
  closeOnEscape?: boolean;
  // Modal type
  type?: 'info' | 'confirm' | 'form' | 'custom';
  // Loading state
  loading?: boolean;
}

/**
 * Modal result
 */
export interface ModalResult<T = unknown> {
  action?: string;
  data?: T;
  cancelled?: boolean;
}

