import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { EnhancedButtonComponent } from '../../../shared/components/enhanced-button/enhanced-button.component';
import { ApiService } from '../shared/services/api.service';
import { combineLatest, forkJoin, merge, concat, of } from 'rxjs';
import { startWith, map, delay, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combination-operators-demo',
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
    FormsModule,
    MessageModule
  ],
  templateUrl: './combination-operators-demo.component.html',
  styleUrl: './combination-operators-demo.component.scss'
})
export class CombinationOperatorsDemoComponent {
  private apiService = inject(ApiService);

  country = signal('USA');
  state = signal('CA');
  combineLatestResult = signal<string>('');
  forkJoinResult = signal<string>('');
  mergeResult = signal<string>('');
  concatResult = signal<string>('');
  withLatestFromResult = signal<string>('');

  violationCode = `
// ❌ VIOLATION: Sequential Loading, No Parallelization
// Slow, inefficient, poor user experience

loadOrderDetails(orderId: string) {
  // Sequential - slow!
  this.http.get(\`/api/orders/\${orderId}\`).subscribe(order => {
    this.http.get(\`/api/customers/\${order.customerId}\`).subscribe(customer => {
      this.http.get(\`/api/orders/\${orderId}/items\`).subscribe(items => {
        // All data loaded, but took 3x longer than needed
        this.displayOrder({ order, customer, items });
      });
    });
  });
}

// No reactive form field combination
onCountryChange() {
  // Manual handling, not reactive
  this.loadStates(this.country);
}
`;

  solutionCode = `
// ✅ SOLUTION: Combination Operators
// Parallel loading, reactive combinations, efficient

@Injectable()
export class OrderService {
  private http = inject(HttpClient);
  
  // forkJoin() - Parallel loading
  loadOrderDetails(orderId: string) {
    return forkJoin({
      order: this.http.get<Order>(\`/api/orders/\${orderId}\`),
      customer: this.http.get<Customer>(\`/api/customers/\${orderId}\`),
      items: this.http.get<Item[]>(\`/api/orders/\${orderId}/items\`)
    }).pipe(
      map(({ order, customer, items }) => ({
        ...order,
        customer,
        items,
        total: items.reduce((sum, item) => sum + item.price, 0)
      })),
      catchError(error => {
        console.error('Failed to load order details', error);
        return of(null); // Graceful degradation
      })
    );
  }
}

// combineLatest() - Reactive form field combination
@Component({
  template: \`
    <select [(ngModel)]="country">...</select>
    <select [(ngModel)]="state">...</select>
  \`
})
export class FormComponent {
  country = 'USA';
  state = 'CA';
  
  cities$ = combineLatest([
    this.countryControl.valueChanges.pipe(startWith(this.country)),
    this.stateControl.valueChanges.pipe(startWith(this.state))
  ]).pipe(
    switchMap(([country, state]) => this.loadCities(country, state))
  );
}

// merge() - Multiple event sources
updates$ = merge(
  this.wsService.messages$,
  this.pollingService.updates$
).subscribe(update => this.handleUpdate(update));

// withLatestFrom() - Enrich data
saveClick$.pipe(
  withLatestFrom(this.formValue$, this.userId$),
  switchMap(([_, formValue, userId]) => this.save(formValue, userId))
).subscribe();
`;

  testCombineLatest(): void {
    combineLatest([
      of(this.country()).pipe(startWith(this.country())),
      of(this.state()).pipe(startWith(this.state()))
    ]).pipe(
      map(([country, state]) => `Loading cities for ${country}, ${state}...`)
    ).subscribe(result => {
      this.combineLatestResult.set(result);
    });
  }

  testForkJoin(): void {
    this.forkJoinResult.set('Loading...');
    forkJoin({
      user: this.apiService.simulateApiCall({ id: 1, name: 'John Doe' }, 500),
      settings: this.apiService.simulateApiCall({ theme: 'dark', lang: 'en' }, 400),
      permissions: this.apiService.simulateApiCall(['read', 'write'], 300)
    }).pipe(
      map(({ user, settings, permissions }) => 
        `User: ${user.name}, Theme: ${settings.theme}, Permissions: ${permissions.join(', ')}`
      )
    ).subscribe(result => {
      this.forkJoinResult.set(result);
    });
  }

  testMerge(): void {
    this.mergeResult.set('');
    const source1$ = of('Message 1').pipe(delay(200));
    const source2$ = of('Message 2').pipe(delay(100));
    const source3$ = of('Message 3').pipe(delay(300));
    
    merge(source1$, source2$, source3$).subscribe(msg => {
      this.mergeResult.update(current => current ? `${current}, ${msg}` : msg);
    });
  }

  testConcat(): void {
    this.concatResult.set('');
    const source1$ = of('Task 1').pipe(delay(200));
    const source2$ = of('Task 2').pipe(delay(200));
    const source3$ = of('Task 3').pipe(delay(200));
    
    concat(source1$, source2$, source3$).subscribe(msg => {
      this.concatResult.update(current => current ? `${current} → ${msg}` : msg);
    });
  }

  testWithLatestFrom(): void {
    const saveClick$ = of('save');
    const formValue$ = of({ name: 'John', email: 'john@example.com' });
    const userId$ = of('123');
    
    saveClick$.pipe(
      withLatestFrom(formValue$, userId$),
      map(([_, formValue, userId]) => ({ formValue, userId }))
    ).subscribe(({ formValue, userId }) => {
      this.withLatestFromResult.set(`Saved: ${formValue.name} (User: ${userId})`);
    });
  }
}

