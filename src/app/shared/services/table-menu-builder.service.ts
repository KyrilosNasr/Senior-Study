import { Injectable, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TableAction } from '../types/table-config.types';
import { getFontAwesomeIcon } from '../utils/icon-mapper.util';
import { DynamicModalService } from '../components/dynamic-modal/dynamic-modal.service';

/**
 * Service for building PrimeNG menu items from table actions
 * Handles action filtering, transformation, and menu item generation
 * Supports confirmation dialogs for actions that require user confirmation
 */
@Injectable()
export class TableMenuBuilderService {
  private readonly modalService = inject(DynamicModalService);
  /**
   * Build menu items from table actions for a specific row
   * Filters visible actions and transforms them to PrimeNG MenuItem format
   * 
   * @param actions - Array of table actions to convert
   * @param row - The row data for which to build menu items
   * @param onActionClick - Optional callback when an action is clicked (for event emission)
   * @returns Array of PrimeNG MenuItem objects ready for use in p-menu component
   * 
   * @example
   * ```typescript
   * const actions: TableAction<User>[] = [
   *   { label: 'Edit', icon: 'pi pi-pencil', handler: (user) => editUser(user) },
   *   { label: 'Delete', icon: 'pi pi-trash', handler: (user) => deleteUser(user), visible: (user) => user.role !== 'admin' }
   * ];
   * const menuItems = menuBuilder.buildMenuItems(actions, user, (action, row) => {
   *   // Handle event emission
   * });
   * ```
   */
  buildMenuItems<T>(
    actions: TableAction<T>[],
    row: T,
    onActionClick?: (action: TableAction<T>, row: T) => void
  ): MenuItem[] {
    if (!actions || actions.length === 0) {
      return [];
    }

    // Filter actions based on visibility
    const visibleActions = actions.filter(action => {
      if (action.visible && !action.visible(row)) {
        return false;
      }
      return true;
    });
    
    // Transform actions to menu items
    const menuItems: MenuItem[] = visibleActions.map(action => ({
      label: action.label,
      icon: action.icon ? getFontAwesomeIcon(action.icon) : undefined,
      command: () => {
        // Check if action is disabled
        if (action.disabled && action.disabled(row)) {
          return;
        }
        
        // Handle confirmation dialog if required
        if (action.confirmDialog) {
          this.handleActionWithConfirmation(action, row, onActionClick);
        } else {
          // Execute action handler directly
          this.executeAction(action, row, onActionClick);
        }
      },
      disabled: action.disabled ? action.disabled(row) : false,
      separator: action.separator
    }));
    
    return menuItems;
  }
  
  /**
   * Check if a row has any visible actions
   * 
   * @param actions - Array of table actions
   * @param row - The row data to check
   * @returns True if at least one action is visible for the row
   * 
   * @example
   * ```typescript
   * if (menuBuilder.hasVisibleActions(actions, user)) {
   *   // Show action menu button
   * }
   * ```
   */
  hasVisibleActions<T>(actions: TableAction<T>[], row: T): boolean {
    if (!actions || actions.length === 0) {
      return false;
    }
    
    return actions.some(action => {
      if (action.visible) {
        return action.visible(row);
      }
      return true; // Action is visible by default if no visibility function
    });
  }

  /**
   * Handle action execution with confirmation dialog
   * Shows confirmation dialog and executes handler only if user confirms
   */
  private handleActionWithConfirmation<T>(
    action: TableAction<T>,
    row: T,
    onActionClick?: (action: TableAction<T>, row: T) => void
  ): void {
    // Support dynamic messages/titles based on row data
    const title = typeof action.confirmTitle === 'function' 
      ? action.confirmTitle(row) 
      : (action.confirmTitle || 'Confirm Action');
    const message = typeof action.confirmMessage === 'function'
      ? action.confirmMessage(row)
      : (action.confirmMessage || 'Are you sure you want to proceed?');
    const confirmLabel = action.confirmLabel || 'Confirm';
    const cancelLabel = action.cancelLabel || 'Cancel';

    this.modalService
      .confirm(title, message, confirmLabel, cancelLabel)
      .then((result) => {
        if (result.action === 'confirm' && !result.cancelled) {
          this.executeAction(action, row, onActionClick);
        }
      });
  }

  /**
   * Execute action handler and emit event
   */
  private executeAction<T>(
    action: TableAction<T>,
    row: T,
    onActionClick?: (action: TableAction<T>, row: T) => void
  ): void {
    // Execute action handler
    action.handler(row);
    
    // Emit action click event if callback provided
    if (onActionClick) {
      onActionClick(action, row);
    }
  }
}

