import { NgIcon } from '@ng-icons/core';
import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PollingService } from '../shared/services/polling.service';
import { ApiService } from '../shared/services/api.service';
import { forkJoin, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-higher-order-observables-demo',
  standalone: true,
  imports: [
    NgIcon,
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule,
    MessageModule
  ],
  templateUrl: './higher-order-observables-demo.component.html',
  styleUrl: './higher-order-observables-demo.component.scss'
})
export class HigherOrderObservablesDemoComponent {
  private pollingService = inject(PollingService);
  private apiService = inject(ApiService);

  pollingData = signal<any[]>([]);
  sequentialData = signal<any>(null);
  isPolling = signal(false);

  violationCode = `
// ❌ VIOLATION: Nested Subscriptions
// Creates memory leaks and race conditions

loadUserData(userId: string) {
  this.http.get(\`/api/users/\${userId}\`).subscribe(user => {
    this.http.get(\`/api/users/\${userId}/orders\`).subscribe(orders => {
      this.http.get(\`/api/users/\${userId}/preferences\`).subscribe(prefs => {
        // Nested callbacks - hard to maintain
        this.userData = { user, orders, prefs };
      });
    });
  });
}

// Polling with manual intervals
startPolling() {
  setInterval(() => {
    this.http.get('/api/data').subscribe(data => {
      this.data = data;
    });
  }, 5000);
}
`;

  solutionCode = `
// ✅ SOLUTION: Higher-Order Observables
// Clean, composable, cancellable

// Sequential requests with switchMap
loadUserData(userId: string) {
  return this.http.get(\`/api/users/\${userId}\`).pipe(
    switchMap(user => 
      forkJoin({
        orders: this.http.get(\`/api/users/\${userId}/orders\`),
        preferences: this.http.get(\`/api/users/\${userId}/preferences\`)
      }).pipe(
        map(({ orders, preferences }) => ({
          ...user,
          orders,
          preferences
        }))
      )
    )
  );
}

// Polling with RxJS
startPolling() {
  this.pollingService.pollData(
    () => this.http.get('/api/data'),
    5000
  ).pipe(
    takeUntil(this.destroy$)
  ).subscribe(data => {
    this.data = data;
  });
}
`;

  startPolling(): void {
    this.isPolling.set(true);
    this.pollingData.set([]);
    
    this.pollingService.pollData(
      () => this.apiService.simulateApiCall({ 
        timestamp: Date.now(), 
        value: Math.random() 
      }, 500),
      2000
    ).subscribe({
      next: (data) => {
        this.pollingData.update(arr => [...arr, data]);
      },
      error: () => {
        this.isPolling.set(false);
      }
    });
  }

  testSequential(): void {
    const userId = '123';
    
    this.apiService.simulateApiCall({ id: userId, name: 'John Doe' }, 500).pipe(
      switchMap(user => 
        forkJoin({
          orders: this.apiService.simulateApiCall([{ id: 1, total: 100 }], 300),
          preferences: this.apiService.simulateApiCall({ theme: 'dark' }, 200)
        }).pipe(
          map(({ orders, preferences }) => ({
            ...user,
            orders,
            preferences
          }))
        )
      )
    ).subscribe(data => {
      this.sequentialData.set(data);
    });
  }
}

