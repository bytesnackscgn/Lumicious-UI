# LCircularProgress

A circular progress indicator for visualizing completion percentages or indeterminate loading.

## Props

| Name            | Type               | Default          | Description                     |
| :-------------- | :----------------- | :--------------- | :------------------------------ |
| `value`         | `number`           | `0`              | Progress value from 0 to 100.   |
| `size`          | `string \| number` | `'48px'`         | Diameter of the component.      |
| `thickness`     | `number`           | `3`              | Thickness of the progress arc.  |
| `indeterminate` | `boolean`          | `false`          | Enables spinning animation.     |
| `color`         | `string`           | `'#3b82f6'`      | Color of the progress arc.      |
| `trackColor`    | `string`           | `'rgba(...0.1)'` | Color of the background circle. |

## Usage

```vue
<template>
  <LCircularProgress :value="75" color="cyan">
    <span class="text-[10px] font-bold">75%</span>
  </LCircularProgress>
</template>
```
