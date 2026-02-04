import { NgIcon } from '@ng-icons/core';
import { Component, Input, Output, EventEmitter, WritableSignal, inject, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drawer } from 'primeng/drawer';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { ThemeService } from '../../../core/services/theme.service';

export interface SidebarConfig {
  title: string;
  subtitle: string;
  headerText: string;
  gradientFrom: string;
  gradientTo: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIcon,CommonModule, Drawer, TreeModule],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  private readonly themeService = inject(ThemeService);

  @Input({ required: true }) config!: SidebarConfig;
  @Input({ required: true }) treeNodes!: TreeNode[];
  @Input({ required: true }) sidebarVisible!: WritableSignal<boolean>;
  @Output() nodeSelect = new EventEmitter<any>();
  @Output() expandedChange = new EventEmitter<boolean>();

  readonly isExpanded = signal(true);

  readonly sidebarGradient = computed(() => {
    return this.themeService.getGradientClasses('to-br', 'strong');
  });

  readonly titleGradient = computed(() => {
    return this.themeService.getTextGradientClasses();
  });

  readonly sidebarWidth = computed(() => {
    return this.isExpanded() ? 256 : 64;
  });

  readonly sidebarWidthClass = computed(() => {
    return this.isExpanded() ? 'w-64' : 'w-16';
  });

  readonly mainContentMarginClass = computed(() => {
    return this.isExpanded() ? 'lg:ml-64' : 'lg:ml-16';
  });

  onNodeSelect(event: any): void {
    this.nodeSelect.emit(event);
  }

  onCollapsedNodeClick(node: TreeNode): void {
    this.nodeSelect.emit({ node });
  }

  getIconClass(node: TreeNode): string {
    if (node.icon) {
      return node.icon;
    }
    return 'faSolidCircle';
  }

  toggleSidebar(): void {
    this.isExpanded.update(v => {
      const newValue = !v;
      this.expandedChange.emit(newValue);
      return newValue;
    });
  }

  getSidebarWidthPx(): number {
    return this.sidebarWidth();
  }

  getMainContentMarginClass(): string {
    return this.mainContentMarginClass();
  }

  getResponsiveMargin(breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'lg'): number {
    if (breakpoint === 'sm' || breakpoint === 'md') {
      return 0;
    }
    return this.sidebarWidth();
  }

  shouldShowDesktopSidebar(viewportWidth: number): boolean {
    return viewportWidth >= 1024;
  }

  getResponsiveMarginClasses(): string {
    const baseClasses = 'transition-all duration-300';
    const marginClass = this.mainContentMarginClass();
    return `${baseClasses} ${marginClass}`;
  }
}

