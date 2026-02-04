import { NgIcon } from '@ng-icons/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { EnhancedButtonComponent } from '../../../shared/components/enhanced-button/enhanced-button.component';
import { Animal, Dog, Cat, Bird } from '../shared/models/animal.model';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-polymorphism-demo',
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
    EnhancedButtonComponent,
    InputTextModule,
    SelectModule,
    TabsModule
  ],
  templateUrl: './polymorphism-demo.component.html',
  styleUrl: './polymorphism-demo.component.scss'
})
export class PolymorphismDemoComponent {
  animalType = signal('dog');
  animalName = signal('');
  animals = signal<Animal[]>([]);
  selectedAnimal = signal<Animal | null>(null);

  violationCode = `
// ❌ VIOLATION: No Polymorphism
// Need separate handling for each type

function makeSound(animalType: string, name: string): string {
  if (animalType === 'dog') {
    return \`\${name} says: Woof! Woof!\`;
  } else if (animalType === 'cat') {
    return \`\${name} says: Meow! Meow!\`;
  } else if (animalType === 'bird') {
    return \`\${name} says: Tweet! Tweet!\`;
  }
  return '';
}

// Problem: Need to modify function for each new animal type
// No code reuse, harder to extend
`;

  solutionCode = `
// ✅ SOLUTION: Polymorphism
// Same interface, different implementations

interface Animal {
  makeSound(): string;
  move(): string;
}

class Dog implements Animal {
  constructor(private name: string) {}

  makeSound(): string {
    return \`\${this.name} says: Woof! Woof!\`;
  }

  move(): string {
    return \`\${this.name} is running\`;
  }
}

class Cat implements Animal {
  constructor(private name: string) {}

  makeSound(): string {
    return \`\${this.name} says: Meow! Meow!\`;
  }

  move(): string {
    return \`\${this.name} is walking gracefully\`;
  }
}

class Bird implements Animal {
  constructor(private name: string) {}

  makeSound(): string {
    return \`\${this.name} says: Tweet! Tweet!\`;
  }

  move(): string {
    return \`\${this.name} is flying\`;
  }
}

// Polymorphic usage - same code works with any Animal
function interactWithAnimals(animals: Animal[]): void {
  animals.forEach(animal => {
    console.log(animal.makeSound());  // Different implementation for each
    console.log(animal.move());       // Different implementation for each
  });
}

// Benefits:
// - Code reuse
// - Easy to extend (add new animals)
// - Same interface, different behavior
`;

  animalTypes = [
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Bird', value: 'bird' }
  ];

  createAnimal(): void {
    if (!this.animalName().trim()) {
      return;
    }

    let animal: Animal;

    switch (this.animalType()) {
      case 'dog':
        animal = new Dog(this.animalName());
        break;
      case 'cat':
        animal = new Cat(this.animalName());
        break;
      case 'bird':
        animal = new Bird(this.animalName());
        break;
      default:
        return;
    }

    this.animals.update(a => [...a, animal]);
    this.selectedAnimal.set(animal);
    this.animalName.set('');
  }

  selectAnimal(animal: Animal): void {
    this.selectedAnimal.set(animal);
  }

  allInteractions = signal<string[]>([]);

  interactWithAll(): void {
    const interactions = this.animals().flatMap(animal => [
      animal.makeSound(),
      animal.move()
    ]);
    this.allInteractions.set(interactions);
  }
}

