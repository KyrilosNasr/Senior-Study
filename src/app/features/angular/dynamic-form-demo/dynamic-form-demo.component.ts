import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from '../../../shared/components/dynamic-form/dynamic-form.component';
import {
  DynamicFormConfig,
  FormSubmitResult
} from '../../../shared/types/form-field.types';
import { SelectOption } from '../../../shared/types/common.types';

@Component({
  selector: 'app-dynamic-form-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    DynamicFormComponent
  ],
  templateUrl: './dynamic-form-demo.component.html',
  styleUrl: './dynamic-form-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormDemoComponent {
  loading = signal(false);
  formResult = signal<FormSubmitResult | null>(null);

  // User Registration Form Config
  userFormConfig: DynamicFormConfig = {
    fields: [
      {
        key: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name',
        required: true,
        validators: [Validators.minLength(2)]
      },
      {
        key: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        required: true
      },
      {
        key: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email',
        required: true,
        validators: [Validators.email]
      },
      {
        key: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
        validators: [Validators.minLength(8)]
      },
      {
        key: 'phone',
        type: 'number',
        label: 'Phone Number',
        placeholder: 'Enter your phone number',
        min: 0
      },
      {
        key: 'dateOfBirth',
        type: 'date',
        label: 'Date of Birth',
        dateFormat: 'dd/mm/yy',
        maxDate: new Date()
      },
      {
        key: 'country',
        type: 'select',
        label: 'Country',
        placeholder: 'Select your country',
        options: [
          { label: 'United States', value: 'US' },
          { label: 'United Kingdom', value: 'UK' },
          { label: 'Canada', value: 'CA' },
          { label: 'Australia', value: 'AU' }
        ] as SelectOption[]
      },
      {
        key: 'newsletter',
        type: 'checkbox',
        label: 'Subscribe to Newsletter',
        defaultValue: false
      }
    ],
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    },
    submitLabel: 'Register',
    showCancel: true,
    cancelLabel: 'Cancel'
  };

  // Product Form Config
  productFormConfig: DynamicFormConfig = {
    fields: [
      {
        key: 'name',
        type: 'text',
        label: 'Product Name',
        placeholder: 'Enter product name',
        required: true,
        colspan: 12
      },
      {
        key: 'description',
        type: 'textarea',
        label: 'Description',
        placeholder: 'Enter product description',
        rows: 4,
        colspan: 12
      },
      {
        key: 'price',
        type: 'number',
        label: 'Price',
        placeholder: 'Enter price',
        required: true,
        min: 0,
        step: 0.01
      },
      {
        key: 'quantity',
        type: 'number',
        label: 'Quantity',
        placeholder: 'Enter quantity',
        required: true,
        min: 0
      },
      {
        key: 'category',
        type: 'select',
        label: 'Category',
        placeholder: 'Select category',
        required: true,
        options: [
          { label: 'Electronics', value: 'electronics' },
          { label: 'Clothing', value: 'clothing' },
          { label: 'Food', value: 'food' },
          { label: 'Books', value: 'books' }
        ] as SelectOption[]
      },
      {
        key: 'tags',
        type: 'multiselect',
        label: 'Tags',
        placeholder: 'Select tags',
        options: [
          { label: 'New', value: 'new' },
          { label: 'Sale', value: 'sale' },
          { label: 'Featured', value: 'featured' },
          { label: 'Popular', value: 'popular' }
        ] as SelectOption[]
      },
      {
        key: 'inStock',
        type: 'toggle',
        label: 'In Stock',
        defaultValue: true
      },
      {
        key: 'image',
        type: 'file',
        label: 'Product Image',
        accept: 'image/*',
        maxFileSize: 5000000
      }
    ],
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    },
    submitLabel: 'Save Product',
    showCancel: true
  };

  onFormSubmit(result: FormSubmitResult): void {
    this.loading.set(true);
    this.formResult.set(result);

    // Simulate API call
    setTimeout(() => {
      this.loading.set(false);
      if (result.valid) {
        // Show success message or navigate
      }
    }, 1000);
  }

  onFormCancel(): void {
    this.formResult.set(null);
  }
}

