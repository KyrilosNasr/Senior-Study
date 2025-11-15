import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Tabs, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { Shape, Rectangle, Square } from '../shared/models/shape.model';
import { TabsModule } from 'primeng/tabs';

// Violation: Square extends Rectangle incorrectly
class BadRectangle implements Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class BadSquare extends BadRectangle {
  constructor(side: number) {
    super(side, side);
  }

  setWidth(width: number): void {
    this.width = width;
    this.height = width; // Violates LSP - changes behavior
  }

  setHeight(height: number): void {
    this.width = height;
    this.height = height; // Violates LSP - changes behavior
  }
}

// Solution: Proper inheritance
class GoodRectangle implements Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class GoodSquare implements Square {
  constructor(public side: number) {}

  area(): number {
    return this.side * this.side;
  }

  perimeter(): number {
    return 4 * this.side;
  }
}

@Component({
  selector: 'app-lsp-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule,
    InputNumberModule,
    MessageModule,
    TabsModule
  ],
  templateUrl: './lsp-demo.component.html',
  styleUrl: './lsp-demo.component.scss'
})
export class LspDemoComponent {
  rectangleWidth = signal(10);
  rectangleHeight = signal(5);
  squareSide = signal(5);

  violationCode = `
// ❌ VIOLATION: Liskov Substitution Principle
// Square cannot be substituted for Rectangle without breaking behavior

class Rectangle {
  constructor(public width: number, public height: number) {}
  
  area(): number {
    return this.width * this.height;
  }
  
  setWidth(width: number): void {
    this.width = width;
  }
  
  setHeight(height: number): void {
    this.height = height;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
  
  // Problem: This violates the contract!
  setWidth(width: number): void {
    this.width = width;
    this.height = width; // Changes both dimensions
  }
  
  setHeight(height: number): void {
    this.width = height;
    this.height = height; // Changes both dimensions
  }
}

// This function expects Rectangle behavior
function testRectangle(rect: Rectangle): void {
  const areaBefore = rect.area();
  rect.setWidth(10);
  rect.setHeight(5);
  const areaAfter = rect.area();
  // This will fail with Square!
  // Expected: 50, but Square gives: 25
}
`;

  solutionCode = `
// ✅ SOLUTION: Liskov Substitution Principle
// Subtypes must be substitutable for their base types

interface Shape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  
  area(): number {
    return this.width * this.height;
  }
  
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Square implements Shape {
  constructor(public side: number) {}
  
  area(): number {
    return this.side * this.side;
  }
  
  perimeter(): number {
    return 4 * this.side;
  }
}

// Both can be used interchangeably where Shape is expected
function calculateTotalArea(shapes: Shape[]): number {
  return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}

// Square and Rectangle can be substituted without issues
const shapes: Shape[] = [
  new Rectangle(10, 5),
  new Square(5)
];
const totalArea = calculateTotalArea(shapes);
`;

  testViolation(): void {
    const rect = new BadRectangle(this.rectangleWidth(), this.rectangleHeight());
    const sq = new BadSquare(this.squareSide());
    
    // This demonstrates the violation
    const rectArea = rect.area();
    const sqArea = sq.area();
    
    // If we try to use Square as Rectangle, behavior changes
    sq.setWidth(10);
    sq.setHeight(5);
    const sqAreaAfter = sq.area(); // This is wrong!
    
    this.violationResult.set({
      rectangleArea: rectArea,
      squareAreaInitial: sqArea,
      squareAreaAfter: sqAreaAfter,
      violation: sqAreaAfter !== 50 // Should be 50 if it were a rectangle
    });
  }

  testSolution(): void {
    const rect = new GoodRectangle(this.rectangleWidth(), this.rectangleHeight());
    const sq = new GoodSquare(this.squareSide());
    
    this.solutionResult.set({
      rectangleArea: rect.area(),
      rectanglePerimeter: rect.perimeter(),
      squareArea: sq.area(),
      squarePerimeter: sq.perimeter(),
      totalArea: rect.area() + sq.area()
    });
  }

  violationResult = signal<any>(null);
  solutionResult = signal<any>(null);

  runViolationTest(): void {
    this.testViolation();
  }

  runSolutionTest(): void {
    this.testSolution();
  }
}

