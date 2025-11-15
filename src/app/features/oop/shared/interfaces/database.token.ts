import { InjectionToken } from '@angular/core';
import { Database } from './database.interface';

/**
 * Injection token for Database interface
 * Required because TypeScript interfaces cannot be used directly with DI
 */
export const DATABASE_TOKEN = new InjectionToken<Database>('DATABASE_TOKEN');

