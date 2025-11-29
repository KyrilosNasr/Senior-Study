import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  role: 'admin' | 'user';
}

@Component({
  selector: 'app-utility-types-demo',
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
  templateUrl: './utility-types-demo.component.html',
  styleUrl: './utility-types-demo.component.scss'
})
export class UtilityTypesDemoComponent {
  partialPickOmitCode = `
// Partial: Make all properties optional
type PartialUser = Partial<User>;
// { id?: string; name?: string; email?: string; ... }

// Pick: Select specific properties
type UserName = Pick<User, 'name' | 'email'>;
// { name: string; email: string; }

// Omit: Exclude specific properties
type UserWithoutId = Omit<User, 'id'>;
// { name: string; email: string; age?: number; role: 'admin' | 'user'; }

// Usage
const partialUser: PartialUser = { name: 'John' };
const userName: UserName = { name: 'John', email: 'john@example.com' };
const userWithoutId: UserWithoutId = { name: 'John', email: 'john@example.com', role: 'user' };
`;

  recordRequiredReadonlyCode = `
// Record: Create object type with specific keys and values
type UserRoles = Record<string, 'admin' | 'user'>;
// { [key: string]: 'admin' | 'user' }

type StatusCodes = Record<200 | 404 | 500, string>;
// { 200: string; 404: string; 500: string; }

// Required: Make all properties required
type RequiredUser = Required<User>;
// { id: string; name: string; email: string; age: number; role: 'admin' | 'user'; }

// Readonly: Make all properties readonly
type ReadonlyUser = Readonly<User>;
// All properties are readonly
`;

  extractExcludeNonNullableCode = `
// Extract: Extract types from union
type StringOrNumber = string | number | boolean;
type OnlyString = Extract<StringOrNumber, string>;  // string

// Exclude: Exclude types from union
type WithoutBoolean = Exclude<StringOrNumber, boolean>;  // string | number

// NonNullable: Remove null and undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;  // string
`;

  advancedUtilityTypesCode = `
// Parameters: Extract function parameters
function createUser(name: string, email: string, age?: number) {}
type CreateUserParams = Parameters<typeof createUser>;
// [string, string, number?]

// ReturnType: Extract return type
type UserReturn = ReturnType<typeof createUser>;
// User

// Awaited: Unwrap Promise type
type UserPromise = Promise<User>;
type UnwrappedUser = Awaited<UserPromise>;  // User

// InstanceType: Extract instance type from constructor
class UserService {}
type ServiceInstance = InstanceType<typeof UserService>;  // UserService
`;

  result = signal<string>('');

  testPartialPickOmit(): void {
    const partialUser: Partial<User> = { name: 'John' };
    const userName: Pick<User, 'name' | 'email'> = { name: 'John', email: 'john@example.com' };
    const userWithoutId: Omit<User, 'id'> = { name: 'John', email: 'john@example.com', role: 'user' };

    this.result.set(
      `Partial User: ${JSON.stringify(partialUser, null, 2)}\n\n` +
      `Pick User: ${JSON.stringify(userName, null, 2)}\n\n` +
      `Omit User: ${JSON.stringify(userWithoutId, null, 2)}`
    );
  }

  testRecordRequiredReadonly(): void {
    const userRoles: Record<string, 'admin' | 'user'> = {
      'user1': 'admin',
      'user2': 'user'
    };

    const readonlyUser: Readonly<User> = {
      id: '1',
      name: 'John',
      email: 'john@example.com',
      role: 'user'
    };

    this.result.set(
      `Record: ${JSON.stringify(userRoles, null, 2)}\n\n` +
      `Readonly User: ${JSON.stringify(readonlyUser, null, 2)}`
    );
  }

  testExtractExcludeNonNullable(): void {
    type StringOrNumber = string | number | boolean;
    type OnlyString = Extract<StringOrNumber, string>;
    type WithoutBoolean = Exclude<StringOrNumber, boolean>;
    type MaybeString = string | null | undefined;
    type DefiniteString = NonNullable<MaybeString>;

    const str: OnlyString = 'hello';
    const numOrStr: WithoutBoolean = 'hello';
    const definite: DefiniteString = 'hello';

    this.result.set(
      `Extract (string only): "${str}"\n` +
      `Exclude (no boolean): "${numOrStr}"\n` +
      `NonNullable: "${definite}"`
    );
  }
}

