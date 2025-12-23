import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeExampleComponent } from './code-example.component';

describe('CodeExampleComponent', () => {
  let component: CodeExampleComponent;
  let fixture: ComponentFixture<CodeExampleComponent>;

  const mockCode = 'const example = "test";';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeExampleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CodeExampleComponent);
    component = fixture.componentInstance;
    component.code = mockCode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display code content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(mockCode);
  });

  it('should display title when provided', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Title');
  });

  it('should not display title when not provided', () => {
    component.title = undefined;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h3');
    expect(titleElement).toBeNull();
  });
});

