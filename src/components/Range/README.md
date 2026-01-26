# LRange

A dual-thumb range selection component with glassmorphism style.

## Props

| Name         | Type           | Default  | Description                      |
| :----------- | :------------- | :------- | :------------------------------- |
| `modelValue` | `{ min, max }` | `20, 80` | The bound range values.          |
| `min`        | `number`       | `0`      | Minimum value.                   |
| `max`        | `number`       | `100`    | Maximum value.                   |
| `step`       | `number`       | `1`      | Increment step.                  |
| `label`      | `boolean`      | `false`  | Shows floating labels on thumbs. |
| `disable`    | `boolean`      | `false`  | Disables interaction.            |

## Events

- `@update:modelValue`: Emitted while dragging.
- `@change`: Emitted when the user releases a thumb.

## Usage

```vue
<template>
  <LRange v-model="priceRange" label :min="0" :max="1000" />
</template>
```
