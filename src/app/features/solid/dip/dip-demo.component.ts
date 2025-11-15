import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tabs, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { Repository } from '../shared/interfaces/repository.interface';
import { UserRepositoryService } from '../shared/services/user-repository.service';
import { User } from '../shared/models/user.model';
import { TabsModule } from 'primeng/tabs';
// Violation: High-level module depends on concrete implementation
class BadUserService {
  private repository = new UserRepositoryService(); // Direct dependency on concrete class

  getUser(id: string): User | null {
    return this.repository.findById(id);
  }
}

// Solution: High-level module depends on abstraction
class GoodUserService {
  constructor(private repository: Repository<User>) {} // Depends on interface

  getUser(id: string): User | null {
    return this.repository.findById(id);
  }
}

@Component({
  selector: 'app-dip-demo',
  standalone: true,
  imports: [CommonModule, CardModule, Tabs, TabList, TabPanel, TabPanels, ButtonModule, MessageModule, TabsModule],
  templateUrl: './dip-demo.component.html',
  styleUrl: './dip-demo.component.scss'
})
export class DipDemoComponent {
  // Proper dependency injection - service is provided at feature level
  private readonly userRepository = inject(UserRepositoryService);
  
  violationCode = `
// ❌ VIOLATION: Dependency Inversion Principle
// High-level module depends on low-level module (concrete implementation)

class UserService {
  // Direct dependency on concrete class - violates DIP
  private repository = new UserRepositoryService();

  getUser(id: string): User | null {
    return this.repository.findById(id);
  }
}

// Problems:
// - Tight coupling to specific implementation
// - Hard to test (can't mock repository)
// - Hard to swap implementations
// - Violates DIP: High-level depends on low-level
`;

  solutionCode = `
// ✅ SOLUTION: Dependency Inversion Principle
// High-level modules depend on abstractions, not concretions

// Define abstraction (interface)
interface Repository<T> {
  findById(id: string): T | null;
  findAll(): T[];
  save(entity: T): void;
}

// Low-level module implements abstraction
class UserRepositoryService implements Repository<User> {
  findById(id: string): User | null {
    // Implementation details
  }
  
  findAll(): User[] {
    // Implementation details
  }
  
  save(entity: User): void {
    // Implementation details
  }
}

// High-level module depends on abstraction
class UserService {
  constructor(private repository: Repository<User>) {} // Depends on interface
  
  getUser(id: string): User | null {
    return this.repository.findById(id);
  }
}

// Benefits:
// - Loose coupling
// - Easy to test (can inject mock)
// - Easy to swap implementations
// - Follows DIP: Both depend on abstraction
`;

  testResult = signal<string>('');

  testDependencyInversion(): void {
    // Demonstrate that we can use the repository through its interface
    const users = this.userRepository.findAll();
    this.testResult.set(
      `Successfully using UserRepositoryService through Repository<User> interface.\n` +
      `Found ${users.length} users.\n` +
      `This demonstrates dependency inversion - high-level code depends on abstraction.`
    );
  }
}

