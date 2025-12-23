import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  signal,
  computed,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import {
  DynamicFormConfig,
  FormFieldConfig,
  FormSubmitResult
} from '../../types/form-field.types';
import { FormFieldRendererComponent } from './form-field-renderer.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    FormFieldRendererComponent
  ],
  templateUrl: './dynamic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent<T = Record<string, unknown>> implements OnInit {
  @Input({ required: true }) config!: DynamicFormConfig<T>;
  @Input() loading = signal(false);
  @Output() formSubmit = new EventEmitter<FormSubmitResult<T>>();
  @Output() formCancel = new EventEmitter<void>();
  @Output() formValueChange = new EventEmitter<Partial<T>>();

  private readonly fb = inject(FormBuilder);

  form = signal<FormGroup | null>(null);
  gridClasses = computed(() => this.getGridClasses());

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    const formControls: Record<string, unknown> = {};

    this.config.fields.forEach(field => {
      const validators = field.validators || [];
      if (field.required) {
        validators.push(Validators.required);
      }

      const defaultValue =
        this.config.initialValue?.[field.key as keyof T] ??
        field.defaultValue ??
        this.getDefaultValueForType(field.type);

      formControls[field.key] = [defaultValue, validators];
    });

    const formGroup = this.fb.group(formControls);
    this.form.set(formGroup);

    formGroup.valueChanges.subscribe(value => {
      this.formValueChange.emit(value as Partial<T>);
    });
  }

  private getDefaultValueForType(type: FormFieldConfig['type']): unknown {
    switch (type) {
      case 'checkbox':
      case 'toggle':
        return false;
      case 'number':
        return null;
      case 'multiselect':
        return [];
      default:
        return '';
    }
  }

  private getGridClasses(): string {
    const columns = this.config.columns || {};
    const mobile = columns.mobile || 1;
    const tablet = columns.tablet || 2;
    const desktop = columns.desktop || 3;

    return `grid grid-cols-${mobile} sm:grid-cols-${tablet} md:grid-cols-${desktop} gap-4`;
  }

  getFieldControl(key: string): FormControl {
    const form = this.form();
    return form?.get(key) as FormControl;
  }

  trackByKey(index: number, field: FormFieldConfig): string {
    return field.key;
  }

  onSubmit(): void {
    const form = this.form();
    if (!form) return;

    if (form.valid) {
      const result: FormSubmitResult<T> = {
        value: form.value as T,
        valid: true,
        errors: []
      };
      this.formSubmit.emit(result);
    } else {
      Object.keys(form.controls).forEach(key => {
        form.get(key)?.markAsTouched();
      });

      const errors = this.collectValidationErrors();
      const result: FormSubmitResult<T> = {
        value: form.value as T,
        valid: false,
        errors
      };
      this.formSubmit.emit(result);
    }
  }

  private collectValidationErrors(): Array<{ key: string; message: string }> {
    const form = this.form();
    if (!form) return [];

    const errors: Array<{ key: string; message: string }> = [];

    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      if (control && control.errors) {
        const fieldConfig = this.config.fields.find(f => f.key === key);
        const label = fieldConfig?.label || key;

        Object.keys(control.errors).forEach(errorKey => {
          let message = `Invalid ${label}`;
          if (errorKey === 'required') {
            message = `${label} is required`;
          } else if (errorKey === 'email') {
            message = 'Please enter a valid email address';
          }

          errors.push({ key, message });
        });
      }
    });

    return errors;
  }

  onCancel(): void {
    this.formCancel.emit();
  }

  reset(): void {
    const form = this.form();
    if (form) {
      form.reset();
      this.buildForm();
    }
  }

  getValue(): Partial<T> {
    const form = this.form();
    return form ? (form.value as Partial<T>) : {};
  }

  isValid(): boolean {
    const form = this.form();
    return form ? form.valid : false;
  }
}

