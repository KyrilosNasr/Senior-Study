import { Routes } from '@angular/router';

export const angularRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./angular-layout.component').then(m => m.AngularLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'dynamic-form',
        pathMatch: 'full'
      },
      {
        path: 'dynamic-form',
        loadComponent: () =>
          import('./dynamic-form-demo/dynamic-form-demo.component').then(
            m => m.DynamicFormDemoComponent
          )
      },
      {
        path: 'dynamic-table',
        loadComponent: () =>
          import('./dynamic-table-demo/dynamic-table-demo.component').then(
            m => m.DynamicTableDemoComponent
          )
      },
      {
        path: 'dynamic-modal',
        loadComponent: () =>
          import('./dynamic-modal-demo/dynamic-modal-demo.component').then(
            m => m.DynamicModalDemoComponent
          )
      },
      {
        path: 'signals',
        loadComponent: () =>
          import('./signals-demo/signals-demo.component').then(
            m => m.SignalsDemoComponent
          )
      },
      {
        path: 'reactive-forms',
        loadComponent: () =>
          import('./reactive-forms-demo/reactive-forms-demo.component').then(
            m => m.ReactiveFormsDemoComponent
          )
      },
      {
        path: 'control-value-accessor',
        loadComponent: () =>
          import('./control-value-accessor-demo/control-value-accessor-demo.component').then(
            m => m.ControlValueAccessorDemoComponent
          )
      },
      {
        path: 'multi-step-form',
        loadComponent: () =>
          import('./multi-step-form-demo/multi-step-form-demo.component').then(
            m => m.MultiStepFormDemoComponent
          )
      },
      {
        path: 'modern-control-flow',
        loadComponent: () =>
          import('./modern-control-flow-demo/modern-control-flow-demo.component').then(
            m => m.ModernControlFlowDemoComponent
          )
      }
    ]
  }
];

