import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

// Function Overloads
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: boolean): boolean;
function processValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 2;
  } else {
    return !value;
  }
}

// Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Typed Rest Parameters
function createUser(name: string, ...roles: ('admin' | 'user')[]): { name: string; roles: string[] } {
  return { name, roles };
}

// Function Type Aliases
type MathOperation = (a: number, b: number) => number;
type StringProcessor = (input: string) => string;

// Higher-Order Functions
function withLogging<T extends (...args: any[]) => any>(fn: T): T {
  return ((...args: Parameters<T>) => {
    console.log(`Calling ${fn.name} with:`, args);
    const result = fn(...args);
    console.log(`Result:`, result);
    return result;
  }) as T;
}

// Generic Function Types
type Mapper<T, U> = (value: T) => U;
type Predicate<T> = (value: T) => boolean;

function filter<T>(arr: T[], predicate: Predicate<T>): T[] {
  return arr.filter(predicate);
}

function map<T, U>(arr: T[], mapper: Mapper<T, U>): U[] {
  return arr.map(mapper);
}

@Component({
  selector: 'app-function-types-demo',
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
  templateUrl: './function-types-demo.component.html',
  styleUrl: './function-types-demo.component.scss'
})
export class FunctionTypesDemoComponent {
  overloadsCode = `
// Function Overloads: Multiple signatures for one function
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: boolean): boolean;
function processValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 2;
  } else {
    return !value;
  }
}

// Usage - TypeScript knows the return type based on input
const str = processValue('hello');    // Type: string
const num = processValue(5);          // Type: number
const bool = processValue(true);      // Type: boolean
`;

  restParametersCode = `
// Rest Parameters: Variable number of arguments
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Typed Rest Parameters
function createUser(name: string, ...roles: ('admin' | 'user')[]): { name: string; roles: string[] } {
  return { name, roles };
}

// Usage
const total = sum(1, 2, 3, 4, 5);  // 15
const user = createUser('John', 'admin', 'user');  // { name: 'John', roles: ['admin', 'user'] }
`;

  functionTypesCode = `
// Function Type Aliases
type MathOperation = (a: number, b: number) => number;
type StringProcessor = (input: string) => string;

// Usage
const add: MathOperation = (a, b) => a + b;
const toUpper: StringProcessor = (input) => input.toUpperCase();

// Generic Function Types
type Mapper<T, U> = (value: T) => U;
type Predicate<T> = (value: T) => boolean;

function filter<T>(arr: T[], predicate: Predicate<T>): T[] {
  return arr.filter(predicate);
}

function map<T, U>(arr: T[], mapper: Mapper<T, U>): U[] {
  return arr.map(mapper);
}
`;

  higherOrderFunctionsCode = `
// Higher-Order Functions: Functions that take or return functions
function withLogging<T extends (...args: any[]) => any>(fn: T): T {
  return ((...args: Parameters<T>) => {
    console.log(\`Calling \${fn.name} with:\`, args);
    const result = fn(...args);
    console.log(\`Result:\`, result);
    return result;
  }) as T;
}

// Usage
const loggedAdd = withLogging((a: number, b: number) => a + b);
const result = loggedAdd(2, 3);  // Logs: Calling anonymous with: [2, 3], Result: 5
`;

  result = signal<string>('');

  testOverloads(): void {
    const str = processValue('hello');
    const num = processValue(5);
    const bool = processValue(true);

    this.result.set(
      `Function Overloads Test:\n` +
      `processValue('hello'): "${str}" (type: string)\n` +
      `processValue(5): ${num} (type: number)\n` +
      `processValue(true): ${bool} (type: boolean)`
    );
  }

  testRestParameters(): void {
    const total = sum(1, 2, 3, 4, 5);
    const user = createUser('John', 'admin', 'user');

    this.result.set(
      `Rest Parameters Test:\n` +
      `sum(1, 2, 3, 4, 5): ${total}\n` +
      `createUser('John', 'admin', 'user'): ${JSON.stringify(user, null, 2)}`
    );
  }

  testFunctionTypes(): void {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = map(numbers, x => x * 2);
    const evens = filter(numbers, x => x % 2 === 0);

    this.result.set(
      `Function Types Test:\n` +
      `Original: [${numbers.join(', ')}]\n` +
      `Mapped (doubled): [${doubled.join(', ')}]\n` +
      `Filtered (evens): [${evens.join(', ')}]`
    );
  }
}

