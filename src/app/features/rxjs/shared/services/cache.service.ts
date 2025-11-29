import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';
import { CacheEntry } from '../models/cache-entry.model';

@Injectable()
export class CacheService {
  private cache = new Map<string, CacheEntry<any>>();
  private readonly DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

  /**
   * Get cached data with stale-while-revalidate pattern
   */
  getCached<T>(
    key: string,
    requestFn: () => Observable<T>,
    useStale: boolean = true,
    ttl: number = this.DEFAULT_TTL
  ): Observable<T> {
    const cached = this.cache.get(key);
    const now = Date.now();

    if (cached && (now - cached.timestamp) < ttl) {
      // Fresh data
      return of(cached.data);
    }

    if (cached && useStale) {
      // Stale-while-revalidate pattern
      return requestFn().pipe(
        tap(data => this.cache.set(key, { key, data, timestamp: now })),
        startWith(cached.data) // Emit stale data first
      );
    }

    // No cache or stale not allowed
    return requestFn().pipe(
      tap(data => this.cache.set(key, { key, data, timestamp: now }))
    );
  }

  /**
   * Clear cache entry
   */
  clearCache(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Clear all cache
   */
  clearAllCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache size
   */
  getCacheSize(): number {
    return this.cache.size;
  }
}

