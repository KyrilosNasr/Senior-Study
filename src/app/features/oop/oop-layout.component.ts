import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { SidebarComponent, SidebarConfig } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-oop-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, SidebarComponent],
  templateUrl: './oop-layout.component.html',
  styleUrl: './oop-layout.component.scss'
})
export class OopLayoutComponent {
  sidebarVisible = signal(false);
  
  constructor(private router: Router) {}

  sidebarConfig: SidebarConfig = {
    title: 'OOP',
    subtitle: 'Object-Oriented Programming',
    headerText: 'OOP Concepts',
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-teal-600 dark:from-emerald-400 dark:to-teal-400'
  };

  treeNodes: TreeNode[] = [
    {
      label: 'OOP Concepts',
      expanded: true,
      children: [
        {
          label: 'Encapsulation',
          icon: 'pi pi-circle',
          data: '/oop/encapsulation',
          leaf: true
        },
        {
          label: 'Inheritance',
          icon: 'pi pi-circle',
          data: '/oop/inheritance',
          leaf: true
        },
        {
          label: 'Polymorphism',
          icon: 'pi pi-circle',
          data: '/oop/polymorphism',
          leaf: true
        },
        {
          label: 'Abstraction',
          icon: 'pi pi-circle',
          data: '/oop/abstraction',
          leaf: true
        }
      ]
    },
    {
      label: 'Switch Topic',
      expanded: false,
      children: [
        {
          label: 'SOLID Principles',
          icon: 'pi pi-arrow-right',
          data: '/solid/srp',
          leaf: true
        },
        {
          label: 'Advanced TypeScript',
          icon: 'pi pi-arrow-right',
          data: '/typescript/advanced-types',
          leaf: true
        },
        {
          label: 'RxJS Patterns',
          icon: 'pi pi-arrow-right',
          data: '/rxjs/creation-operators',
          leaf: true
        }
      ]
    }
  ];

  onNodeSelect(event: any): void {
    if (event.node.data) {
      this.router.navigate([event.node.data]);
    }
  }

  toggleSidebar(): void {
    this.sidebarVisible.update(v => !v);
  }
}

