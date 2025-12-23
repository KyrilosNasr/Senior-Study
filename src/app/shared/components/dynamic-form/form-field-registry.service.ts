import { Injectable, Type } from '@angular/core';
import { FormFieldType } from '../../types/form-field.types';

@Injectable({
  providedIn: 'root'
})
export class FormFieldRegistryService {
  private readonly fieldTypeMap = new Map<FormFieldType, string>();

  constructor() {
    this.initializeDefaultTypes();
  }

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

  isRegistered(type: FormFieldType): boolean {
    return this.fieldTypeMap.has(type);
  }

  getComponentKey(type: FormFieldType): string | undefined {
    return this.fieldTypeMap.get(type);
  }

  register(type: FormFieldType, componentKey: string): void {
    this.fieldTypeMap.set(type, componentKey);
  }
}

