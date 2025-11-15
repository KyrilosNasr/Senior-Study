export interface Animal {
  makeSound(): string;
  move(): string;
}

export class Dog implements Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return `${this.name} says: Woof! Woof!`;
  }

  move(): string {
    return `${this.name} is running`;
  }
}

export class Cat implements Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return `${this.name} says: Meow! Meow!`;
  }

  move(): string {
    return `${this.name} is walking gracefully`;
  }
}

export class Bird implements Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return `${this.name} says: Tweet! Tweet!`;
  }

  move(): string {
    return `${this.name} is flying`;
  }
}

