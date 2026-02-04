import { NgIcon } from '@ng-icons/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { Car, Motorcycle, Truck, Vehicle } from '../shared/models/vehicle.model';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-inheritance-demo',
  standalone: true,
  imports: [
    NgIcon,
    CommonModule,
    FormsModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    TabsModule
  ],
  templateUrl: './inheritance-demo.component.html',
  styleUrl: './inheritance-demo.component.scss'
})
export class InheritanceDemoComponent {
  vehicleType = signal('car');
  brand = signal('');
  model = signal('');
  year = signal(2024);
  doors = signal(4);
  engineSize = signal(600);
  cargoCapacity = signal(1000);
  
  vehicles = signal<Vehicle[]>([]);
  selectedVehicle = signal<Vehicle | null>(null);

  violationCode = `
// ❌ VIOLATION: No Inheritance
// Code duplication and no code reuse

class Car {
  brand: string;
  model: string;
  year: number;
  doors: number;

  start(): string {
    return \`Starting \${this.brand} \${this.model} car\`;
  }

  stop(): string {
    return \`Stopping \${this.brand} \${this.model} car\`;
  }
}

class Motorcycle {
  brand: string;  // Duplicated
  model: string;   // Duplicated
  year: number;    // Duplicated
  engineSize: number;

  start(): string {
    return \`Starting \${this.brand} \${this.model} motorcycle\`;
  }

  stop(): string {
    return \`Stopping \${this.brand} \${this.model} motorcycle\`;
  }
}

// Problem: Code duplication, harder to maintain
`;

  solutionCode = `
// ✅ SOLUTION: Inheritance
// Base class with common properties and methods

abstract class Vehicle {
  protected brand: string;
  protected model: string;
  protected year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Common method - shared by all vehicles
  getInfo(): string {
    return \`\${this.year} \${this.brand} \${this.model}\`;
  }

  // Abstract methods - must be implemented by subclasses
  abstract start(): string;
  abstract stop(): string;
}

// Derived classes inherit common properties and methods
class Car extends Vehicle {
  private doors: number;

  constructor(brand: string, model: string, year: number, doors: number) {
    super(brand, model, year);  // Call parent constructor
    this.doors = doors;
  }

  // Override abstract methods
  start(): string {
    return \`Starting \${this.brand} \${this.model} car with \${this.doors} doors\`;
  }

  stop(): string {
    return \`Stopping \${this.brand} \${this.model} car\`;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(brand: string, model: string, year: number, engineSize: number) {
    super(brand, model, year);
    this.engineSize = engineSize;
  }

  start(): string {
    return \`Starting \${this.brand} \${this.model} motorcycle\`;
  }

  stop(): string {
    return \`Stopping \${this.brand} \${this.model} motorcycle\`;
  }
}

// Benefits:
// - Code reuse
// - Consistent interface
// - Easier to maintain
`;

  vehicleTypes = [
    { label: 'Car', value: 'car' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Truck', value: 'truck' }
  ];

  createVehicle(): void {
    if (!this.brand().trim() || !this.model().trim()) {
      return;
    }

    let vehicle: Vehicle;

    switch (this.vehicleType()) {
      case 'car':
        vehicle = new Car(this.brand(), this.model(), this.year(), this.doors());
        break;
      case 'motorcycle':
        vehicle = new Motorcycle(this.brand(), this.model(), this.year(), this.engineSize());
        break;
      case 'truck':
        vehicle = new Truck(this.brand(), this.model(), this.year(), this.cargoCapacity());
        break;
      default:
        return;
    }

    this.vehicles.update(v => [...v, vehicle]);
    this.selectedVehicle.set(vehicle);
    
    // Reset form
    this.brand.set('');
    this.model.set('');
  }

  selectVehicle(vehicle: Vehicle): void {
    this.selectedVehicle.set(vehicle);
  }
}

