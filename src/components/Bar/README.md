# LBar

A top-level glass container that can be fixed to the top or bottom of the viewport.

## Props

| Name       | Type                | Default | Description                       |
| :--------- | :------------------ | :------ | :-------------------------------- |
| `position` | `'top' \| 'bottom'` | `'top'` | Position of the bar.              |
| `fixed`    | `boolean`           | `false` | If true, the bar will be `fixed`. |
| `blur`     | `boolean`           | `true`  | If true, applies glass blur.      |

## Usage

```vue
<template>
  <LBar position="top" fixed>
    <LToolbar>...</LToolbar>
  </LBar>
</template>
```
