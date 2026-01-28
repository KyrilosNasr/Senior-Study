import { Component, Input, signal, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { SidebarComponent, SidebarConfig } from '../sidebar/sidebar.component';
import { ThemeService } from '../../../core/services/theme.service';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { Footer } from '../footer/footer';

@Component({
    selector: 'app-feature-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        RouterOutlet,
        ButtonModule,
        SidebarComponent,
        PageHeaderComponent,
        ThemeToggleComponent,
        Footer
    ],
    templateUrl: './feature-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureLayoutComponent {
    private readonly router = inject(Router);
    private readonly themeService = inject(ThemeService);

    @Input({ required: true }) sidebarConfig!: SidebarConfig;
    @Input({ required: true }) treeNodes!: TreeNode[];
    @Input({ required: true }) title!: string;
    @Input({ required: true }) subtitle!: string;

    sidebarVisible = signal(false);
    sidebarExpanded = signal(true);

    readonly contentGradient = computed(() => {
        return this.themeService.getGradientClasses('to-br', 'subtle');
    });

    readonly mainContentClass = computed(() => {
        return this.sidebarExpanded() ? 'lg:ml-64' : 'lg:ml-16';
    });

    readonly accentClass = computed(() => `accent-${this.themeService.accentColor()}`);

    onNodeSelect(event: any): void {
        if (event.node?.data) {
            this.router.navigate([event.node.data]);
            this.sidebarVisible.set(false);
        }
    }

    toggleSidebar(): void {
        this.sidebarVisible.update(v => !v);
    }
}
