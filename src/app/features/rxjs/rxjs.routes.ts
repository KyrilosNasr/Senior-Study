import { Routes } from '@angular/router';
import { RXJS_PROVIDERS } from './shared/providers/rxjs.providers';

export const rxjsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./rxjs-layout.component').then(m => m.RxjsLayoutComponent),
    providers: [RXJS_PROVIDERS],
    children: [
      {
        path: '',
        redirectTo: 'creation-operators',
        pathMatch: 'full'
      },
      {
        path: 'creation-operators',
        loadComponent: () => import('./creation-operators/creation-operators-demo.component').then(m => m.CreationOperatorsDemoComponent)
      },
      {
        path: 'transformation-operators',
        loadComponent: () => import('./transformation-operators/transformation-operators-demo.component').then(m => m.TransformationOperatorsDemoComponent)
      },
      {
        path: 'filtering-operators',
        loadComponent: () => import('./filtering-operators/filtering-operators-demo.component').then(m => m.FilteringOperatorsDemoComponent)
      },
      {
        path: 'combination-operators',
        loadComponent: () => import('./combination-operators/combination-operators-demo.component').then(m => m.CombinationOperatorsDemoComponent)
      },
      {
        path: 'error-handling',
        loadComponent: () => import('./error-handling/error-handling-demo.component').then(m => m.ErrorHandlingDemoComponent)
      },
      {
        path: 'utility-operators',
        loadComponent: () => import('./utility-operators/utility-operators-demo.component').then(m => m.UtilityOperatorsDemoComponent)
      },
      {
        path: 'multicasting-operators',
        loadComponent: () => import('./multicasting-operators/multicasting-operators-demo.component').then(m => m.MulticastingOperatorsDemoComponent)
      },
      {
        path: 'custom-operators',
        loadComponent: () => import('./custom-operators/custom-operators-demo.component').then(m => m.CustomOperatorsDemoComponent)
      },
      {
        path: 'higher-order-observables',
        loadComponent: () => import('./higher-order-observables/higher-order-observables-demo.component').then(m => m.HigherOrderObservablesDemoComponent)
      },
      {
        path: 'subject-patterns',
        loadComponent: () => import('./subject-patterns/subject-patterns-demo.component').then(m => m.SubjectPatternsDemoComponent)
      },
      {
        path: 'memory-leak-prevention',
        loadComponent: () => import('./memory-leak-prevention/memory-leak-prevention-demo.component').then(m => m.MemoryLeakPreventionDemoComponent)
      },
      {
        path: 'backpressure',
        loadComponent: () => import('./backpressure/backpressure-demo.component').then(m => m.BackpressureDemoComponent)
      },
      {
        path: 'route-guards',
        loadComponent: () => import('./route-guards/route-guards-demo.component').then(m => m.RouteGuardsDemoComponent)
      },
      {
        path: 'reactive-forms',
        loadComponent: () => import('./reactive-forms/reactive-forms-demo.component').then(m => m.ReactiveFormsDemoComponent)
      },
      {
        path: 'websockets',
        loadComponent: () => import('./websockets/websockets-demo.component').then(m => m.WebsocketsDemoComponent)
      },
      {
        path: 'advanced-caching',
        loadComponent: () => import('./advanced-caching/advanced-caching-demo.component').then(m => m.AdvancedCachingDemoComponent)
      },
      {
        path: 'race-conditions',
        loadComponent: () => import('./race-conditions/race-conditions-demo.component').then(m => m.RaceConditionsDemoComponent)
      }
    ]
  }
];

