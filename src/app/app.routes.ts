import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/solid/srp',
    pathMatch: 'full'
  },
  {
    path: 'solid',
    loadChildren: () => import('./features/solid/solid.routes').then(m => m.solidRoutes)
  },
  {
    path: 'oop',
    loadChildren: () => import('./features/oop/oop.routes').then(m => m.oopRoutes)
  },
  {
    path: 'typescript',
    loadChildren: () => import('./features/advanced-typescript/typescript.routes').then(m => m.typescriptRoutes)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./features/rxjs/rxjs.routes').then(m => m.rxjsRoutes)
  },
  {
    path: 'angular',
    loadChildren: () => import('./features/angular/angular.routes').then(m => m.angularRoutes)
  }
];
