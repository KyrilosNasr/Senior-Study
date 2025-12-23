import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoHeaderComponent } from './demo-header.component';
import { DemoBadge } from '../../types/common.types';

describe('DemoHeaderComponent', () => {
  let component: DemoHeaderComponent;
  let fixture: ComponentFixture<DemoHeaderComponent>;

  const mockBadges: DemoBadge[] = [
    { label: 'Feature 1', icon: 'pi pi-check', color: 'blue' },
    { label: 'Feature 2', icon: 'pi pi-star', color: 'green' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoHeaderComponent);
    component = fixture.componentInstance;
    component.title = 'Test Title';
    component.description = 'Test Description';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Test Title');
    expect(compiled.textContent).toContain('Test Description');
  });

  it('should display badges when provided', () => {
    component.badges = mockBadges;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Feature 1');
    expect(compiled.textContent).toContain('Feature 2');
  });

  it('should not display badges section when badges are not provided', () => {
    component.badges = undefined;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const badgesContainer = compiled.querySelector('.flex.flex-wrap.gap-2');
    expect(badgesContainer).toBeNull();
  });

  it('should apply correct badge classes for different colors', () => {
    component.badges = [
      { label: 'Blue', color: 'blue' },
      { label: 'Green', color: 'green' },
      { label: 'Purple', color: 'purple' }
    ];
    fixture.detectChanges();

    expect(component.getBadgeClasses('blue')).toContain('bg-blue-100');
    expect(component.getBadgeClasses('green')).toContain('bg-green-100');
    expect(component.getBadgeClasses('purple')).toContain('bg-purple-100');
  });

  it('should use default color when badge color is not specified', () => {
    expect(component.getBadgeClasses(undefined)).toContain('bg-gray-100');
  });
});

