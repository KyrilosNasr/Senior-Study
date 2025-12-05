import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ApiService } from '../shared/services/api.service';
import { Observable } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-multicasting-operators-demo',
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
  templateUrl: './multicasting-operators-demo.component.html',
  styleUrl: './multicasting-operators-demo.component.scss'
})
export class MulticastingOperatorsDemoComponent {
  private apiService = inject(ApiService);

  unsharedRequests = signal(0);
  sharedRequests = signal(0);
  shareReplayRequests = signal(0);
  unsharedResults = signal<string[]>([]);
  sharedResults = signal<string[]>([]);
  shareReplayResults = signal<string[]>([]);
  cacheHit = signal(false);

  violationCode = `
// ❌ VIOLATION: Multiple HTTP Calls
// Each subscription creates a new HTTP request

@Injectable()
export class ConfigService {
  private http = inject(HttpClient);
  
  // WRONG - Multiple subscriptions = multiple HTTP calls
  getConfig() {
    return this.http.get('/api/config');
  }
}

// In component
ngOnInit() {
  // Subscription 1 - HTTP call 1
  this.configService.getConfig().subscribe(config => {
    this.config = config;
  });
  
  // Subscription 2 - HTTP call 2 (duplicate!)
  this.configService.getConfig().subscribe(config => {
    this.otherConfig = config;
  });
  
  // Subscription 3 - HTTP call 3 (duplicate!)
  this.configService.getConfig().subscribe(config => {
    this.anotherConfig = config;
  });
  // Result: 3 identical HTTP calls!
}
`;

  solutionCode = `
// ✅ SOLUTION: Multicasting Operators
// Single HTTP call, shared result, cached for new subscribers

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private http = inject(HttpClient);
  
  // CORRECT - Cached configuration, loaded once
  config$ = this.http.get<Config>('/api/config').pipe(
    shareReplay({ bufferSize: 1, refCount: false }), // refCount: false keeps alive
    catchError(() => of(DEFAULT_CONFIG))
  );
  
  // Real-time data - no caching
  liveData$ = this.wsService.connect().pipe(
    share() // Multiple subscribers share connection
  );
}

// In component
ngOnInit() {
  // Subscription 1 - HTTP call 1
  this.configService.config$.subscribe(config => {
    this.config = config;
  });
  
  // Subscription 2 - Uses cached result (no HTTP call)
  this.configService.config$.subscribe(config => {
    this.otherConfig = config;
  });
  
  // Subscription 3 - Uses cached result (no HTTP call)
  this.configService.config$.subscribe(config => {
    this.anotherConfig = config;
  });
  // Result: 1 HTTP call, 3 subscribers get the same result!
}

// share() vs shareReplay()
// share(): Hot observable, no replay - new subscribers miss previous values
// shareReplay(): Replays last n values to new subscribers - perfect for caching
`;

  testUnshared(): void {
    this.unsharedRequests.set(0);
    this.unsharedResults.set([]);
    
    // Create unshared observable
    const unshared$ = this.apiService.simulateApiCall('Data', 500);
    
    // Multiple subscriptions = multiple requests
    unshared$.subscribe({
      next: (data) => {
        this.unsharedRequests.update(n => n + 1);
        this.unsharedResults.update(arr => [...arr, `Request ${this.unsharedRequests()}: ${data}`]);
      }
    });
    
    unshared$.subscribe({
      next: (data) => {
        this.unsharedRequests.update(n => n + 1);
        this.unsharedResults.update(arr => [...arr, `Request ${this.unsharedRequests()}: ${data}`]);
      }
    });
    
    unshared$.subscribe({
      next: (data) => {
        this.unsharedRequests.update(n => n + 1);
        this.unsharedResults.update(arr => [...arr, `Request ${this.unsharedRequests()}: ${data}`]);
      }
    });
  }

  testShared(): void {
    this.sharedRequests.set(0);
    this.sharedResults.set([]);
    
    // Create shared observable
    const shared$ = this.apiService.simulateApiCall('Data', 500).pipe(
      share()
    );
    
    // Multiple subscriptions = single request
    shared$.subscribe({
      next: (data) => {
        this.sharedRequests.update(n => n + 1);
        this.sharedResults.update(arr => [...arr, `Subscriber ${this.sharedRequests()}: ${data}`]);
      }
    });
    
    shared$.subscribe({
      next: (data) => {
        this.sharedRequests.update(n => n + 1);
        this.sharedResults.update(arr => [...arr, `Subscriber ${this.sharedRequests()}: ${data}`]);
      }
    });
    
    shared$.subscribe({
      next: (data) => {
        this.sharedRequests.update(n => n + 1);
        this.sharedResults.update(arr => [...arr, `Subscriber ${this.sharedRequests()}: ${data}`]);
      }
    });
  }

  testShareReplay(): void {
    this.shareReplayRequests.set(0);
    this.shareReplayResults.set([]);
    this.cacheHit.set(false);
    
    // Create shareReplay observable
    const cached$ = this.apiService.simulateApiCall('Cached Data', 500).pipe(
      shareReplay({ bufferSize: 1, refCount: false })
    );
    
    // First subscription - makes HTTP call
    cached$.subscribe({
      next: (data) => {
        this.shareReplayRequests.update(n => n + 1);
        this.shareReplayResults.update(arr => [...arr, `Subscriber 1 (initial): ${data}`]);
      }
    });
    
    // Wait a bit, then add more subscribers (should use cache)
    setTimeout(() => {
      this.cacheHit.set(true);
      cached$.subscribe({
        next: (data) => {
          this.shareReplayResults.update(arr => [...arr, `Subscriber 2 (cached): ${data}`]);
        }
      });
      
      cached$.subscribe({
        next: (data) => {
          this.shareReplayResults.update(arr => [...arr, `Subscriber 3 (cached): ${data}`]);
        }
      });
    }, 1000);
  }
}






