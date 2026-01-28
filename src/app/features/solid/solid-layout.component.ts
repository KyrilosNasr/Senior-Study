import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { SidebarConfig } from '../../shared/components/sidebar/sidebar.component';
import { FeatureLayoutComponent } from '../../shared/components/feature-layout/feature-layout.component';
import { getIconForLabel } from '../../shared/config/icon-mapping.config';

@Component({
  selector: 'app-solid-layout',
  standalone: true,
  imports: [CommonModule, FeatureLayoutComponent],
  templateUrl: './solid-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolidLayoutComponent {
  sidebarConfig: SidebarConfig = {
    title: 'SOLID',
    subtitle: 'Design Principles',
    headerText: 'SOLID Principles',
    gradientFrom: 'from-[var(--accent-gradient-from)]',
    gradientTo: 'to-[var(--accent-gradient-to)] dark:from-[var(--accent-gradient-from)] dark:to-[var(--accent-gradient-to)]'
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
          icon: 'pi pi-book',
          data: '/angular/dynamic-form',
          leaf: true
        }
      ]
    }
  ];
}

