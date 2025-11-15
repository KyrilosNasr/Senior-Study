import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-oop-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, Drawer, ButtonModule, MenuModule],
  templateUrl: './oop-layout.component.html',
  styleUrl: './oop-layout.component.scss'
})
export class OopLayoutComponent {
  sidebarVisible = signal(false);
  
  menuItems: MenuItem[] = [
    {
      label: 'OOP Concepts',
      items: [
        {
          label: 'Encapsulation',
          icon: 'pi pi-circle',
          routerLink: '/oop/encapsulation'
        },
        {
          label: 'Inheritance',
          icon: 'pi pi-circle',
          routerLink: '/oop/inheritance'
        },
        {
          label: 'Polymorphism',
          icon: 'pi pi-circle',
          routerLink: '/oop/polymorphism'
        },
        {
          label: 'Abstraction',
          icon: 'pi pi-circle',
          routerLink: '/oop/abstraction'
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
        }
      ]
    }
  ];

  toggleSidebar(): void {
    this.sidebarVisible.update(v => !v);
  }
}

