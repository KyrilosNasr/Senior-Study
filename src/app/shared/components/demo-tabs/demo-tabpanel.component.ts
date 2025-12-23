import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanel } from 'primeng/tabs';

@Component({
  selector: 'app-demo-tabpanel',
  standalone: true,
  imports: [CommonModule, TabPanel],
  templateUrl: './demo-tabpanel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTabpanelComponent {
  @Input({ required: true }) value!: string | number;
}

