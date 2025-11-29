import { Provider } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CacheService } from '../services/cache.service';
import { WebSocketService } from '../services/websocket.service';
import { PollingService } from '../services/polling.service';
import { DeduplicationService } from '../services/deduplication.service';

/**
 * Feature-level providers for RxJS module
 * Services are scoped to the feature module, not root
 */
export const RXJS_PROVIDERS: Provider[] = [
  ApiService,
  CacheService,
  WebSocketService,
  PollingService,
  DeduplicationService
];

