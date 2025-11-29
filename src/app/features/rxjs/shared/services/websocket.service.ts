import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, throwError } from 'rxjs';
import { retry, retryWhen, delay, scan, tap, share } from 'rxjs/operators';
import { WebSocketMessage } from '../models/websocket-message.model';

@Injectable()
export class WebSocketService {
  private socket$!: WebSocketSubject<any>;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  /**
   * Connect to WebSocket with automatic reconnection
   */
  connect(url: string): Observable<any> {
    this.socket$ = webSocket({
      url,
      openObserver: {
        next: () => {
          console.log('WebSocket connected');
          this.reconnectAttempts = 0;
        }
      },
      closeObserver: {
        next: () => {
          console.log('WebSocket disconnected');
          this.reconnect();
        }
      }
    });

    return this.socket$.pipe(
      retryWhen(errors =>
        errors.pipe(
          scan((attemptCount, error) => {
            if (attemptCount >= this.maxReconnectAttempts) {
              throw error;
            }
            return attemptCount + 1;
          }, 0),
          delay(1000 * Math.pow(2, this.reconnectAttempts)),
          tap(() => {
            this.reconnectAttempts++;
            console.log(`Reconnecting... (attempt ${this.reconnectAttempts})`);
          })
        )
      ),
      share() // Share connection across subscribers
    );
  }

  /**
   * Send message through WebSocket
   */
  send(message: WebSocketMessage): void {
    if (this.socket$ && !this.socket$.closed) {
      this.socket$.next(message);
    }
  }

  /**
   * Close WebSocket connection
   */
  close(): void {
    if (this.socket$) {
      this.socket$.complete();
    }
  }

  /**
   * Reconnect logic
   */
  private reconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts && this.socket$) {
      setTimeout(() => {
        this.reconnectAttempts++;
        // In a real app, you would reconnect here
        console.log('Attempting to reconnect...');
      }, 1000 * Math.pow(2, this.reconnectAttempts));
    }
  }

  /**
   * Simulate WebSocket for demos
   */
  simulateWebSocket(): Observable<WebSocketMessage> {
    return new Observable(observer => {
      let messageCount = 0;
      const interval = setInterval(() => {
        messageCount++;
        observer.next({
          type: 'message',
          payload: { id: messageCount, text: `Message ${messageCount}`, timestamp: Date.now() },
          timestamp: Date.now()
        });
      }, 2000);

      return () => clearInterval(interval);
    });
  }
}

