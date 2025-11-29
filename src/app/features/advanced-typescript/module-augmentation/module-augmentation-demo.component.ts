import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

// Module Augmentation Example
declare global {
  interface Window {
    customProperty?: string;
    customMethod?(): void;
  }
}

// Declaration Merging Example
interface User {
  id: string;
  name: string;
}

// Merging: Adding properties to existing interface
interface User {
  email: string;
}

// Merging: Adding methods
interface User {
  greet(): string;
}

// Namespace Merging
namespace User {
  export function create(name: string): User {
    return {
      id: '1',
      name,
      email: `${name}@example.com`,
      greet: () => `Hello, ${name}!`
    };
  }
}

// Global Augmentation
declare global {
  interface Array<T> {
    last(): T | undefined;
  }
}

// Implementation
Array.prototype.last = function<T>(this: T[]): T | undefined {
  return this[this.length - 1];
};

@Component({
  selector: 'app-module-augmentation-demo',
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
  templateUrl: './module-augmentation-demo.component.html',
  styleUrl: './module-augmentation-demo.component.scss'
})
export class ModuleAugmentationDemoComponent {
  moduleAugmentationCode = `
// Module Augmentation: Extend existing modules
declare module 'some-library' {
  interface SomeType {
    customProperty: string;
    customMethod(): void;
  }
}

// Usage
import { SomeType } from 'some-library';
const instance: SomeType = {
  // ... existing properties
  customProperty: 'value',
  customMethod: () => console.log('Custom method')
};
`;

  declarationMergingCode = `
// Declaration Merging: Merge multiple declarations
interface User {
  id: string;
  name: string;
}

// Later in the codebase
interface User {
  email: string;  // Merged with previous declaration
}

// Result: User has id, name, and email

// Namespace Merging
namespace User {
  export function create(name: string): User {
    return { id: '1', name, email: 'test@example.com' };
  }
}

// Usage
const user = User.create('John');
`;

  globalAugmentationCode = `
// Global Augmentation: Extend global types
declare global {
  interface Array<T> {
    last(): T | undefined;
  }
  
  interface Window {
    customProperty: string;
  }
}

// Implementation
Array.prototype.last = function<T>(this: T[]): T | undefined {
  return this[this.length - 1];
};

// Usage
const arr = [1, 2, 3];
const last = arr.last();  // TypeScript knows this method exists
`;

  thirdPartyAugmentationCode = `
// Extending Third-Party Libraries
// Example: Extending Express Request
declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: string;
      name: string;
    };
  }
}

// Now Request has user property
import { Request } from 'express';
function handler(req: Request) {
  if (req.user) {
    console.log(req.user.name);  // Type-safe!
  }
}
`;

  result = signal<string>('');

  testDeclarationMerging(): void {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      greet: () => 'Hello, John Doe!'
    };

    this.result.set(
      `Declaration Merging Test:\n` +
      `User: ${JSON.stringify(user, null, 2)}\n` +
      `Greet: ${user.greet()}`
    );
  }

  testNamespaceMerging(): void {
    const user = User.create('Jane Smith');

    this.result.set(
      `Namespace Merging Test:\n` +
      `Created User: ${JSON.stringify(user, null, 2)}\n` +
      `Greet: ${user.greet()}`
    );
  }

  testGlobalAugmentation(): void {
    const arr = [1, 2, 3, 4, 5];
    const last = arr.last();

    this.result.set(
      `Global Augmentation Test:\n` +
      `Array: [${arr.join(', ')}]\n` +
      `Last element: ${last}\n` +
      `TypeScript knows about .last() method!`
    );
  }
}

