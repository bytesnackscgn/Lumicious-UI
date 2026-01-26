# LBottomSheet

A glassmorphism bottom sheet component for Vue 3 that provides an elegant modal interface for content display and interaction.

## Features

- 🎨 Glassmorphism design with blur effects
- 📱 Responsive and mobile-friendly
- 🔄 Smooth animations and transitions
- 🎯 Multiple positioning options (bottom, top, left, right)
- 📏 Flexible sizing options
- ♿ Full accessibility support
- 🔧 Customizable styling and behavior
- 🎭 Support for custom content and footers

## Installation

```bash
npm install lumodo-ui
```

## Usage

```vue
<template>
  <div>
    <button @click="openSheet">Open Bottom Sheet</button>

    <LBottomSheet
      v-model="isOpen"
      title="Settings"
      size="md"
      variant="glass"
      :closable="true"
      :persistent="false"
      @open="handleOpen"
      @close="handleClose"
    >
      <div class="space-y-4">
        <p>Settings content goes here...</p>
        <LInput v-model="name" label="Name" />
        <LToggle v-model="notifications" label="Enable Notifications" />
      </div>

      <template #footer>
        <button
          @click="saveSettings"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Save
        </button>
      </template>
    </LBottomSheet>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LBottomSheet from "lumodo-ui/components/BottomSheet/LBottomSheet.vue";
import LInput from "lumodo-ui/components/Input/LInput.vue";
import LToggle from "lumodo-ui/components/LToggle.vue";

const isOpen = ref(false);
const name = ref("");
const notifications = ref(false);

const openSheet = () => {
  isOpen.value = true;
};

const handleOpen = () => {
  console.log("Bottom sheet opened");
};

const handleClose = () => {
  console.log("Bottom sheet closed");
};

const saveSettings = () => {
  // Save settings logic
  isOpen.value = false;
};
</script>
```

## Props

| Prop              | Type                                     | Default    | Description                   |
| ----------------- | ---------------------------------------- | ---------- | ----------------------------- |
| `modelValue`      | `boolean`                                | `false`    | Whether the sheet is open     |
| `title`           | `string`                                 | `''`       | Sheet title                   |
| `size`            | `'sm' \| 'md' \| 'lg' \| 'full'`         | `'md'`     | Sheet size                    |
| `variant`         | `'glass' \| 'solid' \| 'outline'`        | `'glass'`  | Visual variant                |
| `position`        | `'bottom' \| 'top' \| 'left' \| 'right'` | `'bottom'` | Sheet position                |
| `closable`        | `boolean`                                | `true`     | Allow closing via button      |
| `persistent`      | `boolean`                                | `false`    | Prevent closing               |
| `overlay`         | `boolean`                                | `true`     | Show overlay backdrop         |
| `closeOnOverlay`  | `boolean`                                | `true`     | Close when overlay is clicked |
| `closeOnEscape`   | `boolean`                                | `true`     | Close on Escape key           |
| `maxHeight`       | `string`                                 | `''`       | Custom max height             |
| `maxWidth`        | `string`                                 | `''`       | Custom max width              |
| `showCloseButton` | `boolean`                                | `true`     | Show close button             |
| `rounded`         | `boolean`                                | `true`     | Apply rounded corners         |

## Events

| Event               | Payload   | Description                        |
| ------------------- | --------- | ---------------------------------- |
| `update:modelValue` | `boolean` | Emitted when open state changes    |
| `open`              | -         | Emitted when sheet starts opening  |
| `close`             | -         | Emitted when sheet starts closing  |
| `opened`            | -         | Emitted when sheet is fully open   |
| `closed`            | -         | Emitted when sheet is fully closed |

## Slots

| Name      | Description                    |
| --------- | ------------------------------ |
| `default` | Main content area              |
| `footer`  | Footer content (buttons, etc.) |

## Examples

### Basic Usage

```vue
<LBottomSheet v-model="isOpen" title="Basic Sheet">
  <p>Content goes here</p>
</LBottomSheet>
```

### With Footer

```vue
<LBottomSheet v-model="isOpen" title="With Footer">
  <p>Content goes here</p>
  <template #footer>
    <button @click="isOpen = false">Close</button>
  </template>
</LBottomSheet>
```

### Different Sizes

```vue
<!-- Small -->
<LBottomSheet v-model="isOpen" title="Small" size="sm">
  <p>Small sheet content</p>
</LBottomSheet>

<!-- Medium -->
<LBottomSheet v-model="isOpen" title="Medium" size="md">
  <p>Medium sheet content</p>
</LBottomSheet>

<!-- Large -->
<LBottomSheet v-model="isOpen" title="Large" size="lg">
  <p>Large sheet content</p>
</LBottomSheet>

<!-- Full height -->
<LBottomSheet v-model="isOpen" title="Full" size="full">
  <p>Full height sheet content</p>
</LBottomSheet>
```

### Different Positions

```vue
<!-- Bottom (default) -->
<LBottomSheet v-model="isOpen" title="Bottom" position="bottom">
  <p>Bottom positioned sheet</p>
</LBottomSheet>

<!-- Top -->
<LBottomSheet v-model="isOpen" title="Top" position="top">
  <p>Top positioned sheet</p>
</LBottomSheet>

<!-- Left -->
<LBottomSheet
  v-model="isOpen"
  title="Left"
  position="left"
  :max-width="'400px'"
>
  <p>Left positioned sheet</p>
</LBottomSheet>

<!-- Right -->
<LBottomSheet
  v-model="isOpen"
  title="Right"
  position="right"
  :max-width="'400px'"
>
  <p>Right positioned sheet</p>
</LBottomSheet>
```

### Different Variants

```vue
<!-- Glass (default) -->
<LBottomSheet v-model="isOpen" title="Glass" variant="glass">
  <p>Glass variant sheet</p>
</LBottomSheet>

<!-- Solid -->
<LBottomSheet v-model="isOpen" title="Solid" variant="solid">
  <p>Solid variant sheet</p>
</LBottomSheet>

<!-- Outline -->
<LBottomSheet v-model="isOpen" title="Outline" variant="outline">
  <p>Outline variant sheet</p>
</LBottomSheet>
```

### Persistent Sheet

```vue
<LBottomSheet
  v-model="isOpen"
  title="Persistent"
  :persistent="true"
  :closable="false"
>
  <p>This sheet cannot be closed by user interaction</p>
</LBottomSheet>
```

### No Overlay

```vue
<LBottomSheet v-model="isOpen" title="No Overlay" :overlay="false">
  <p>Sheet without overlay backdrop</p>
</LBottomSheet>
```

## Accessibility

- Uses proper ARIA attributes (`role="dialog"`, `aria-modal="true"`)
- Supports keyboard navigation (Escape to close)
- Focus management when opening/closing
- Screen reader friendly

## Styling

The component uses Tailwind CSS classes and can be customized through:

- **CSS Variables**: Override glassmorphism colors and blur values
- **Class Variants**: Use the `size`, `variant`, `position`, and `rounded` props
- **Custom Styles**: Override the component classes directly

## Performance

- Uses CSS transforms for smooth animations
- Efficient event handling
- Minimal re-renders
- Optimized for mobile devices

## Browser Support

- Modern browsers with ES2020+ support
- Vue 3 Composition API
- TypeScript support
- Touch event support
