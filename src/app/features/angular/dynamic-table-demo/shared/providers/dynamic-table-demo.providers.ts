import { Provider } from '@angular/core';
import { TableDataService } from '../services/table-data.service';
import { TableConfigService } from '../services/table-config.service';
import { NestedTableService } from '../services/nested-table.service';

/**
 * Feature-level providers for Dynamic Table Demo module
 * Services are scoped to the feature module, not root
 */
export const DYNAMIC_TABLE_DEMO_PROVIDERS: Provider[] = [
  TableDataService,
  TableConfigService,
  NestedTableService
];

