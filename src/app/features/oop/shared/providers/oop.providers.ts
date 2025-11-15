import { Provider } from '@angular/core';
import { MySQLDatabaseService } from '../services/mysql-database.service';
import { PostgresDatabaseService } from '../services/postgres-database.service';
import { MongoDBDatabaseService } from '../services/mongodb-database.service';
import { UserRepositoryService } from '../services/user-repository.service';

/**
 * Feature-level providers for OOP module
 * Services are scoped to the feature module, not root
 */
export const OOP_PROVIDERS: Provider[] = [
  MySQLDatabaseService,
  PostgresDatabaseService,
  MongoDBDatabaseService,
  UserRepositoryService
];

