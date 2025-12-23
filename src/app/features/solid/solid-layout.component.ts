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
  selector: 'app-solid-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, SidebarComponent, PageHeaderComponent, ThemeToggleComponent],
  templateUrl: './solid-layout.component.html',
  styleUrl: './solid-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolidLayoutComponent {
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
    title: 'SOLID',
    subtitle: 'Design Principles',
    headerText: 'SOLID Principles',
    gradientFrom: 'from-orange-600',
    gradientTo: 'to-red-600 dark:from-orange-400 dark:to-red-400'
  };

  treeNodes: TreeNode[] = [
    {
      label: 'SOLID Principles',
      expanded: true,
      children: [
        {
          label: 'Single Responsibility',
          icon: getIconForLabel('Single Responsibility'),
          data: '/solid/srp',
          leaf: true
        },
        {
          label: 'Open/Closed',
          icon: getIconForLabel('Open/Closed'),
          data: '/solid/ocp',
          leaf: true
        },
        {
          label: 'Liskov Substitution',
          icon: getIconForLabel('Liskov Substitution'),
          data: '/solid/lsp',
          leaf: true
        },
        {
          label: 'Interface Segregation',
          icon: getIconForLabel('Interface Segregation'),
          data: '/solid/isp',
          leaf: true
        },
        {
          label: 'Dependency Inversion',
          icon: getIconForLabel('Dependency Inversion'),
          data: '/solid/dip',
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
          label: 'Advanced TypeScript',
          icon: getIconForLabel('Advanced TypeScript'),
          data: '/typescript/advanced-types',
          leaf: true
        },
        {
          label: 'RxJS Patterns',
          icon: getIconForLabel('RxJS Patterns'),
          data: '/rxjs/creation-operators',
          leaf: true
        },
        {
          label: 'Angular',
          icon: 'fas fa-angular',
          data: '/angular/dynamic-form',
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

