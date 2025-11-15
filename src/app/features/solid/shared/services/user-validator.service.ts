import { Injectable } from '@angular/core';
import { CreateUserDto } from '../models/user.model';
import { ValidationResult } from '../models/validation-result.model';

/**
 * Validation service for user data
 * Scoped to SOLID feature module
 */
@Injectable()
export class UserValidatorService {
  /**
   * Validates email format
   */
  validateEmail(email: string): boolean {
    if (!email || typeof email !== 'string') {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  /**
   * Validates password strength
   * Requires: minimum 8 characters, at least one uppercase letter, and one number
   */
  validatePassword(password: string): boolean {
    if (!password || typeof password !== 'string') {
      return false;
    }
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
  }

  /**
   * Validates complete user data
   */
  validateUser(user: CreateUserDto): ValidationResult {
    const errors: string[] = [];

    if (!user.name || user.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters');
    }

    if (!this.validateEmail(user.email)) {
      errors.push('Invalid email format');
    }

    if (!this.validatePassword(user.password)) {
      errors.push('Password must be at least 8 characters with uppercase and number');
    }

    return {
      valid: errors.length === 0,
      errors: [...errors] // Return new array to prevent mutation
    };
  }
}

