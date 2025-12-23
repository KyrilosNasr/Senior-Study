import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTableComponent } from './dynamic-table.component';
import { DynamicTableConfig } from '../../types/table-config.types';

interface TestData {
  id: number;
  name: string;
  email: string;
}

describe('DynamicTableComponent', () => {
  let component: DynamicTableComponent<TestData>;
  let fixture: ComponentFixture<DynamicTableComponent<TestData>>;

  const mockConfig: DynamicTableConfig<TestData> = {
    columns: [
      { field: 'id', header: 'ID', sortable: true },
      { field: 'name', header: 'Name', sortable: true },
      { field: 'email', header: 'Email', filterable: true }
    ],
    data: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ],
    pagination: true,
    rowsPerPage: 10
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicTableComponent<TestData>);
    component = fixture.componentInstance;
    component.config = mockConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter data on global filter', () => {
    component.globalFilterValue.set('john');
    expect(component.filteredData().length).toBe(1);
    expect(component.filteredData()[0].name).toBe('John Doe');
  });
});

