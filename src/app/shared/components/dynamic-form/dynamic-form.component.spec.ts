import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormConfig } from '../../types/form-field.types';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  const mockConfig: DynamicFormConfig = {
    fields: [
      {
        key: 'name',
        type: 'text',
        label: 'Name',
        required: true
      },
      {
        key: 'email',
        type: 'email',
        label: 'Email',
        required: true
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.config = mockConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build form from config', () => {
    expect(component.form()).toBeTruthy();
    expect(component.form()?.get('name')).toBeTruthy();
    expect(component.form()?.get('email')).toBeTruthy();
  });

  it('should emit formSubmit on valid submission', () => {
    spyOn(component.formSubmit, 'emit');
    const form = component.form();
    if (form) {
      form.patchValue({ name: 'Test User', email: 'test@example.com' });
      component.onSubmit();
      expect(component.formSubmit.emit).toHaveBeenCalled();
    }
  });
});

