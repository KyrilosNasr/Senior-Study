import {
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
  OnInit,
  OnDestroy,
  signal,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';

// PrimeNG Imports
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { FileUploadModule } from 'primeng/fileupload';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';

import { FormFieldConfig, FormFieldType } from '../../types/form-field.types';
import { SelectOption } from '../../types/common.types';

/**
 * Polymorphic form field renderer component
 * Renders different PrimeNG input components based on field type
 */
@Component({
  selector: 'app-form-field-renderer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    DatePickerModule,
    FileUploadModule,
    AutoCompleteModule,
    SelectModule,
    MultiSelectModule,
    CheckboxModule,
    ToggleButtonModule,
    MessageModule,
    RadioButtonModule
  ],
  template: `
    <div class="flex flex-col gap-2" [class.col-span-full]="fieldConfig.colspan === 12">
      <label
        [for]="fieldConfig.key"
        class="text-sm font-medium text-gray-700 dark:text-gray-300"
        [class.required]="fieldConfig.required"
      >
        {{ fieldConfig.label }}
        @if (fieldConfig.required) {
          <span class="text-red-500 ml-1">*</span>
        }
      </label>

      @if (fieldConfig.hint) {
        <p class="text-xs text-gray-500 dark:text-gray-400">{{ fieldConfig.hint }}</p>
      }

      <!-- Text Input -->
      @if (fieldConfig.type === 'text' || fieldConfig.type === 'email' || fieldConfig.type === 'password') {
        <input
          pInputText
          [id]="fieldConfig.key"
          [type]="getInputType()"
          [formControl]="control"
          [placeholder]="fieldConfig.placeholder || ''"
          [disabled]="fieldConfig.disabled || false"
          class="w-full"
        />
      }

      <!-- Number Input -->
      @if (fieldConfig.type === 'number') {
        <p-inputNumber
          [id]="fieldConfig.key"
          [formControl]="control"
          [placeholder]="fieldConfig.placeholder || ''"
          [disabled]="fieldConfig.disabled || false"
          [min]="fieldConfig.min"
          [max]="fieldConfig.max"
          [step]="fieldConfig.step || 1"
          [showButtons]="true"
          styleClass="w-full"
        />
      }

      <!-- Textarea -->
      @if (fieldConfig.type === 'textarea') {
        <textarea
          pInputTextarea
          [id]="fieldConfig.key"
          [formControl]="control"
          [placeholder]="fieldConfig.placeholder || ''"
          [disabled]="fieldConfig.disabled || false"
          [rows]="fieldConfig.rows || 3"
          class="w-full"
        ></textarea>
      }

      <!-- Select -->
      @if (fieldConfig.type === 'select') {
        <p-select
          [id]="fieldConfig.key"
          [formControl]="control"
          [options]="fieldConfig.options || []"
          optionLabel="label"
          optionValue="value"
          [placeholder]="fieldConfig.placeholder || 'Select an option'"
          [disabled]="fieldConfig.disabled || false"
          styleClass="w-full"
        />
      }

      <!-- MultiSelect -->
      @if (fieldConfig.type === 'multiselect') {
        <p-multiSelect
          [id]="fieldConfig.key"
          [formControl]="control"
          [options]="fieldConfig.options || []"
          optionLabel="label"
          optionValue="value"
          [placeholder]="fieldConfig.placeholder || 'Select options'"
          [disabled]="fieldConfig.disabled || false"
          styleClass="w-full"
        />
      }

      <!-- Checkbox -->
      @if (fieldConfig.type === 'checkbox') {
        <div class="flex items-center gap-2">
          <p-checkbox
            [id]="fieldConfig.key"
            [formControl]="control"
            [binary]="true"
            [disabled]="fieldConfig.disabled || false"
          />
          <label [for]="fieldConfig.key" class="text-sm text-gray-600 dark:text-gray-400">
            {{ fieldConfig.placeholder || fieldConfig.label }}
          </label>
        </div>
      }

      <!-- Toggle -->
      @if (fieldConfig.type === 'toggle') {
        <div class="flex items-center gap-2">
          <p-toggleButton
            [id]="fieldConfig.key"
            [formControl]="control"
            [disabled]="fieldConfig.disabled || false"
          />
          <label [for]="fieldConfig.key" class="text-sm text-gray-600 dark:text-gray-400">
            {{ fieldConfig.placeholder || fieldConfig.label }}
          </label>
        </div>
      }

      <!-- Radio Buttons -->
      @if (fieldConfig.type === 'radio') {
        <div class="flex flex-col gap-2">
          @for (option of fieldConfig.options; track option.value) {
            <div class="flex items-center gap-2">
              <p-radioButton
                [id]="fieldConfig.key + '-' + option.value"
                [name]="fieldConfig.key"
                [value]="option.value"
                [formControl]="control"
                [disabled]="(fieldConfig.disabled || false) || (option.disabled || false)"
              />
              <label
                [for]="fieldConfig.key + '-' + option.value"
                class="text-sm text-gray-600 dark:text-gray-400"
              >
                {{ option.label }}
              </label>
            </div>
          }
        </div>
      }

      <!-- Date Picker -->
      @if (fieldConfig.type === 'date') {
        <p-datepicker
          [id]="fieldConfig.key"
          [formControl]="control"
          [dateFormat]="fieldConfig.dateFormat || 'dd/mm/yy'"
          [showTime]="fieldConfig.showTime || false"
          [minDate]="fieldConfig.minDate"
          [maxDate]="fieldConfig.maxDate"
          [placeholder]="fieldConfig.placeholder || 'Select date'"
          [disabled]="fieldConfig.disabled || false"
          styleClass="w-full"
        />
      }

      <!-- Time Picker -->
      @if (fieldConfig.type === 'time') {
        <p-datepicker
          [id]="fieldConfig.key"
          [formControl]="control"
          [timeOnly]="true"
          [dateFormat]="fieldConfig.dateFormat || 'HH:mm'"
          [placeholder]="fieldConfig.placeholder || 'Select time'"
          [disabled]="fieldConfig.disabled || false"
          styleClass="w-full"
        />
      }

      <!-- File Upload -->
      @if (fieldConfig.type === 'file') {
        <p-fileUpload
          [id]="fieldConfig.key"
          mode="basic"
          [accept]="fieldConfig.accept"
          [maxFileSize]="fieldConfig.maxFileSize || 1000000"
          [disabled]="fieldConfig.disabled || false"
          (onSelect)="onFileSelect($event)"
          styleClass="w-full"
        />
      }

      <!-- AutoComplete -->
      @if (fieldConfig.type === 'autocomplete') {
        <p-autoComplete
          [id]="fieldConfig.key"
          [formControl]="control"
          [suggestions]="autocompleteSuggestions()"
          (completeMethod)="onAutocompleteSearch($event)"
          [placeholder]="fieldConfig.placeholder || 'Start typing...'"
          [disabled]="fieldConfig.disabled || false"
          optionLabel="label"
          [dropdown]="true"
          styleClass="w-full"
        />
      }

      <!-- Validation Messages -->
      @if (control.invalid && (control.dirty || control.touched)) {
        @for (error of getValidationErrors(); track error) {
          <p-message severity="error" [text]="error"></p-message>
        }
      }
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldRendererComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldRendererComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  @Input({ required: true }) fieldConfig!: FormFieldConfig;
  @Input() control!: FormControl;

  private readonly destroyRef = inject(DestroyRef);
  autocompleteSuggestions = signal<SelectOption[]>([]);

  ngOnInit(): void {
    if (!this.control) {
      this.control = new FormControl(
        this.fieldConfig.defaultValue,
        this.fieldConfig.validators || []
      );
    }

    // Subscribe to control value changes
    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.onChange(this.control.value);
      });
  }

  ngOnDestroy(): void {
    // Cleanup handled by takeUntilDestroyed
  }

  getInputType(): string {
    if (this.fieldConfig.type === 'email') return 'email';
    if (this.fieldConfig.type === 'password') return 'password';
    return 'text';
  }

  onFileSelect(event: { files: File[] }): void {
    if (event.files && event.files.length > 0) {
      this.control.setValue(event.files[0]);
      this.onChange(event.files[0]);
    }
  }

  onAutocompleteSearch(event: { query: string }): void {
    if (this.fieldConfig.autocompleteSource) {
      this.fieldConfig
        .autocompleteSource(event.query)
        .then(suggestions => {
          this.autocompleteSuggestions.set(suggestions);
        })
        .catch(() => {
          this.autocompleteSuggestions.set([]);
        });
    }
  }

  getValidationErrors(): string[] {
    if (!this.control.errors) return [];

    const errors: string[] = [];
    const errorMessages: Record<string, string> = {
      required: `${this.fieldConfig.label} is required`,
      email: 'Please enter a valid email address',
      min: `Minimum value is ${this.fieldConfig.min}`,
      max: `Maximum value is ${this.fieldConfig.max}`,
      minlength: 'Value is too short',
      maxlength: 'Value is too long',
      pattern: 'Invalid format'
    };

    Object.keys(this.control.errors).forEach(key => {
      const message = errorMessages[key] || `Invalid ${this.fieldConfig.label}`;
      errors.push(message);
    });

    return errors;
  }

  // ControlValueAccessor implementation
  private onChange = (value: unknown): void => {};
  private onTouched = (): void => {};

  writeValue(value: unknown): void {
    if (this.control && value !== this.control.value) {
      this.control.setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.control) {
      if (isDisabled) {
        this.control.disable({ emitEvent: false });
      } else {
        this.control.enable({ emitEvent: false });
      }
    }
  }
}

