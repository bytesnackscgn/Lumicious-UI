# LSpinner

A high-performance SVG spinner for loading states.

## Props

| Name        | Type                                             | Default          | Description                        |
| :---------- | :----------------------------------------------- | :--------------- | :--------------------------------- |
| `size`      | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'`           | The size of the spinner.           |
| `color`     | `string`                                         | `'currentColor'` | The color of the spinner.          |
| `thickness` | `number`                                         | `5`              | The thickness of the spinner path. |

## Usage

```vue
<template>
  <LSpinner size="lg" color="#3b82f6" :thickness="4" />
</template>
```
