import { Injectable } from '@angular/core';
import { Database } from '../interfaces/database.interface';

/**
 * MySQL database implementation
 * Scoped to OOP feature module
 */
@Injectable()
export class MySQLDatabaseService implements Database {
  connect(): void {
    console.log('Connecting to MySQL database...');
  }

  disconnect(): void {
    console.log('Disconnecting from MySQL database...');
  }

  query(sql: string): any[] {
    console.log(`Executing MySQL query: ${sql}`);
    return [];
  }

  execute(sql: string): void {
    console.log(`Executing MySQL command: ${sql}`);
  }
}

