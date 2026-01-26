# LSlider

A smooth, glassmorphism-styled slider component for range selection.

## Props

| Name         | Type               | Default     | Description                          |
| :----------- | :----------------- | :---------- | :----------------------------------- |
| `modelValue` | `number`           | `0`         | The bound value.                     |
| `min`        | `number`           | `0`         | Minimum value.                       |
| `max`        | `number`           | `100`       | Maximum value.                       |
| `step`       | `number`           | `1`         | Increment step.                      |
| `label`      | `boolean`          | `false`     | Shows a floating label on the thumb. |
| `labelValue` | `string \| number` | `undefined` | Custom text for the floating label.  |
| `disable`    | `boolean`          | `false`     | Disables interaction.                |

## Events

- `@update:modelValue`: Emitted while dragging.
- `@change`: Emitted when the user releases the thumb.

## Usage

```vue
<template>
  <LSlider v-model="volume" label :min="0" :max="1" :step="0.01" />
</template>
```
