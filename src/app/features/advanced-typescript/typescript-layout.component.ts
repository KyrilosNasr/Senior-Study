import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { SidebarConfig } from '../../shared/components/sidebar/sidebar.component';
import { FeatureLayoutComponent } from '../../shared/components/feature-layout/feature-layout.component';
import { getIconForLabel } from '../../shared/config/icon-mapping.config';

@Component({
  selector: 'app-typescript-layout',
  standalone: true,
  imports: [CommonModule, FeatureLayoutComponent],
  templateUrl: './typescript-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeScriptLayoutComponent {
  sidebarConfig: SidebarConfig = {
    title: 'TypeScript',
    subtitle: 'Advanced Types',
    headerText: 'Advanced TypeScript',
    gradientFrom: 'from-[var(--accent-gradient-from)]',
    gradientTo: 'to-[var(--accent-gradient-to)] dark:from-[var(--accent-gradient-from)] dark:to-[var(--accent-gradient-to)]'
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



