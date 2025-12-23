import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export type ToastSeverity = 'success' | 'info' | 'warn' | 'error';

export interface ToastOptions {
  summary?: string;
  detail?: string;
  life?: number;
  closable?: boolean;
}

@Injectable()
export class ToastService {
  constructor(private messageService: MessageService) {}

  success(message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity: 'success',
      summary: summary || 'Success',
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable !== false
    });
  }

  info(message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity: 'info',
      summary: summary || 'Information',
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable !== false
    });
  }

  warn(message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity: 'warn',
      summary: summary || 'Warning',
      detail: message,
      life: options?.life || 4000,
      closable: options?.closable !== false
    });
  }

  error(message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity: 'error',
      summary: summary || 'Error',
      detail: message,
      life: options?.life || 5000,
      closable: options?.closable !== false
    });
  }

  show(severity: ToastSeverity, message: string, summary?: string, options?: ToastOptions): void {
    this.messageService.add({
      severity,
      summary: summary || this.getDefaultSummary(severity),
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable !== false
    });
  }

  clear(): void {
    this.messageService.clear();
  }

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

