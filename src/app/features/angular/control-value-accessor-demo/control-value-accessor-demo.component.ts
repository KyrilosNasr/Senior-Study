import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';

import { DynamicFormComponent } from '../../../shared/components/dynamic-form/dynamic-form.component';
import { DynamicFormConfig } from '../../../shared/types/form-field.types';

/**
 * ControlValueAccessor Demo Component
 * Demonstrates custom form controls using ControlValueAccessor
 * The FormFieldRendererComponent already implements ControlValueAccessor
 */
@Component({
  selector: 'app-control-value-accessor-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    DynamicFormComponent
  ],
  templateUrl: './control-value-accessor-demo.component.html',
  styleUrl: './control-value-accessor-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlValueAccessorDemoComponent {
  private readonly fb = inject(FormBuilder);

  // Form using custom ControlValueAccessor components
  customForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.required, Validators.min(18)]],
    country: ['', [Validators.required]]
  });

  // Form values signal
  formValues = signal<Record<string, unknown>>({});

  constructor() {
    // Subscribe to form value changes
    this.customForm.valueChanges.subscribe(values => {
      this.formValues.set(values);
    });
  }

  /**
   * Submit form
   */
  onSubmit(): void {
    if (this.customForm.valid) {
      console.log('Form submitted:', this.customForm.value);
      alert('Form submitted successfully!');
    } else {
      this.customForm.markAllAsTouched();
    }
  }

  /**
   * Dynamic form configuration using ControlValueAccessor internally
   */
  dynamicFormConfig: DynamicFormConfig<{
    name: string;
    email: string;
    age: number;
    country: string;
    bio: string;
  }> = {
    fields: [
      {
        key: 'name',
        type: 'text',
        label: 'Name',
        required: true,
        placeholder: 'Enter your name'
      },
      {
        key: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        placeholder: 'Enter your email'
      },
      {
        key: 'age',
        type: 'number',
        label: 'Age',
        required: true,
        placeholder: 'Enter your age',
        min: 18,
        max: 100
      },
      {
        key: 'country',
        type: 'select',
        label: 'Country',
        required: true,
        options: [
          { label: 'United States', value: 'US' },
          { label: 'Canada', value: 'CA' },
          { label: 'United Kingdom', value: 'UK' },
          { label: 'Germany', value: 'DE' },
          { label: 'France', value: 'FR' }
        ]
      },
      {
        key: 'bio',
        type: 'textarea',
        label: 'Biography',
        placeholder: 'Tell us about yourself',
        rows: 4
      }
    ],
    submitLabel: 'Submit',
    showCancel: true
  };

  /**
   * Handle dynamic form submission
   */
  onDynamicFormSubmit(result: unknown): void {
    console.log('Dynamic form submitted:', result);
    alert('Dynamic form submitted successfully!');
  }
}

