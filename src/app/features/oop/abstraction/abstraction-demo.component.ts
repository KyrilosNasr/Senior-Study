import { NgIcon } from '@ng-icons/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';
import { Database } from '../shared/interfaces/database.interface';
import { MySQLDatabaseService } from '../shared/services/mysql-database.service';
import { PostgresDatabaseService } from '../shared/services/postgres-database.service';
import { MongoDBDatabaseService } from '../shared/services/mongodb-database.service';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-abstraction-demo',
  standalone: true,
  imports: [
    NgIcon,
    CommonModule,
    FormsModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule,
    SelectModule,
    MessageModule,
    TabsModule
  ],
  templateUrl: './abstraction-demo.component.html',
  styleUrl: './abstraction-demo.component.scss'
})
export class AbstractionDemoComponent {
  selectedDatabase = signal('mysql');
  result = signal<string>('');

  violationCode = `
// ❌ VIOLATION: No Abstraction
// Direct dependency on concrete implementations

class UserService {
  // Tightly coupled to MySQL
  private mysql = new MySQLDatabase();

  getUser(id: string): User {
    // Direct MySQL-specific code
    return this.mysql.query(\`SELECT * FROM users WHERE id = \${id}\`);
  }
}

// Problems:
// - Hard to switch databases
// - Tightly coupled to MySQL
// - Hard to test
// - Violates abstraction principle
`;

  solutionCode = `
// ✅ SOLUTION: Abstraction
// Abstract interface hides implementation details

// Abstract interface - defines contract
interface Database {
  connect(): void;
  disconnect(): void;
  query(sql: string): any[];
  execute(sql: string): void;
}

// Concrete implementations
class MySQLDatabaseService implements Database {
  connect(): void {
    console.log('Connecting to MySQL...');
  }

  query(sql: string): any[] {
    // MySQL-specific implementation
    return [];
  }

  execute(sql: string): void {
    // MySQL-specific implementation
  }
}

class PostgresDatabaseService implements Database {
  connect(): void {
    console.log('Connecting to PostgreSQL...');
  }

  query(sql: string): any[] {
    // PostgreSQL-specific implementation
    return [];
  }

  execute(sql: string): void {
    // PostgreSQL-specific implementation
  }
}

// High-level code depends on abstraction
class UserRepositoryService {
  constructor(private database: Database) {} // Depends on interface

  findById(id: string): User | null {
    // Works with any Database implementation
    return this.database.query(\`SELECT * FROM users WHERE id = \${id}\`)[0];
  }
}

// Benefits:
// - Easy to swap implementations
// - Loose coupling
// - Testable (can inject mock)
// - Follows abstraction principle
`;

  databases = [
    { label: 'MySQL', value: 'mysql' },
    { label: 'PostgreSQL', value: 'postgres' },
    { label: 'MongoDB', value: 'mongodb' }
  ];

  testAbstraction(): void {
    // Create database instance based on selection
    // In real app, this would be provided via DI at component/route level
    let database: Database;

    switch (this.selectedDatabase()) {
      case 'mysql':
        database = new MySQLDatabaseService();
        break;
      case 'postgres':
        database = new PostgresDatabaseService();
        break;
      case 'mongodb':
        database = new MongoDBDatabaseService();
        break;
      default:
        this.result.set('Invalid database selection');
        return;
    }

    try {
      // Demonstrate abstraction - same interface, different implementations
      database.connect();
      const results = database.query('SELECT * FROM users');
      database.disconnect();

      this.result.set(
        `Successfully used ${this.selectedDatabase()} database through Database interface.\n` +
        `The UserRepositoryService can work with any Database implementation without modification.\n` +
        `This demonstrates abstraction - hiding implementation details behind an interface.\n` +
        `Query returned ${results.length} results.`
      );
    } catch (error) {
      this.result.set(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}

