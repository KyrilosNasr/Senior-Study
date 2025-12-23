import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, map, catchError, of } from 'rxjs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';

import { DynamicFormComponent } from '../../../shared/components/dynamic-form/dynamic-form.component';
import { DynamicFormConfig } from '../../../shared/types/form-field.types';

/**
 * Reactive Forms Demo Component
 * Demonstrates advanced reactive forms patterns with RxJS
 */
@Component({
  selector: 'app-reactive-forms-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    DynamicFormComponent
  ],
  templateUrl: './reactive-forms-demo.component.html',
  styleUrl: './reactive-forms-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormsDemoComponent {
  private readonly fb = inject(FormBuilder);

  // Basic reactive form
  basicForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]]
  });

  // Form with debounced validation
  searchForm = this.fb.group({
    search: ['', [Validators.required]]
  });

  // Form with async validation
  asyncForm = this.fb.group({
    username: ['', [Validators.required], [this.usernameValidator.bind(this)]]
  });

  // Form with valueChanges
  valueChangesForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    fullName: [{ value: '', disabled: true }]
  });

  // Computed form state
  formState = computed(() => ({
    valid: this.basicForm.valid,
    invalid: this.basicForm.invalid,
    touched: this.basicForm.touched,
    dirty: this.basicForm.dirty,
    errors: this.basicForm.errors
  }));

  // Search results signal
  searchResults = signal<string[]>([]);
  searchLoading = signal(false);

  constructor() {
    this.setupDebouncedSearch();
    this.setupValueChanges();
  }

  /**
   * Setup debounced search with RxJS
   */
  private setupDebouncedSearch(): void {
    const searchControl = this.searchForm.get('search');
    if (searchControl) {
      searchControl.valueChanges
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap(query => {
            if (!query || query.length < 2) {
              return of([]);
            }
            this.searchLoading.set(true);
            // Simulate API call
            return this.simulateSearch(query).pipe(
              map(results => {
                this.searchLoading.set(false);
                return results;
              }),
              catchError(() => {
                this.searchLoading.set(false);
                return of([]);
              })
            );
          })
        )
        .subscribe(results => {
          this.searchResults.set(results);
        });
    }
  }

  /**
   * Setup valueChanges to compute full name
   */
  private setupValueChanges(): void {
    this.valueChangesForm.valueChanges
      .pipe(debounceTime(100))
      .subscribe(value => {
        const fullName = `${value.firstName || ''} ${value.lastName || ''}`.trim();
        this.valueChangesForm.patchValue({ fullName }, { emitEvent: false });
      });
  }

  /**
   * Simulate async username validation
   */
  private usernameValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        const username = control.value;
        const takenUsernames = ['admin', 'user', 'test'];
        if (takenUsernames.includes(username?.toLowerCase())) {
          resolve({ usernameTaken: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  /**
   * Simulate search API call
   */
  private simulateSearch(query: string) {
    const allItems = [
      'Angular',
      'React',
      'Vue',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express',
      'NestJS'
    ];
    return of(
      allItems.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  /**
   * Submit basic form
   */
  onSubmitBasicForm(): void {
    if (this.basicForm.valid) {
      console.log('Form submitted:', this.basicForm.value);
      alert('Form submitted successfully!');
    } else {
      this.basicForm.markAllAsTouched();
    }
  }

  /**
   * Get form control error message
   */
  getErrorMessage(controlName: string): string {
    const control = this.basicForm.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `${controlName} is required`;
      }
      if (control.errors['email']) {
        return 'Invalid email format';
      }
      if (control.errors['minlength']) {
        return `${controlName} must be at least ${control.errors['minlength'].requiredLength} characters`;
      }
    }
    return '';
  }

  /**
   * Get async validation error
   */
  getAsyncError(controlName: string): string {
    const control = this.asyncForm.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors['usernameTaken']) {
        return 'Username is already taken';
      }
    }
    return '';
  }

  /**
   * Dynamic form configuration
   */
  dynamicFormConfig: DynamicFormConfig<{
    name: string;
    email: string;
    age: number;
    country: string;
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
        placeholder: 'Enter your age'
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
          { label: 'Germany', value: 'DE' }
        ]
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

