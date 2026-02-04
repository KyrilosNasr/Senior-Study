import { NgIcon } from '@ng-icons/core';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { MessageModule } from 'primeng/message';
import { EnhancedButtonComponent } from '../../../shared/components/enhanced-button/enhanced-button.component';
// Violation: Fat interface
interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
  code(): void;
  design(): void;
  manage(): void;
}

class Developer implements Worker {
  work(): void { console.log('Developer working'); }
  eat(): void { console.log('Developer eating'); }
  sleep(): void { console.log('Developer sleeping'); }
  code(): void { console.log('Developer coding'); }
  design(): void { /* Not applicable */ }
  manage(): void { /* Not applicable */ }
}

class Manager implements Worker {
  work(): void { console.log('Manager working'); }
  eat(): void { console.log('Manager eating'); }
  sleep(): void { console.log('Manager sleeping'); }
  code(): void { /* Not applicable */ }
  design(): void { /* Not applicable */ }
  manage(): void { console.log('Manager managing'); }
}

// Solution: Segregated interfaces
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

interface Codable {
  code(): void;
}

interface Designable {
  design(): void;
}

interface Manageable {
  manage(): void;
}

class GoodDeveloper implements Workable, Eatable, Sleepable, Codable {
  work(): void { console.log('Developer working'); }
  eat(): void { console.log('Developer eating'); }
  sleep(): void { console.log('Developer sleeping'); }
  code(): void { console.log('Developer coding'); }
}

class GoodManager implements Workable, Eatable, Sleepable, Manageable {
  work(): void { console.log('Manager working'); }
  eat(): void { console.log('Manager eating'); }
  sleep(): void { console.log('Manager sleeping'); }
  manage(): void { console.log('Manager managing'); }
}

@Component({
  selector: 'app-isp-demo',
  standalone: true,
  imports: [
    NgIcon,CommonModule, CardModule, Tabs, Tab, TabList, TabPanel, TabPanels, MessageModule, EnhancedButtonComponent],
  templateUrl: './isp-demo.component.html',
  styleUrl: './isp-demo.component.scss'
})
export class IspDemoComponent {
  violationCode = `
// ❌ VIOLATION: Interface Segregation Principle
// Fat interface forces classes to implement methods they don't need

interface Worker {
  work(): void;
  eat(): void;
  sleep(): void;
  code(): void;      // Only developers need this
  design(): void;    // Only designers need this
  manage(): void;    // Only managers need this
}

class Developer implements Worker {
  work(): void { /* ... */ }
  eat(): void { /* ... */ }
  sleep(): void { /* ... */ }
  code(): void { /* ... */ }
  design(): void { /* Empty - not applicable! */ }
  manage(): void { /* Empty - not applicable! */ }
}

// Problem: Developer is forced to implement methods it doesn't use
// This violates ISP - clients shouldn't depend on interfaces they don't use
`;

  solutionCode = `
// ✅ SOLUTION: Interface Segregation Principle
// Split fat interface into smaller, focused interfaces

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

interface Sleepable {
  sleep(): void;
}

interface Codable {
  code(): void;
}

interface Designable {
  design(): void;
}

interface Manageable {
  manage(): void;
}

// Classes only implement interfaces they need
class Developer implements Workable, Eatable, Sleepable, Codable {
  work(): void { /* ... */ }
  eat(): void { /* ... */ }
  sleep(): void { /* ... */ }
  code(): void { /* ... */ }
  // No need to implement design() or manage()
}

class Manager implements Workable, Eatable, Sleepable, Manageable {
  work(): void { /* ... */ }
  eat(): void { /* ... */ }
  sleep(): void { /* ... */ }
  manage(): void { /* ... */ }
  // No need to implement code() or design()
}

// Benefits:
// - No empty method implementations
// - Clear contracts
// - Easier to maintain and extend
`;

  violationResult = signal<string>('');
  solutionResult = signal<string>('');

  testViolation(): void {
    const dev = new Developer();
    const mgr = new Manager();
    
    this.violationResult.set(
      'Developer forced to implement design() and manage() methods it doesn\'t use.\n' +
      'Manager forced to implement code() and design() methods it doesn\'t use.'
    );
  }

  testSolution(): void {
    const dev = new GoodDeveloper();
    const mgr = new GoodManager();
    
    this.solutionResult.set(
      'Developer only implements: Workable, Eatable, Sleepable, Codable\n' +
      'Manager only implements: Workable, Eatable, Sleepable, Manageable\n' +
      'No empty or unused method implementations!'
    );
  }
}

