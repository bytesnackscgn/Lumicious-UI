# LPagination

A glassmorphism pagination component for navigating through large datasets.

## Features

- Glassmorphism design with blur effects
- Smart page number display with ellipsis
- Configurable page size changer
- Quick jumper for direct page navigation
- Total count display
- Multiple size and color options
- Rounded or square button shapes
- Disabled state support
- Hide on single page option

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `total` | `number` | Required | Total number of items |
| `current` | `number` | Required | Current page number (1-based) |
| `pageSize` | `number` | `10` | Number of items per page |
| `showSizeChanger` | `boolean` | `false` | Show page size selector |
| `showQuickJumper` | `boolean` | `false` | Show quick jump input |
| `showTotal` | `boolean` | `true` | Show total count |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Component size |
| `color` | `'primary' \| 'secondary' \| 'white'` | `'primary'` | Text color |
| `shape` | `'rounded' \| 'square'` | `'rounded'` | Button shape |
| `disabled` | `boolean` | `false` | Disable all interactions |
| `hideOnSinglePage` | `boolean` | `false` | Hide when only one page |
| `ellipsis` | `boolean` | `true` | Show ellipsis for many pages |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `change` | `(page: number)` | Emitted when page changes |
| `pageSizeChange` | `(size: number)` | Emitted when page size changes |

## Usage

```vue
<template>
  <LPagination
    :total="100"
    :current="currentPage"
    :page-size="10"
    @change="handlePageChange"
    @page-size-change="handlePageSizeChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentPage = ref(1);

const handlePageChange = (page: number) => {
  currentPage.value = page;
  // Load data for new page
};

const handlePageSizeChange = (size: number) => {
  // Update page size and reload data
};
</script>
```

## Examples

### Basic Usage

```vue
<LPagination :total="100" :current="1" />
```

### With All Features

```vue
<LPagination
  :total="1000"
  :current="5"
  :page-size="20"
  show-size-changer
  show-quick-jumper
  show-total
  size="lg"
  color="white"
/>
```

### Custom Configuration

```vue
<LPagination
  :total="500"
  :current="3"
  :page-size="25"
  show-size-changer
  show-quick-jumper
  shape="square"
  color="secondary"
/>
```

### Disabled State

```vue
<LPagination
  :total="100"
  :current="1"
  disabled
/>
```

### Hide on Single Page

```vue
<LPagination
  :total="5"
  :current="1"
  hide-on-single-page
/>
```

## Styling

The component uses Tailwind CSS classes with glassmorphism effects:

- **Background**: Semi-transparent with backdrop blur
- **Border**: Thin semi-transparent border
- **Buttons**: Hover effects with smooth transitions
- **Active State**: Highlighted current page
- **Reflex Effects**: Subtle gradient animations on hover

## Smart Page Display

The pagination intelligently displays page numbers:

- **≤ 7 pages**: Shows all page numbers
- **> 7 pages**: Shows first page, current page ± 1, last page, with ellipsis for gaps
- **Ellipsis**: Can be disabled with `ellipsis="false"`

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Proper ARIA labels and roles
- Screen reader friendly
- Focus management

## Performance

- Efficient rendering with computed properties
- Minimal re-renders on state changes
- Optimized page number calculation
