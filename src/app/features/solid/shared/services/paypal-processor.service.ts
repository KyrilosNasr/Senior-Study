import { Injectable } from '@angular/core';
import { Payment, PaymentRequest } from '../models/payment.model';
import { PaymentProcessor } from '../interfaces/payment-processor.interface';

/**
 * PayPal payment processor implementation
 * Scoped to SOLID feature module
 */
@Injectable()
export class PayPalProcessorService implements PaymentProcessor {
  processPayment(request: PaymentRequest): Payment {
    console.log(`Processing PayPal payment: $${request.amount} ${request.currency}`);
    
    return {
      id: `pp_${Date.now()}`,
      amount: request.amount,
      currency: request.currency,
      status: 'completed',
      timestamp: new Date()
    };
  }
}

