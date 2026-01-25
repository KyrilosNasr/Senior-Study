import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: ` <footer class="hidden lg:block glass border-t border-gray-200/50 dark:border-gray-700/50 py-6 px-8 xl:px-12">
      <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <p>© 2024 Angular Study Project. Built with Angular 20 & Tailwind CSS.</p>
        <div class="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener" class="hover:text-accent transition-colors">
            <i class="fab fa-github text-lg"></i>
          </a>
          <a href="https://angular.dev" target="_blank" rel="noopener" class="hover:text-accent transition-colors">
            <i class="fab fa-angular text-lg"></i>
          </a>
        </div>
      </div>
    </footer>`,
})
export class Footer { }
