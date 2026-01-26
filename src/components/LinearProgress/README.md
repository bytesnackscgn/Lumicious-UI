# LLinearProgress

A progress bar component for visualizing task completion or loading states.

## Props

| Name            | Type                      | Default     | Description                       |
| :-------------- | :------------------------ | :---------- | :-------------------------------- |
| `value`         | `number`                  | `0`         | The progress value from 0 to 1.   |
| `indeterminate` | `boolean`                 | `false`     | Enables indeterminate animation.  |
| `query`         | `boolean`                 | `false`     | Reverse indeterminate animation.  |
| `color`         | `ProgressColor \| string` | `'primary'` | Bar color.                        |
| `height`        | `string`                  | `'4px'`     | Bar height.                       |
| `rounded`       | `boolean`                 | `true`      | If true, applies rounded corners. |

## Usage

```vue
<template>
  <LLinearProgress :value="0.5" color="positive" />
  <LLinearProgress indeterminate color="white" />
</template>
```
