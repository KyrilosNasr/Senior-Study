import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, catchError, of } from 'rxjs';

/**
 * Functional route guard example using RxJS
 * Checks authentication status before allowing route activation
 */
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Simulate authentication check
  const isAuthenticated$ = of(true); // In real app, this would be from AuthService
  
  return isAuthenticated$.pipe(
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

