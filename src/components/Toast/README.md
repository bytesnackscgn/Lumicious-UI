# LToast

A flexible toast notification system built on top of `LAlert`, supporting multiple positions, stacking, and variants.

## Features

- 🚀 **Positioning**: Supports 6 positions (top/bottom left/center/right).
- 🎨 **Variants**: Supports all `LAlert` variants (`glass`, `solid`, `outline`) and colors.
- 🥞 **Stacking**: 
  - **List Mode**: Standard vertical stacking of notifications.
  - **Stack Mode**: Modern overlapping stack effect (like cards).
- ⚡ **Dense by default**: All toasts use the dense alert style for compactness.
- 🔧 **Composable**: Easy to use `useToast` API.

## Installation

The Toast component is part of the Lumicious UI library. Ensure you have the library set up in your Vue 3 project.

## Usage

### 1. Setup Provider

Wrap your application (or the part of it where you want toasts to appear) with `LToastProvider`. This component acts as the context provider and the rendering target for the toast notifications.

You can configure the global display mode here.

```vue
<script setup lang="ts">
import { LToastProvider } from './components/Toast';
// Adjust import path as needed
</script>

<template>
  <!-- Default List Mode -->
  <LToastProvider>
    <App />
  </LToastProvider>

  <!-- OR: Stack Mode -->
  <LToastProvider 
    variant="stack" 
    :stack-overlap="40" 
    :stack-gap="8"
    :expand-on-hover="true"
  >
    <App />
  </LToastProvider>
</template>
```

### 2. Trigger Toasts

Use the `useToast` composable to trigger notifications from any component inside the provider.

```vue
<script setup lang="ts">
import { useToast } from './components/Toast';

const toast = useToast();

const showSuccess = () => {
  toast.add({
    message: 'Operation completed successfully!',
    color: 'positive',
    variant: 'glass',
    icon: 'check-circle'
  });
};

const showError = () => {
  toast.add({
    message: 'Something went wrong.',
    color: 'negative',
    variant: 'solid',
    position: 'bottom-center'
  });
};
</script>

<template>
  <button @click="showSuccess">Show Success</button>
  <button @click="showError">Show Error</button>
</template>
```

## API

### `useToast()`

Returns the `ToastContext` object:

- `add(options: ToastOptions): string` - Adds a new toast and returns its unique ID.
- `remove(id: string): void` - Manually removes a toast by its ID.

### `LToastProvider` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'list' \| 'stack'` | `'list'` | Display mode for the toast notifications. |
| `stackOverlap` | `number` | `40` | Amount of pixel overlap between toasts in stack mode. |
| `stackGap` | `number` | `8` | Gap in pixels between toasts when stack is expanded (hovered). |
| `expandOnHover` | `boolean` | `true` | Whether to expand the stack when hovered. |

### `ToastOptions` Interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `message` | `string` | **Required** | The text content of the toast. |
| `variant` | `'glass' \| 'solid' \| 'outline'` | `'glass'` | Visual style of the toast. |
| `color` | `'primary' \| 'positive' \| 'negative' \| 'warning' \| 'info'` | `'primary'` | Semantic color theme. |
| `icon` | `string` | `undefined` | Icon name to display (uses Lucide icons). |
| `duration` | `number` | `5000` | Time in milliseconds before auto-dismiss. Set to `0` for infinite. |
| `position` | `ToastPosition` | `'top-right'` | Screen position for this specific toast. |
| `dismissible` | `boolean` | `true` | Whether to show a close button. |

### `ToastPosition` Type

Available positions for notifications:

- `'top-left'`
- `'top-center'`
- `'top-right'`
- `'bottom-left'`
- `'bottom-center'`
- `'bottom-right'`
