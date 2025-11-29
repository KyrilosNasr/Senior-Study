import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { retryWithBackoff } from '../operators/retry-with-backoff.operator';
import { logWithContext } from '../operators/log-with-context.operator';

@Injectable()
export class ApiService {
  private http = inject(HttpClient);

  /**
   * Get data with retry and error handling
   */
  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      logWithContext('API'),
      retryWithBackoff(3, 1000),
      shareReplay(1),
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Simulate API call for demos
   */
  simulateApiCall<T>(data: T, delay: number = 1000, shouldFail: boolean = false): Observable<T> {
    return new Observable(observer => {
      setTimeout(() => {
        if (shouldFail) {
          observer.error(new Error('Simulated API failure'));
        } else {
          observer.next(data);
          observer.complete();
        }
      }, delay);
    });
  }
}

