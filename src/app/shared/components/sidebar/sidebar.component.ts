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
  imports: [CommonModule, Drawer, TreeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  private readonly themeService = inject(ThemeService);

  @Input({ required: true }) config!: SidebarConfig;
  @Input({ required: true }) treeNodes!: TreeNode[];
  @Input({ required: true }) sidebarVisible!: WritableSignal<boolean>;
  @Output() nodeSelect = new EventEmitter<any>();
  @Output() expandedChange = new EventEmitter<boolean>();

  // Sidebar expand/collapse state
  readonly isExpanded = signal(true);

  readonly sidebarGradient = computed(() => {
    return this.themeService.getGradientClasses('to-br', 'strong');
  });

  readonly titleGradient = computed(() => {
    return this.themeService.getTextGradientClasses();
  });

  // Responsive margin utilities
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
    // Emit the node selection event when clicked in collapsed mode
    this.nodeSelect.emit({ node });
  }

  getIconClass(node: TreeNode): string {
    // Return appropriate icon class based on node icon or default
    if (node.icon) {
      return node.icon;
    }
    return 'fas fa-circle';
  }

  toggleSidebar(): void {
    this.isExpanded.update(v => {
      const newValue = !v;
      this.expandedChange.emit(newValue);
      return newValue;
    });
  }

  /**
   * Get the sidebar width in pixels for the current state
   * @returns Width in pixels (256 for expanded, 64 for collapsed)
   */
  getSidebarWidthPx(): number {
    return this.sidebarWidth();
  }

  /**
   * Get the appropriate margin class for main content based on sidebar state
   * This ensures the main content adjusts properly at all breakpoints
   * @returns Tailwind margin class string
   */
  getMainContentMarginClass(): string {
    return this.mainContentMarginClass();
  }

  /**
   * Get responsive margin value for a specific breakpoint
   * @param breakpoint - The breakpoint to calculate margin for ('sm', 'md', 'lg', 'xl', '2xl')
   * @returns Margin value in pixels, or 0 for mobile breakpoints
   */
  getResponsiveMargin(breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'lg'): number {
    // On mobile (below lg breakpoint), sidebar is a drawer overlay, so no margin needed
    if (breakpoint === 'sm' || breakpoint === 'md') {
      return 0;
    }
    // On desktop (lg and above), return the sidebar width
    return this.sidebarWidth();
  }

  /**
   * Check if the sidebar should be visible at the current viewport width
   * @param viewportWidth - Current viewport width in pixels
   * @returns true if desktop sidebar should be shown, false if mobile drawer should be used
   */
  shouldShowDesktopSidebar(viewportWidth: number): boolean {
    // Tailwind's lg breakpoint is 1024px
    return viewportWidth >= 1024;
  }

  /**
   * Get the complete set of responsive margin classes for main content
   * Includes transitions for smooth animations
   * @returns Complete class string with responsive margins and transitions
   */
  getResponsiveMarginClasses(): string {
    const baseClasses = 'transition-all duration-300';
    const marginClass = this.mainContentMarginClass();
    return `${baseClasses} ${marginClass}`;
  }
}

