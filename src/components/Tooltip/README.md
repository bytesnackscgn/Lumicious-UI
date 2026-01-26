# LTooltip

A non-interactive glassmorphism bubble for displaying additional information on hover. It automatically attaches to its parent component.

## Props

| Name        | Type     | Default | Description                           |
| :---------- | :------- | :------ | :------------------------------------ |
| `delay`     | `number` | `300`   | Delay (ms) before tooltip appears.    |
| `hideDelay` | `number` | `0`     | Delay (ms) before tooltip disappears. |

## Usage

```vue
<template>
  <LBtn icon="trash" color="negative">
    <LTooltip>Delete item</LTooltip>
  </LBtn>
</template>
```
