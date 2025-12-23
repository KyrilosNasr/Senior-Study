import { Injectable, Type } from '@angular/core';
import { FormFieldType } from '../../types/form-field.types';

/**
 * Registry service for mapping form field types to their renderer components
 * Uses polymorphism pattern to support extensibility
 */
@Injectable({
  providedIn: 'root'
})
export class FormFieldRegistryService {
  private readonly fieldTypeMap = new Map<FormFieldType, string>();

  constructor() {
    this.initializeDefaultTypes();
  }

  /**
   * Initialize default field type mappings
   */
  private initializeDefaultTypes(): void {
    const defaultTypes: FormFieldType[] = [
      'text',
      'number',
      'email',
      'password',
      'textarea',
      'select',
      'multiselect',
      'checkbox',
      'radio',
      'toggle',
      'date',
      'time',
      'file',
      'autocomplete'
    ];

    defaultTypes.forEach(type => {
      this.fieldTypeMap.set(type, type);
    });
  }

  /**
   * Check if a field type is registered
   */
  isRegistered(type: FormFieldType): boolean {
    return this.fieldTypeMap.has(type);
  }

  /**
   * Get the component identifier for a field type
   */
  getComponentKey(type: FormFieldType): string | undefined {
    return this.fieldTypeMap.get(type);
  }

  /**
   * Register a custom field type (for extensibility)
   */
  register(type: FormFieldType, componentKey: string): void {
    this.fieldTypeMap.set(type, componentKey);
  }
}

