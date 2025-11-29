import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ApiService } from '../shared/services/api.service';
import { of } from 'rxjs';
import { tap, finalize, delay, timeout, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-utility-operators-demo',
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
    MessageModule
  ],
  templateUrl: './utility-operators-demo.component.html',
  styleUrl: './utility-operators-demo.component.scss'
})
export class UtilityOperatorsDemoComponent {
  private apiService = inject(ApiService);

  tapLogs = signal<string[]>([]);
  finalizeResult = signal<string>('');
  delayResult = signal<string>('');
  timeoutResult = signal<string>('');
  isLoading = signal(false);

  violationCode = `
// ❌ VIOLATION: Side Effects in Stream, No Cleanup
// Modifies stream, no logging, no cleanup

loadData() {
  this.loading = true; // Side effect in wrong place
  this.http.get('/api/data').subscribe({
    next: data => {
      this.data = data;
      console.log(data); // Logging in subscribe
    },
    error: err => {
      this.loading = false; // Cleanup in error handler only
    }
    // What if complete? Loading never turns off!
  });
}
`;

  solutionCode = `
// ✅ SOLUTION: Utility Operators
// Side effects without modifying stream, proper cleanup

loadData() {
  this.loadingService.show();
  
  this.http.get('/api/data').pipe(
    // tap() - Side effects without modifying stream
    tap({
      next: data => console.log('Received:', data),
      error: err => console.error('Error:', err),
      complete: () => console.log('Complete')
    }),
    
    // delay() - Delay emissions
    delay(1000),
    
    // timeout() - Error if doesn't complete in time
    timeout(5000),
    
    // finalize() - Cleanup logic (always executes)
    finalize(() => {
      this.loadingService.hide(); // Always hides loader
    }),
    
    catchError(() => of({ timeout: true }))
  ).subscribe(data => {
    this.data = data;
  });
}

// tap() - Side effects without modifying stream
this.http.get('/api/data').pipe(
  tap(data => console.log('Received:', data))
);

// finalize() - Cleanup logic (always executes)
this.loadingService.show();
this.http.get('/api/data').pipe(
  finalize(() => this.loadingService.hide()) // Always hides loader
);

// timeout() - Error if doesn't complete in time
this.http.get('/api/slow-endpoint').pipe(
  timeout(5000),
  catchError(() => of({ timeout: true }))
);
`;

  testTap(): void {
    this.tapLogs.set([]);
    this.apiService.simulateApiCall({ data: 'Test data' }, 500).pipe(
      tap({
        next: (data) => {
          this.tapLogs.update(logs => [...logs, `Next: ${JSON.stringify(data)}`]);
        },
        error: (err) => {
          this.tapLogs.update(logs => [...logs, `Error: ${err.message}`]);
        },
        complete: () => {
          this.tapLogs.update(logs => [...logs, 'Complete']);
        }
      })
    ).subscribe();
  }

  testFinalize(): void {
    this.finalizeResult.set('');
    this.isLoading.set(true);
    
    this.apiService.simulateApiCall({ data: 'Success' }, 1000).pipe(
      finalize(() => {
        this.isLoading.set(false);
        this.finalizeResult.set('Cleanup executed (loading hidden)');
      })
    ).subscribe(data => {
      this.finalizeResult.set(`Data received: ${JSON.stringify(data)}`);
    });
  }

  testDelay(): void {
    this.delayResult.set('Waiting...');
    of('Delayed data').pipe(
      delay(2000)
    ).subscribe(data => {
      this.delayResult.set(`Received after delay: ${data}`);
    });
  }

  testTimeout(): void {
    this.timeoutResult.set('Loading (will timeout in 2s)...');
    this.apiService.simulateApiCall({ data: 'Success' }, 3000).pipe(
      timeout(2000),
      catchError(() => {
        this.timeoutResult.set('Request timed out after 2 seconds');
        return of({ timeout: true } as any);
      })
    ).subscribe(result => {
      if (result && !('timeout' in result)) {
        this.timeoutResult.set(`Success: ${JSON.stringify(result)}`);
      }
    });
  }
}

