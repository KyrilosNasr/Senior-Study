import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';

import { DynamicModalComponent } from '../../../shared/components/dynamic-modal/dynamic-modal.component';
import { DynamicModalService } from '../../../shared/components/dynamic-modal/dynamic-modal.service';
import { DemoHeaderComponent } from '../../../shared/components/demo-header/demo-header.component';
import { CodeExampleComponent } from '../../../shared/components/code-example/code-example.component';
import { ResultDisplayComponent } from '../../../shared/components/result-display/result-display.component';
import { DynamicModalConfig, ModalResult } from '../../../shared/types/modal-config.types';

@Component({
  selector: 'app-dynamic-modal-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DynamicModalComponent,
    CodeExampleComponent,
    ResultDisplayComponent
  ],
  templateUrl: './dynamic-modal-demo.component.html',
  styleUrl: './dynamic-modal-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicModalDemoComponent {
  private readonly modalService = inject(DynamicModalService);

  lastResult = '';

  /**
   * Show info modal
   */
  showInfoModal(): void {
    this.modalService
      .info('Information', 'This is an informational message. Click OK to close.')
      .then((result: ModalResult) => {
        this.lastResult = `Info modal closed with action: ${result.action || 'cancelled'}`;
      });
  }

  /**
   * Show confirmation modal
   */
  showConfirmModal(): void {
    this.modalService
      .confirm(
        'Confirm Action',
        'Are you sure you want to proceed with this action? This cannot be undone.',
        'Yes, Proceed',
        'Cancel'
      )
      .then((result: ModalResult) => {
        if (result.action === 'confirm') {
          this.lastResult = 'Action confirmed!';
        } else {
          this.lastResult = 'Action cancelled.';
        }
      });
  }

  /**
   * Show custom modal with form
   */
  showCustomModal(): void {
    const config: DynamicModalConfig = {
      title: 'Custom Modal',
      message: 'This is a custom modal with multiple actions.',
      type: 'custom',
      width: '600px',
      actions: [
        {
          label: 'Cancel',
          severity: 'secondary',
          handler: () => {
            this.modalService.close({ cancelled: true });
          }
        },
        {
          label: 'Save Draft',
          severity: 'info',
          handler: () => {
            this.modalService.closeWithAction('save-draft');
            this.lastResult = 'Draft saved!';
          }
        },
        {
          label: 'Submit',
          severity: 'primary',
          handler: () => {
            this.modalService.closeWithAction('submit');
            this.lastResult = 'Form submitted!';
          }
        }
      ]
    };

    this.modalService.open(config).then((result: ModalResult) => {
      if (result.action) {
        this.lastResult = `Modal closed with action: ${result.action}`;
      }
    });
  }

  /**
   * Show loading modal
   */
  showLoadingModal(): void {
    const config: DynamicModalConfig = {
      title: 'Processing',
      message: 'Please wait while we process your request...',
      type: 'info',
      actions: [
        {
          label: 'Processing...',
          severity: 'primary',
          loading: true,
          disabled: true,
          handler: () => {
            // Simulate async operation
            setTimeout(() => {
              this.modalService.closeWithAction('completed');
              this.lastResult = 'Processing completed!';
            }, 2000);
          }
        }
      ]
    };

    this.modalService.open(config);
    // Trigger the loading action
    setTimeout(() => {
      const actions = config.actions;
      if (actions && actions[0]) {
        actions[0].handler();
      }
    }, 100);
  }

  /**
   * Show full screen modal
   */
  showFullScreenModal(): void {
    const config: DynamicModalConfig = {
      title: 'Full Screen Modal',
      message: 'This modal is full screen on mobile devices and centered on desktop.',
      type: 'custom',
      fullScreen: true,
      actions: [
        {
          label: 'Close',
          severity: 'secondary',
          handler: () => {
            this.modalService.close();
          }
        }
      ]
    };

    this.modalService.open(config).then(() => {
      this.lastResult = 'Full screen modal closed.';
    });
  }

  // Code examples for the Code Examples section
  readonly serviceExampleCode = `// Inject service
private modalService = inject(DynamicModalService);

// Show info modal
this.modalService.info('Title', 'Message')
  .then(result => {
    console.log(result);
  });

// Show confirmation
this.modalService.confirm('Title', 'Message')
  .then(result => {
    if (result.action === 'confirm') {
      // User confirmed
    }
  });

// Custom modal
const config: DynamicModalConfig = {
  title: 'Custom Modal',
  message: 'Custom content',
  actions: [
    { label: 'Cancel', severity: 'secondary', handler: () => modalService.close() },
    { label: 'Save', severity: 'primary', handler: () => modalService.closeWithAction('save') }
  ]
};
this.modalService.open(config);`;

  readonly componentExampleCode = `<app-dynamic-modal></app-dynamic-modal>

// Component automatically connects to service
// Use service methods to open modals`;
}

