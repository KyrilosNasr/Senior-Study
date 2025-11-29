import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-solid-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, Drawer, ButtonModule, MenuModule],
  templateUrl: './solid-layout.component.html',
  styleUrl: './solid-layout.component.scss'
})
export class SolidLayoutComponent {
  sidebarVisible = signal(false);
  
  menuItems: MenuItem[] = [
    {
      label: 'SOLID Principles',
      items: [
        {
          label: 'Single Responsibility',
          icon: 'pi pi-circle',
          routerLink: '/solid/srp'
        },
        {
          label: 'Open/Closed',
          icon: 'pi pi-circle',
          routerLink: '/solid/ocp'
        },
        {
          label: 'Liskov Substitution',
          icon: 'pi pi-circle',
          routerLink: '/solid/lsp'
        },
        {
          label: 'Interface Segregation',
          icon: 'pi pi-circle',
          routerLink: '/solid/isp'
        },
        {
          label: 'Dependency Inversion',
          icon: 'pi pi-circle',
          routerLink: '/solid/dip'
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
          label: 'Advanced TypeScript',
          icon: 'pi pi-arrow-right',
          routerLink: '/typescript/advanced-types'
        },
        {
          label: 'RxJS Patterns',
          icon: 'pi pi-arrow-right',
          routerLink: '/rxjs/creation-operators'
        }
      ]
    }
  ];

  toggleSidebar(): void {
    this.sidebarVisible.update(v => !v);
  }
}

