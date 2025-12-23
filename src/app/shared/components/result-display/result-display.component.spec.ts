import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultDisplayComponent } from './result-display.component';

describe('ResultDisplayComponent', () => {
  let component: ResultDisplayComponent;
  let fixture: ComponentFixture<ResultDisplayComponent>;

  const mockResult = { id: 1, name: 'Test', status: 'success' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultDisplayComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultDisplayComponent);
    component = fixture.componentInstance;
    component.result = mockResult;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display result as JSON', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test');
    expect(compiled.textContent).toContain('1');
  });

  it('should use default label when not provided', () => {
    expect(component.label).toBe('Result');
  });

  it('should use custom label when provided', () => {
    component.label = 'Custom Label';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Custom Label:');
  });

  it('should apply success styling when success is true', () => {
    component.success = true;
    fixture.detectChanges();

    expect(component.backgroundClasses()).toContain('bg-green-50');
    expect(component.textClasses()).toContain('text-green-900');
  });

  it('should apply error styling when success is false', () => {
    component.success = false;
    fixture.detectChanges();

    expect(component.backgroundClasses()).toContain('bg-red-50');
    expect(component.textClasses()).toContain('text-red-900');
  });

  it('should apply default styling when success is undefined', () => {
    component.success = undefined;
    fixture.detectChanges();

    expect(component.backgroundClasses()).toContain('bg-blue-50');
    expect(component.textClasses()).toContain('text-blue-900');
  });
});

