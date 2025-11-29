import { pipe, OperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Custom operator: Log with context
 * Adds contextual logging to observables without modifying the stream
 * 
 * @param context Context string for logging
 * @returns OperatorFunction that logs with context
 */
export function logWithContext<T>(context: string): OperatorFunction<T, T> {
  return pipe(
    tap({
      next: (value) => console.log(`[${context}] Next:`, value),
      error: (err) => console.error(`[${context}] Error:`, err),
      complete: () => console.log(`[${context}] Complete`)
    })
  );
}

