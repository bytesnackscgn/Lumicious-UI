# LBreadcrumbs

A glassmorphism breadcrumbs component for navigation paths.

## Features

- Glassmorphism design with blur effects
- Customizable sizes and colors
- Ellipsis support for long paths
- Disabled items support
- Custom separators
- Clickable navigation items

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | Required | Array of breadcrumb items |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size |
| `color` | `'primary' \| 'secondary' \| 'white'` | `'primary'` | Text color |
| `separator` | `string` | `'/'` | Separator between items |
| `maxItems` | `number` | `0` | Maximum number of items to show (0 = no limit) |
| `ellipsis` | `boolean` | `true` | Show ellipsis when maxItems is exceeded |

## BreadcrumbItem Interface

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
  disabled?: boolean;
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `(item: BreadcrumbItem, index: number)` | Emitted when a clickable item is clicked |

## Usage

```vue
<template>
  <LBreadcrumbs
    :items="breadcrumbs"
    size="md"
    color="primary"
    separator="/"
    maxItems="5"
    @click="handleBreadcrumbClick"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const breadcrumbs = ref([
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumbs', href: '/components/breadcrumbs' },
]);

const handleBreadcrumbClick = (item, index) => {
  console.log('Clicked:', item, index);
};
</script>
```

## Examples

### Basic Usage

```vue
<LBreadcrumbs
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics', href: '/dashboard/analytics' }
  ]"
/>
```

### With Ellipsis

```vue
<LBreadcrumbs
  :items="longBreadcrumbList"
  maxItems="3"
  ellipsis="true"
/>
```

### Disabled Items

```vue
<LBreadcrumbs
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Disabled', disabled: true },
    { label: 'Active', href: '/active' }
  ]"
/>
```

### Custom Separator

```vue
<LBreadcrumbs
  :items="breadcrumbs"
  separator="→"
/>
```

## Styling

The component uses Tailwind CSS classes with glassmorphism effects:

- **Background**: Semi-transparent with backdrop blur
- **Border**: Thin semi-transparent border
- **Hover Effects**: Smooth transitions and underline animations
- **Responsive**: Adapts to different screen sizes

## Accessibility

- Uses semantic `<nav>` and `<ol>` elements
- Proper ARIA labels (`aria-label="Breadcrumbs"`)
- Keyboard navigation support
- Screen reader friendly
