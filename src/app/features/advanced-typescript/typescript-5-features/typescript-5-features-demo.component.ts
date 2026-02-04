import { NgIcon } from '@ng-icons/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

// Const Type Parameters
function getFirstElement<const T extends readonly unknown[]>(arr: T): T[0] {
  return arr[0];
}

// Satisfies Operator
type Colors = 'red' | 'green' | 'blue';
type Theme = {
  primary: Colors;
  secondary: Colors;
};

// Using satisfies - preserves literal types while checking against type
const theme = {
  primary: 'red',
  secondary: 'blue'
} satisfies Theme;

// Without satisfies - loses literal types
const themeWithoutSatisfies: Theme = {
  primary: 'red',
  secondary: 'blue'
};

@Component({
  selector: 'app-typescript-5-features-demo',
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
  templateUrl: './typescript-5-features-demo.component.html',
  styleUrl: './typescript-5-features-demo.component.scss'
})
export class TypeScript5FeaturesDemoComponent {
  constTypeParamsCode = `
// Const Type Parameters (TypeScript 5.0+)
// Preserves literal types in function parameters

function getFirstElement<const T extends readonly unknown[]>(arr: T): T[0] {
  return arr[0];
}

// Usage
const arr = [1, 2, 3] as const;
const first = getFirstElement(arr);  // Type: 1 (literal type, not number)

// Without const type parameter
function getFirst<T extends readonly unknown[]>(arr: T): T[0] {
  return arr[0];
}
const first2 = getFirst([1, 2, 3]);  // Type: number
`;

  satisfiesOperatorCode = `
// Satisfies Operator (TypeScript 4.9+)
// Validates type while preserving literal types

type Colors = 'red' | 'green' | 'blue';
type Theme = {
  primary: Colors;
  secondary: Colors;
};

// Using satisfies - preserves literal types
const theme = {
  primary: 'red',    // Type: 'red' (literal)
  secondary: 'blue'  // Type: 'blue' (literal)
} satisfies Theme;

// Without satisfies - loses literal types
const theme2: Theme = {
  primary: 'red',    // Type: Colors
  secondary: 'blue'  // Type: Colors
};

// Benefits:
// - Type checking
// - Preserves literal types
// - Better autocomplete
`;

  decoratorMetadataCode = `
// Decorator Metadata (TypeScript 5.0+)
// Better support for decorators and metadata

import 'reflect-metadata';

function Log(target: any, propertyKey: string) {
  const types = Reflect.getMetadata('design:type', target, propertyKey);
  const paramTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
  console.log('Property type:', types);
  console.log('Parameter types:', paramTypes);
}

class UserService {
  @Log
  name: string = 'John';
}
`;

  result = signal<string>('');

  testConstTypeParams(): void {
    const arr = [1, 2, 3] as const;
    const first = getFirstElement(arr);
    
    // Type of first is 1 (literal), not number
    this.result.set(
      `Const Type Parameters Test:\n` +
      `Array: [1, 2, 3]\n` +
      `First element: ${first}\n` +
      `Type preserved: literal type '1' instead of 'number'`
    );
  }

  testSatisfiesOperator(): void {
    const theme1 = {
      primary: 'red',
      secondary: 'blue'
    } satisfies Theme;

    // theme1.primary is 'red' (literal), not Colors
    this.result.set(
      `Satisfies Operator Test:\n` +
      `Theme primary: ${theme1.primary}\n` +
      `Type preserved: literal type 'red' instead of 'Colors'\n` +
      `Type checking: ✅ Validates against Theme type`
    );
  }
}

