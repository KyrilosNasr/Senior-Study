import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { authGuard } from '../shared/guards/auth.guard';
import { userResolver, User } from '../shared/guards/user.resolver';

@Component({
  selector: 'app-route-guards-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule
  ],
  templateUrl: './route-guards-demo.component.html',
  styleUrl: './route-guards-demo.component.scss'
})
export class RouteGuardsDemoComponent {
  private router = Router;

  violationCode = `
// ❌ VIOLATION: Synchronous Guards
// No async support, no RxJS patterns

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return this.authService.isAuthenticated; // Synchronous only
  }
}
`;

  solutionCode = `
// ✅ SOLUTION: Functional Guards with RxJS
// Observable-based, composable, testable

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isAuthenticated$.pipe(
    map(isAuth => {
      if (!isAuth) {
        router.navigate(['/login']);
        return false;
      }
      return true;
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};

// Resolver with error handling
export const userResolver: ResolveFn<User> = (route) => {
  const userService = inject(UserService);
  const router = inject(Router);
  
  return userService.getUser(route.params['id']).pipe(
    catchError(error => {
      console.error('Failed to load user:', error);
      router.navigate(['/users']);
      return of(null);
    })
  );
};
`;

  testGuard(): void {
    // Simulate guard check
    console.log('Guard would check authentication here');
  }
}

