# 🤖 AI Agent Rules & Guidelines

This folder contains comprehensive guidelines for AI agents (and developers) working on this project.

## 📚 Documentation Files

### 1. [CODING_STANDARDS.md](./CODING_STANDARDS.md)
**Core TypeScript and Component Rules**

- ✅ TypeScript best practices
- ✅ Component development standards
- ✅ Type safety requirements
- ❌ Forbidden patterns
- ✅ Code organization

**Key Rules:**
- NO `any` type - EVER
- Use proper types and generics
- Explicit return types on all functions
- Unsubscribe from observables
- Use OnPush change detection

---

### 2. [COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md)
**Component Development Best Practices**

- ✅ Component structure template
- ✅ Reusable component rules
- ✅ Component communication patterns
- ✅ Responsive component examples
- ✅ Performance optimization
- ✅ Testing guidelines

**Key Rules:**
- Never modify shared components
- Use @Input/@Output for communication
- Accept configuration via @Input
- Emit events via @Output
- Use content projection
- Document with JSDoc

---

### 3. [STYLING_GUIDELINES.md](./STYLING_GUIDELINES.md)
**Tailwind CSS Only - No Custom CSS**

- ✅ Tailwind CSS utilities
- ✅ Mobile-first responsive design
- ✅ Common UI patterns
- ✅ Color palette
- ✅ Spacing and typography scales
- ✅ Dark mode support

**Key Rules:**
- ONLY use Tailwind CSS
- NO custom CSS files
- NO inline styles
- Mobile-first approach
- Use responsive breakpoints
- Consistent spacing and sizing

---

### 4. [PERFORMANCE_GUIDELINES.md](./PERFORMANCE_GUIDELINES.md)
**Performance Optimization Without Over-Engineering**

- ✅ Change detection strategy
- ✅ Memory management
- ✅ List rendering optimization
- ✅ Async operations
- ✅ Lazy loading
- ✅ Bundle size optimization
- ✅ Performance monitoring

**Key Rules:**
- Use OnPush change detection
- Unsubscribe from observables
- Use trackBy in *ngFor
- Use async pipe
- Lazy load routes
- No over-engineering

---

## 🎯 Quick Reference

### The 4 Golden Rules

1. **NO `any` TYPE**
   ```typescript
   // ❌ FORBIDDEN
   const data: any = response;
   
   // ✅ REQUIRED
   const data: ApiResponse<User> = response;
   ```

2. **TAILWIND CSS ONLY**
   ```html
   <!-- ❌ FORBIDDEN -->
   <div style="color: red; padding: 10px;">
   
   <!-- ✅ REQUIRED -->
   <div class="text-red-500 p-2.5">
   ```

3. **NEVER MODIFY SHARED COMPONENTS**
   ```typescript
   // ❌ FORBIDDEN - Don't modify shared components
   // src/app/shared/components/button.component.ts
   
   // ✅ REQUIRED - Create feature-specific component
   // src/app/features/users/components/user-button.component.ts
   ```

4. **RESPONSIVE & PERFORMANT**
   ```html
   <!-- ✅ REQUIRED - Mobile-first, OnPush, trackBy -->
   <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
     <div *ngFor="let item of items; trackBy: trackById">
       {{ item.name }}
     </div>
   </div>
   ```

---

## 📋 Checklist for Every Component

- [ ] No `any` types
- [ ] OnPush change detection
- [ ] Standalone component
- [ ] @Input/@Output typed
- [ ] Unsubscribe in ngOnDestroy
- [ ] trackBy in *ngFor loops
- [ ] Tailwind CSS only
- [ ] Responsive design (mobile-first)
- [ ] No console.log statements
- [ ] Tests written (80%+ coverage)
- [ ] JSDoc comments added
- [ ] No circular dependencies

---

## 🚀 Before Committing Code

1. **Run linting**
   ```bash
   npm run lint:fix
   ```

