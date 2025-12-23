import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanel } from 'primeng/tabs';

/**
 * Demo Tabpanel Component
 * 
 * Wrapper component for tabpanel content within demo-tabs.
 * Provides consistent structure with optional spacing.
 */
@Component({
  selector: 'app-demo-tabpanel',
  standalone: true,
  imports: [CommonModule, TabPanel],
  templateUrl: './demo-tabpanel.component.html',
  styleUrl: './demo-tabpanel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTabpanelComponent {
  @Input({ required: true }) value!: string | number;
}

