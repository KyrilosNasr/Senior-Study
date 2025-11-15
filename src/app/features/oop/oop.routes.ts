import { Routes } from '@angular/router';
import { OOP_PROVIDERS } from './shared/providers/oop.providers';

export const oopRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./oop-layout.component').then(m => m.OopLayoutComponent),
    providers: [OOP_PROVIDERS],
    children: [
      {
        path: '',
        redirectTo: 'encapsulation',
        pathMatch: 'full'
      },
      {
        path: 'encapsulation',
        loadComponent: () => import('./encapsulation/encapsulation-demo.component').then(m => m.EncapsulationDemoComponent)
      },
      {
        path: 'inheritance',
        loadComponent: () => import('./inheritance/inheritance-demo.component').then(m => m.InheritanceDemoComponent)
      },
      {
        path: 'polymorphism',
        loadComponent: () => import('./polymorphism/polymorphism-demo.component').then(m => m.PolymorphismDemoComponent)
      },
      {
        path: 'abstraction',
        loadComponent: () => import('./abstraction/abstraction-demo.component').then(m => m.AbstractionDemoComponent)
      }
    ]
  }
];

