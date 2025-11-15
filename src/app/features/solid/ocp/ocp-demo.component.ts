import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Tabs, TabList, TabPanel, TabPanels } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { PaymentProcessor } from '../shared/interfaces/payment-processor.interface';
import { CreditCardProcessorService } from '../shared/services/credit-card-processor.service';
import { PayPalProcessorService } from '../shared/services/paypal-processor.service';
import { CryptoProcessorService } from '../shared/services/crypto-processor.service';
import { Payment, PaymentRequest } from '../shared/models/payment.model';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-ocp-demo',
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
    SelectModule,
    InputNumberModule,
    MessageModule,
    TabsModule
  ],
  templateUrl: './ocp-demo.component.html',
  styleUrl: './ocp-demo.component.scss'
})
export class OcpDemoComponent {
  paymentMethods = [
    { label: 'Credit Card', value: 'creditcard' },
    { label: 'PayPal', value: 'paypal' },
    { label: 'Crypto', value: 'crypto' }
  ];

  selectedMethod = signal('creditcard');
  amount = signal<number>(100);
  currency = signal('USD');
  paymentResult = signal<Payment | null>(null);

  private processors: Map<string, PaymentProcessor> = new Map([
    ['creditcard', new CreditCardProcessorService()],
    ['paypal', new PayPalProcessorService()],
    ['crypto', new CryptoProcessorService()]
  ]);

  violationCode = `
// ❌ VIOLATION: Open/Closed Principle
// Adding new payment methods requires modifying existing code

export class PaymentService {
  processPayment(method: string, amount: number): Payment {
    if (method === 'creditcard') {
      // Credit card processing logic
      return { id: 'cc_1', amount, status: 'completed' };
    } else if (method === 'paypal') {
      // PayPal processing logic
      return { id: 'pp_1', amount, status: 'completed' };
    }
    // Need to modify this class to add new methods!
    throw new Error('Unsupported payment method');
  }
}

// To add crypto payments, we must modify PaymentService
// This violates OCP - open for extension, closed for modification
`;

  solutionCode = `
// ✅ SOLUTION: Open/Closed Principle
// Open for extension, closed for modification

// Define interface/abstraction
export interface PaymentProcessor {
  processPayment(request: PaymentRequest): Payment;
}

// Implementations - can add new ones without modifying existing code
@Injectable()
export class CreditCardProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    // Credit card specific logic
    return { id: 'cc_1', ...request, status: 'completed' };
  }
}

@Injectable()
export class PayPalProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    // PayPal specific logic
    return { id: 'pp_1', ...request, status: 'completed' };
  }
}

// NEW: Add crypto without modifying existing code
@Injectable()
export class CryptoProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    // Crypto specific logic
    return { id: 'crypto_1', ...request, status: 'completed' };
  }
}

// Payment service uses abstraction - no changes needed
export class PaymentService {
  constructor(private processor: PaymentProcessor) {}

  processPayment(request: PaymentRequest): Payment {
    return this.processor.processPayment(request);
  }
}
`;

  processPayment(): void {
    const processor = this.processors.get(this.selectedMethod());
    if (processor) {
      const request: PaymentRequest = {
        amount: this.amount(),
        currency: this.currency()
      };
      const result = processor.processPayment(request);
      this.paymentResult.set(result);
    }
  }
}

