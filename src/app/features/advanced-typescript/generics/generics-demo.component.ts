import { NgIcon } from '@ng-icons/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

// Generic Constraints
interface Identifiable {
  id: string;
}

interface Named {
  name: string;
}

// Constraint: T must extend Identifiable
function findById<T extends Identifiable>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// Multiple Constraints
function processEntity<T extends Identifiable & Named>(entity: T): string {
  return `${entity.name} (${entity.id})`;
}

// Default Type Parameters
interface Repository<T = any> {
  findById(id: string): T | null;
  save(entity: T): void;
}

// Generic Variance
interface Container<T> {
  value: T;
}

// Covariance example
interface Producer<T> {
  produce(): T;
}

// Contravariance example
interface Consumer<T> {
  consume(value: T): void;
}

// Invariance example
interface Storage<T> {
  get(): T;
  set(value: T): void;
}

// Practical Example: Generic Repository
class GenericRepository<T extends Identifiable> implements Repository<T> {
  private items: T[] = [];

  findById(id: string): T | null {
    return this.items.find(item => item.id === id) || null;
  }

  save(entity: T): void {
    const index = this.items.findIndex(item => item.id === entity.id);
    if (index >= 0) {
      this.items[index] = entity;
    } else {
      this.items.push(entity);
    }
  }

  findAll(): T[] {
    return [...this.items];
  }
}

interface User extends Identifiable {
  name: string;
  email: string;
}

interface Product extends Identifiable {
  name: string;
  price: number;
}

@Component({
  selector: 'app-generics-demo',
  standalone: true,
  imports: [
    NgIcon,
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule
  ],
  templateUrl: './generics-demo.component.html',
  styleUrl: './generics-demo.component.scss'
})
export class GenericsDemoComponent {
  constraintsCode = `
// Generic Constraints: Limit what types can be used
interface Identifiable {
  id: string;
}

// T must extend Identifiable
function findById<T extends Identifiable>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// Multiple Constraints
function processEntity<T extends Identifiable & Named>(entity: T): string {
  return \`\${entity.name} (\${entity.id})\`;
}

// Usage
const users: User[] = [{ id: '1', name: 'John' }];
const user = findById(users, '1');  // Type-safe!
`;

  defaultTypesCode = `
// Default Type Parameters
interface Repository<T = any> {
  findById(id: string): T | null;
  save(entity: T): void;
}

// Usage with default
const anyRepo: Repository = { ... };

// Usage with specific type
const userRepo: Repository<User> = { ... };
`;

  varianceCode = `
// Generic Variance: How subtyping works with generics

// Covariance: Producer<T> is covariant
interface Producer<T> {
  produce(): T;
}
// Producer<Dog> is a subtype of Producer<Animal>

// Contravariance: Consumer<T> is contravariant
interface Consumer<T> {
  consume(value: T): void;
}
// Consumer<Animal> is a subtype of Consumer<Dog>

// Invariance: Storage<T> is invariant
interface Storage<T> {
  get(): T;
  set(value: T): void;
}
// Storage<Dog> is NOT a subtype of Storage<Animal>
`;

  practicalExampleCode = `
// Practical Example: Generic Repository Pattern
class GenericRepository<T extends Identifiable> {
  private items: T[] = [];

  findById(id: string): T | null {
    return this.items.find(item => item.id === id) || null;
  }

  save(entity: T): void {
    const index = this.items.findIndex(item => item.id === entity.id);
    if (index >= 0) {
      this.items[index] = entity;
    } else {
      this.items.push(entity);
    }
  }
}

// Usage
const userRepo = new GenericRepository<User>();
const productRepo = new GenericRepository<Product>();
`;

  result = signal<string>('');

  testConstraints(): void {
    const users: User[] = [
      { id: '1', name: 'John Doe', email: 'john@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
    ];

    const user = findById(users, '1');
    const result = user ? `Found user: ${user.name} (${user.email})` : 'User not found';
    this.result.set(result);
  }

  testRepository(): void {
    const userRepo = new GenericRepository<User>();
    const productRepo = new GenericRepository<Product>();

    userRepo.save({ id: '1', name: 'John', email: 'john@example.com' });
    productRepo.save({ id: '1', name: 'Laptop', price: 999.99 });

    const user = userRepo.findById('1');
    const product = productRepo.findById('1');

    const results: string[] = [];
    if (user) {
      results.push(`User: ${user.name} - ${user.email}`);
    }
    if (product) {
      results.push(`Product: ${product.name} - $${product.price}`);
    }

    this.result.set(results.join('\n'));
  }
}



