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
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-oop-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ButtonModule, SidebarComponent, PageHeaderComponent, ThemeToggleComponent, Footer],
  templateUrl: './oop-layout.component.html',
  styleUrl: './oop-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OopLayoutComponent {
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

  readonly accentClass = computed(() => `accent-${this.themeService.accentColor()}`);

  sidebarConfig: SidebarConfig = {
    title: 'OOP',
    subtitle: 'Object-Oriented Programming',
    headerText: 'OOP Concepts',
    gradientFrom: 'from-[var(--accent-gradient-from)]',
    gradientTo: 'to-[var(--accent-gradient-to)] dark:from-[var(--accent-gradient-from)] dark:to-[var(--accent-gradient-to)]'
  };

  treeNodes: TreeNode[] = [
    {
      label: 'OOP Concepts',
      expanded: true,
      children: [
        {
          label: 'Encapsulation',
          icon: getIconForLabel('Encapsulation'),
          data: '/oop/encapsulation',
          leaf: true
        },
        {
          label: 'Inheritance',
          icon: getIconForLabel('Inheritance'),
          data: '/oop/inheritance',
          leaf: true
        },
        {
          label: 'Polymorphism',
          icon: getIconForLabel('Polymorphism'),
          data: '/oop/polymorphism',
          leaf: true
        },
        {
          label: 'Abstraction',
          icon: getIconForLabel('Abstraction'),
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
          icon: getIconForLabel('SOLID Principles'),
          data: '/solid/srp',
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
          icon: 'pi pi-book',
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

