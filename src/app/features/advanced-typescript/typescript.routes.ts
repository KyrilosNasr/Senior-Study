import { Routes } from '@angular/router';

export const typescriptRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./typescript-layout.component').then(m => m.TypeScriptLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'advanced-types',
        pathMatch: 'full'
      },
      {
        path: 'advanced-types',
        loadComponent: () => import('./advanced-types/advanced-types-demo.component').then(m => m.AdvancedTypesDemoComponent)
      },
      {
        path: 'type-guards',
        loadComponent: () => import('./type-guards/type-guards-demo.component').then(m => m.TypeGuardsDemoComponent)
      },
      {
        path: 'generics',
        loadComponent: () => import('./generics/generics-demo.component').then(m => m.GenericsDemoComponent)
      },
      {
        path: 'utility-types',
        loadComponent: () => import('./utility-types/utility-types-demo.component').then(m => m.UtilityTypesDemoComponent)
      },
      {
        path: 'decorators',
        loadComponent: () => import('./decorators/decorators-demo.component').then(m => m.DecoratorsDemoComponent)
      },
      {
        path: 'typescript-5-features',
        loadComponent: () => import('./typescript-5-features/typescript-5-features-demo.component').then(m => m.TypeScript5FeaturesDemoComponent)
      },
      {
        path: 'function-types',
        loadComponent: () => import('./function-types/function-types-demo.component').then(m => m.FunctionTypesDemoComponent)
      },
      {
        path: 'module-augmentation',
        loadComponent: () => import('./module-augmentation/module-augmentation-demo.component').then(m => m.ModuleAugmentationDemoComponent)
      }
    ]
  }
];



