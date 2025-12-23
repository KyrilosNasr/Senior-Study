import { Injectable, signal } from '@angular/core';
import { DynamicModalConfig, ModalResult } from '../../types/modal-config.types';

/**
 * Service for managing dynamic modals
 * Provides programmatic control over modal display
 */
@Injectable({
  providedIn: 'root'
})
export class DynamicModalService {
  private readonly modalConfig = signal<DynamicModalConfig | null>(null);
  private readonly modalVisible = signal(false);
  private resolveCallback?: (result: ModalResult) => void;

  /**
   * Get current modal configuration
   */
  getConfig() {
    return this.modalConfig.asReadonly();
  }

  /**
   * Get modal visibility state
   */
  isVisible() {
    return this.modalVisible.asReadonly();
  }

  /**
   * Open a modal with configuration
   * Returns a promise that resolves when modal is closed
   */
  open(config: DynamicModalConfig): Promise<ModalResult> {
    this.modalConfig.set(config);
    this.modalVisible.set(true);

    return new Promise<ModalResult>(resolve => {
      this.resolveCallback = resolve;
    });
  }

  /**
   * Close the modal with result
   */
  close(result?: ModalResult): void {
    this.modalVisible.set(false);
    if (this.resolveCallback) {
      this.resolveCallback(result || { cancelled: true });
      this.resolveCallback = undefined;
    }
    // Clear config after a short delay to allow animation
    setTimeout(() => {
      this.modalConfig.set(null);
    }, 300);
  }

  /**
   * Close modal with action result
   */
  closeWithAction(action: string, data?: unknown): void {
    this.close({
      action,
      data,
      cancelled: false
    });
  }

  /**
   * Show info modal
   */
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

  /**
   * Show confirmation modal
   */
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

