import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// Type Guards Examples
interface Dog {
  type: 'dog';
  bark: () => void;
}

interface Cat {
  type: 'cat';
  meow: () => void;
}

type Animal = Dog | Cat;

// Type Guard Functions
function isDog(animal: Animal): animal is Dog {
  return animal.type === 'dog';
}

function isCat(animal: Animal): animal is Cat {
  return animal.type === 'cat';
}

// Type Predicates
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

// Discriminated Union
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

@Component({
  selector: 'app-type-guards-demo',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule,
    InputTextModule
  ],
  templateUrl: './type-guards-demo.component.html',
  styleUrl: './type-guards-demo.component.scss'
})
export class TypeGuardsDemoComponent {
  typeGuardsCode = `
// Type Guards: Narrow types at runtime
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

// Usage
function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else if (isNumber(value)) {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}
`;

  discriminatedUnionsCode = `
// Discriminated Unions with Type Guards
interface Dog {
  type: 'dog';
  bark: () => void;
}

interface Cat {
  type: 'cat';
  meow: () => void;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return animal.type === 'dog';
}

function handleAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.bark();  // TypeScript knows it's a Dog
  } else {
    animal.meow();  // TypeScript knows it's a Cat
  }
}
`;

  resultPatternCode = `
// Result Pattern with Type Guards
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function isSuccess<T>(result: Result<T>): result is { success: true; data: T } {
  return result.success === true;
}

function handleResult<T>(result: Result<T>) {
  if (isSuccess(result)) {
    // TypeScript knows result.data exists
    console.log(result.data);
  } else {
    // TypeScript knows result.error exists
    console.error(result.error);
  }
}
`;

  result = signal<string>('');

  testTypeGuards(): void {
    const values: unknown[] = ['hello', 42, true, [1, 2, 3]];

    const results = values.map(value => {
      if (isString(value)) {
        return `String: ${value.toUpperCase()}`;
      } else if (isNumber(value)) {
        return `Number: ${value.toFixed(2)}`;
      } else if (isArray(value)) {
        return `Array: [${value.join(', ')}]`;
      } else {
        return `Unknown: ${value}`;
      }
    });

    this.result.set(results.join('\n'));
  }

  testDiscriminatedUnions(): void {
    const dog: Dog = {
      type: 'dog',
      bark: () => console.log('Woof!')
    };

    const cat: Cat = {
      type: 'cat',
      meow: () => console.log('Meow!')
    };

    const animals: Animal[] = [dog, cat];
    const results: string[] = [];

    animals.forEach(animal => {
      if (isDog(animal)) {
        results.push('Dog detected - can call bark()');
      } else if (isCat(animal)) {
        results.push('Cat detected - can call meow()');
      }
    });

    this.result.set(results.join('\n'));
  }

  testResultPattern(): void {
    const successResult: Result<string> = {
      success: true,
      data: 'Operation completed'
    };

    const errorResult: Result<string> = {
      success: false,
      error: 'Something went wrong'
    };

    const results: string[] = [];

    if (successResult.success) {
      results.push(`Success: ${successResult.data}`);
    }

    if (!errorResult.success) {
      results.push(`Error: ${errorResult.error}`);
    }

    this.result.set(results.join('\n'));
  }
}



