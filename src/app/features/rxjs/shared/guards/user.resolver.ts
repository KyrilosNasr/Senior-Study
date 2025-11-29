import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface User {
  id: string;
  name: string;
  email: string;
}

/**
 * Functional route resolver example using RxJS
 * Pre-loads user data before route activation
 */
export const userResolver: ResolveFn<User> = (route) => {
  // In real app, this would inject UserService
  // const userService = inject(UserService);
  
  // Simulate user data loading
  const user$: Observable<User> = of({
    id: route.params['id'] || '1',
    name: 'John Doe',
    email: 'john@example.com'
  });
  
  return user$.pipe(
    catchError(error => {
      console.error('Failed to load user:', error);
      // Return default user or navigate away
      return of({
        id: '0',
        name: 'Unknown',
        email: 'unknown@example.com'
      });
    })
  );
};

