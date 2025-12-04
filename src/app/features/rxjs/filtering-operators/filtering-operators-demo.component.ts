import { Component, signal, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, Subject, of } from 'rxjs';
import { filter, take, takeUntil, takeWhile, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filtering-operators-demo',
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
    InputNumberModule,
    MessageModule
  ],
  templateUrl: './filtering-operators-demo.component.html',
  styleUrl: './filtering-operators-demo.component.scss'
})
export class FilteringOperatorsDemoComponent {
  private destroyRef = inject(DestroyRef);
  private destroy$ = new Subject<void>();

  filterResult = signal<number[]>([]);
  takeResult = signal<number[]>([]);
  takeUntilResult = signal<number[]>([]);
  takeWhileResult = signal<number[]>([]);
  distinctResult = signal<string[]>([]);
  isStreaming = signal(false);
  streamCount = signal(0);

  violationCode = `
// ❌ VIOLATION: Memory Leaks & Inefficient Patterns
// No filtering, no cleanup, duplicate emissions

export class DashboardComponent implements OnInit {
  ngOnInit() {
    // Memory leak - never unsubscribes!
    interval(1000).subscribe(count => {
      this.updateData(count);
    });
    
    // No filtering - processes all values
    this.formControl.valueChanges.subscribe(value => {
      this.search(value); // Called on every keystroke, even duplicates!
    });
    
    // No limit - stream never completes
    this.dataStream$.subscribe(data => {
      this.processData(data); // Processes infinite stream
    });
  }
  
  // No ngOnDestroy - subscriptions continue after component destruction
}
`;

  solutionCode = `
// ✅ SOLUTION: Filtering Operators
// Memory leak prevention, efficient processing, cleanup

export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private refreshTrigger$ = new Subject<void>();
  
  data$ = combineLatest([
    this.route.params,
    this.refreshTrigger$.pipe(startWith(null))
  ]).pipe(
    debounceTime(100),
    switchMap(([params]) => this.loadData(params)),
    shareReplay({ bufferSize: 1, refCount: true }),
    takeUntil(this.destroy$) // Cleanup strategy
  );
  
  // filter() - Conditional emission
  numbers$ = interval(1000).pipe(
    filter(n => n > 5), // Only emit numbers > 5
    takeUntil(this.destroy$)
  );
  
  // take(n) - First n values then complete
  firstValue$ = this.data$.pipe(
    take(1) // Equivalent to first() but safer
  );
  
  // takeUntil() - Complete when notifier emits
  stream$ = interval(1000).pipe(
    takeUntil(this.destroy$) // Automatic unsubscription
  );
  
  // takeWhile() - Complete when condition fails
  countUp$ = interval(100).pipe(
    takeWhile(value => value < 100)
  );
  
  // distinctUntilChanged() - Only emit when value changes
  search$ = this.formControl.valueChanges.pipe(
    distinctUntilChanged(), // Prevent duplicate API calls
    debounceTime(300),
    switchMap(query => this.search(query))
  );
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
`;

  testFilter(): void {
    this.filterResult.set([]);
    interval(200).pipe(
      filter(n => n > 5 && n % 2 === 0), // Only even numbers > 5
      take(5),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(n => {
      this.filterResult.update(arr => [...arr, n]);
    });
  }

  testTake(): void {
    this.takeResult.set([]);
    interval(300).pipe(
      take(5) // Take only first 5 values
    ).subscribe(n => {
      this.takeResult.update(arr => [...arr, n]);
    });
  }

  testTakeUntil(): void {
    this.takeUntilResult.set([]);
    this.isStreaming.set(true);
    
    interval(200).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (n) => {
        this.takeUntilResult.update(arr => [...arr, n]);
        this.streamCount.set(n);
      },
      complete: () => {
        this.isStreaming.set(false);
      }
    });
    
    // Auto-stop after 3 seconds
    setTimeout(() => {
      this.destroy$.next();
      this.destroy$.complete();
      this.destroy$ = new Subject<void>();
    }, 3000);
  }

  testTakeWhile(): void {
    this.takeWhileResult.set([]);
    interval(200).pipe(
      takeWhile(value => value < 10) // Stop when value >= 10
    ).subscribe(n => {
      this.takeWhileResult.update(arr => [...arr, n]);
    });
  }

  testDistinctUntilChanged(): void {
    this.distinctResult.set([]);
    of('a', 'a', 'b', 'b', 'b', 'c', 'a', 'a').pipe(
      distinctUntilChanged() // Only emit when value changes
    ).subscribe(value => {
      this.distinctResult.update(arr => [...arr, value]);
    });
  }
}




