import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, shareReplay } from 'rxjs/operators';

@Injectable()
export class DeduplicationService {
  private pendingRequests = new Map<string, Observable<any>>();

  /**
   * Deduplicate requests - if same request is in progress, return existing observable
   */
  deduplicate<T>(
    key: string,
    requestFn: () => Observable<T>
  ): Observable<T> {
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key)!;
    }

    const request$ = requestFn().pipe(
      finalize(() => this.pendingRequests.delete(key)),
      shareReplay(1)
    );

    this.pendingRequests.set(key, request$);
    return request$;
  }

  /**
   * Clear pending request
   */
  clearRequest(key: string): void {
    this.pendingRequests.delete(key);
  }

  /**
   * Clear all pending requests
   */
  clearAllRequests(): void {
    this.pendingRequests.clear();
  }
}

