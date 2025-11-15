# 🤖 AI Agent Coding Standards

## TypeScript Rules

### ✅ MUST DO

1. **Always use proper types**
   ```typescript
   // Good
   interface User {
     id: string;
     name: string;
     email: string;
   }
   
   function getUser(id: string): User { }
   ```

2. **Use generics for reusable code**
   ```typescript
   // Good
   function getValue<T>(key: string): T { }
   
   interface ApiResponse<T> {
     data: T;
     status: number;
   }
   ```

3. **Explicit return types on all functions**
   ```typescript
   // Good
   function calculateTotal(items: Item[]): number {
     return items.reduce((sum, item) => sum + item.price, 0);
   }
   ```

4. **Use strict TypeScript mode**
   - No implicit any
   - No null/undefined without proper handling
   - Strict property initialization

### ❌ NEVER DO

1. **NEVER use `any` type**
   ```typescript
   // Bad - FORBIDDEN
   const data: any = response;
   
   // Good
   const data: ApiResponse<User> = response;
   ```

2. **NEVER ignore TypeScript errors**
   ```typescript
   // Bad - FORBIDDEN
   // @ts-ignore
   const value = wrongType;
   
   // Good - Fix the type issue
   const value: CorrectType = wrongType as CorrectType;
   ```

3. **NEVER use implicit any**
   ```typescript
   // Bad - FORBIDDEN
   function process(data) { }
   
   // Good
   function process(data: unknown): void { }
   ```

---

## Component Rules

### ✅ MUST DO

1. **Use OnPush change detection**
   ```typescript
   @Component({
     selector: 'app-user',
     template: `...`,
     changeDetection: ChangeDetectionStrategy.OnPush
   })
   export class UserComponent { }
   ```

2. **Use standalone components**
   ```typescript
   @Component({
     selector: 'app-user',
     standalone: true,
     imports: [CommonModule, FormsModule]
   })
   export class UserComponent { }
   ```

3. **Use Input/Output for communication**
   ```typescript
   @Input() user!: User;
   @Output() userSelected = new EventEmitter<User>();
   ```

4. **Unsubscribe from observables**
   ```typescript
   private destroy$ = new Subject<void>();
   
   ngOnInit() {
     this.service.data$
       .pipe(takeUntil(this.destroy$))
       .subscribe(data => this.data = data);
   }
   
   ngOnDestroy() {
     this.destroy$.next();
     this.destroy$.complete();
   }
   ```

### ❌ NEVER DO

1. **NEVER modify shared components**
   - Shared components are in `src/app/shared/`
   - Create feature-specific components instead
   - Use @Input/@Output for customization

2. **NEVER use inline styles**
   ```typescript
   // Bad - FORBIDDEN
   <div [style]="{ color: 'red', padding: '10px' }">
   
   // Good - Use Tailwind
   <div class="text-red-500 p-2.5">
   ```

3. **NEVER use custom CSS**
   ```typescript
   // Bad - FORBIDDEN
   <style>
     .custom-button { color: red; padding: 10px; }
   </style>
   
   // Good - Use Tailwind
   <button class="bg-red-500 px-4 py-2 rounded">
   ```

---

## Styling Rules

### ✅ MUST DO

1. **Use Tailwind CSS only**
   ```html
   <!-- Good -->
   <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
     <h1 class="text-lg font-bold">Title</h1>
   </div>
   ```

2. **Mobile-first responsive design**
   ```html
   <!-- Good - Mobile first -->
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     <!-- Content -->
   </div>
   ```

3. **Use Tailwind breakpoints**
   - `sm`: 640px
   - `md`: 768px
   - `lg`: 1024px
   - `xl`: 1280px
   - `2xl`: 1536px

4. **Responsive text sizes**
   ```html
   <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl">
     Responsive Title
   </h1>
   ```

5. **Responsive spacing**
   ```html
   <div class="p-2 sm:p-4 md:p-6 lg:p-8">
     <!-- Content with responsive padding -->
   </div>
   ```

### ❌ NEVER DO

1. **NEVER use custom CSS**
   ```css
   /* Bad - FORBIDDEN */
   .custom-button {
     background-color: #3b82f6;
     padding: 10px 20px;
     border-radius: 4px;
   }
   ```

2. **NEVER use inline styles**
   ```html
   <!-- Bad - FORBIDDEN -->
   <div style="color: red; padding: 10px;">
   
   <!-- Good -->
   <div class="text-red-500 p-2.5">
   ```

3. **NEVER hardcode colors**
   ```html
   <!-- Bad - FORBIDDEN -->
   <div style="background-color: #3b82f6;">
   
   <!-- Good - Use Tailwind color palette -->
   <div class="bg-blue-500">
   ```

---

## Performance Rules

### ✅ MUST DO

1. **Use trackBy in *ngFor**
   ```typescript
   trackByUserId(index: number, user: User): string {
     return user.id;
   }
   
   // In template
   <div *ngFor="let user of users; trackBy: trackByUserId">
   ```

2. **Use async pipe**
   ```html
   <!-- Good -->
   <div>{{ user$ | async | json }}</div>
   ```

3. **Lazy load feature modules**
   ```typescript
   const routes: Routes = [
     {
       path: 'users',
       loadComponent: () => import('./users/users.component')
         .then(m => m.UsersComponent)
     }
   ];
   ```

4. **Use virtual scrolling for large lists**
   ```html
   <cdk-virtual-scroll-viewport itemSize="50" class="h-96">
     <div *cdkVirtualFor="let item of items">
       {{ item }}
     </div>
   </cdk-virtual-scroll-viewport>
   ```

### ❌ NEVER DO

1. **NEVER leave console.log in production**
   ```typescript
   // Bad - FORBIDDEN
   console.log('Debug info');
   
   // Good - Remove or use logger service
   this.logger.debug('Debug info');
   ```

2. **NEVER have unused imports**
   ```typescript
   // Bad - FORBIDDEN
   import { Component, OnInit, OnDestroy } from '@angular/core';
   // If OnDestroy is not used, remove it
   ```

3. **NEVER create circular dependencies**
   - Service A imports Service B
   - Service B imports Service A ❌

4. **NEVER skip change detection optimization**
   - Always use OnPush strategy
   - Always use trackBy in loops

---

## Code Organization

### File Structure
```
feature/
├── components/
│   ├── feature-list.component.ts
│   ├── feature-detail.component.ts
│   └── feature-form.component.ts
├── services/
│   └── feature.service.ts
├── models/
│   └── feature.model.ts
└── feature.routes.ts
```

### Naming Conventions
- Components: `feature.component.ts`
- Services: `feature.service.ts`
- Models: `feature.model.ts`
- Interfaces: `feature.interface.ts`
- Guards: `feature.guard.ts`
- Interceptors: `feature.interceptor.ts`

---

## Summary

| Rule | Status | Consequence |
|------|--------|-------------|
| No `any` type | ✅ MUST | Type safety failure |
| Modify shared components | ❌ NEVER | Code duplication |
| Custom CSS | ❌ NEVER | Maintenance nightmare |
| Inline styles | ❌ NEVER | Not responsive |
| OnPush strategy | ✅ MUST | Performance issue |
| Tailwind only | ✅ MUST | Consistency |
| Responsive design | ✅ MUST | Mobile support |
| Unsubscribe | ✅ MUST | Memory leak |

---

**Remember**: Keep it simple, maintainable, and performant! 🚀

