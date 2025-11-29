import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-rxjs-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, Drawer, ButtonModule, MenuModule],
  templateUrl: './rxjs-layout.component.html',
  styleUrl: './rxjs-layout.component.scss'
})
export class RxjsLayoutComponent {
  sidebarVisible = signal(false);
  
  menuItems: MenuItem[] = [
    {
      label: 'RxJS Advanced Patterns',
      items: [
        {
          label: 'Custom Operators',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/custom-operators'
        },
        {
          label: 'Higher-Order Observables',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/higher-order-observables'
        },
        {
          label: 'Subject Patterns',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/subject-patterns'
        },
        {
          label: 'Memory Leak Prevention',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/memory-leak-prevention'
        },
        {
          label: 'Backpressure',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/backpressure'
        },
        {
          label: 'Route Guards',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/route-guards'
        },
        {
          label: 'Reactive Forms',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/reactive-forms'
        },
        {
          label: 'WebSockets',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/websockets'
        },
        {
          label: 'Advanced Caching',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/advanced-caching'
        },
        {
          label: 'Race Conditions',
          icon: 'pi pi-circle',
          routerLink: '/rxjs/race-conditions'
        }
      ]
    },
    {
      separator: true
    },
    {
      label: 'Switch Topic',
      items: [
        {
          label: 'OOP Concepts',
          icon: 'pi pi-arrow-right',
          routerLink: '/oop/encapsulation'
        },
        {
          label: 'SOLID Principles',
          icon: 'pi pi-arrow-right',
          routerLink: '/solid/srp'
        },
        {
          label: 'Advanced TypeScript',
          icon: 'pi pi-arrow-right',
          routerLink: '/typescript/advanced-types'
        }
      ]
    }
  ];

  toggleSidebar(): void {
    this.sidebarVisible.update(v => !v);
  }
}

