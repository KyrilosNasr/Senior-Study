import { NgIcon } from '@ng-icons/core';
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';

import { DynamicFormComponent } from '../../../shared/components/dynamic-form/dynamic-form.component';
import { DynamicModalComponent } from '../../../shared/components/dynamic-modal/dynamic-modal.component';
import { ToastComponent } from '../../../shared/components/toast/toast.component';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { DemoTabsComponent, DemoTab } from '../../../shared/components/demo-tabs/demo-tabs.component';
import { DemoTabpanelComponent } from '../../../shared/components/demo-tabs/demo-tabpanel.component';
import { DemoSectionComponent } from '../../../shared/components/demo-section/demo-section.component';
import { CodeExampleComponent } from '../../../shared/components/code-example/code-example.component';
import { ResultDisplayComponent } from '../../../shared/components/result-display/result-display.component';
import { ToastService } from '../../../shared/components/toast/toast.service';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import {
  DynamicFormConfig,
  FormSubmitResult
} from '../../../shared/types/form-field.types';
import { SelectOption } from '../../../shared/types/common.types';

@Component({
  selector: 'app-dynamic-form-demo',
  standalone: true,
  imports: [
    NgIcon,
    CommonModule,
    CardModule,
    TabsModule,
    DynamicFormComponent,
    DynamicModalComponent,
    ToastComponent,
    CodeExampleComponent,
    ResultDisplayComponent
  ],
  providers: [
    MessageService,
    ToastService
  ],
  templateUrl: './dynamic-form-demo.component.html',
  styleUrl: './dynamic-form-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormDemoComponent {
  loading = signal(false);
  formResult = signal<FormSubmitResult | null>(null);

  /**
   * Tabs configuration for demo-tabs component
   */
  readonly tabs: DemoTab[] = [
    { value: '0', label: 'User Registration' },
    { value: '1', label: 'Product Form' },
    { value: '2', label: 'Code Examples' }
  ];

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

  // Code examples for the Code Examples tab
  readonly configExampleCode = `const formConfig: DynamicFormConfig = {
  fields: [
    {
      key: 'email',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email',
      required: true,
      validators: [Validators.email]
    },
    {
      key: 'country',
      type: 'select',
      label: 'Country',
      options: [
        { label: 'United States', value: 'US' },
        { label: 'United Kingdom', value: 'UK' }
      ]
    }
  ],
  columns: { mobile: 1, tablet: 2, desktop: 3 },
  submitLabel: 'Submit',
  showCancel: true
};`;

  readonly templateExampleCode = `<app-dynamic-form
  [config]="formConfig"
  [loading]="loading"
  (formSubmit)="onFormSubmit($event)"
  (formCancel)="onFormCancel()"
/>`;
}

