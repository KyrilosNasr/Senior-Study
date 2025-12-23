import { Injectable } from '@angular/core';
import { DynamicTableConfig, TableColumn } from '../types/table-config.types';
import { getFieldValue } from '../utils/table-data.util';

/**
 * Service for exporting table data to various formats (CSV, XLSX, PDF)
 * Handles data transformation, formatting, and file generation
 */
@Injectable()
export class TableExportService {
  /**
   * Export table data to CSV format
   * 
   * @param data - Array of row data to export
   * @param columns - Table column configurations
   * @param fileName - Name of the exported file (without extension)
   * 
   * @example
   * ```typescript
   * const data = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
   * const columns = [{ field: 'id', header: 'ID' }, { field: 'name', header: 'Name' }];
   * exportToCSV(data, columns, 'users');
   * ```
   */
  exportToCSV<T>(data: T[], columns: TableColumn<T>[], fileName: string = 'export'): void {
    // Filter columns that are exportable (default: all columns are exportable)
    const exportableColumns = columns.filter(col => col.exportable !== false);
    
    // Extract headers
    const headers = exportableColumns.map(col => col.header);
    
    // Transform data rows
    const rows = data.map(row =>
      exportableColumns.map(col => {
        const value = getFieldValue(row, col.field);
        
        // Use custom export formatter if provided
        if (col.exportFormatter) {
          return col.exportFormatter(value, row);
        }
        
        // Default: convert to string, handle null/undefined
        return String(value || '');
      })
    );
    
    // Generate CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => this.escapeCSVValue(cell)).join(','))
    ].join('\n');
    
    // Create and download file
    this.downloadFile(csvContent, `${fileName}.csv`, 'text/csv');
  }
  
  /**
   * Export table data using the table configuration
   * Convenience method that uses the full table config
   * 
   * @param config - Dynamic table configuration
   * @param data - Optional data override (uses config.data if not provided)
   * 
   * @example
   * ```typescript
   * exportService.exportTable(config); // Uses config.data
   * exportService.exportTable(config, customData); // Uses customData
   * ```
   */
  exportTable<T>(config: DynamicTableConfig<T>, data?: T[]): void {
    const exportData = data || config.data || [];
    const fileName = config.exportFileName || 'export';
    
    // Determine export format (default to CSV)
    const formats = config.exportFormats || ['csv'];
    
    if (formats.includes('csv')) {
      this.exportToCSV(exportData, config.columns, fileName);
    }
    
    // Future: Add XLSX and PDF export support here
    // if (formats.includes('xlsx')) {
    //   this.exportToXLSX(exportData, config.columns, fileName);
    // }
    // if (formats.includes('pdf')) {
    //   this.exportToPDF(exportData, config.columns, fileName);
    // }
  }
  
  /**
   * Escape CSV value to handle commas, quotes, and newlines
   * 
   * @param value - Value to escape
   * @returns Escaped CSV value wrapped in quotes if needed
   */
  private escapeCSVValue(value: string): string {
    // If value contains comma, quote, or newline, wrap in quotes and escape internal quotes
    if (value.includes(',') || value.includes('"') || value.includes('\n')) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  }
  
  /**
   * Create and trigger download of a file
   * 
   * @param content - File content as string
   * @param fileName - Name of the file to download
   * @param mimeType - MIME type of the file
   */
  private downloadFile(content: string, fileName: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}

