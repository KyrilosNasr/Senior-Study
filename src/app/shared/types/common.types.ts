/**
 * Common utility types used across dynamic components
 */

export type Severity = 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger';

export type Size = 'sm' | 'md' | 'lg';

export interface SelectOption<T = string | number> {
  label: string;
  value: T;
  disabled?: boolean;
  icon?: string;
}

export interface ValidationError {
  key: string;
  message: string;
}

export type SortOrder = 1 | -1 | 0;

export interface SortMeta {
  field: string;
  order: SortOrder;
}

export interface DemoBadge {
  label: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'teal' | 'indigo' | 'yellow';
}

