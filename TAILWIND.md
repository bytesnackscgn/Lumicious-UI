# Tailwind CSS 4 Configuration

This project uses **Tailwind CSS 4** with the new CSS-first configuration approach.

## What's Configured

### 1. Dependencies

- `tailwindcss@next` - Tailwind CSS v4
- `@tailwindcss/vite@next` - Vite plugin for Tailwind CSS v4

### 2. Vite Configuration (`vite.config.ts`)

The Tailwind Vite plugin is added to the plugins array:

```typescript
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // ...
});
```

### 3. Main CSS File (`src/index.css`)

The base Tailwind configuration using the new CSS-first approach:

```css
@import "tailwindcss";

@theme {
  /* Base configuration - extend as needed */
}
```

### 4. Application Setup

- `src/main.ts` - Imports the CSS file
- `.storybook/preview.ts` - Imports the CSS file for Storybook

> **Note:** No PostCSS configuration is needed! The `@tailwindcss/vite` plugin handles all CSS processing automatically.

## Key Differences from Tailwind CSS 3

### CSS-First Configuration

Tailwind 4 uses a **CSS-first** approach instead of the traditional `tailwind.config.js` file:

**Old (v3):**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
      },
    },
  },
};
```

**New (v4):**

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-primary: #3490dc;
}
```

### No More `@tailwind` Directives

Instead of separate directives, you use a single `@import`:

**Old (v3):**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**New (v4):**

```css
@import "tailwindcss";
```

## How to Extend the Configuration

### Adding Custom Colors

```css
@theme {
  --color-brand-primary: #3490dc;
  --color-brand-secondary: #ffed4e;
}
```

Then use in your HTML:

```html
<div class="bg-brand-primary text-brand-secondary">Hello World</div>
```

### Adding Custom Spacing

```css
@theme {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;
}
```

### Adding Custom Fonts

```css
@theme {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "Fira Code", monospace;
}
```

### Adding Custom Breakpoints

```css
@theme {
  --breakpoint-xs: 480px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Adding Custom Utilities

```css
@utility tab-* {
  tab-size: *;
}
```

### Adding Custom Variants

```css
@variant hocus (&:hover, &:focus);
@variant supports-grid (supports(display: grid));
```

## Usage in Components

You can use all standard Tailwind classes in your Vue components:

```vue
<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-gray-900">Hello Tailwind 4!</h1>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Click me
    </button>
  </div>
</template>
```

## Resources

- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS 4 Blog Post](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
