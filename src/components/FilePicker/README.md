# LFilePicker

A glassmorphism file picker component for Vue 3 that provides an elegant way to select files with drag-and-drop support and validation.

## Features

- 🎨 Glassmorphism design with blur effects
- 📁 Support for single and multiple file selection
- ✅ File validation (type, size, count)
- 🗑️ Easy file removal
- 🎯 Accessible keyboard navigation
- 📱 Responsive design

## Installation

```bash
npm install lumodo-ui
```

## Usage

```vue
<template>
  <LFilePicker
    v-model="selectedFiles"
    accept="image/*"
    multiple
    :max-files="5"
    :max-size="5 * 1024 * 1024"
    placeholder="Choose images..."
    @change="handleFileChange"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import LFilePicker from "lumodo-ui/components/FilePicker/LFilePicker.vue";

const selectedFiles = ref<File[]>([]);

const handleFileChange = (files: File[]) => {
  console.log("Files changed:", files);
};
</script>
```

## Props

| Prop          | Type                 | Default             | Description                   |
| ------------- | -------------------- | ------------------- | ----------------------------- |
| `accept`      | `string \| string[]` | `'*'`               | Accepted file types           |
| `multiple`    | `boolean`            | `false`             | Allow multiple file selection |
| `disabled`    | `boolean`            | `false`             | Disable the file picker       |
| `placeholder` | `string`             | `'Choose files...'` | Placeholder text              |
| `maxFiles`    | `number`             | `10`                | Maximum number of files       |
| `maxSize`     | `number`             | `10 * 1024 * 1024`  | Maximum file size in bytes    |

## Events

| Event               | Payload  | Description                     |
| ------------------- | -------- | ------------------------------- |
| `update:modelValue` | `File[]` | Emitted when files are selected |
| `change`            | `File[]` | Emitted when files change       |
| `select`            | `File[]` | Emitted when files are selected |

## Slots

| Name      | Description             |
| --------- | ----------------------- |
| `default` | Custom content override |

## Examples

### Basic Usage

```vue
<LFilePicker placeholder="Select files..." />
```

### Image Only

```vue
<LFilePicker accept="image/*" placeholder="Select images..." />
```

### Multiple Files with Limits

```vue
<LFilePicker
  multiple
  :max-files="3"
  :max-size="5 * 1024 * 1024"
  placeholder="Max 3 files, 5MB each"
/>
```

### Disabled State

```vue
<LFilePicker disabled placeholder="File picker disabled" />
```

## Styling

The component uses Tailwind CSS classes and can be customized through:

- **CSS Variables**: Override glassmorphism colors and blur values
- **Class Variants**: Use the `size` prop for different sizing options
- **Custom Styles**: Override the component classes directly

## Accessibility

- Full keyboard navigation support
- ARIA labels and descriptions
- Screen reader friendly
- Focus management

## Browser Support

- Modern browsers with ES2020+ support
- Vue 3 Composition API
- TypeScript support
