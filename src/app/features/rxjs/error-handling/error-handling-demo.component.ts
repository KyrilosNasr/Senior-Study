import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { MessageModule } from 'primeng/message';
import { EnhancedButtonComponent } from '../../../shared/components/enhanced-button/enhanced-button.component';
import { ApiService } from '../shared/services/api.service';
import { retryWithBackoff } from '../shared/operators/retry-with-backoff.operator';
import { throwError, of } from 'rxjs';
import { catchError, retry, retryWhen, delay, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    EnhancedButtonComponent,
    MessageModule
  ],
  templateUrl: './error-handling-demo.component.html',
  styleUrl: './error-handling-demo.component.scss'
})
export class ErrorHandlingDemoComponent {
  private apiService = inject(ApiService);

  catchErrorResult = signal<string>('');
  retryResult = signal<string>('');
  retryWhenResult = signal<string>('');
  retryBackoffResult = signal<string>('');
  errorLogs = signal<string[]>([]);
  retryAttempts = signal(0);

  violationCode = `
// ❌ VIOLATION: No Error Handling
// Errors crash the app, no recovery, poor UX

loadData() {
  this.http.get('/api/data').subscribe({
    next: data => this.data = data,
    // No error handling - app crashes on error!
  });
}

// No retry logic
saveData(data: any) {
  this.http.post('/api/save', data).subscribe({
    next: () => console.log('Saved'),
    error: err => {
      // Error shown, but no retry - user must manually retry
      alert('Save failed!');
    }
  });
}
`;

  solutionCode = `
// ✅ SOLUTION: Comprehensive Error Handling
// Graceful degradation, retry logic, user-friendly errors

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  
  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      retryWhen(errors => errors.pipe(
        scan((retryCount, error) => {
          if (retryCount >= 3 || error.status === 404) {
            throw error; // Don't retry on 404 or after 3 attempts
          }
          return retryCount + 1;
        }, 0),
        delay(1000) // Implement exponential backoff in production
      )),
      catchError(error => {
        this.errorHandler.handle(error);
        return of([]); // Return fallback value
      }),
      shareReplay(1) // Cache successful response
    );
  }
}

// catchError() - Handle errors without terminating stream
this.http.get('/api/data').pipe(
  catchError(error => {
    console.error(error);
    return of([]); // Return fallback value
  })
);

// retry(n) - Retry n times on error
this.http.get('/api/data').pipe(
  retry(3)
);

// retryWhen() - Custom retry logic with backoff
this.http.get('/api/data').pipe(
  retryWhen(errors => errors.pipe(
    tap(err => console.log('Retrying...', err)),
    delay(1000),
    take(3)
  ))
);
`;

  testCatchError(): void {
    this.catchErrorResult.set('Loading...');
    this.apiService.simulateApiCall(null, 500, true).pipe(
      catchError(error => {
        this.catchErrorResult.set(`Error caught: ${error.message}. Returning fallback data.`);
        return of({ data: 'Fallback data' });
      })
    ).subscribe(result => {
      if (result) {
        this.catchErrorResult.set(`Success with fallback: ${JSON.stringify(result)}`);
      }
    });
  }

  testRetry(): void {
    this.retryResult.set('Loading...');
    this.errorLogs.set([]);
    let attemptCount = 0;
    
    // Simulate retry by creating observable that fails then succeeds
    const createRetryObservable = () => {
      attemptCount++;
      const shouldFail = attemptCount < 3;
      this.errorLogs.update(logs => [...logs, `Attempt ${attemptCount} ${shouldFail ? 'failed' : 'succeeded'}`]);
      return this.apiService.simulateApiCall('Success!', 300, shouldFail);
    };
    
    createRetryObservable().pipe(
      retry(3)
    ).subscribe({
      next: (result) => {
        this.retryResult.set(`Success after retries: ${result}`);
      },
      error: (err) => {
        this.retryResult.set(`Failed after all retries: ${err.message}`);
      }
    });
  }

  testRetryWhen(): void {
    this.retryWhenResult.set('Loading...');
    this.errorLogs.set([]);
    let attemptCount = 0;
    
    // Create observable that fails then succeeds
    const createRetryObservable = () => {
      attemptCount++;
      const shouldFail = attemptCount < 3;
      if (!shouldFail) {
        this.errorLogs.update(logs => [...logs, 'Success!']);
      }
      return this.apiService.simulateApiCall('Success!', 300, shouldFail);
    };
    
    createRetryObservable().pipe(
      retryWhen(errors => errors.pipe(
        tap(() => {
          this.errorLogs.update(logs => [...logs, `Retrying... (attempt ${attemptCount})`]);
        }),
        delay(500),
        take(3)
      ))
    ).subscribe({
      next: (result) => {
        this.retryWhenResult.set(`Success: ${result}`);
      },
      error: (err) => {
        this.retryWhenResult.set(`Failed: ${err.message}`);
      }
    });
  }

  testRetryWithBackoff(): void {
    this.retryBackoffResult.set('Loading...');
    this.errorLogs.set([]);
    this.retryAttempts.set(0);
    
    this.apiService.simulateApiCall('Success!', 500, true).pipe(
      retryWithBackoff(3, 500),
      catchError(error => {
        this.retryBackoffResult.set(`Failed after exponential backoff retries`);
        return of(null);
      })
    ).subscribe({
      next: (result) => {
        if (result) {
          this.retryBackoffResult.set(`Success after retries with exponential backoff!`);
        }
      }
    });
  }
}

