# LPagination

A versatile pagination component with glassmorphism styling that supports various navigation patterns.

## Props

| Name              | Type                   | Default | Description                            |
| :---------------- | :--------------------- | :------ | :------------------------------------- |
| `modelValue`      | `number`               | `1`     | Current page (1-indexed).              |
| `max`             | `number`               | -       | Total pages.                           |
| `maxPages`        | `number`               | `7`     | Maximum page buttons to show.          |
| `boundaryNumbers` | `boolean`              | `true`  | Show first and last page numbers.      |
| `directionLinks`  | `boolean`              | `true`  | Show previous/next navigation buttons. |
| `boundaryLinks`   | `boolean`              | `true`  | Show first/last page buttons.          |
| `disable`         | `boolean`              | `false` | Disable all pagination controls.       |
| `input`           | `boolean`              | `false` | Show page number input field.          |
| `size`            | `'sm' \| 'md' \| 'lg'` | `'md'`  | Size variant.                          |
| `class`           | `string`               | -       | Additional CSS classes.                |

## Events

| Event               | Payload  | Description                |
| :------------------ | :------- | :------------------------- |
| `update:modelValue` | `number` | Emitted when page changes. |
| `change`            | `number` | Emitted when page changes. |

## Usage

```vue
<template>
  <!-- Basic pagination -->
  <LPagination
    v-model="currentPage"
    :max="totalPages"
    @change="handlePageChange"
  />

  <!-- With page input -->
  <LPagination v-model="currentPage" :max="totalPages" :input="true" />

  <!-- Small size -->
  <LPagination v-model="currentPage" :max="totalPages" size="sm" />

  <!-- Disabled state -->
  <LPagination v-model="currentPage" :max="totalPages" :disable="true" />
</template>

<script setup lang="ts">
const currentPage = ref(1);
const totalPages = ref(20);

const handlePageChange = (page: number) => {
  console.log("Navigating to page:", page);
  // Fetch data for the new page
};
</script>
```

## Features

- **Smart Page Display**: Automatically shows ellipsis when there are many pages
- **Responsive Sizes**: Three size variants (sm, md, lg)
- **Input Support**: Optional page number input for direct navigation
- **Glassmorphism Design**: Beautiful glass-effect styling that matches the theme
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Flexible Configuration**: Toggle various navigation elements as needed

## Examples

### Basic Usage

```vue
<LPagination :model-value="5" :max="20" />
```

### With All Features

```vue
<LPagination
  v-model="page"
  :max="100"
  :max-pages="5"
  :boundary-numbers="true"
  :direction-links="true"
  :boundary-links="true"
  :input="true"
  size="lg"
/>
```

### Disabled State

```vue
<LPagination :model-value="5" :max="20" :disable="true" />
```

## Styling

The component uses glassmorphism styling with:

- Glass effect background with blur
- Semi-transparent borders
- Smooth hover transitions
- Active state highlighting
- Consistent spacing and sizing

## Performance

- Efficient page calculation algorithm
- Minimal re-renders
- Optimized for large page counts
- Lightweight implementation
