import { Component, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { SidebarComponent, SidebarConfig } from '../../shared/components/sidebar/sidebar.component';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-typescript-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, SidebarComponent, ThemeToggleComponent],
  templateUrl: './typescript-layout.component.html',
  styleUrl: './typescript-layout.component.scss'
})
export class TypeScriptLayoutComponent {
  private readonly router = inject(Router);
  private readonly themeService = inject(ThemeService);

  sidebarVisible = signal(false);

  readonly contentGradient = computed(() => {
    return this.themeService.getGradientClasses('to-br', 'subtle');
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
          icon: 'pi pi-code',
          data: '/typescript/advanced-types',
          leaf: true
        },
        {
          label: 'Type Guards',
          icon: 'pi pi-shield',
          data: '/typescript/type-guards',
          leaf: true
        },
        {
          label: 'Generics',
          icon: 'pi pi-cog',
          data: '/typescript/generics',
          leaf: true
        },
        {
          label: 'Utility Types',
          icon: 'pi pi-wrench',
          data: '/typescript/utility-types',
          leaf: true
        },
        {
          label: 'Decorators',
          icon: 'pi pi-star',
          data: '/typescript/decorators',
          leaf: true
        },
        {
          label: 'TypeScript 5.x',
          icon: 'pi pi-bolt',
          data: '/typescript/typescript-5-features',
          leaf: true
        },
        {
          label: 'Function Types',
          icon: 'pi pi-function',
          data: '/typescript/function-types',
          leaf: true
        },
        {
          label: 'Module Augmentation',
          icon: 'pi pi-puzzle',
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
          icon: 'pi pi-arrow-right',
          data: '/solid/srp',
          leaf: true
        },
        {
          label: 'OOP Concepts',
          icon: 'pi pi-arrow-right',
          data: '/oop/encapsulation',
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



