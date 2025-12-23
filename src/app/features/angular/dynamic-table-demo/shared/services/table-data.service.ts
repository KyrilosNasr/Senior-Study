import { Injectable } from '@angular/core';
import { User, Product, Order } from '../models/demo-table.models';

/**
 * Service for managing demo table data
 * Simulates backend data storage
 */
@Injectable()
export class TableDataService {
  /**
   * Sample users data
   */
  readonly users: readonly User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'active',
      createdAt: new Date('2024-02-20')
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'User',
      status: 'inactive',
      createdAt: new Date('2024-03-10')
    },
    {
      id: 4,
      name: 'Alice Williams',
      email: 'alice@example.com',
      role: 'Moderator',
      status: 'active',
      createdAt: new Date('2024-01-05')
    },
    {
      id: 5,
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      role: 'User',
      status: 'active',
      createdAt: new Date('2024-04-12')
    }
  ] as const;

  /**
   * Sample products data
   */
  readonly products: readonly Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, rating: 4.5 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699.99, stock: 8, rating: 4.8 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 199.99, stock: 25, rating: 4.2 },
    { id: 4, name: 'T-Shirt', category: 'Clothing', price: 29.99, stock: 50, rating: 4.0 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 79.99, stock: 30, rating: 4.3 },
    { id: 6, name: 'Book', category: 'Books', price: 19.99, stock: 100, rating: 4.7 }
  ] as const;

  /**
   * Sample orders data for nested table
   */
  readonly orders: readonly Order[] = [
    { id: 1, orderNumber: 'ORD-001', product: 'Laptop', quantity: 1, amount: 999.99, status: 'completed', orderDate: new Date('2024-01-20'), userId: 1 },
    { id: 2, orderNumber: 'ORD-002', product: 'Mouse', quantity: 2, amount: 49.98, status: 'completed', orderDate: new Date('2024-01-25'), userId: 1 },
    { id: 3, orderNumber: 'ORD-003', product: 'Keyboard', quantity: 1, amount: 79.99, status: 'pending', orderDate: new Date('2024-02-01'), userId: 1 },
    { id: 4, orderNumber: 'ORD-004', product: 'Smartphone', quantity: 1, amount: 699.99, status: 'completed', orderDate: new Date('2024-02-15'), userId: 2 },
    { id: 5, orderNumber: 'ORD-005', product: 'Headphones', quantity: 1, amount: 199.99, status: 'completed', orderDate: new Date('2024-02-20'), userId: 2 },
    { id: 6, orderNumber: 'ORD-006', product: 'T-Shirt', quantity: 3, amount: 89.97, status: 'cancelled', orderDate: new Date('2024-03-05'), userId: 2 },
    { id: 7, orderNumber: 'ORD-007', product: 'Book', quantity: 5, amount: 99.95, status: 'completed', orderDate: new Date('2024-03-10'), userId: 3 },
    { id: 8, orderNumber: 'ORD-008', product: 'Jeans', quantity: 2, amount: 159.98, status: 'pending', orderDate: new Date('2024-03-12'), userId: 3 },
    { id: 9, orderNumber: 'ORD-009', product: 'Laptop', quantity: 1, amount: 999.99, status: 'completed', orderDate: new Date('2024-01-10'), userId: 4 },
    { id: 10, orderNumber: 'ORD-010', product: 'Monitor', quantity: 2, amount: 599.98, status: 'completed', orderDate: new Date('2024-01-18'), userId: 4 },
    { id: 11, orderNumber: 'ORD-011', product: 'Webcam', quantity: 1, amount: 129.99, status: 'pending', orderDate: new Date('2024-04-01'), userId: 5 },
    { id: 12, orderNumber: 'ORD-012', product: 'USB Drive', quantity: 4, amount: 79.96, status: 'completed', orderDate: new Date('2024-04-05'), userId: 5 }
  ] as const;

  /**
   * Get all users
   */
  getUsers(): User[] {
    return [...this.users];
  }

  /**
   * Get all products
   */
  getProducts(): Product[] {
    return [...this.products];
  }

  /**
   * Get orders for a specific user
   */
  getOrdersByUserId(userId: number): Order[] {
    return this.orders.filter(order => order.userId === userId);
  }
}

