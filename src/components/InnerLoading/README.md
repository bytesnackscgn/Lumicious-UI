# LInnerLoading

A loading overlay component that can be placed inside any container with `relative` positioning.

## Props

| Name      | Type                                             | Default     | Description                                 |
| :-------- | :----------------------------------------------- | :---------- | :------------------------------------------ |
| `showing` | `boolean`                                        | `false`     | Whether the overlay is visible.             |
| `size`    | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'`      | Size of the default spinner.                |
| `color`   | `string`                                         | `undefined` | Color of the default spinner.               |
| `label`   | `string`                                         | `undefined` | Optional text to display below the spinner. |

## Usage

```vue
<template>
  <LCard class="relative h-64">
    <LInnerLoading :showing="isLoading" label="Fetching data..." />
    <p>Card Content...</p>
  </LCard>
</template>
```
