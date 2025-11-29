import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

// Conditional Types Examples
type IsString<T> = T extends string ? true : false;
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// Mapped Types Examples
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Template Literal Types Examples
type EventName<T extends string> = `on${Capitalize<T>}`;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint<T extends HttpMethod> = `/api/${Lowercase<T>}`;
type CSSProperty = `--${string}`;

interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
}

@Component({
  selector: 'app-advanced-types-demo',
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
  templateUrl: './advanced-types-demo.component.html',
  styleUrl: './advanced-types-demo.component.scss'
})
export class AdvancedTypesDemoComponent {
  conditionalTypesCode = `
// Conditional Types: Types that depend on other types
type IsString<T> = T extends string ? true : false;
type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Usage
type Test1 = IsString<string>;        // true
type Test2 = IsString<number>;        // false
type Test3 = NonNullable<string | null>;  // string
type Test4 = ReturnType<() => number>;    // number
`;

  mappedTypesCode = `
// Mapped Types: Transform properties of existing types
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Usage
interface User {
  id: string;
  name: string;
  email?: string;
}

type ReadonlyUser = Readonly<User>;      // All properties readonly
type PartialUser = Partial<User>;        // All properties optional
type RequiredUser = Required<User>;      // All properties required
`;

  templateLiteralTypesCode = `
// Template Literal Types: String manipulation at type level
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint<T extends HttpMethod> = \`/api/\${Lowercase<T>}\`;

// Usage
type ClickEvent = EventName<'click'>;           // 'onClick'
type SubmitEvent = EventName<'submit'>;         // 'onSubmit'
type GetEndpoint = ApiEndpoint<'GET'>;          // '/api/get'
type PostEndpoint = ApiEndpoint<'POST'>;        // '/api/post'

// Advanced: CSS Custom Properties
type CSSProperty = \`--\${string}\`;
const color: CSSProperty = '--primary-color';   // ✅ Valid
const invalid: CSSProperty = 'primary-color';   // ❌ Error
`;

  practicalExampleCode = `
// Practical Example: Type-safe API Client
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Endpoint = '/users' | '/products' | '/orders';

type ApiRoute<T extends HttpMethod, E extends Endpoint> = 
  \`\${E}:\${T}\`;

type RequestConfig<T extends HttpMethod, E extends Endpoint> = {
  method: T;
  url: E;
  body?: T extends 'POST' | 'PUT' ? Record<string, any> : never;
};

// Usage - Type-safe API calls
const config1: RequestConfig<'GET', '/users'> = {
  method: 'GET',
  url: '/users'
  // body is not allowed for GET
};

const config2: RequestConfig<'POST', '/users'> = {
  method: 'POST',
  url: '/users',
  body: { name: 'John' }  // body is required for POST
};
`;

  result = signal<string>('');

  testConditionalTypes(): void {
    const test1: IsString<string> = true;
    const test2: IsString<number> = false;
    const test3: NonNullable<string | null> = 'test';
    
    this.result.set(
      `Conditional Types Test:\n` +
      `IsString<string>: ${test1}\n` +
      `IsString<number>: ${test2}\n` +
      `NonNullable<string | null>: "${test3}"`
    );
  }

  testMappedTypes(): void {
    const user: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    };

    const partialUser: Partial<User> = {
      name: 'Jane Doe'
      // Other properties are optional
    };

    const readonlyUser: Readonly<User> = {
      ...user
      // All properties are readonly
    };

    this.result.set(
      `Mapped Types Test:\n` +
      `Partial User: ${JSON.stringify(partialUser, null, 2)}\n` +
      `Readonly User: ${JSON.stringify(readonlyUser, null, 2)}`
    );
  }

  testTemplateLiteralTypes(): void {
    const clickEvent: EventName<'click'> = 'onClick';
    const submitEvent: EventName<'submit'> = 'onSubmit';
    const getEndpoint: ApiEndpoint<'GET'> = '/api/get';
    const postEndpoint: ApiEndpoint<'POST'> = '/api/post';

    this.result.set(
      `Template Literal Types Test:\n` +
      `Event: ${clickEvent}\n` +
      `Event: ${submitEvent}\n` +
      `Endpoint: ${getEndpoint}\n` +
      `Endpoint: ${postEndpoint}`
    );
  }
}

