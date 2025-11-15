import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { BankAccount } from '../shared/models/bank-account.model';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-encapsulation-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    ButtonModule,
    InputNumberModule,
    InputTextModule,
    MessageModule,
    TabsModule
  ],
  templateUrl: './encapsulation-demo.component.html',
  styleUrl: './encapsulation-demo.component.scss'
})
export class EncapsulationDemoComponent {
  accountNumber = signal('');
  initialBalance = signal(0);
  depositAmount = signal(0);
  withdrawAmount = signal(0);
  
  account = signal<BankAccount | null>(null);
  message = signal<string>('');

  violationCode = `
// ❌ VIOLATION: No Encapsulation
// Public fields can be accessed and modified directly

class BankAccount {
  public balance: number = 0;  // Public - anyone can modify!
  public accountNumber: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }
}

// Problem: Direct access allows invalid operations
const account = new BankAccount('12345');
account.balance = -1000;  // Can set negative balance!
account.balance = 999999; // Can set any value!
// No validation, no control
`;

  solutionCode = `
// ✅ SOLUTION: Encapsulation
// Private fields with controlled access through methods

class BankAccount {
  private balance: number = 0;  // Private - cannot access directly
  private accountNumber: string;

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  // Controlled access through methods
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;  // Validation included
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;  // Validation prevents overdraft
      return true;
    }
    return false;
  }

  // Read-only access
  getBalance(): number {
    return this.balance;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }
}

// Benefits:
// - Data protection
// - Validation and control
// - Can change implementation without affecting clients
`;

  createAccount(): void {
    if (!this.accountNumber().trim()) {
      this.message.set('Please enter an account number');
      return;
    }
    
    const newAccount = new BankAccount(this.accountNumber(), this.initialBalance());
    this.account.set(newAccount);
    this.message.set(`Account ${this.accountNumber()} created with balance $${this.initialBalance()}`);
  }

  deposit(): void {
    const acc = this.account();
    if (!acc) {
      this.message.set('Please create an account first');
      return;
    }
    
    if (this.depositAmount() <= 0) {
      this.message.set('Deposit amount must be greater than 0');
      return;
    }
    
    acc.deposit(this.depositAmount());
    this.message.set(`Deposited $${this.depositAmount()}. New balance: $${acc.getBalance()}`);
    this.depositAmount.set(0);
  }

  withdraw(): void {
    const acc = this.account();
    if (!acc) {
      this.message.set('Please create an account first');
      return;
    }
    
    if (this.withdrawAmount() <= 0) {
      this.message.set('Withdrawal amount must be greater than 0');
      return;
    }
    
    const success = acc.withdraw(this.withdrawAmount());
    if (success) {
      this.message.set(`Withdrew $${this.withdrawAmount()}. New balance: $${acc.getBalance()}`);
    } else {
      this.message.set(`Insufficient funds. Current balance: $${acc.getBalance()}`);
    }
    this.withdrawAmount.set(0);
  }
}

