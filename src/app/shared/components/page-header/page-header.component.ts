import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
}

