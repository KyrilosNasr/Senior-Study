import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

// Class Decorator
function LogClass(target: any) {
  console.log('Class decorator applied to:', target.name);
  return target;
}

// Method Decorator
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${propertyKey}`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

// Property Decorator
function LogProperty(target: any, propertyKey: string) {
  let value: any;
  const getter = function () {
    console.log(`Getting ${propertyKey}:`, value);
    return value;
  };
  const setter = function (newVal: any) {
    console.log(`Setting ${propertyKey} to:`, newVal);
    value = newVal;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

// Parameter Decorator
function LogParameter(target: any, propertyKey: string | symbol, parameterIndex: number) {
  console.log(`Parameter ${parameterIndex} of ${String(propertyKey)}`);
}

// Decorator Factory
function Log(prefix: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`[${prefix}]`, propertyKey, args);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

// Metadata Reflection Example
@LogClass
class UserService {
  @LogProperty
  public name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  @LogMethod
  @Log('UserService')
  greet(@LogParameter message: string): string {
    return `${this.name} says: ${message}`;
  }
}

@Component({
  selector: 'app-decorators-demo',
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
  templateUrl: './decorators-demo.component.html',
  styleUrl: './decorators-demo.component.scss'
})
export class DecoratorsDemoComponent {
  classDecoratorCode = `
// Class Decorator: Applied to class declaration
function LogClass(target: any) {
  console.log('Class decorator applied to:', target.name);
  return target;
}

@LogClass
class UserService {
  // ...
}
`;

  methodDecoratorCode = `
// Method Decorator: Applied to method
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling method: \${propertyKey}\`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class UserService {
  @LogMethod
  greet(message: string): string {
    return message;
  }
}
`;

  propertyDecoratorCode = `
// Property Decorator: Applied to property
function LogProperty(target: any, propertyKey: string) {
  let value: any;
  const getter = function () {
    console.log(\`Getting \${propertyKey}:\`, value);
    return value;
  };
  const setter = function (newVal: any) {
    console.log(\`Setting \${propertyKey} to:\`, newVal);
    value = newVal;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}

class UserService {
  @LogProperty
  name: string = '';
}
`;

  decoratorFactoryCode = `
// Decorator Factory: Returns a decorator function
function Log(prefix: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(\`[\${prefix}]\`, propertyKey, args);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

class UserService {
  @Log('UserService')
  greet(message: string): string {
    return message;
  }
}
`;

  result = signal<string>('');

  testDecorators(): void {
    const service = new UserService('John');
    const output: string[] = [];
    
    // Capture console.log output
    const originalLog = console.log;
    console.log = (...args: any[]) => {
      output.push(args.join(' '));
      originalLog.apply(console, args);
    };

    service.name = 'Jane';
    const greeting = service.greet('Hello!');

    console.log = originalLog;

    this.result.set(
      `Decorator Output:\n${output.join('\n')}\n\n` +
      `Greeting Result: ${greeting}`
    );
  }
}

