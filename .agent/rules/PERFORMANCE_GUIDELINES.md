# ⚡ Performance Guidelines

## Change Detection Strategy

### ✅ MUST USE OnPush

```typescript
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: `...`,
  changeDetection: ChangeDetectionStrategy.OnPush  // ✅ REQUIRED
})
export class UserCardComponent {
  @Input() user!: User;
}
```

### Why OnPush?
- Reduces unnecessary change detection cycles
- Improves performance significantly
- Only checks when @Input changes or events fire
- Default strategy checks entire component tree

---

## Memory Management

### ✅ Unsubscribe Pattern

```typescript
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export class UserListComponent implements OnInit, OnDestroy {
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
}
```

### ❌ Memory Leak Pattern

```typescript
// Bad - FORBIDDEN - Memory leak!
export class UserListComponent implements OnInit {
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);  // Never unsubscribes!
  }
}
```

---

## List Rendering Optimization

### ✅ Use trackBy

```typescript
export class UserListComponent {
  users: User[] = [];

  // ✅ Good - Identifies items by ID
  trackByUserId(index: number, user: User): string {
    return user.id;
  }
}

// Template
<div *ngFor="let user of users; trackBy: trackByUserId">
  {{ user.name }}
</div>
```

### ❌ Without trackBy

```html
<!-- Bad - FORBIDDEN - Recreates all DOM nodes on every change -->
<div *ngFor="let user of users">
  {{ user.name }}
</div>
```

### Virtual Scrolling for Large Lists

```typescript
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-large-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  template: `
    <cdk-virtual-scroll-viewport itemSize="50" class="h-96">
      <div *cdkVirtualFor="let item of items">
        {{ item.name }}
      </div>
    </cdk-virtual-scroll-viewport>
  `
})
export class LargeListComponent {
  items: Item[] = [];  // Can be 10,000+ items
}
```

---

## Async Operations

### ✅ Use async Pipe

```typescript
export class UserListComponent {
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}
}

// Template - Automatically unsubscribes!
<div *ngFor="let user of users$ | async; trackBy: trackByUserId">
  {{ user.name }}
</div>
```

### ❌ Manual Subscription

```typescript
// Bad - Manual subscription management
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  ngOnDestroy(): void {
    // Must remember to unsubscribe!
  }
}
```

---

## Lazy Loading

### ✅ Lazy Load Feature Modules

```typescript
const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => import('./users/users.component')
      .then(m => m.UsersComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.component')
      .then(m => m.ProductsComponent)
  }
];
```

### ✅ Lazy Load Services

```typescript
// Only load when needed
const userService = await import('./services/user.service')
  .then(m => new m.UserService());
```

---

## Bundle Size Optimization

### ✅ Analyze Bundle

```bash
npm run build:analyze
```

### ✅ Code Splitting

```typescript
// Lazy load routes
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes')
      .then(m => m.ADMIN_ROUTES)
  }
];
```

### ✅ Tree Shaking

```typescript
// Good - Named imports (tree-shakeable)
import { map, filter } from 'rxjs/operators';

// Bad - Default import (not tree-shakeable)
import * as rxjs from 'rxjs';
```

---

## Change Detection Best Practices

### ✅ Immutable Updates

```typescript
// Good - Creates new reference
this.users = [...this.users, newUser];

// Good - NgRx handles immutability
this.store.dispatch(addUser({ user: newUser }));
```

### ❌ Mutable Updates

```typescript
// Bad - Same reference, change detection may miss it
this.users.push(newUser);
this.users[0].name = 'Updated';
```

---

## Performance Checklist

### Before Deployment

- [ ] No console.log statements
- [ ] No unused imports
- [ ] No circular dependencies
- [ ] All components use OnPush strategy
- [ ] All loops use trackBy
- [ ] All subscriptions unsubscribed
- [ ] Lazy loading implemented
- [ ] Bundle size analyzed
- [ ] Images optimized
- [ ] No memory leaks

### Runtime Performance

- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.5s

---

## Common Performance Issues

### Issue: Slow Change Detection
**Solution**: Use OnPush strategy
```typescript
changeDetection: ChangeDetectionStrategy.OnPush
```

### Issue: Memory Leaks
**Solution**: Unsubscribe in ngOnDestroy
```typescript
ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
```

### Issue: Slow List Rendering
**Solution**: Use trackBy and virtual scrolling
```html
<cdk-virtual-scroll-viewport itemSize="50">
  <div *cdkVirtualFor="let item of items; trackBy: trackById">
    {{ item }}
  </div>
</cdk-virtual-scroll-viewport>
```

### Issue: Large Bundle Size
**Solution**: Lazy load routes and code split
```typescript
loadComponent: () => import('./feature.component')
  .then(m => m.FeatureComponent)
```

---

## Performance Monitoring

### Add Performance Monitoring

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PerformanceService {
  logMetric(name: string, duration: number): void {
    console.warn(`[Performance] ${name}: ${duration}ms`);
  }

  measureOperation<T>(name: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const duration = performance.now() - start;
    this.logMetric(name, duration);
    return result;
  }
}
```

### Usage

```typescript
this.performanceService.measureOperation('loadUsers', () => {
  return this.userService.getUsers();
});
```

---

## No Over-Engineering Rule

### ✅ Keep It Simple

```typescript
// Good - Simple and readable
@Component({
  selector: 'app-user',
  template: `<div>{{ user.name }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user!: User;
}
```

### ❌ Over-Engineered

```typescript
// Bad - Unnecessary complexity
@Component({
  selector: 'app-user',
  template: `<div>{{ (user$ | async)?.name }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() set user(value: User) {
    this.user$ = of(value).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      shareReplay(1)
    );
  }
  user$!: Observable<User>;
}
```

---

## Summary

| Optimization | Impact | Effort |
|-------------|--------|--------|
| OnPush strategy | High | Low |
| trackBy in loops | High | Low |
| Unsubscribe | High | Low |
| Lazy loading | High | Medium |
| Virtual scrolling | High | Medium |
| Code splitting | Medium | Medium |
| Tree shaking | Medium | Low |
| Image optimization | Medium | Low |

---

**Remember**: Optimize for real problems, not imaginary ones! 🚀

