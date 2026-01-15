import { Component, Input, ChangeDetectionStrategy, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-tabpanel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template #content>
      <ng-content />
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTabpanelComponent {
  @Input({ required: true }) value!: string | number;
  @ViewChild('content', { static: true }) contentTemplate!: TemplateRef<unknown>;
}

