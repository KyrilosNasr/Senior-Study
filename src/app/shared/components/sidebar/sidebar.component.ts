import { Component, Input, Output, EventEmitter, WritableSignal, inject, computed } from '@angular/core';
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
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private readonly themeService = inject(ThemeService);

  @Input({ required: true }) config!: SidebarConfig;
  @Input({ required: true }) treeNodes!: TreeNode[];
  @Input({ required: true }) sidebarVisible!: WritableSignal<boolean>;
  @Output() nodeSelect = new EventEmitter<any>();

  readonly sidebarGradient = computed(() => {
    return this.themeService.getGradientClasses('to-br', 'strong');
  });

  readonly titleGradient = computed(() => {
    return this.themeService.getTextGradientClasses();
  });

  onNodeSelect(event: any): void {
    this.nodeSelect.emit(event);
  }
}

