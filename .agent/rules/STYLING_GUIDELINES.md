# 🎨 Styling Guidelines - Tailwind CSS Only

## Core Rules

### ✅ MUST USE TAILWIND CSS

```html
<!-- Good - Tailwind utilities -->
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 class="text-lg font-bold text-gray-900">Title</h1>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Action
  </button>
</div>
```

### ❌ NEVER USE CUSTOM CSS

```css
/* Bad - FORBIDDEN */
.custom-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

### ❌ NEVER USE INLINE STYLES

```html
<!-- Bad - FORBIDDEN -->
<div style="display: flex; padding: 10px; background-color: white;">
  Content
</div>

<!-- Good - Tailwind -->
<div class="flex p-2.5 bg-white">
  Content
</div>
```

---

## Responsive Design Pattern

### Mobile-First Approach

```html
<!-- Start with mobile, add breakpoints for larger screens -->
<div class="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

### Tailwind Breakpoints

| Breakpoint | Min Width | CSS |
|-----------|-----------|-----|
| None | 0px | Default (mobile) |
| `sm` | 640px | `@media (min-width: 640px)` |
| `md` | 768px | `@media (min-width: 768px)` |
| `lg` | 1024px | `@media (min-width: 1024px)` |
| `xl` | 1280px | `@media (min-width: 1280px)` |
| `2xl` | 1536px | `@media (min-width: 1536px)` |

### Responsive Grid

```html
<!-- 1 column on mobile, 2 on tablet, 3 on desktop, 4 on large screens -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div *ngFor="let item of items" class="bg-white rounded-lg shadow p-4">
    {{ item.name }}
  </div>
</div>
```

### Responsive Flexbox

```html
<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 bg-blue-500 p-4 rounded">Left</div>
  <div class="flex-1 bg-green-500 p-4 rounded">Right</div>
</div>
```

### Responsive Padding

```html
<!-- p-2 (mobile), p-4 (tablet), p-6 (desktop), p-8 (large) -->
<div class="p-2 sm:p-4 md:p-6 lg:p-8">
  Content with responsive padding
</div>
```

### Responsive Margin

```html
<!-- m-2 (mobile), m-4 (tablet), m-6 (desktop) -->
<div class="m-2 sm:m-4 md:m-6">
  Content with responsive margin
</div>
```

### Responsive Typography

```html
<!-- Responsive heading sizes -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>

<!-- Responsive paragraph -->
<p class="text-sm sm:text-base md:text-lg text-gray-600">
  Responsive paragraph text
</p>
```

---

## Common Patterns

### Card Component

```html
<div class="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4 sm:p-6">
  <h2 class="text-lg sm:text-xl font-bold text-gray-900">Card Title</h2>
  <p class="text-sm sm:text-base text-gray-600 mt-2">Card description</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
    Action
  </button>
</div>
```

### Button Variants

```html
<!-- Primary Button -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
  Primary
</button>

<!-- Secondary Button -->
<button class="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition-colors">
  Secondary
</button>

<!-- Danger Button -->
<button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
  Delete
</button>

<!-- Disabled Button -->
<button disabled class="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
  Disabled
</button>
```

### Form Elements

```html
<!-- Input -->
<input 
  type="text" 
  class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Enter text"
>

<!-- Select -->
<select class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Textarea -->
<textarea 
  class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  rows="4"
  placeholder="Enter message"
></textarea>
```

### Alert/Notification

```html
<!-- Success Alert -->
<div class="p-4 bg-green-50 border border-green-200 rounded-lg">
  <p class="text-green-800">Success message</p>
</div>

<!-- Error Alert -->
<div class="p-4 bg-red-50 border border-red-200 rounded-lg">
  <p class="text-red-800">Error message</p>
</div>

<!-- Warning Alert -->
<div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
  <p class="text-yellow-800">Warning message</p>
</div>

<!-- Info Alert -->
<div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <p class="text-blue-800">Info message</p>
</div>
```

### Loading State

```html
<!-- Spinner -->
<div class="flex items-center justify-center">
  <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
</div>

<!-- Skeleton -->
<div class="space-y-4">
  <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
  <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
  <div class="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
</div>
```

---

## Color Palette

### Primary Colors
- `bg-blue-500` - Primary action
- `bg-blue-600` - Primary hover
- `text-blue-500` - Primary text

### Neutral Colors
- `bg-gray-50` - Light background
- `bg-gray-100` - Lighter background
- `bg-white` - White background
- `text-gray-900` - Dark text
- `text-gray-600` - Medium text
- `text-gray-400` - Light text

### Status Colors
- `bg-green-500` - Success
- `bg-red-500` - Error/Danger
- `bg-yellow-500` - Warning
- `bg-blue-500` - Info

---

## Spacing Scale

```
p-1   = 0.25rem (4px)
p-2   = 0.5rem  (8px)
p-3   = 0.75rem (12px)
p-4   = 1rem    (16px)
p-6   = 1.5rem  (24px)
p-8   = 2rem    (32px)
p-12  = 3rem    (48px)
p-16  = 4rem    (64px)
```

---

## Typography Scale

```
text-xs   = 0.75rem (12px)
text-sm   = 0.875rem (14px)
text-base = 1rem (16px)
text-lg   = 1.125rem (18px)
text-xl   = 1.25rem (20px)
text-2xl  = 1.5rem (24px)
text-3xl  = 1.875rem (30px)
text-4xl  = 2.25rem (36px)
text-5xl  = 3rem (48px)
```

---

## Dark Mode Support

```html
<!-- Add dark: prefix for dark mode -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 class="text-lg dark:text-xl">Title</h1>
  <p class="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

---

## Performance Tips

1. **Use utility classes** - Tailwind is optimized for production
2. **Avoid arbitrary values** - Use predefined values when possible
3. **Minimize custom CSS** - Use Tailwind utilities instead
4. **Purge unused styles** - Tailwind automatically removes unused CSS in production

---

## Checklist

- [ ] No custom CSS files
- [ ] No inline styles
- [ ] Mobile-first responsive design
- [ ] All breakpoints used correctly
- [ ] Consistent spacing and sizing
- [ ] Proper color usage
- [ ] Accessible contrast ratios
- [ ] Hover/focus states defined
- [ ] Transitions smooth
- [ ] Dark mode considered

---

**Remember**: Tailwind CSS is powerful and flexible. Use it! 🎨

