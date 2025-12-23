import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';

import { TableColumn } from '../../../types/table-config.types';
import { getFieldValue, fieldToString } from '../../../utils/table-data.util';

/**
 * Component for rendering table cell content with support for editing modes
 * Handles both cell editing (PrimeNG p-cellEditor) and row editing modes
 * Supports multiple editor types: text, number, date, select, boolean
 */
@Component({
  selector: 'app-table-cell-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    DatePickerModule,
    SelectModule,
    ToggleButtonModule,
    TableModule
  ],
  templateUrl: './table-cell-editor.component.html',
  styleUrl: './table-cell-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCellEditorComponent<T = unknown> {
  /**
   * Column configuration for this cell
   */
  @Input({ required: true }) column!: TableColumn<T>;
  
  /**
   * Row data object
   */
  @Input({ required: true }) rowData!: T;
  
  /**
   * Whether cell editing mode is enabled
   */
  @Input() cellEditingMode = false;
  
  /**
   * Whether row editing mode is enabled
   */
  @Input() rowEditingMode = false;
  
  /**
   * Whether the row is currently being edited
   */
  @Input() isRowEditing = false;
  
  /**
   * Current editing value for row editing mode
   */
  @Input() editingValue?: unknown;
  
  /**
   * Event emitted when cell value changes in row editing mode
   */
  @Output() valueChange = new EventEmitter<{ field: string; value: unknown }>();
  
  /**
   * Get the field value from row data
   */
  getFieldValue = getFieldValue;
  
  /**
   * Convert field to string
   */
  fieldToString = fieldToString;
  
  /**
   * Get the current display value
   * Uses editing value if in row editing mode, otherwise uses field value
   */
  getDisplayValue(): unknown {
    if (this.rowEditingMode && this.isRowEditing && this.editingValue !== undefined) {
      return this.editingValue;
    }
    return getFieldValue(this.rowData, this.column.field);
  }
  
  /**
   * Handle value change in row editing mode
   */
  onValueChange(value: unknown): void {
    const fieldStr = fieldToString(this.column.field);
    this.valueChange.emit({ field: fieldStr, value });
  }
  
  /**
   * Handle input event for text inputs
   */
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onValueChange(target.value);
  }

  /**
   * Get value for cell editing mode (two-way binding)
   */
  get cellValue(): unknown {
    return getFieldValue(this.rowData, this.column.field);
  }

  /**
   * Set value for cell editing mode (two-way binding)
   */
  set cellValue(value: unknown) {
    const fieldStr = fieldToString(this.column.field);
    const rowRecord = this.rowData as Record<string, unknown>;
    rowRecord[fieldStr] = value;
  }
}

