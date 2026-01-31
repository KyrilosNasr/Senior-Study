import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';

import { DynamicFormComponent } from '../../../shared/components/dynamic-form/dynamic-form.component';
import { DynamicFormConfig } from '../../../shared/types/form-field.types';

interface StepConfig {
  label: string;
  fields: DynamicFormConfig['fields'];
}

/**
 * Multi-step Form Demo Component
 * Demonstrates wizard-style multi-step forms using dynamic form component
 */
@Component({
  selector: 'app-multi-step-form-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    StepsModule,
    DynamicFormComponent
  ],
  templateUrl: './multi-step-form-demo.component.html',
  styleUrl: './multi-step-form-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiStepFormDemoComponent {
  // Expose Math to template for percentage calculation
  Math = Math;

  currentStep = signal(0);
  formData = signal<Record<string, unknown>>({});
  loading = signal(false);

  // Step configurations
  steps: StepConfig[] = [
    {
      label: 'Personal Information',
      fields: [
        {
          key: 'firstName',
          type: 'text',
          label: 'First Name',
          required: true,
          placeholder: 'Enter your first name'
        },
        {
          key: 'lastName',
          type: 'text',
          label: 'Last Name',
          required: true,
          placeholder: 'Enter your last name'
        },
        {
          key: 'email',
          type: 'email',
          label: 'Email',
          required: true,
          placeholder: 'Enter your email'
        },
        {
          key: 'phone',
          type: 'text',
          label: 'Phone Number',
          placeholder: 'Enter your phone number'
        }
      ]
    },
    {
      label: 'Address Information',
      fields: [
        {
          key: 'street',
          type: 'text',
          label: 'Street Address',
          required: true,
          placeholder: 'Enter street address'
        },
        {
          key: 'city',
          type: 'text',
          label: 'City',
          required: true,
          placeholder: 'Enter city'
        },
        {
          key: 'state',
          type: 'text',
          label: 'State/Province',
          required: true,
          placeholder: 'Enter state or province'
        },
        {
          key: 'zipCode',
          type: 'text',
          label: 'ZIP/Postal Code',
          required: true,
          placeholder: 'Enter ZIP or postal code'
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
        }
      ]
    },
    {
      label: 'Additional Details',
      fields: [
        {
          key: 'bio',
          type: 'textarea',
          label: 'Biography',
          placeholder: 'Tell us about yourself',
          rows: 4
        },
        {
          key: 'newsletter',
          type: 'checkbox',
          label: 'Subscribe to Newsletter',
          placeholder: 'I want to receive newsletter updates'
        },
        {
          key: 'terms',
          type: 'checkbox',
          label: 'Terms and Conditions',
          required: true,
          placeholder: 'I agree to the terms and conditions'
        }
      ]
    }
  ];

  // Computed step items for PrimeNG Steps
  stepItems = computed(() => {
    return this.steps.map((step, index) => ({
      label: step.label,
      command: () => {
        if (index <= this.currentStep()) {
          this.currentStep.set(index);
        }
      }
    }));
  });

  // Active index for Steps component (must be a number, not signal)
  get activeIndex(): number {
    return this.currentStep();
  }

  set activeIndex(value: number) {
    this.currentStep.set(value);
  }

  // Current step form config
  currentFormConfig = computed<DynamicFormConfig>(() => {
    const step = this.steps[this.currentStep()];
    return {
      fields: step.fields,
      submitLabel: this.isLastStep() ? 'Submit' : 'Next',
      showCancel: this.currentStep() > 0,
      cancelLabel: 'Previous'
    };
  });

  // Check if current step is the last one
  isLastStep = computed(() => {
    return this.currentStep() === this.steps.length - 1;
  });

  // Check if current step is the first one
  isFirstStep = computed(() => {
    return this.currentStep() === 0;
  });

  /**
   * Handle form submission for current step
   */
  onStepSubmit(result: unknown): void {
    const stepData = result as Record<string, unknown>;
    this.formData.update(data => ({ ...data, ...stepData }));

    if (this.isLastStep()) {
      // Final submission
      console.log('Final form data:', this.formData());
      alert('Form submitted successfully!');
      this.resetForm();
    } else {
      // Move to next step
      this.currentStep.update(step => step + 1);
    }
  }

  /**
   * Handle form cancel (go to previous step)
   */
  onStepCancel(): void {
    if (!this.isFirstStep()) {
      this.currentStep.update(step => step - 1);
    }
  }

  /**
   * Go to specific step
   */
  goToStep(stepIndex: number): void {
    if (stepIndex >= 0 && stepIndex < this.steps.length) {
      this.currentStep.set(stepIndex);
    }
  }

  /**
   * Reset form
   */
  resetForm(): void {
    this.currentStep.set(0);
    this.formData.set({});
  }

  /**
   * Get step completion status
   */
  isStepComplete(stepIndex: number): boolean {
    return stepIndex < this.currentStep();
  }

  /**
   * Check if form data has any values
   */
  hasFormData(): boolean {
    const data = this.formData();
    return Object.keys(data).length > 0;
  }
}

