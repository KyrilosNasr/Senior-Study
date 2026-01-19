import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '../../../types/table-config.types';
import { getFieldValue } from '../../../utils/table-data.util';

@Pipe({
    name: 'tableFormat',
    standalone: true,
    pure: true
})
export class TableFormatPipe implements PipeTransform {
    transform<T>(rowData: T, column: TableColumn<T>): any {
        const value = getFieldValue(rowData, column.field);

        if (column.formatter) {
            return column.formatter(value, rowData);
        }

        return value ?? '';
    }
}
