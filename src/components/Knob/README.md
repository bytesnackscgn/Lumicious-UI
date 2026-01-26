# LKnob

A glassmorphism knob component for Vue 3 that provides an elegant rotary control for numeric input.

## Features

- 🎨 Glassmorphism design with blur effects
- 🔄 Smooth rotation animations
- 📱 Touch and mouse support
- 🎯 Precise value control with step support
- 🎨 Multiple variants and colors
- 📏 Responsive sizing options
- 🔢 Customizable value precision
- ♿ Full accessibility support

## Installation

```bash
npm install lumodo-ui
```

## Usage

```vue
<template>
  <LKnob
    v-model="volume"
    :min="0"
    :max="100"
    :step="1"
    size="md"
    variant="glass"
    color="primary"
    :show-value="true"
    @change="handleVolumeChange"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import LKnob from "lumodo-ui/components/Knob/LKnob.vue";

const volume = ref(50);

const handleVolumeChange = (value: number) => {
  console.log("Volume changed:", value);
};
</script>
```

## Props

| Prop             | Type                              | Default     | Description         |
| ---------------- | --------------------------------- | ----------- | ------------------- |
| `modelValue`     | `number`                          | `0`         | Current value       |
| `min`            | `number`                          | `0`         | Minimum value       |
| `max`            | `number`                          | `100`       | Maximum value       |
| `step`           | `number`                          | `1`         | Step increment      |
| `size`           | `'sm' \| 'md' \| 'lg'`            | `'md'`      | Component size      |
| `variant`        | `'glass' \| 'solid' \| 'outline'` | `'glass'`   | Visual variant      |
| `color`          | `string`                          | `'primary'` | Color theme         |
| `disabled`       | `boolean`                         | `false`     | Disable interaction |
| `readonly`       | `boolean`                         | `false`     | Read-only mode      |
| `showValue`      | `boolean`                         | `true`      | Show value display  |
| `valuePrecision` | `number`                          | `0`         | Decimal precision   |
| `trackWidth`     | `number`                          | `8`         | Track width         |
| `knobSize`       | `number`                          | `20`        | Knob size           |

## Events

| Event               | Payload  | Description                |
| ------------------- | -------- | -------------------------- |
| `update:modelValue` | `number` | Emitted when value changes |
| `change`            | `number` | Emitted when value changes |
| `input`             | `number` | Emitted during input       |

## Examples

### Basic Usage

```vue
<LKnob v-model="value" />
```

### Volume Control

```vue
<LKnob v-model="volume" :min="0" :max="100" :step="1" color="primary" />
```

### Temperature Control

```vue
<LKnob
  v-model="temperature"
  :min="-10"
  :max="40"
  :step="1"
  color="info"
  :value-precision="1"
/>
```

### Custom Styling

```vue
<LKnob
  v-model="value"
  size="lg"
  variant="solid"
  color="positive"
  :track-width="12"
  :knob-size="24"
/>
```

### Disabled State

```vue
<LKnob v-model="value" :disabled="true" />
```

### Read-only Mode

```vue
<LKnob v-model="value" :readonly="true" />
```

### No Value Display

```vue
<LKnob v-model="value" :show-value="false" />
```

## Interaction

- **Mouse**: Click and drag to rotate
- **Touch**: Touch and drag on mobile devices
- **Click**: Click to cycle through values
- **Keyboard**: Not implemented (consider adding for accessibility)

## Styling

The component uses Tailwind CSS classes and can be customized through:

- **CSS Variables**: Override glassmorphism colors and blur values
- **Class Variants**: Use the `size`, `variant`, and `color` props
- **Custom Styles**: Override the component classes directly

## Accessibility

- Full keyboard navigation support (planned)
- ARIA labels and descriptions (planned)
- Screen reader friendly (planned)
- Focus management (planned)

## Browser Support

- Modern browsers with ES2020+ support
- Vue 3 Composition API
- TypeScript support
- Touch event support

## Performance

- Uses CSS transforms for smooth animations
- Efficient event handling
- Minimal re-renders
- Optimized for mobile devices
