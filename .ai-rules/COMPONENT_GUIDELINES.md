# 🎨 Component Development Guidelines

## Component Template

### ✅ Good Component Structure

```typescript
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface User {
  id: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
      <h2 class="text-lg font-bold text-gray-900">{{ user.name }}</h2>
      <p class="text-sm text-gray-600 mt-1">{{ user.email }}</p>
      <button 
        (click)="onSelect()"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Select
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit, OnDestroy {
  @Input() user!: User;
  @Output() userSelected = new EventEmitter<User>();

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // Initialize component
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelect(): void {
    this.userSelected.emit(this.user);
  }
}
```

---

## Reusable Component Rules

### ✅ DO

1. **Accept configuration via @Input**
   ```typescript
   @Input() variant: 'primary' | 'secondary' = 'primary';
   @Input() size: 'sm' | 'md' | 'lg' = 'md';
   @Input() disabled: boolean = false;
   ```

2. **Emit events via @Output**
   ```typescript
   @Output() clicked = new EventEmitter<void>();
   @Output() valueChanged = new EventEmitter<string>();
   ```

3. **Use content projection**
   ```typescript
   // Component
   <div class="card">
     <ng-content></ng-content>
   </div>
   
   // Usage
   <app-card>
     <h1>Custom content</h1>
   </app-card>
   ```

4. **Document with JSDoc**
   ```typescript
   /**
    * Displays a user card with name and email
    * @example
    * <app-user-card [user]="user" (userSelected)="onSelect($event)"></app-user-card>
    */
   @Component({...})
   export class UserCardComponent { }
   ```

### ❌ DON'T

1. **Don't hardcode values**
   ```typescript
   // Bad
   <div class="text-red-500">Error</div>
   
   // Good
   <div [class]="errorClass">{{ errorMessage }}</div>
   ```

2. **Don't use component-specific logic in shared components**
   ```typescript
   // Bad - Feature-specific logic
   if (this.featureName === 'users') {
     // Do something
   }
   
   // Good - Use @Input for configuration
   @Input() config: ComponentConfig;
   ```

3. **Don't directly manipulate DOM**
   ```typescript
   // Bad
   document.getElementById('myElement').style.color = 'red';
   
   // Good
   <div [class.error]="isError">Content</div>
   ```

---

## Responsive Component Template

```typescript
@Component({
  selector: 'app-responsive-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div *ngFor="let item of items; trackBy: trackById" 
           class="bg-white rounded-lg shadow p-4 sm:p-6 md:p-8">
        
        <!-- Responsive heading -->
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          {{ item.title }}
        </h2>
        
        <!-- Responsive text -->
        <p class="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
          {{ item.description }}
        </p>
        
        <!-- Responsive button -->
        <button class="mt-4 w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Action
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveCardComponent {
  @Input() items: Item[] = [];

  trackById(index: number, item: Item): string {
    return item.id;
  }
}
```

---

## Component Communication

### Parent to Child (@Input)
```typescript
// Parent
<app-user-card [user]="selectedUser"></app-user-card>

// Child
@Input() user!: User;
```

### Child to Parent (@Output)
```typescript
// Child
@Output() userSelected = new EventEmitter<User>();

onSelect(): void {
  this.userSelected.emit(this.user);
}

// Parent
<app-user-card (userSelected)="onUserSelected($event)"></app-user-card>
```

### Via Service (Complex scenarios)
```typescript
// Service
@Injectable({ providedIn: 'root' })
export class UserService {
  private userSelected$ = new Subject<User>();
  
  selectUser(user: User): void {
    this.userSelected$.next(user);
  }
  
  getSelectedUser(): Observable<User> {
    return this.userSelected$.asObservable();
  }
}

// Component
constructor(private userService: UserService) {}

onUserSelect(user: User): void {
  this.userService.selectUser(user);
}
```

---

## Styling Best Practices

### Responsive Padding
```html
<!-- Mobile: p-2, Tablet: p-4, Desktop: p-6 -->
<div class="p-2 sm:p-4 md:p-6">Content</div>
```

### Responsive Grid
```html
<!-- 1 col mobile, 2 cols tablet, 3 cols desktop -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div *ngFor="let item of items">{{ item }}</div>
</div>
```

### Responsive Typography
```html
<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">
  Responsive Heading
</h1>
```

### Responsive Flexbox
```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Left</div>
  <div class="flex-1">Right</div>
</div>
```

---

## Performance Optimization

### Use trackBy in *ngFor
```typescript
trackByUserId(index: number, user: User): string {
  return user.id;
}

// Template
<div *ngFor="let user of users; trackBy: trackByUserId">
  {{ user.name }}
</div>
```

### Use async pipe
```typescript
// Component
users$ = this.userService.getUsers();

// Template
<div *ngFor="let user of users$ | async">
  {{ user.name }}
</div>
```

### Unsubscribe pattern
```typescript
private destroy$ = new Subject<void>();

ngOnInit(): void {
  this.userService.getUsers()
    .pipe(takeUntil(this.destroy$))
    .subscribe(users => this.users = users);
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
```

---

## Testing Components

```typescript
describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
  });

  it('should display user name', () => {
    component.user = { id: '1', name: 'John', email: 'john@example.com' };
    fixture.detectChanges();
    
    expect(fixture.nativeElement.textContent).toContain('John');
  });

  it('should emit userSelected event', () => {
    spyOn(component.userSelected, 'emit');
    component.onSelect();
    
    expect(component.userSelected.emit).toHaveBeenCalled();
  });
});
```

---

## Checklist

- [ ] Component uses OnPush change detection
- [ ] Component is standalone
- [ ] All @Input/@Output have types
- [ ] Component unsubscribes in ngOnDestroy
- [ ] Uses trackBy in *ngFor loops
- [ ] Uses Tailwind CSS only
- [ ] Responsive design implemented
- [ ] No console.log statements
- [ ] No `any` types
- [ ] Tests written (80%+ coverage)
- [ ] JSDoc comments added
- [ ] No circular dependencies

---

**Remember**: Reusable components should be generic, configurable, and not tied to specific features! 🎯

