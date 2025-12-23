import { DynamicTableConfig } from "../../../../../shared/types";

/**
 * User model for demo purposes
 */
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}

/**
 * Product model for demo purposes
 */
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

/**
 * Order model for nested table demo
 */
export interface Order {
  id: number;
  orderNumber: string;
  product: string;
  quantity: number;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  orderDate: Date;
  userId: number;
}

/**
 * Demo table configuration interface
 */
export interface DemoTableConfig {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'teal' | 'indigo' | 'yellow';
  config: DynamicTableConfig<unknown>;
  getNestedTableData?: (row: unknown) => Order[];
  getNestedTableConfig?: (row: unknown) => DynamicTableConfig<unknown>;
}

