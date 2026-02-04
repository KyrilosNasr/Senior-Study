import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { SidebarConfig } from '../../shared/components/sidebar/sidebar.component';
import { FeatureLayoutComponent } from '../../shared/components/feature-layout/feature-layout.component';
import { getIconForLabel } from '../../shared/config/icon-mapping.config';

@Component({
  selector: 'app-oop-layout',
  standalone: true,
  imports: [CommonModule, FeatureLayoutComponent],
  templateUrl: './oop-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OopLayoutComponent {
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
          icon: 'faSolidBook',
          data: '/angular/dynamic-form',
          leaf: true
        }
      ]
    }
  ];
}

