import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { SidebarComponent, SidebarConfig } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-rxjs-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, SidebarComponent],
  templateUrl: './rxjs-layout.component.html',
  styleUrl: './rxjs-layout.component.scss'
})
export class RxjsLayoutComponent {
  sidebarVisible = signal(false);
  
  constructor(private router: Router) {}

  sidebarConfig: SidebarConfig = {
    title: 'RxJS',
    subtitle: 'Reactive Programming',
    headerText: 'RxJS Patterns',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-purple-600 dark:from-blue-400 dark:to-purple-400'
  };

  treeNodes: TreeNode[] = [
    {
      label: 'Part 1-7: Foundational Operators',
      expanded: true,
      children: [
        {
          label: 'Part 1: Creation Operators',
          icon: 'pi pi-circle',
          data: '/rxjs/creation-operators',
          leaf: true
        },
        {
          label: 'Part 2: Transformation Operators',
          icon: 'pi pi-circle',
          data: '/rxjs/transformation-operators',
          leaf: true
        },
        {
          label: 'Part 3: Filtering Operators',
          icon: 'pi pi-circle',
          data: '/rxjs/filtering-operators',
          leaf: true
        },
        {
          label: 'Part 4: Combination Operators',
          icon: 'pi pi-circle',
          data: '/rxjs/combination-operators',
          leaf: true
        },
        {
          label: 'Part 5: Error Handling',
          icon: 'pi pi-circle',
          data: '/rxjs/error-handling',
          leaf: true
        },
        {
          label: 'Part 6: Utility Operators',
          icon: 'pi pi-circle',
          data: '/rxjs/utility-operators',
          leaf: true
        },
        {
          label: 'Part 7: Multicasting Operators',
          icon: 'pi pi-circle',
          data: '/rxjs/multicasting-operators',
          leaf: true
        }
      ]
    },
    {
      label: 'Advanced Patterns',
      expanded: true,
      children: [
        {
          label: 'Custom Operators',
          icon: 'pi pi-circle',
          data: '/rxjs/custom-operators',
          leaf: true
        },
        {
          label: 'Higher-Order Observables',
          icon: 'pi pi-circle',
          data: '/rxjs/higher-order-observables',
          leaf: true
        },
        {
          label: 'Subject Patterns',
          icon: 'pi pi-circle',
          data: '/rxjs/subject-patterns',
          leaf: true
        },
        {
          label: 'Memory Leak Prevention',
          icon: 'pi pi-circle',
          data: '/rxjs/memory-leak-prevention',
          leaf: true
        },
        {
          label: 'Backpressure',
          icon: 'pi pi-circle',
          data: '/rxjs/backpressure',
          leaf: true
        },
        {
          label: 'Route Guards',
          icon: 'pi pi-circle',
          data: '/rxjs/route-guards',
          leaf: true
        },
        {
          label: 'Reactive Forms',
          icon: 'pi pi-circle',
          data: '/rxjs/reactive-forms',
          leaf: true
        },
        {
          label: 'WebSockets',
          icon: 'pi pi-circle',
          data: '/rxjs/websockets',
          leaf: true
        },
        {
          label: 'Advanced Caching',
          icon: 'pi pi-circle',
          data: '/rxjs/advanced-caching',
          leaf: true
        },
        {
          label: 'Race Conditions',
          icon: 'pi pi-circle',
          data: '/rxjs/race-conditions',
          leaf: true
        }
      ]
    },
    {
      label: 'Switch Topic',
      expanded: false,
      children: [
        {
          label: 'OOP Concepts',
          icon: 'pi pi-arrow-right',
          data: '/oop/encapsulation',
          leaf: true
        },
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

