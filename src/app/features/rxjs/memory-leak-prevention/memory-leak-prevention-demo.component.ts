import { NgIcon } from '@ng-icons/core';
import { Component, signal, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { MessageModule } from 'primeng/message';
import { EnhancedButtonComponent } from '../../../shared/components/enhanced-button/enhanced-button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-memory-leak-prevention-demo',
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
    EnhancedButtonComponent,
    MessageModule
  ],
  templateUrl: './memory-leak-prevention-demo.component.html',
  styleUrl: './memory-leak-prevention-demo.component.scss'
})
export class MemoryLeakPreventionDemoComponent {
  private destroyRef = inject(DestroyRef);
  private destroy$ = new Subject<void>();

  leakyCount = signal(0);
  safeCount = signal(0);
  isLeakyActive = signal(false);
  isSafeActive = signal(false);
  private leakySubscription: any;
  private safeSubscription: any;

  violationCode = `
// ❌ VIOLATION: Memory Leak
// Subscription never unsubscribes

export class LeakyComponent implements OnInit {
  ngOnInit() {
    // This subscription never unsubscribes!
    interval(1000).subscribe(count => {
      this.count = count;
    });
  }
  
  // No ngOnDestroy - subscription continues after component destruction
}
`;

  solutionCode = `
// ✅ SOLUTION: Proper Cleanup
// Multiple patterns for subscription cleanup

// Pattern 1: takeUntilDestroyed (Angular 17+)
export class SafeComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  
  ngOnInit() {
    interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(count => {
      this.count = count;
    });
  }
}

// Pattern 2: takeUntil with Subject
export class SafeComponent2 implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    interval(1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(count => {
      this.count = count;
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
`;

  startLeaky(): void {
    this.isLeakyActive.set(true);
    this.leakyCount.set(0);
    // This creates a memory leak - no cleanup!
    this.leakySubscription = interval(1000).subscribe(count => {
      this.leakyCount.set(count);
    });
  }

  startSafe(): void {
    this.isSafeActive.set(true);
    this.safeCount.set(0);
    // This is safe - automatically cleaned up
    this.safeSubscription = interval(1000).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(count => {
      this.safeCount.set(count);
    });
  }

  stopLeaky(): void {
    if (this.leakySubscription) {
      this.leakySubscription.unsubscribe();
      this.leakySubscription = null;
    }
    this.isLeakyActive.set(false);
  }

  stopSafe(): void {
    if (this.safeSubscription) {
      this.safeSubscription.unsubscribe();
      this.safeSubscription = null;
    }
    this.isSafeActive.set(false);
  }
}

