export interface CacheEntry<T> {
  key: string;
  data: T;
  timestamp: number;
}

