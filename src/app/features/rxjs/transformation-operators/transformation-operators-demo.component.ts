import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ApiService } from '../shared/services/api.service';
import { of, from } from 'rxjs';
import { map, switchMap, mergeMap, concatMap, exhaustMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-transformation-operators-demo',
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
    InputTextModule,
    MessageModule
  ],
  templateUrl: './transformation-operators-demo.component.html',
  styleUrl: './transformation-operators-demo.component.scss'
})
export class TransformationOperatorsDemoComponent {
  private apiService = inject(ApiService);

  searchQuery = signal('');
  mapResult = signal<string>('');
  switchMapResult = signal<string>('');
  mergeMapResult = signal<string>('');
  concatMapResult = signal<string>('');
  exhaustMapResult = signal<string>('');
  requestLogs = signal<string[]>([]);

  violationCode = `
// ❌ VIOLATION: Wrong operator choice
// Race conditions, memory leaks, incorrect behavior

@Injectable()
export class UserService {
  private http = inject(HttpClient);
  
  // WRONG - Race condition potential
  searchUsersWrong(query: string) {
    return this.http.get(\`/api/users?q=\${query}\`).pipe(
      mergeMap(users => this.enrichUserData(users)) // DON'T DO THIS
      // Problem: If user types fast, multiple requests run
      // Latest result might arrive before earlier ones
    );
  }
  
  // WRONG - No cancellation
  saveDataWrong(data: any) {
    return this.http.post('/api/save', data).pipe(
      mergeMap(() => this.http.post('/api/log', data))
      // Problem: If called multiple times, all requests execute
    );
  }
}
`;

  solutionCode = `
// ✅ SOLUTION: Correct operator selection
// Prevents race conditions, proper cancellation, sequential when needed

@Injectable()
export class UserService {
  private http = inject(HttpClient);
  
  // CORRECT - Cancels previous searches
  searchUsers(query: string) {
    return this.http.get(\`/api/users?q=\${query}\`).pipe(
      switchMap(users => this.enrichUserData(users)) // Latest search wins
    );
  }
  
  // CORRECT - Sequential processing when order matters
  processUserActions(actions: Action[]) {
    return from(actions).pipe(
      concatMap(action => this.http.post('/api/action', action)),
      toArray() // Collect all results
    );
  }
  
  // CORRECT - Prevent duplicate submissions
  saveData(data: any) {
    return this.http.post('/api/save', data).pipe(
      exhaustMap(() => this.http.post('/api/log', data))
      // Ignores new clicks while save is in progress
    );
  }
}

// Operator Selection Guide:
// map() - Simple 1-to-1 transformation
// switchMap() - Cancels previous (search, typeahead)
// mergeMap() - Parallel operations (uploads, analytics)
// concatMap() - Sequential (order matters)
// exhaustMap() - Ignore while busy (save button, login)
`;

  testMap(): void {
    of(1, 2, 3).pipe(
      map(x => x * 10)
    ).subscribe(result => {
      this.mapResult.set(`Result: ${result}`);
    });
  }

  testSwitchMap(): void {
    this.requestLogs.set([]);
    this.switchMapResult.set('Searching...');
    
    // Simulate rapid search queries
    from(['a', 'ab', 'abc']).pipe(
      switchMap(query => {
        this.requestLogs.update(logs => [...logs, `Request: "${query}"`]);
        return this.apiService.simulateApiCall(`Results for "${query}"`, 500);
      })
    ).subscribe({
      next: (result) => {
        this.switchMapResult.set(`Latest: ${result}`);
        this.requestLogs.update(logs => [...logs, `Response: ${result}`]);
      }
    });
  }

  testMergeMap(): void {
    this.requestLogs.set([]);
    this.mergeMapResult.set('Processing...');
    
    // Simulate parallel uploads
    from(['file1', 'file2', 'file3']).pipe(
      mergeMap(file => {
        this.requestLogs.update(logs => [...logs, `Uploading: ${file}`]);
        return this.apiService.simulateApiCall(`Uploaded: ${file}`, 300);
      })
    ).subscribe({
      next: (result) => {
        this.mergeMapResult.set(`Completed: ${result}`);
        this.requestLogs.update(logs => [...logs, `Done: ${result}`]);
      }
    });
  }

  testConcatMap(): void {
    this.requestLogs.set([]);
    this.concatMapResult.set('Processing sequentially...');
    
    // Simulate sequential actions
    from(['action1', 'action2', 'action3']).pipe(
      concatMap(action => {
        this.requestLogs.update(logs => [...logs, `Processing: ${action}`]);
        return this.apiService.simulateApiCall(`Completed: ${action}`, 400);
      })
    ).subscribe({
      next: (result) => {
        this.concatMapResult.set(`Latest: ${result}`);
        this.requestLogs.update(logs => [...logs, `Done: ${result}`]);
      }
    });
  }

  testExhaustMap(): void {
    this.requestLogs.set([]);
    this.exhaustMapResult.set('Ready to save...');
    
    // Simulate rapid save clicks
    from(['click1', 'click2', 'click3']).pipe(
      exhaustMap(() => {
        this.requestLogs.update(logs => [...logs, 'Save clicked']);
        return this.apiService.simulateApiCall('Saved!', 1000);
      })
    ).subscribe({
      next: (result) => {
        this.exhaustMapResult.set(`Result: ${result}`);
        this.requestLogs.update(logs => [...logs, `Saved: ${result}`]);
      }
    });
  }
}

