import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

/**
 * Notification service for user events
 * Scoped to SOLID feature module
 */
@Injectable()
export class UserNotifierService {
  sendWelcomeEmail(user: User): void {
    console.log(`Sending welcome email to ${user.email}`);
  }

  sendPasswordResetEmail(email: string): void {
    console.log(`Sending password reset email to ${email}`);
  }
}

