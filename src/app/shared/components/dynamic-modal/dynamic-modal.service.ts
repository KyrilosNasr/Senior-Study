import { Injectable, signal } from '@angular/core';
import { DynamicModalConfig, ModalResult } from '../../types/modal-config.types';

@Injectable({
  providedIn: 'root'
})
export class DynamicModalService {
  private readonly modalConfig = signal<DynamicModalConfig | null>(null);
  private readonly modalVisible = signal(false);
  private resolveCallback?: (result: ModalResult) => void;

  getConfig() {
    return this.modalConfig.asReadonly();
  }

  isVisible() {
    return this.modalVisible.asReadonly();
  }

  open(config: DynamicModalConfig): Promise<ModalResult> {
    this.modalConfig.set(config);
    this.modalVisible.set(true);

    return new Promise<ModalResult>(resolve => {
      this.resolveCallback = resolve;
    });
  }

  close(result?: ModalResult): void {
    this.modalVisible.set(false);
    if (this.resolveCallback) {
      this.resolveCallback(result || { cancelled: true });
      this.resolveCallback = undefined;
    }
    setTimeout(() => {
      this.modalConfig.set(null);
    }, 300);
  }

  closeWithAction(action: string, data?: unknown): void {
    this.close({
      action,
      data,
      cancelled: false
    });
  }

  info(title: string, message: string): Promise<ModalResult> {
    return this.open({
      title,
      message,
      type: 'info',
      actions: [
        {
          label: 'OK',
          severity: 'primary',
          handler: () => {
            this.closeWithAction('ok');
          }
        }
      ]
    });
  }

  confirm(
    title: string,
    message: string,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel'
  ): Promise<ModalResult> {
    return this.open({
      title,
      message,
      type: 'confirm',
      actions: [
        {
          label: cancelLabel,
          severity: 'secondary',
          handler: () => {
            this.close({ cancelled: true });
          }
        },
        {
          label: confirmLabel,
          severity: 'danger',
          handler: () => {
            this.closeWithAction('confirm');
          }
        }
      ]
    });
  }
}

