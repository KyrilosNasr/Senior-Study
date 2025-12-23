import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeExampleComponent {
  @Input() title?: string;
  @Input({ required: true }) code!: string;
}

