import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { SidebarConfig } from '../../shared/components/sidebar/sidebar.component';
import { FeatureLayoutComponent } from '../../shared/components/feature-layout/feature-layout.component';
import { getIconForLabel } from '../../shared/config/icon-mapping.config';

@Component({
  selector: 'app-angular-layout',
  standalone: true,
  imports: [CommonModule, FeatureLayoutComponent],
  templateUrl: './angular-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularLayoutComponent {
  sidebarConfig: SidebarConfig = {
    title: 'Angular',
    subtitle: 'Dynamic Components',
    headerText: 'Angular Components',
    gradientFrom: 'from-[var(--accent-gradient-from)]',
    gradientTo: 'to-[var(--accent-gradient-to)] dark:from-[var(--accent-gradient-from)] dark:to-[var(--accent-gradient-to)]'
  };

  treeNodes: TreeNode[] = [
    {
      label: 'Dynamic Components',
      expanded: true,
      children: [
        {
          label: 'Dynamic Form',
          icon: getIconForLabel('Dynamic Form'),
          data: '/angular/dynamic-form',
          leaf: true
        },
        {
          label: 'Dynamic Table',
          icon: getIconForLabel('Dynamic Table'),
          data: '/angular/dynamic-table',
          leaf: true
        },
        {
          label: 'Dynamic Modal',
          icon: getIconForLabel('Dynamic Modal'),
          data: '/angular/dynamic-modal',
          leaf: true
        }
      ]
    },
    {
      label: 'Angular Topics',
      expanded: true,
      children: [
        {
          label: 'Angular Signals',
          icon: 'fas fa-signal',
          data: '/angular/signals',
          leaf: true
        },
        {
          label: 'Reactive Forms',
          icon: 'fas fa-edit',
          data: '/angular/reactive-forms',
          leaf: true
        },
        {
          label: 'ControlValueAccessor',
          icon: 'fas fa-plug',
          data: '/angular/control-value-accessor',
          leaf: true
        },
        {
          label: 'Multi-Step Form',
          icon: 'fas fa-list-ol',
          data: '/angular/multi-step-form',
          leaf: true
        },
        {
          label: 'Modern Control Flow',
          icon: 'fas fa-code-branch',
          data: '/angular/modern-control-flow',
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
        }
      ]
    }
  ];
}

