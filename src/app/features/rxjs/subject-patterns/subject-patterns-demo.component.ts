import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject-patterns-demo',
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
    FormsModule
  ],
  templateUrl: './subject-patterns-demo.component.html',
  styleUrl: './subject-patterns-demo.component.scss'
})
export class SubjectPatternsDemoComponent implements OnInit {
  // BehaviorSubject: Emits current value to new subscribers
  private state$ = new BehaviorSubject<string>('Initial State');
  readonly state = this.state$.asObservable();
  currentState = signal('Initial State');

  // ReplaySubject: Replays last N values
  private cache$ = new ReplaySubject<string>(3);
  readonly cache = this.cache$.asObservable();
  cachedValues = signal<string[]>([]);

  // AsyncSubject: Emits only last value on completion
  private init$ = new AsyncSubject<string>();
  readonly init = this.init$.asObservable();
  initialized = signal(false);
  initValue = signal<string>('');

  newStateValue = signal('');
  newCacheValue = signal('');

  violationCode = `
// ❌ VIOLATION: Using Observable.create everywhere
// No state management, no caching, no initialization control

class StateService {
  private state = 'initial';
  
  getState(): Observable<string> {
    return Observable.create(observer => {
      observer.next(this.state);
    });
  }
  
  setState(newState: string) {
    this.state = newState;
    // Subscribers don't get notified!
  }
}
`;

  solutionCode = `
// ✅ SOLUTION: Subject Patterns
// Proper state management with different Subject types

// BehaviorSubject: Current state
class StateService {
  private state$ = new BehaviorSubject<string>('initial');
  readonly state = this.state$.asObservable();
  
  setState(newState: string) {
    this.state$.next(newState);
  }
}

// ReplaySubject: Cache last N values
class CacheService {
  private cache$ = new ReplaySubject<string>(5);
  readonly cache = this.cache$.asObservable();
  
  addToCache(value: string) {
    this.cache$.next(value);
  }
}

// AsyncSubject: One-time initialization
class InitService {
  private init$ = new AsyncSubject<void>();
  readonly init = this.init$.asObservable();
  
  initialize() {
    // Perform initialization
    this.init$.next();
    this.init$.complete();
  }
}
`;

  updateState(): void {
    if (this.newStateValue().trim()) {
      this.state$.next(this.newStateValue());
      this.currentState.set(this.newStateValue());
      this.newStateValue.set('');
    }
  }

  addToCache(): void {
    if (this.newCacheValue().trim()) {
      this.cache$.next(this.newCacheValue());
      this.cachedValues.update(arr => [...arr, this.newCacheValue()]);
      this.newCacheValue.set('');
    }
  }

  initialize(): void {
    this.init$.next('Initialization Complete');
    this.init$.complete();
    this.initialized.set(true);
  }

  ngOnInit(): void {
    this.state.subscribe(value => {
      this.currentState.set(value);
    });

    this.cache.subscribe(value => {
      this.cachedValues.update(arr => [...arr, value]);
    });

    this.init.subscribe(value => {
      this.initValue.set(value);
    });
  }
}

