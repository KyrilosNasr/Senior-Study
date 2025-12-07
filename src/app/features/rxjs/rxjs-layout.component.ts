import { Component, signal, inject, computed, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { SidebarComponent, SidebarConfig } from '../../shared/components/sidebar/sidebar.component';
import { ThemeService } from '../../core/services/theme.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { getIconForLabel } from '../../shared/config/icon-mapping.config';

@Component({
  selector: 'app-rxjs-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, SidebarComponent, PageHeaderComponent, ThemeToggleComponent],
  templateUrl: './rxjs-layout.component.html',
  styleUrl: './rxjs-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsLayoutComponent {
  private readonly router = inject(Router);
  private readonly themeService = inject(ThemeService);

  @ViewChild(SidebarComponent) sidebarComponent = signal<SidebarComponent | undefined>(undefined);

  sidebarVisible = signal(false);
  sidebarExpanded = signal(true);

  readonly contentGradient = computed(() => {
    return this.themeService.getGradientClasses('to-br', 'subtle');
  });

  readonly mainContentClass = computed(() => {
    return this.sidebarExpanded() ? 'lg:ml-64' : 'lg:ml-16';
  });

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
          icon: getIconForLabel('Part 1: Creation Operators'),
          data: '/rxjs/creation-operators',
          leaf: true
        },
        {
          label: 'Part 2: Transformation Operators',
          icon: getIconForLabel('Part 2: Transformation Operators'),
          data: '/rxjs/transformation-operators',
          leaf: true
        },
        {
          label: 'Part 3: Filtering Operators',
          icon: getIconForLabel('Part 3: Filtering Operators'),
          data: '/rxjs/filtering-operators',
          leaf: true
        },
        {
          label: 'Part 4: Combination Operators',
          icon: getIconForLabel('Part 4: Combination Operators'),
          data: '/rxjs/combination-operators',
          leaf: true
        },
        {
          label: 'Part 5: Error Handling',
          icon: getIconForLabel('Part 5: Error Handling'),
          data: '/rxjs/error-handling',
          leaf: true
        },
        {
          label: 'Part 6: Utility Operators',
          icon: getIconForLabel('Part 6: Utility Operators'),
          data: '/rxjs/utility-operators',
          leaf: true
        },
        {
          label: 'Part 7: Multicasting Operators',
          icon: getIconForLabel('Part 7: Multicasting Operators'),
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
          icon: getIconForLabel('Custom Operators'),
          data: '/rxjs/custom-operators',
          leaf: true
        },
        {
          label: 'Higher-Order Observables',
          icon: getIconForLabel('Higher-Order Observables'),
          data: '/rxjs/higher-order-observables',
          leaf: true
        },
        {
          label: 'Subject Patterns',
          icon: getIconForLabel('Subject Patterns'),
          data: '/rxjs/subject-patterns',
          leaf: true
        },
        {
          label: 'Memory Leak Prevention',
          icon: getIconForLabel('Memory Leak Prevention'),
          data: '/rxjs/memory-leak-prevention',
          leaf: true
        },
        {
          label: 'Backpressure',
          icon: getIconForLabel('Backpressure'),
          data: '/rxjs/backpressure',
          leaf: true
        },
        {
          label: 'Route Guards',
          icon: getIconForLabel('Route Guards'),
          data: '/rxjs/route-guards',
          leaf: true
        },
        {
          label: 'Reactive Forms',
          icon: getIconForLabel('Reactive Forms'),
          data: '/rxjs/reactive-forms',
          leaf: true
        },
        {
          label: 'WebSockets',
          icon: getIconForLabel('WebSockets'),
          data: '/rxjs/websockets',
          leaf: true
        },
        {
          label: 'Advanced Caching',
          icon: getIconForLabel('Advanced Caching'),
          data: '/rxjs/advanced-caching',
          leaf: true
        },
        {
          label: 'Race Conditions',
          icon: getIconForLabel('Race Conditions'),
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
          icon: getIconForLabel('OOP Concepts'),
          data: '/oop/encapsulation',
          leaf: true
        },
        {
          label: 'SOLID Principles',
          icon: getIconForLabel('SOLID Principles'),
          data: '/solid/srp',
          leaf: true
        },
        {
          label: 'Advanced TypeScript',
          icon: getIconForLabel('Advanced TypeScript'),
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

