import { OperatorFunction, Observable, timer } from 'rxjs';
import { retryWhen, scan, concatMap } from 'rxjs/operators';

/**
 * Custom operator: Retry with exponential backoff
 * Retries failed observables with exponentially increasing delay
 * 
 * @param maxRetries Maximum number of retry attempts (default: 3)
 * @param initialDelay Initial delay in milliseconds (default: 1000)
 * @returns OperatorFunction that retries with exponential backoff
 */
export function retryWithBackoff<T>(
  maxRetries: number = 3,
  initialDelay: number = 1000
): OperatorFunction<T, T> {
  return (source: Observable<T>) =>
    source.pipe(
      retryWhen(errors =>
        errors.pipe(
          scan((retryCount, error) => {
            if (retryCount >= maxRetries) {
              throw error;
            }
            return retryCount + 1;
          }, 0),
          concatMap((retryCount) => {
            const delayMs = initialDelay * Math.pow(2, retryCount - 1);
            console.log(`Retrying... (attempt ${retryCount}, delay ${delayMs}ms)`);
            return timer(delayMs);
          })
        )
      )
    );
}

