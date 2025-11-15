export abstract class Vehicle {
  protected brand: string;
  protected model: string;
  protected year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  abstract start(): string;
  abstract stop(): string;

  getInfo(): string {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

export class Car extends Vehicle {
  private doors: number;

  constructor(brand: string, model: string, year: number, doors: number) {
    super(brand, model, year);
    this.doors = doors;
  }

  start(): string {
    return `Starting ${this.brand} ${this.model} car with ${this.doors} doors`;
  }

  stop(): string {
    return `Stopping ${this.brand} ${this.model} car`;
  }

  getDoors(): number {
    return this.doors;
  }
}

export class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(brand: string, model: string, year: number, engineSize: number) {
    super(brand, model, year);
    this.engineSize = engineSize;
  }

  start(): string {
    return `Starting ${this.brand} ${this.model} motorcycle with ${this.engineSize}cc engine`;
  }

  stop(): string {
    return `Stopping ${this.brand} ${this.model} motorcycle`;
  }

  getEngineSize(): number {
    return this.engineSize;
  }
}

export class Truck extends Vehicle {
  private cargoCapacity: number;

  constructor(brand: string, model: string, year: number, cargoCapacity: number) {
    super(brand, model, year);
    this.cargoCapacity = cargoCapacity;
  }

  start(): string {
    return `Starting ${this.brand} ${this.model} truck with ${this.cargoCapacity}kg capacity`;
  }

  stop(): string {
    return `Stopping ${this.brand} ${this.model} truck`;
  }

  getCargoCapacity(): number {
    return this.cargoCapacity;
  }
}

