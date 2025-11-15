import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Tabs, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { UserRepositoryService } from '../shared/services/user-repository.service';
import { UserValidatorService } from '../shared/services/user-validator.service';
import { UserNotifierService } from '../shared/services/user-notifier.service';
import { CreateUserDto, User } from '../shared/models/user.model';
import { TabsModule } from 'primeng/tabs';


@Component({
  selector: 'app-srp-demo',
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
    InputTextModule,
    TabsModule,
    MessageModule
  ],
  templateUrl: './srp-demo.component.html',
  styleUrl: './srp-demo.component.scss'
})
export class SrpDemoComponent {
  // Proper dependency injection using inject() function
  private readonly userRepository = inject(UserRepositoryService);
  private readonly userValidator = inject(UserValidatorService);
  private readonly userNotifier = inject(UserNotifierService);

  userDto: CreateUserDto = {
    name: '',
    email: '',
    password: ''
  };

  validationResult = signal<{ valid: boolean; errors: string[] } | null>(null);
  createdUser = signal<User | null>(null);
  users = signal<User[]>([]);

  violationCode = `
// ❌ VIOLATION: Single Responsibility Principle
// This class has multiple responsibilities:
// 1. User data management
// 2. Validation
// 3. Email notifications
// 4. Database operations

export class UserService {
  private users: User[] = [];

  createUser(user: CreateUserDto): User {
    // Responsibility 1: Validation
    if (!this.validateEmail(user.email)) {
      throw new Error('Invalid email');
    }
    if (!this.validatePassword(user.password)) {
      throw new Error('Invalid password');
    }

    // Responsibility 2: Data persistence
    const newUser: User = {
      id: Date.now().toString(),
      ...user,
      createdAt: new Date()
    };
    this.users.push(newUser);

    // Responsibility 3: Notification
    this.sendWelcomeEmail(newUser);

    return newUser;
  }

  private validateEmail(email: string): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }

  private validatePassword(password: string): boolean {
    return password.length >= 8;
  }

  private sendWelcomeEmail(user: User): void {
    console.log(\`Sending email to \${user.email}\`);
  }
}
`;

  solutionCode = `
// ✅ SOLUTION: Single Responsibility Principle
// Each class has ONE responsibility

// Responsibility 1: Data Management
@Injectable({ providedIn: 'root' })
export class UserRepositoryService {
  private users: User[] = [];

  findById(id: string): User | null {
    return this.users.find(u => u.id === id) || null;
  }

  save(user: User): void {
    this.users.push(user);
  }
}

// Responsibility 2: Validation
@Injectable({ providedIn: 'root' })
export class UserValidatorService {
  validateEmail(email: string): boolean {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length >= 8 && /[A-Z]/.test(password);
  }

  validateUser(user: CreateUserDto): ValidationResult {
    const errors: string[] = [];
    if (!this.validateEmail(user.email)) {
      errors.push('Invalid email');
    }
    if (!this.validatePassword(user.password)) {
      errors.push('Invalid password');
    }
    return { valid: errors.length === 0, errors };
  }
}

// Responsibility 3: Notifications
@Injectable({ providedIn: 'root' })
export class UserNotifierService {
  sendWelcomeEmail(user: User): void {
    console.log(\`Sending welcome email to \${user.email}\`);
  }
}

// Orchestrator: Uses all services via dependency injection
export class UserService {
  constructor(
    private readonly repository: UserRepositoryService,
    private readonly validator: UserValidatorService,
    private readonly notifier: UserNotifierService
  ) {}

  createUser(user: CreateUserDto): User {
    const validation = this.validator.validateUser(user);
    if (!validation.valid) {
      throw new Error(validation.errors.join(', '));
    }

    const newUser: User = {
      id: Date.now().toString(),
      ...user,
      createdAt: new Date()
    };

    this.repository.save(newUser);
    this.notifier.sendWelcomeEmail(newUser);

    return newUser;
  }
}
`;

  createUser(): void {
    const validation = this.userValidator.validateUser(this.userDto);
    this.validationResult.set(validation);

    if (validation.valid) {
      const newUser: User = {
        id: Date.now().toString(),
        ...this.userDto,
        createdAt: new Date()
      };

      this.userRepository.save(newUser);
      this.userNotifier.sendWelcomeEmail(newUser);
      this.createdUser.set(newUser);
      this.loadUsers();
      
      // Reset form
      this.userDto = { name: '', email: '', password: '' };
    }
  }

  loadUsers(): void {
    this.users.set(this.userRepository.findAll());
  }

  constructor() {
    this.loadUsers();
  }
}

