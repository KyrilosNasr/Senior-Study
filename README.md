# 🎓 Senior Angular Study Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Application-blue?style=for-the-badge)](https://kyrilosnasr.github.io/Senior-Study/)
[![Angular](https://img.shields.io/badge/Angular-20.0.0-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-20.2.0-0078D4?style=flat-square)](https://primeng.org)

**Status**: ✅ **ACTIVE DEVELOPMENT**  
**Last Updated**: 2026-01-16

## 🌐 Live Demo

**👉 [View Live Application](https://kyrilosnasr.github.io/Senior-Study/)**

---

## 📖 Table of Contents

- [Quick Start](#-quick-start)
- [Implemented Topics](#-implemented-topics)
  - [SOLID Principles](#solid-principles)
  - [OOP Concepts](#oop-concepts)
  - [Advanced TypeScript](#advanced-typescript)
  - [RxJS Mastery](#rxjs-mastery)
  - [Angular Features](#angular-features)
- [Project Structure](#-project-structure)
- [12-Week Curriculum](#-12-week-curriculum)
- [Available Commands](#-available-commands)
- [Tech Stack](#-tech-stack)
- [Code Quality Standards](#-code-quality-standards)
- [Troubleshooting](#-troubleshooting)
- [Additional Resources](#-additional-resources)
- [Progress Overview](#-progress-overview)

---

## 🚀 Quick Start

### Start Development Server
```bash
npm start
# or
npm run dev
```
Server runs at `http://localhost:4200`

### Run Tests
```bash
npm test              # Run tests once
npm run test:watch   # Watch mode
npm run test:coverage # With coverage report
```

### Code Quality
```bash
npm run lint         # Check for errors
npm run lint:fix     # Auto-fix errors
npm run format       # Format code
```

### Build for Production
```bash
npm run build:prod        # Production build
npm run build:github-pages # Build for GitHub Pages deployment
npm run build:analyze      # Build and analyze bundle size
```

---

## ✅ Implemented Topics

### SOLID Principles
Interactive demos with real-world examples:

| Principle | Route | Description |
|-----------|-------|-------------|
| **S**ingle Responsibility | `/solid/srp` | Classes should have only one reason to change |
| **O**pen/Closed | `/solid/ocp` | Open for extension, closed for modification |
| **L**iskov Substitution | `/solid/lsp` | Subtypes must be substitutable for base types |
| **I**nterface Segregation | `/solid/isp` | Many specific interfaces over one general interface |
| **D**ependency Inversion | `/solid/dip` | Depend on abstractions, not concretions |

### OOP Concepts
Core object-oriented programming principles:

| Concept | Route | Description |
|---------|-------|-------------|
| Encapsulation | `/oop/encapsulation` | Bundling data with methods that operate on it |
| Inheritance | `/oop/inheritance` | Creating new classes from existing ones |
| Polymorphism | `/oop/polymorphism` | Objects taking many forms |
| Abstraction | `/oop/abstraction` | Hiding complexity, showing essentials |

### Advanced TypeScript
Deep dive into TypeScript features:

| Topic | Route | Description |
|-------|-------|-------------|
| Advanced Types | `/typescript/advanced-types` | Conditional, Mapped, Template Literal Types |
| Type Guards | `/typescript/type-guards` | Type predicates and narrowing |
| Generics | `/typescript/generics` | Constraints, defaults, variance |
| Utility Types | `/typescript/utility-types` | Partial, Pick, Omit, Record, etc. |
| Decorators | `/typescript/decorators` | Metadata reflection patterns |
| TypeScript 5.x | `/typescript/typescript-5-features` | const type parameters, satisfies |
| Function Types | `/typescript/function-types` | Overloads, rest parameters |
| Module Augmentation | `/typescript/module-augmentation` | Declaration merging |

### RxJS Mastery
Comprehensive reactive programming patterns:

| Category | Route | Description |
|----------|-------|-------------|
| Creation Operators | `/rxjs/creation-operators` | of, from, interval, timer, etc. |
| Transformation | `/rxjs/transformation-operators` | map, mergeMap, switchMap, concatMap |
| Filtering | `/rxjs/filtering-operators` | filter, take, debounceTime, distinctUntilChanged |
| Combination | `/rxjs/combination-operators` | combineLatest, merge, forkJoin, zip |
| Error Handling | `/rxjs/error-handling` | catchError, retry, retryWhen |
| Utility | `/rxjs/utility-operators` | tap, delay, finalize |
| Multicasting | `/rxjs/multicasting-operators` | share, shareReplay, publish |
| Custom Operators | `/rxjs/custom-operators` | Building reusable operators |
| Higher-Order | `/rxjs/higher-order-observables` | Observables of observables |
| Subject Patterns | `/rxjs/subject-patterns` | BehaviorSubject, ReplaySubject, AsyncSubject |
| Memory Leaks | `/rxjs/memory-leak-prevention` | takeUntilDestroyed, DestroyRef |
| Backpressure | `/rxjs/backpressure` | throttleTime, debounceTime, sampleTime |
| Route Guards | `/rxjs/route-guards` | Observable-based guards |
| Reactive Forms | `/rxjs/reactive-forms` | Form valueChanges with RxJS |
| WebSockets | `/rxjs/websockets` | WebSocketSubject, reconnection |
| Advanced Caching | `/rxjs/advanced-caching` | Stale-while-revalidate, TTL |
| Race Conditions | `/rxjs/race-conditions` | Request deduplication |

### Angular Features
Modern Angular patterns and components:

| Feature | Route | Description |
|---------|-------|-------------|
| Dynamic Forms | `/angular/dynamic-form` | Runtime form generation |
| Dynamic Table | `/angular/dynamic-table` | Configurable data tables with nested support |
| Dynamic Modal | `/angular/dynamic-modal` | CDK-based modal system |
| Signals | `/angular/signals` | Signal-based reactivity |
| Reactive Forms | `/angular/reactive-forms` | Advanced form patterns |
| ControlValueAccessor | `/angular/control-value-accessor` | Custom form controls |
| Multi-Step Forms | `/angular/multi-step-form` | Wizard-style forms |
| Modern Control Flow | `/angular/modern-control-flow` | @if, @for, @switch, @defer |

---

## 📁 Project Structure

```
src/app/
├── core/                          # Singleton services, guards, interceptors
│   ├── di/                        # Dependency injection
│   ├── error-handling/            # Error handling strategies
│   ├── guards/                    # Route guards
│   ├── interceptors/              # HTTP interceptors
│   ├── security/                  # Security utilities
│   └── services/                  # Core services
│
├── shared/                        # Reusable components & utilities
│   ├── components/                # UI components (dynamic-table, dynamic-form, etc.)
│   ├── decorators/                # Custom decorators
│   ├── directives/                # Custom directives
│   ├── patterns/                  # Design patterns
│   ├── pipes/                     # Custom pipes
│   └── types/                     # Shared TypeScript types
│
├── features/                      # Feature modules
│   ├── solid/                     # SOLID principles demos
│   ├── oop/                       # OOP concepts demos
│   ├── advanced-typescript/       # TypeScript deep dive
│   ├── rxjs/                      # RxJS mastery
│   └── angular/                   # Angular features
│
├── infrastructure/                # API clients, repositories
├── domain/                        # Business logic & models
└── store/                         # State management (NgRx)

tests/
├── unit/                          # Unit tests
├── integration/                   # Integration tests
├── e2e/                           # End-to-end tests
└── fixtures/                      # Test fixtures & mocks
```

---

## 🎯 12-Week Curriculum

### Week 1-2: TypeScript & Design Patterns ✅
- Advanced TypeScript types
- Decorators & metadata
- SOLID Principles
- OOP Concepts
- Design patterns (Factory, Builder, Repository, Singleton)

### Week 3-4: Angular 19+ Features ✅
- Angular Signals
- Modern control flow (@defer, @if, @for)
- Dynamic forms & tables
- ControlValueAccessor
- Multi-step forms

### Week 5-6: RxJS & Reactive Patterns ✅
- All operator categories
- Custom operators
- Subject patterns
- Memory leak prevention
- Backpressure handling
- WebSocket integration
- Advanced caching

### Week 7-8: State Management 🔄
- NgRx store, actions, reducers
- Effects for side effects
- Selectors and facades
- Component store
- Signals-based state

### Week 9-10: Performance Optimization 📋
- Virtual scrolling
- OnPush change detection
- Lazy loading
- Bundle analysis
- Performance monitoring

### Week 11-12: Advanced Architecture 📋
- Clean Architecture
- Domain-Driven Design
- Micro-frontends
- Security patterns
- CI/CD pipelines

---

## 🔧 Available Commands

### Development
```bash
npm start                 # Start dev server
npm run dev              # Start with browser open
npm run dev:ssl          # Start with SSL
```

### Testing
```bash
npm test                 # Run tests once
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
npm run test:ci         # CI-friendly test run
```

### Code Quality
```bash
npm run lint            # Check for linting errors
npm run lint:fix        # Fix linting errors automatically
npm run format          # Format code with Prettier
npm run format:check    # Check if code is formatted
```

### Building
```bash
npm run build           # Development build
npm run build:prod      # Production build
npm run build:analyze   # Build and analyze bundle size
```

---

## 💻 Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | Angular | 20.0.0 |
| **Language** | TypeScript | 5.8.2 |
| **Reactive** | RxJS | 7.8.0 |
| **State Management** | NgRx | 20.1.0 |
| **UI Components** | PrimeNG | 20.2.0 |
| **Styling** | Tailwind CSS | 4.1.14 |
| **Testing** | Jasmine, Karma | 5.7.0, 6.4.0 |
| **Linting** | ESLint | 9.39.1 |
| **Formatting** | Prettier | 3.6.2 |

---

## 📋 Code Quality Standards

### TypeScript Rules
- ✅ **NO `any` type** - Always use proper types or generics
- ✅ **Strict mode enabled** - Full type safety
- ✅ **Explicit return types** - All functions must have return types

### Component Development
- ✅ **OnPush strategy** - Use ChangeDetectionStrategy.OnPush
- ✅ **Standalone components** - Follow Angular 20 standalone pattern
- ✅ **Never modify shared components** - Create feature-specific versions

### Styling Standards
- ✅ **Tailwind CSS only** - No custom CSS unless necessary
- ✅ **Mobile-first** - Responsive design with sm, md, lg, xl breakpoints
- ✅ **No inline styles** - Use Tailwind utilities

### Performance Guidelines
- ✅ **Lazy loading** - Load features on demand
- ✅ **trackBy in *ngFor** - Optimize list rendering
- ✅ **Unsubscribe from observables** - Prevent memory leaks

---

## 🆘 Troubleshooting

### Port 4200 already in use?
```bash
ng serve --port 4300
```

### Tests not running?
```bash
npm run test:ci
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📖 Additional Resources

### Documentation Links
- [Angular Documentation](https://angular.dev)
- [NgRx Documentation](https://ngrx.io)
- [PrimeNG Documentation](https://primeng.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [RxJS Documentation](https://rxjs.dev)

### Project Documentation
- [12-Week Study Plan](./angular_senior_study.md) - Complete curriculum
- [GitHub Pages Setup](./GITHUB_PAGES_SETUP.md) - Deployment guide

---

## 📊 Progress Overview

| Category | Implemented | Total | Status |
|----------|-------------|-------|--------|
| SOLID Principles | 5 | 5 | ✅ Complete |
| OOP Concepts | 4 | 4 | ✅ Complete |
| Advanced TypeScript | 8 | 8 | ✅ Complete |
| RxJS Patterns | 17 | 17 | ✅ Complete |
| Angular Features | 8 | 8 | ✅ Complete |
| State Management | 0 | 6 | 📋 Planned |
| Performance | 0 | 5 | 📋 Planned |

**Total: 42 topics implemented**

---

**Happy Coding! 🚀**
