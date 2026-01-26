# LRating

A premium rating component for reviews and feedback.

## Props

| Name         | Type      | Default     | Description                          |
| :----------- | :-------- | :---------- | :----------------------------------- |
| `modelValue` | `number`  | `0`         | The bound value.                     |
| `max`        | `number`  | `5`         | Maximum number of icons.             |
| `icon`       | `string`  | `'star'`    | Lucide icon name.                    |
| `color`      | `string`  | `'#eab308'` | Icon color when selected.            |
| `size`       | `string`  | `'md'`      | Size of the icons.                   |
| `readonly`   | `boolean` | `false`     | Disables interaction (display only). |

## Usage

```vue
<template>
  <LRating v-model="rating" icon="heart" color="#ff4d4f" />
</template>
```
