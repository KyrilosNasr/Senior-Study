import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableModule } from 'primeng/table';

import { TableColumn } from '../../../types/table-config.types';
import { getFieldValue, fieldToString } from '../../../utils/table-data.util';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCellEditorComponent<T = unknown> {
  @Input({ required: true }) column!: TableColumn<T>;
  @Input({ required: true }) rowData!: T;
  @Input() cellEditingMode = false;
  @Input() rowEditingMode = false;
  @Input() isRowEditing = false;
  @Input() editingValue?: unknown;
  @Output() valueChange = new EventEmitter<{ field: string; value: unknown }>();
  
  getFieldValue = getFieldValue;
  fieldToString = fieldToString;
  
  getDisplayValue(): unknown {
    if (this.rowEditingMode && this.isRowEditing && this.editingValue !== undefined) {
      return this.editingValue;
    }
    return getFieldValue(this.rowData, this.column.field);
  }
  
  onValueChange(value: unknown): void {
    const fieldStr = fieldToString(this.column.field);
    this.valueChange.emit({ field: fieldStr, value });
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onValueChange(target.value);
  }

  get cellValue(): unknown {
    return getFieldValue(this.rowData, this.column.field);
  }

  set cellValue(value: unknown) {
    const fieldStr = fieldToString(this.column.field);
    const rowRecord = this.rowData as Record<string, unknown>;
    rowRecord[fieldStr] = value;
  }
}

