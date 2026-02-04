import { NgIcon } from '@ng-icons/core';
import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CacheService } from '../shared/services/cache.service';
import { ApiService } from '../shared/services/api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-advanced-caching-demo',
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
  templateUrl: './advanced-caching-demo.component.html',
  styleUrl: './advanced-caching-demo.component.scss'
})
export class AdvancedCachingDemoComponent {
  private cacheService = inject(CacheService);
  private apiService = inject(ApiService);

  cachedData = signal<any>(null);
  cacheSize = signal(0);
  message = signal('');

  violationCode = `
// ❌ VIOLATION: No Caching
// Every request hits the API

getData(): Observable<Data> {
  return this.http.get('/api/data'); // Always makes HTTP call
}

// Multiple components call this
component1.getData().subscribe(); // HTTP call 1
component2.getData().subscribe(); // HTTP call 2
component3.getData().subscribe(); // HTTP call 3
// 3 identical HTTP calls!
`;

  solutionCode = `
// ✅ SOLUTION: Advanced Caching
// Stale-while-revalidate pattern

@Injectable()
export class CacheService {
  private cache = new Map<string, CacheEntry>();
  
  getCached<T>(
    key: string,
    requestFn: () => Observable<T>,
    useStale: boolean = true,
    ttl: number = 5 * 60 * 1000
  ): Observable<T> {
    const cached = this.cache.get(key);
    const now = Date.now();
    
    if (cached && (now - cached.timestamp) < ttl) {
      return of(cached.data); // Fresh data
    }
    
    if (cached && useStale) {
      // Stale-while-revalidate
      return requestFn().pipe(
        tap(data => this.cache.set(key, { data, timestamp: now })),
        startWith(cached.data) // Emit stale first
      );
    }
    
    return requestFn().pipe(
      tap(data => this.cache.set(key, { data, timestamp: now }))
    );
  }
}
`;

  loadData(): void {
    this.cacheService.getCached(
      'demo-data',
      () => this.apiService.simulateApiCall({ 
        id: 1, 
        name: 'Cached Data',
        timestamp: Date.now() 
      }, 1000),
      true,
      5000 // 5 second TTL
    ).subscribe({
      next: (data) => {
        this.cachedData.set(data);
        this.cacheSize.set(this.cacheService.getCacheSize());
        this.message.set('Data loaded (may be from cache)');
      }
    });
  }

  clearCache(): void {
    this.cacheService.clearCache('demo-data');
    this.cachedData.set(null);
    this.cacheSize.set(this.cacheService.getCacheSize());
    this.message.set('Cache cleared');
  }
}

