import { NgIcon } from '@ng-icons/core';
import { Component, signal, inject, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { EnhancedButtonComponent } from '../../../shared/components/enhanced-button/enhanced-button.component';
import { of, from, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-creation-operators-demo',
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
    InputTextModule,
    MessageModule
  ],
  templateUrl: './creation-operators-demo.component.html',
  styleUrl: './creation-operators-demo.component.scss'
})
export class CreationOperatorsDemoComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  ofResult = signal<string>('');
  fromResult = signal<string>('');
  fromEventResult = signal<string>('');
  searchValue = signal('');

  violationCode = `
// ❌ VIOLATION: Not using observables
// Manual event handling, no reactive patterns

export class SearchComponent {
  searchValue = '';
  
  onInput(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    // Manual debouncing with setTimeout
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.search(this.searchValue);
    }, 300);
  }
  
  // Problems:
  // - Manual timer management
  // - No cancellation
  // - Hard to test
  // - Not reactive
}
`;

  solutionCode = `
// ✅ SOLUTION: Creation Operators
// Reactive, cancellable, testable

import { of, from, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

// of() - Emits values synchronously, then completes
const config$ = of({ apiUrl: '/api', timeout: 5000 });
// Use case: Static configuration, mock data, default values

// from() - Converts arrays, promises, iterables to observables
const users$ = from(fetch('/api/users').then(r => r.json()));
// Use case: Converting promises, iterating arrays reactively

// fromEvent() - DOM events to observable streams
const clicks$ = fromEvent(document, 'click');
// Use case: Event handling, user interactions

// Angular 17+ Application:
@Component({
  selector: 'app-search',
  standalone: true,
  template: \`<input #searchInput type="text" />\`
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  
  ngAfterViewInit() {
    // Converting DOM events to reactive streams
    fromEvent<InputEvent>(this.searchInput.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map(event => (event.target as HTMLInputElement).value)
      )
      .subscribe(query => this.search(query));
  }
}
`;

  ngAfterViewInit(): void {
    if (this.searchInput?.nativeElement) {
      fromEvent<InputEvent>(this.searchInput.nativeElement, 'input').pipe(
        debounceTime(300),
        map(event => (event.target as HTMLInputElement).value)
      ).subscribe(value => {
        this.fromEventResult.set(`Searching for: "${value}"`);
        this.searchValue.set(value);
      });
    }
  }

  testOf(): void {
    of({ apiUrl: '/api', timeout: 5000 }).subscribe(config => {
      this.ofResult.set(`Config: ${JSON.stringify(config)}`);
    });
  }

  testFrom(): void {
    const promise = Promise.resolve(['User 1', 'User 2', 'User 3']);
    from(promise).subscribe(users => {
      this.fromResult.set(`Users: ${users.join(', ')}`);
    });
  }
}








