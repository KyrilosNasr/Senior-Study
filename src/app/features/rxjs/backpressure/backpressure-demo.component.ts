import { Component, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EnhancedButtonComponent } from '../../../shared/components/enhanced-button/enhanced-button.component';
import { fromEvent } from 'rxjs';
import { throttleTime, debounceTime, sampleTime, auditTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-backpressure-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    EnhancedButtonComponent,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './backpressure-demo.component.html',
  styleUrl: './backpressure-demo.component.scss'
})
export class BackpressureDemoComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  searchValue = signal('');
  debouncedValue = signal('');
  throttledValue = signal('');
  sampledValue = signal('');
  scrollPosition = signal(0);
  throttledScroll = signal(0);
  debouncedScroll = signal(0);

  violationCode = `
// ❌ VIOLATION: No Rate Limiting
// High-frequency events cause performance issues

fromEvent(input, 'input').subscribe(event => {
  // Called on EVERY keystroke - too many API calls!
  this.search(event.target.value);
});

fromEvent(window, 'scroll').subscribe(() => {
  // Called on EVERY scroll event - performance killer!
  this.updatePosition(window.scrollY);
});
`;

  solutionCode = `
// ✅ SOLUTION: Rate Limiting Operators
// Control frequency of emissions

// Debounce: Wait for pause in emissions
fromEvent(input, 'input').pipe(
  debounceTime(300), // Wait 300ms after last keystroke
  map(e => e.target.value)
).subscribe(value => {
  this.search(value); // Only called after user stops typing
});

// Throttle: Emit first, then ignore for duration
fromEvent(window, 'scroll').pipe(
  throttleTime(100), // Max once per 100ms
  map(() => window.scrollY)
).subscribe(position => {
  this.updatePosition(position);
});

// Sample: Emit latest at intervals
fromEvent(document, 'mousemove').pipe(
  sampleTime(200), // Sample every 200ms
  map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY }))
).subscribe(position => {
  this.trackMouse(position);
});
`;

  ngAfterViewInit(): void {
    if (this.searchInput?.nativeElement) {
      fromEvent<InputEvent>(this.searchInput.nativeElement, 'input').pipe(
        debounceTime(300),
        map(event => (event.target as HTMLInputElement).value)
      ).subscribe(value => {
        this.debouncedValue.set(value);
      });
    }
  }

  testThrottle(): void {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      this.throttledValue.set(`Event ${count}`);
      if (count >= 10) {
        clearInterval(interval);
      }
    }, 50);
  }
}

