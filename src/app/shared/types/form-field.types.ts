import { ValidatorFn } from '@angular/forms';
import { SelectOption, ValidationError } from './common.types';

/**
 * Supported form field types using PrimeNG components
 */
export type FormFieldType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'textarea'
  | 'select'
  | 'multiselect'
  | 'checkbox'
  | 'radio'
  | 'toggle'
  | 'date'
  | 'time'
  | 'file'
  | 'autocomplete';

/**
 * Configuration for a single form field
 */
export interface FormFieldConfig {
  key: string;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  validators?: ValidatorFn[];
  defaultValue?: unknown;
  disabled?: boolean;
  required?: boolean;
  hint?: string;
  // Select/MultiSelect/AutoComplete options
  options?: SelectOption[];
  // AutoComplete specific
  autocompleteSource?: (query: string) => Promise<SelectOption[]>;
  // File upload specific
  accept?: string;
  maxFileSize?: number;
  // Date/Time specific
  dateFormat?: string;
  showTime?: boolean;
  minDate?: Date;
  maxDate?: Date;
  // Number specific
  min?: number;
  max?: number;
  step?: number;
  // Textarea specific
  rows?: number;
  // Layout
  colspan?: number; // For responsive grid (1-12)
  // Custom template key for content projection
  templateKey?: string;
}

/**
 * Configuration for the entire dynamic form
 */
export interface DynamicFormConfig<T = Record<string, unknown>> {
  fields: FormFieldConfig[];
  initialValue?: Partial<T>;
  layout?: 'grid' | 'stack';
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  submitLabel?: string;
  cancelLabel?: string;
  showCancel?: boolean;
}

/**
 * Form submission result
 */
export interface FormSubmitResult<T = Record<string, unknown>> {
  value: T;
  valid: boolean;
  errors: ValidationError[];
}

