import { Component, signal, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { WebSocketService } from '../shared/services/websocket.service';
import { WebSocketMessage } from '../shared/models/websocket-message.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef } from '@angular/core';

@Component({
  selector: 'app-websockets-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MessageModule
  ],
  templateUrl: './websockets-demo.component.html',
  styleUrl: './websockets-demo.component.scss'
})
export class WebsocketsDemoComponent implements OnDestroy {
  private websocketService = inject(WebSocketService);
  private destroyRef = inject(DestroyRef);

  messages = signal<WebSocketMessage[]>([]);
  isConnected = signal(false);
  messageText = signal('');
  connectionStatus = signal('Disconnected');

  violationCode = `
// ❌ VIOLATION: Manual WebSocket Management
// No reconnection, no error handling, memory leaks

class ChatService {
  private ws: WebSocket;
  
  connect() {
    this.ws = new WebSocket('ws://localhost:8080');
    this.ws.onmessage = (event) => {
      // No RxJS, no error handling
      this.handleMessage(event.data);
    };
  }
  
  // No reconnection logic
  // No cleanup
  // No error handling
}
`;

  solutionCode = `
// ✅ SOLUTION: RxJS WebSocket
// Automatic reconnection, error handling, composable

@Injectable()
export class WebSocketService {
  private socket$!: WebSocketSubject<any>;
  
  connect(url: string): Observable<any> {
    this.socket$ = webSocket({
      url,
      openObserver: {
        next: () => console.log('Connected')
      },
      closeObserver: {
        next: () => this.reconnect()
      }
    });
    
    return this.socket$.pipe(
      retryWhen(errors => errors.pipe(
        scan((count, err) => {
          if (count >= 5) throw err;
          return count + 1;
        }, 0),
        delay(1000 * Math.pow(2, count))
      )),
      share()
    );
  }
}
`;

  connect(): void {
    this.isConnected.set(true);
    this.connectionStatus.set('Connecting...');
    
    this.websocketService.simulateWebSocket().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: (message) => {
        this.messages.update(msgs => [...msgs, message]);
        this.connectionStatus.set('Connected');
      },
      error: () => {
        this.connectionStatus.set('Error');
        this.isConnected.set(false);
      }
    });
  }

  sendMessage(): void {
    if (this.messageText().trim()) {
      const message: WebSocketMessage = {
        type: 'message',
        payload: { text: this.messageText(), timestamp: Date.now() },
        timestamp: Date.now()
      };
      this.messages.update(msgs => [...msgs, message]);
      this.messageText.set('');
    }
  }

  disconnect(): void {
    this.isConnected.set(false);
    this.connectionStatus.set('Disconnected');
    this.websocketService.close();
  }

  ngOnDestroy(): void {
    this.disconnect();
  }
}

