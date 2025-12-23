import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

/**
 * Toast notification component using PrimeNG Toast
 * Displays toast notifications triggered by ToastService
 */
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  messageService = inject(MessageService);
}

