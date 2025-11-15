import { Injectable } from '@angular/core';
import { Payment, PaymentRequest } from '../models/payment.model';
import { PaymentProcessor } from '../interfaces/payment-processor.interface';

/**
 * Credit card payment processor implementation
 * Scoped to SOLID feature module
 */
@Injectable()
export class CreditCardProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    console.log(`Processing credit card payment: $${request.amount} ${request.currency}`);
    
    return {
      id: `cc_${Date.now()}`,
      amount: request.amount,
      currency: request.currency,
      status: 'completed',
      timestamp: new Date()
    };
  }
}

