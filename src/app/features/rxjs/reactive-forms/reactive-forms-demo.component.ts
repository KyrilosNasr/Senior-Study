import { NgIcon } from '@ng-icons/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { combineLatest, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap, map } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-reactive-forms-demo',
  standalone: true,
  imports: [
    NgIcon,
    CommonModule,
    ReactiveFormsModule,
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
  templateUrl: './reactive-forms-demo.component.html',
  styleUrl: './reactive-forms-demo.component.scss'
})
export class ReactiveFormsDemoComponent {
  private apiService = inject(ApiService);

  searchForm = new FormGroup({
    search: new FormControl('', [Validators.minLength(2)]),
    category: new FormControl('all'),
    sortBy: new FormControl('name')
  });

  searchResults = signal<any[]>([]);
  isSearching = signal(false);

  violationCode = `
// ❌ VIOLATION: Manual Event Handling
// No debouncing, no reactive patterns

onSearchChange(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  if (value.length >= 2) {
    // Called on every keystroke - too many API calls!
    this.search(value);
  }
}
`;

  solutionCode = `
// ✅ SOLUTION: Reactive Forms with RxJS
// Debounced, reactive, composable

searchForm = new FormGroup({
  search: new FormControl(''),
  category: new FormControl('all'),
  sortBy: new FormControl('name')
});

// Combine multiple form controls reactively
searchResults$ = combineLatest([
  this.searchForm.get('search')!.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged()
  ),
  this.searchForm.get('category')!.valueChanges.pipe(startWith('all')),
  this.searchForm.get('sortBy')!.valueChanges.pipe(startWith('name'))
]).pipe(
  switchMap(([search, category, sortBy]) =>
    this.searchService.search({ search, category, sortBy })
  ),
  shareReplay(1)
);
`;

  constructor() {
    combineLatest([
      this.searchForm.get('search')!.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged()
      ),
      this.searchForm.get('category')!.valueChanges.pipe(startWith('all')),
      this.searchForm.get('sortBy')!.valueChanges.pipe(startWith('name'))
    ]).pipe(
      switchMap(([search, category, sortBy]) => {
        if (!search || search.length < 2) {
          return of([]);
        }
        this.isSearching.set(true);
        return this.apiService.simulateApiCall(
          [{ id: 1, name: `Result for "${search}"`, category, sortBy }],
          500
        );
      })
    ).subscribe({
      next: (results) => {
        this.searchResults.set(results);
        this.isSearching.set(false);
      },
      error: () => {
        this.isSearching.set(false);
      }
    });
  }
}

