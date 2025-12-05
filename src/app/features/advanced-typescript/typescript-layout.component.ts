import { Component, signal, inject, computed, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { SidebarComponent, SidebarConfig } from '../../shared/components/sidebar/sidebar.component';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { getIconForLabel } from '../../shared/config/icon-mapping.config';

@Component({
  selector: 'app-typescript-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, SidebarComponent, ThemeToggleComponent],
  templateUrl: './typescript-layout.component.html',
  styleUrl: './typescript-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeScriptLayoutComponent {
  private readonly router = inject(Router);
  private readonly themeService = inject(ThemeService);

  @ViewChild(SidebarComponent) sidebarComponent = signal<SidebarComponent | undefined>(undefined);

  sidebarVisible = signal(false);

  readonly contentGradient = computed(() => {
    return this.themeService.getGradientClasses('to-br', 'subtle');
  });

  readonly mainContentClass = computed(() => {
    const sidebar = this.sidebarComponent();
    if (!sidebar) return 'lg:ml-64';
    return sidebar.isExpanded() ? 'lg:ml-64' : 'lg:ml-16';
  });

  sidebarConfig: SidebarConfig = {
    title: 'TypeScript',
    subtitle: 'Advanced Types',
    headerText: 'Advanced TypeScript',
    gradientFrom: 'from-indigo-600',
    gradientTo: 'to-blue-600 dark:from-indigo-400 dark:to-blue-400'
  };

  treeNodes: TreeNode[] = [
    {
      label: 'Advanced TypeScript',
      expanded: true,
      children: [
        {
          label: 'Advanced Types',
          icon: getIconForLabel('Advanced Types'),
          data: '/typescript/advanced-types',
          leaf: true
        },
        {
          label: 'Type Guards',
          icon: getIconForLabel('Type Guards'),
          data: '/typescript/type-guards',
          leaf: true
        },
        {
          label: 'Generics',
          icon: getIconForLabel('Generics'),
          data: '/typescript/generics',
          leaf: true
        },
        {
          label: 'Utility Types',
          icon: getIconForLabel('Utility Types'),
          data: '/typescript/utility-types',
          leaf: true
        },
        {
          label: 'Decorators',
          icon: getIconForLabel('Decorators'),
          data: '/typescript/decorators',
          leaf: true
        },
        {
          label: 'TypeScript 5.x',
          icon: getIconForLabel('TypeScript 5.x'),
          data: '/typescript/typescript-5-features',
          leaf: true
        },
        {
          label: 'Function Types',
          icon: getIconForLabel('Function Types'),
          data: '/typescript/function-types',
          leaf: true
        },
        {
          label: 'Module Augmentation',
          icon: getIconForLabel('Module Augmentation'),
          data: '/typescript/module-augmentation',
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
          icon: getIconForLabel('SOLID Principles'),
          data: '/solid/srp',
          leaf: true
        },
        {
          label: 'OOP Concepts',
          icon: getIconForLabel('OOP Concepts'),
          data: '/oop/encapsulation',
          leaf: true
        },
        {
          label: 'RxJS Patterns',
          icon: getIconForLabel('RxJS Patterns'),
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



