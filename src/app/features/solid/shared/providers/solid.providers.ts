import { Provider } from '@angular/core';
import { UserRepositoryService } from '../services/user-repository.service';
import { UserValidatorService } from '../services/user-validator.service';
import { UserNotifierService } from '../services/user-notifier.service';
import { CreditCardProcessorService } from '../services/credit-card-processor.service';
import { PayPalProcessorService } from '../services/paypal-processor.service';
import { CryptoProcessorService } from '../services/crypto-processor.service';

/**
 * Feature-level providers for SOLID module
 * Services are scoped to the feature module, not root
 */
export const SOLID_PROVIDERS: Provider[] = [
  UserRepositoryService,
  UserValidatorService,
  UserNotifierService,
  CreditCardProcessorService,
  PayPalProcessorService,
  CryptoProcessorService
];

