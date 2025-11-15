import { Injectable, inject, Inject, Optional } from '@angular/core';
import { Repository } from '../interfaces/repository.interface';
import { DATABASE_TOKEN } from '../interfaces/database.token';

export interface User {
  id: string;
  name: string;
  email: string;
}

/**
 * User repository implementation
 * Scoped to OOP feature module
 * Requires Database to be provided via DI using DATABASE_TOKEN
 */
@Injectable()
export class UserRepositoryService implements Repository<User> {
  private readonly database = inject(DATABASE_TOKEN, { optional: true });

  findById(id: string): User | null {
    if (!this.database) {
      throw new Error('Database service not provided');
    }
    const results = this.database.query(`SELECT * FROM users WHERE id = '${id}'`);
    return results.length > 0 ? (results[0] as User) : null;
  }

  findAll(): User[] {
    if (!this.database) {
      throw new Error('Database service not provided');
    }
    return this.database.query('SELECT * FROM users') as User[];
  }

  save(entity: User): void {
    if (!this.database) {
      throw new Error('Database service not provided');
    }
    this.database.execute(`INSERT INTO users (id, name, email) VALUES ('${entity.id}', '${entity.name}', '${entity.email}')`);
  }

  delete(id: string): void {
    if (!this.database) {
      throw new Error('Database service not provided');
    }
    this.database.execute(`DELETE FROM users WHERE id = '${id}'`);
  }
}