2. **Format code**
   ```bash
   npm run format
   ```

3. **Run tests**
   ```bash
   npm run test:coverage
   ```

4. **Check bundle size**
   ```bash
   npm run build:analyze
   ```

5. **Review against rules**
   - [ ] No `any` types
   - [ ] Tailwind CSS only
   - [ ] Responsive design
   - [ ] Performance optimized

---

## 📖 How to Use These Rules

### For AI Agents
1. Read all 4 files before starting work
2. Follow the rules strictly
3. Reference specific rules when making decisions
4. Use the checklists to verify work

### For Developers
1. Review the relevant guideline before coding
2. Use the examples as templates
3. Follow the patterns consistently
4. Ask questions if unclear

---

## 🔍 Rule Enforcement

### Automated (Git Hooks)
- **Pre-commit**: Runs `npm run lint:fix && npm run format`
- **Pre-push**: Runs `npm run test:ci`

### Manual Review
- Code review checklist
- Performance audit
- Type safety verification
- Responsive design check

---

## 📊 Rule Severity Levels

### 🔴 CRITICAL (Must Fix)
- Using `any` type
- Custom CSS instead of Tailwind
- Modifying shared components
- Memory leaks (no unsubscribe)

### 🟡 WARNING (Should Fix)
- Missing OnPush strategy
- Missing trackBy in loops
- No tests written
- Missing JSDoc comments

### 🟢 INFO (Nice to Have)
- Performance optimizations
- Code organization
- Documentation improvements

---

## 💡 Examples

### ✅ Good Component
```typescript
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
      <h2 class="text-lg font-bold">{{ user.name }}</h2>
      <p class="text-sm text-gray-600">{{ user.email }}</p>
      <button 
        (click)="onSelect()"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Select
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnDestroy {
  @Input() user!: User;
  @Output() userSelected = new EventEmitter<User>();

  private destroy$ = new Subject<void>();

  onSelect(): void {
    this.userSelected.emit(this.user);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

### ❌ Bad Component
```typescript
@Component({
  selector: 'app-user-card',
  template: `
    <div style="background: white; padding: 10px; border-radius: 4px;">
      <h2 style="font-size: 18px; font-weight: bold;">{{ user.name }}</h2>
      <p style="font-size: 12px; color: #666;">{{ user.email }}</p>
      <button (click)="onSelect()" style="background: blue; color: white; padding: 8px 16px;">
        Select
      </button>
    </div>
  `
})
export class UserCardComponent {
  @Input() user: any;  // ❌ any type
  @Output() userSelected = new EventEmitter();

  onSelect(): void {
    this.userSelected.emit(this.user);
  }
  // ❌ No OnPush, no unsubscribe, inline styles, no types
}
```

---

## 🆘 Questions?

Refer to the specific guideline file:
- **TypeScript/Components**: See [CODING_STANDARDS.md](./CODING_STANDARDS.md)
- **Component Structure**: See [COMPONENT_GUIDELINES.md](./COMPONENT_GUIDELINES.md)
- **Styling**: See [STYLING_GUIDELINES.md](./STYLING_GUIDELINES.md)
- **Performance**: See [PERFORMANCE_GUIDELINES.md](./PERFORMANCE_GUIDELINES.md)

---

## 📝 Summary

| Aspect | Rule | Severity |
|--------|------|----------|
| Types | No `any` | 🔴 CRITICAL |
| Styling | Tailwind only | 🔴 CRITICAL |
| Components | Don't modify shared | 🔴 CRITICAL |
| Change Detection | Use OnPush | 🟡 WARNING |
| Memory | Unsubscribe | 🔴 CRITICAL |
| Lists | Use trackBy | 🟡 WARNING |
| Responsive | Mobile-first | 🟡 WARNING |
| Performance | No over-engineering | 🟢 INFO |

---

**Last Updated**: 2025-11-05  
**Version**: 1.0  
**Status**: Active

🚀 **Happy Coding!**

