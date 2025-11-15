import { Injectable } from '@angular/core';
import { Payment, PaymentRequest } from '../models/payment.model';
import { PaymentProcessor } from '../interfaces/payment-processor.interface';

/**
 * Cryptocurrency payment processor implementation
 * Scoped to SOLID feature module
 */
@Injectable()
export class CryptoProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    console.log(`Processing crypto payment: $${request.amount} ${request.currency}`);
    
    return {
      id: `crypto_${Date.now()}`,
      amount: request.amount,
      currency: request.currency,
      status: 'completed',
      timestamp: new Date()
    };
  }
}

