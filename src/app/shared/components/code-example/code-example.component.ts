import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Code Example Component
 * 
 * Reusable component for displaying code examples in demo pages.
 * Provides consistent styling for code blocks with optional title.
 */
@Component({
  selector: 'app-code-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-example.component.html',
  styleUrl: './code-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeExampleComponent {
  @Input() title?: string;
  @Input({ required: true }) code!: string;
}

