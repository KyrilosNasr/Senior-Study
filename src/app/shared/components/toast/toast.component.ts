import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, ToastModule],
  templateUrl: './toast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  messageService = inject(MessageService);
}

