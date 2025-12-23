import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicModalComponent } from './dynamic-modal.component';
import { DynamicModalService } from './dynamic-modal.service';

describe('DynamicModalComponent', () => {
  let component: DynamicModalComponent;
  let fixture: ComponentFixture<DynamicModalComponent>;
  let modalService: DynamicModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicModalComponent],
      providers: [DynamicModalService]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicModalComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(DynamicModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show modal when service opens it', async () => {
    await modalService.open({
      title: 'Test',
      message: 'Test message'
    });
    fixture.detectChanges();
    expect(component.visible()).toBe(true);
  });
});

