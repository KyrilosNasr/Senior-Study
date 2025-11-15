export interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  timestamp: Date;
}

export interface PaymentRequest {
  amount: number;
  currency: string;
}

