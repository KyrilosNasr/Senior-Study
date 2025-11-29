import { pipe, OperatorFunction } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Signal } from '@angular/core';

export function takeUntilSignal<T>(signal: Signal<boolean>): OperatorFunction<T, T> {
  return pipe(
    takeWhile(() => !signal(), true)
  );
}

