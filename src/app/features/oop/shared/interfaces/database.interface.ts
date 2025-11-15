export interface Database {
  connect(): void;
  disconnect(): void;
  query(sql: string): any[];
  execute(sql: string): void;
}

