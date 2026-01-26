# LSeparator

A minimalist separator component following glassmorphism principles. Used to divide content visually.

## Props

| Name          | Type                           | Default        | Description                               |
| :------------ | :----------------------------- | :------------- | :---------------------------------------- |
| `orientation` | `'horizontal' \| 'vertical'`   | `'horizontal'` | The orientation of the separator.         |
| `inset`       | `boolean`                      | `false`        | Whether to add a margin to the separator. |
| `color`       | `'white' \| 'glass' \| 'dark'` | `'white'`      | The color/style variant of the separator. |

## Usage

```vue
<template>
  <div>
    <p>Section 1</p>
    <LSeparator inset />
    <p>Section 2</p>
  </div>
</template>
```
