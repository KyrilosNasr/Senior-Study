import { Component, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { SidebarComponent, SidebarConfig } from '../../shared/components/sidebar/sidebar.component';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-solid-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, SidebarComponent, ThemeToggleComponent],
  templateUrl: './solid-layout.component.html',
  styleUrl: './solid-layout.component.scss'
})
export class SolidLayoutComponent {
  private readonly router = inject(Router);
  private readonly themeService = inject(ThemeService);

  sidebarVisible = signal(false);

  readonly contentGradient = computed(() => {
    return this.themeService.getGradientClasses('to-br', 'subtle');
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
          icon: 'pi pi-circle',
          data: '/solid/srp',
          leaf: true
        },
        {
          label: 'Open/Closed',
          icon: 'pi pi-circle',
          data: '/solid/ocp',
          leaf: true
        },
        {
          label: 'Liskov Substitution',
          icon: 'pi pi-circle',
          data: '/solid/lsp',
          leaf: true
        },
        {
          label: 'Interface Segregation',
          icon: 'pi pi-circle',
          data: '/solid/isp',
          leaf: true
        },
        {
          label: 'Dependency Inversion',
          icon: 'pi pi-circle',
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
          icon: 'pi pi-arrow-right',
          data: '/oop/encapsulation',
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

