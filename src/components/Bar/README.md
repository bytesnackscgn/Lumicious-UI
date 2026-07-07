# LBar

A versatile glass container that can be fixed to any position of the viewport.

## Props

| Name       | Type                | Default | Description                       |
| :--------- | :------------------ | :------ | :-------------------------------- |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position of the bar.              |
| `fixed`    | `boolean`           | `false` | If true, the bar will be `fixed`. |
| `blur`     | `boolean`           | `true`  | If true, applies glass blur.      |
| `width`    | `number`            | `80`    | Width in pixels (for left/right). |
| `height`   | `number`            | `60`    | Height in pixels (for top/bottom).|
| `padding`  | `string`            | `'p-2'` | Padding classes (for left/right). |
| `rounded`  | `boolean`           | `true`  | If true, applies rounded corners (left/right). |
| `dense`    | `boolean`           | `false` | If true, applies compact padding. |

## Styling

- All bars use glass-dark styling with subtle border
- Supports 5 color themes: primary (blue), positive (emerald), negative (red), warning (amber), info (sky)
- Horizontal bars (top/bottom) have compact padding with default height
- Vertical bars (left/right) have fixed width with full height
- Glass blur effect can be enabled/disabled

## Usage

```vue
<!-- Top Bar -->
<template>
  <LBar position="top">
    <LHeadline :level="6">Header</LHeadline>
  </LBar>
</template>

<!-- Bottom Bar -->
<template>
  <LBar position="bottom">
    <LBtn icon="home" variant="ghost" />
    <LBtn icon="search" variant="ghost" />
  </LBar>
</template>

<!-- Left Bar -->
<template>
  <LBar position="left" width="80" rounded>
    <LBtn icon="menu" />
    <LBtn icon="home" />
  </LBar>
</template>

<!-- Right Bar -->
<template>
  <LBar position="right" width="80">
    <LBtn icon="settings" />
  </LBar>
</template>
```