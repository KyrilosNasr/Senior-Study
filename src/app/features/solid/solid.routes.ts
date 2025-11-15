import { Routes } from '@angular/router';
import { SOLID_PROVIDERS } from './shared/providers/solid.providers';

export const solidRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./solid-layout.component').then(m => m.SolidLayoutComponent),
    providers: [SOLID_PROVIDERS],
    children: [
      {
        path: '',
        redirectTo: 'srp',
        pathMatch: 'full'
      },
      {
        path: 'srp',
        loadComponent: () => import('./srp/srp-demo.component').then(m => m.SrpDemoComponent)
      },
      {
        path: 'ocp',
        loadComponent: () => import('./ocp/ocp-demo.component').then(m => m.OcpDemoComponent)
      },
      {
        path: 'lsp',
        loadComponent: () => import('./lsp/lsp-demo.component').then(m => m.LspDemoComponent)
      },
      {
        path: 'isp',
        loadComponent: () => import('./isp/isp-demo.component').then(m => m.IspDemoComponent)
      },
      {
        path: 'dip',
        loadComponent: () => import('./dip/dip-demo.component').then(m => m.DipDemoComponent)
      }
    ]
  }
];

