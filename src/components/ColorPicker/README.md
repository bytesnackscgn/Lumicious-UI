# LColorPicker

A beautiful glassmorphism color picker component for Lumodo UI. Supports multiple color formats, preset colors, and custom color selection.

## Props

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `modelValue` | `string` | `'#3B82F6'` | The selected color value. |
| `format` | `'hex' \| 'rgb' \| 'hsl'` | `'hex'` | The color format to use. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the color picker. |
| `disabled` | `boolean` | `false` | Whether the color picker is disabled. |
| `showAlpha` | `boolean` | `false` | Whether to show alpha channel. |
| `presetColors` | `string[]` | `DEFAULT_PRESET_COLORS` | Array of preset color values. |
| `label` | `string` | `undefined` | Label for the color picker. |

## Events

| Name | Payload | Description |
| :--- | :--- | :--- |
| `update:modelValue` | `(value: string)` | Emitted when the selected color changes. |
| `update:format` | `(format: 'hex' \| 'rgb' \| 'hsl')` | Emitted when the color format changes. |

## Slots

- `default`: Custom content for the color picker trigger.

## Usage

```vue
<LColorPicker v-model="selectedColor" />
```

```vue
<LColorPicker 
  v-model="selectedColor" 
  format="rgb"
  :preset-colors="['#FF6B6B', '#4ECDC4', '#45B7D1']"
/>
```

## Examples

### Basic Usage
```vue
<template>
  <LColorPicker v-model="color" />
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#3B82F6');
</script>
```

### Different Sizes
```vue
<template>
  <div class="space-y-4">
    <LColorPicker v-model="color" size="sm" />
    <LColorPicker v-model="color" size="md" />
    <LColorPicker v-model="color" size="lg" />
  </div>
</template>
```

### Custom Preset Colors
```vue
<template>
  <LColorPicker 
    v-model="color"
    :preset-colors="['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7']"
  />
</template>