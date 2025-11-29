import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ApiService } from '../shared/services/api.service';
import { retryWithBackoff } from '../shared/operators/retry-with-backoff.operator';
import { logWithContext } from '../shared/operators/log-with-context.operator';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-custom-operators-demo',
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
  templateUrl: './custom-operators-demo.component.html',
  styleUrl: './custom-operators-demo.component.scss'
})
export class CustomOperatorsDemoComponent {
  private apiService = inject(ApiService);

  retryAttempts = signal(0);
  retryLogs = signal<string[]>([]);
  successMessage = signal<string>('');
  errorMessage = signal<string>('');

  violationCode = `
// ❌ VIOLATION: No Custom Operators
// Repeated retry logic everywhere, hard to maintain

this.http.get('/api/data').pipe(
  retryWhen(errors => errors.pipe(
    scan((count, err) => {
      if (count >= 3) throw err;
      return count + 1;
    }, 0),
    delay(1000),
    tap(() => console.log('Retrying...'))
  ))
).subscribe();

// Same logic repeated in multiple places
this.http.post('/api/save').pipe(
  retryWhen(errors => errors.pipe(
    scan((count, err) => {
      if (count >= 3) throw err;
      return count + 1;
    }, 0),
    delay(1000),
    tap(() => console.log('Retrying...'))
  ))
).subscribe();
`;

  solutionCode = `
// ✅ SOLUTION: Custom Operators
// Reusable, testable, maintainable

import { retryWithBackoff } from './operators/retry-with-backoff.operator';
import { logWithContext } from './operators/log-with-context.operator';

// Custom operator: Retry with exponential backoff
export function retryWithBackoff<T>(
  maxRetries: number = 3,
  initialDelay: number = 1000
): OperatorFunction<T, T> {
  return (source: Observable<T>) =>
    source.pipe(
      retryWhen(errors =>
        errors.pipe(
          scan((retryCount, error) => {
            if (retryCount >= maxRetries) {
              throw error;
            }
            return retryCount + 1;
          }, 0),
          delay((retryCount) => initialDelay * Math.pow(2, retryCount)),
          tap(() => console.log('Retrying...'))
        )
      )
    );
}

// Usage - clean and reusable
this.http.get('/api/data').pipe(
  logWithContext('API'),
  retryWithBackoff(3, 1000)
).subscribe();

this.http.post('/api/save').pipe(
  logWithContext('API'),
  retryWithBackoff(3, 1000)
).subscribe();
`;

  testRetry(): void {
    this.retryAttempts.set(0);
    this.retryLogs.set([]);
    this.successMessage.set('');
    this.errorMessage.set('');

    let attemptCount = 0;
    const maxAttempts = 3;

    this.apiService.simulateApiCall(
      { data: 'Success!' },
      500,
      attemptCount < maxAttempts - 1 // Fail first 2 attempts
    ).pipe(
      logWithContext('Retry Demo'),
      retryWithBackoff(maxAttempts, 500),
      catchError(error => {
        this.errorMessage.set('Failed after all retry attempts');
        return of(null);
      })
    ).subscribe({
      next: (result) => {
        if (result) {
          this.successMessage.set('Request succeeded after retries!');
        }
      },
      error: (err) => {
        this.errorMessage.set('Request failed: ' + err.message);
      }
    });
  }

  testLogging(): void {
    this.retryLogs.set([]);
    this.apiService.simulateApiCall({ data: 'Test data' }, 300).pipe(
      logWithContext('Test Context')
    ).subscribe({
      next: (data) => {
        this.retryLogs.update(logs => [...logs, 'Next: ' + JSON.stringify(data)]);
      },
      complete: () => {
        this.retryLogs.update(logs => [...logs, 'Complete']);
      }
    });
  }
}

