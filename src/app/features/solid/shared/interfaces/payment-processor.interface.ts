import { Payment, PaymentRequest } from '../models/payment.model';

export interface PaymentProcessor {
  processPayment(request: PaymentRequest): Payment;
}

