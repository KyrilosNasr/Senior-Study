import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

/**
 * Repository service for user data management
 * Scoped to SOLID feature module
 * 
 * Note: In a real application, this would interact with an API or database
 */
@Injectable()
export class UserRepositoryService {
  private users: User[] = [];

  /**
   * Find user by ID
   */
  findById(id: string): User | null {
    if (!id || typeof id !== 'string') {
      return null;
    }
    return this.users.find(u => u.id === id) ?? null;
  }

  /**
   * Get all users
   * Returns a copy to prevent external mutation
   */
  findAll(): User[] {
    return [...this.users];
  }

  /**
   * Save or update user
   */
  save(user: User): void {
    if (!user || !user.id) {
      throw new Error('Invalid user data');
    }
    
    const index = this.users.findIndex(u => u.id === user.id);
    if (index >= 0) {
      this.users[index] = { ...user }; // Update existing
    } else {
      this.users.push({ ...user }); // Add new
    }
  }

  /**
   * Delete user by ID
   */
  delete(id: string): boolean {
    if (!id || typeof id !== 'string') {
      return false;
    }
    const initialLength = this.users.length;
    this.users = this.users.filter(u => u.id !== id);
    return this.users.length < initialLength;
  }
}

