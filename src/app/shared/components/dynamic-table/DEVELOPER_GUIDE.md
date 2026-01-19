# 🛠 Dynamic Table Developer Guide

Welcome! This component is a powerful, feature-rich wrapper around PrimeNG's Table. It's designed to be highly configurable while keeping the code clean and maintainable.

---

## 🏗 Architecture Detail

The component is split into several parts to keep the main logic manageable:

1.  **`DynamicTableComponent` (The Orchestrator):** Handles input signals, table state, and coordinates between services.
2.  **`TableStateService`:** The "Brain" of the component. Manages internal states (expansion, editing, filtering) AND generates the Action menu items.
3.  **`TableExportService`:** Handles CSV/Excel/PDF exports.
4.  **`TableCellEditorComponent`:** A sub-component dedicated to rendering the correct input/display type for a cell.

---

## 🚀 How to use (Junior Checklist)

### 1. Adding a basic Table

Simply provide a `config` object of type `DynamicTableConfig`.

```typescript
config: DynamicTableConfig<User> = {
  columns: [
    { field: 'name', header: 'User Name', sortable: true },
    { field: 'email', header: 'Email' },
  ],
  data: myUsersList,
};
```

### 2. Enabling Features

Most features are disabled by default. Enable them in the config:

- **Selection:** `selection: { enabled: true, mode: 'multiple', checkbox: true }`
- **Editing:** `rowEditing: { enabled: true, mode: 'row' }`
- **Expansion:** `rowExpansion: { enabled: true }`

### 3. Adding Row Actions

The "Actions" column appears automatically if you provide an `actions` array:

```typescript
actions: [
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    severity: 'danger',
    handler: (row) => deleteUser(row.id),
  },
];
```

---

## 🛠 Maintenance & Extensions

### How to add a new "Column Type"?

If you need a new type (like a custom status badge):

1.  Go to `TableCellEditorComponent`.
2.  Add the new type to the `@if` chain in the HTML.
3.  Update the `TableColumn` type in `table-config.types.ts`.

### How to add a Global Toolbar Button?

1.  Open `dynamic-table.component.html`.
2.  Look for the `<!-- Toolbar ... -->` comment at the top.
3.  Add your button inside the "Toolbar Content" block.

---

## 💎 Best Practices for This Component

1.  **Use Signals:** Always use `computed` signals for complex logic in the component. Avoid putting math or logic inside `{{ }}` or `[]` in the HTML.
2.  **Total Colspan:** If you add a structural column (like a new toggle), update the `totalColspan` signal in the TS file. The Loading/Empty states use this to look correct.
3.  **Keep it Flat:** Try to keep the HTML flat using `@if` and avoid nesting templates more than 3 levels deep.
4.  **No Logic in HTML:** If you find yourself writing `config.prop && config.other === 'value'` in the HTML, move it to a `readonly isFeatureX = computed(...)` signal in the TS file.
