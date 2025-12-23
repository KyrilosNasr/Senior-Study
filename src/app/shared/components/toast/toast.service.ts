import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export type ToastSeverity = 'success' | 'info' | 'warn' | 'error';

export interface ToastOptions {
  summary?: string;
  detail?: string;
  life?: number;
  closable?: boolean;
}

/**
 * Service for displaying toast notifications using PrimeNG Toast
 * Provides convenience methods for different toast types
 */
@Injectable()
export class ToastService {
  constructor(private messageService: MessageService) {}

  /**
   * Show success toast notification
   * @param message - Main message text
   * @param summary - Optional summary/title
   * @param options - Additional toast options
   */
  success(message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity: 'success',
      summary: summary || 'Success',
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable !== false
    });
  }

  /**
   * Show info toast notification
   * @param message - Main message text
   * @param summary - Optional summary/title
   * @param options - Additional toast options
   */
  info(message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity: 'info',
      summary: summary || 'Information',
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable !== false
    });
  }

  /**
   * Show warning toast notification
   * @param message - Main message text
   * @param summary - Optional summary/title
   * @param options - Additional toast options
   */
  warn(message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity: 'warn',
      summary: summary || 'Warning',
      detail: message,
      life: options?.life || 4000,
      closable: options?.closable !== false
    });
  }

  /**
   * Show error toast notification
   * @param message - Main message text
   * @param summary - Optional summary/title
   * @param options - Additional toast options
   */
  error(message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity: 'error',
      summary: summary || 'Error',
      detail: message,
      life: options?.life || 5000,
      closable: options?.closable !== false
    });
  }

  /**
   * Show custom toast notification
   * @param severity - Toast severity level
   * @param message - Main message text
   * @param summary - Optional summary/title
   * @param options - Additional toast options
   */
  show(severity: ToastSeverity, message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity,
      summary: summary || this.getDefaultSummary(severity),
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable !== false
    });
  }

  /**
   * Clear all toast notifications
   */
  clear(): void {
    this.messageService.clear();
  }

  /**
   * Get default summary based on severity
   */
  private getDefaultSummary(severity: ToastSeverity): string {
    const summaries: Record<ToastSeverity, string> = {
      success: 'Success',
      info: 'Information',
      warn: 'Warning',
      error: 'Error'
    };
    return summaries[severity];
  }
}

