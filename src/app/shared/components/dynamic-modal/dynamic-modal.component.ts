import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  effect
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { DynamicModalConfig, ModalAction } from '../../types/modal-config.types';
import { DynamicModalService } from './dynamic-modal.service';

@Component({
  selector: 'app-dynamic-modal',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule],
  templateUrl: './dynamic-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicModalComponent {
  private readonly modalService = inject(DynamicModalService);

  config = computed(() => this.modalService.getConfig()());
  visible = computed(() => this.modalService.isVisible()());

  modalClasses = computed(() => {
    const config = this.config();
    if (!config) return '';

    const classes: string[] = [];

    if (config.fullScreen) {
      classes.push('w-full h-full max-w-full max-h-full');
    } else {
      classes.push('w-full max-w-lg md:max-w-2xl lg:max-w-4xl');
    }

    return classes.join(' ');
  });

  constructor() {
    effect(() => {
      const config = this.config();
      const visible = this.visible();
    });
  }

  onClose(): void {
    this.modalService.close({ cancelled: true });
  }

  async onActionClick(action: ModalAction): Promise<void> {
    if (action.disabled) {
      return;
    }

    try {
      await action.handler();
      if (!action.loading) {
        this.modalService.closeWithAction(action.label.toLowerCase());
      }
    } catch (error) {
    }
  }

  isActionDisabled(action: ModalAction): boolean {
    return action.disabled || false;
  }

  getButtonSeverity(action: ModalAction): 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' {
    return action.severity || 'primary';
  }
}

