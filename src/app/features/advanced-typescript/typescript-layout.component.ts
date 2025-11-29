import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-typescript-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, Drawer, ButtonModule, MenuModule],
  templateUrl: './typescript-layout.component.html',
  styleUrl: './typescript-layout.component.scss'
})
export class TypeScriptLayoutComponent {
  sidebarVisible = signal(false);
  
  menuItems: MenuItem[] = [
    {
      label: 'Advanced TypeScript',
      items: [
        {
          label: 'Advanced Types',
          icon: 'pi pi-code',
          routerLink: '/typescript/advanced-types'
        },
        {
          label: 'Type Guards',
          icon: 'pi pi-shield',
          routerLink: '/typescript/type-guards'
        },
        {
          label: 'Generics',
          icon: 'pi pi-cog',
          routerLink: '/typescript/generics'
        },
        {
          label: 'Utility Types',
          icon: 'pi pi-wrench',
          routerLink: '/typescript/utility-types'
        },
        {
          label: 'Decorators',
          icon: 'pi pi-star',
          routerLink: '/typescript/decorators'
        },
        {
          label: 'TypeScript 5.x',
          icon: 'pi pi-bolt',
          routerLink: '/typescript/typescript-5-features'
        },
        {
          label: 'Function Types',
          icon: 'pi pi-function',
          routerLink: '/typescript/function-types'
        },
        {
          label: 'Module Augmentation',
          icon: 'pi pi-puzzle',
          routerLink: '/typescript/module-augmentation'
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
          label: 'SOLID Principles',
          icon: 'pi pi-arrow-right',
          routerLink: '/solid/srp'
        },
        {
          label: 'OOP Concepts',
          icon: 'pi pi-arrow-right',
          routerLink: '/oop/encapsulation'
        }
      ]
    }
  ];

  toggleSidebar(): void {
    this.sidebarVisible.update(v => !v);
  }
}



