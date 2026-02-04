import { NgIcon } from '@ng-icons/core';
import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { DeduplicationService } from '../shared/services/deduplication.service';
import { ApiService } from '../shared/services/api.service';
import { Subject, concatMap } from 'rxjs';

@Component({
  selector: 'app-race-conditions-demo',
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
  templateUrl: './race-conditions-demo.component.html',
  styleUrl: './race-conditions-demo.component.scss'
})
export class RaceConditionsDemoComponent {
  private deduplicationService = inject(DeduplicationService);
  private apiService = inject(ApiService);
  private queue$ = new Subject<() => any>();

  raceConditionResults = signal<string[]>([]);
  deduplicatedResults = signal<string[]>([]);
  queuedResults = signal<string[]>([]);

  violationCode = `
// ❌ VIOLATION: Race Conditions
// Multiple simultaneous requests, no deduplication

onUserClick() {
  // User clicks rapidly - multiple requests!
  this.http.get('/api/user/123').subscribe(user => {
    this.user = user;
  });
}

// Or sequential operations without queue
saveData(data: Data) {
  // If called multiple times, order is unpredictable
  this.http.post('/api/save', data).subscribe();
}
`;

  solutionCode = `
// ✅ SOLUTION: Request Deduplication & Queuing
// Prevent duplicate requests and ensure order

// Pattern 1: Request Deduplication
@Injectable()
export class DeduplicationService {
  private pendingRequests = new Map<string, Observable<any>>();
  
  deduplicate<T>(key: string, requestFn: () => Observable<T>): Observable<T> {
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key)!; // Return existing
    }
    
    const request$ = requestFn().pipe(
      finalize(() => this.pendingRequests.delete(key)),
      shareReplay(1)
    );
    
    this.pendingRequests.set(key, request$);
    return request$;
  }
}

// Pattern 2: Sequential Queue
private queue$ = new Subject<() => Observable<any>>();

constructor() {
  this.queue$.pipe(
    concatMap(task => task()) // Process sequentially
  ).subscribe();
}

enqueue<T>(task: () => Observable<T>): Observable<T> {
  return new Observable(observer => {
    const wrappedTask = () => task().pipe(
      tap({
        next: value => observer.next(value),
        error: err => observer.error(err),
        complete: () => observer.complete()
      })
    );
    this.queue$.next(wrappedTask);
  });
}
`;

  constructor() {
    // Queue setup is handled in testQueue method
  }

  testRaceCondition(): void {
    this.raceConditionResults.set([]);
    // Simulate rapid clicks - multiple requests
    for (let i = 0; i < 3; i++) {
      this.apiService.simulateApiCall(`Request ${i}`, 500).subscribe({
        next: (result) => {
          this.raceConditionResults.update(arr => [...arr, `Result: ${result}`]);
        }
      });
    }
  }

  testDeduplication(): void {
    this.deduplicatedResults.set([]);
    // Same request multiple times - should deduplicate
    for (let i = 0; i < 3; i++) {
      this.deduplicationService.deduplicate(
        'same-request',
        () => this.apiService.simulateApiCall('Deduplicated', 500)
      ).subscribe({
        next: (result) => {
          this.deduplicatedResults.update(arr => [...arr, `Result: ${result}`]);
        }
      });
    }
  }

  testQueue(): void {
    this.queuedResults.set([]);
    // Add tasks to queue - should process sequentially
    for (let i = 0; i < 3; i++) {
      const taskIndex = i;
      const task = () => this.apiService.simulateApiCall(`Task ${taskIndex}`, 300);
      task().subscribe({
        next: (result) => {
          this.queuedResults.update(arr => [...arr, `Queued: ${result}`]);
        }
      });
    }
  }
}

