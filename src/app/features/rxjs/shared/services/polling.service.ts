import { Injectable } from '@angular/core';
import { Observable, interval, EMPTY } from 'rxjs';
import { switchMap, takeUntil, catchError, filter } from 'rxjs/operators';

@Injectable()
export class PollingService {
  /**
   * Poll data at intervals with cancellation support
   */
  pollData<T>(
    requestFn: () => Observable<T>,
    intervalMs: number = 5000,
    stopCondition?: (data: T) => boolean
  ): Observable<T> {
    const stop$ = stopCondition 
      ? requestFn().pipe(filter(stopCondition))
      : EMPTY;

    return interval(intervalMs).pipe(
      switchMap(() => requestFn()),
      takeUntil(stop$),
      catchError(error => {
        console.error('Polling error:', error);
        return EMPTY; // Continue polling despite errors
      })
    );
  }
}

