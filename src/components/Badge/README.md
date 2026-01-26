# LBadge

A small indicator component for status, counts, or categories. Designed with glassmorphism support.

## Props

| Name       | Type                                                                                     | Default     | Description                                                        |
| :--------- | :--------------------------------------------------------------------------------------- | :---------- | :----------------------------------------------------------------- |
| `label`    | `string \| number`                                                                       | `undefined` | The text or number to display.                                     |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg'`                                                           | `'md'`      | The size of the badge.                                             |
| `variant`  | `'glass' \| 'solid' \| 'outline'`                                                        | `'glass'`   | The visual style.                                                  |
| `color`    | `'primary' \| 'secondary' \| 'positive' \| 'negative' \| 'info' \| 'warning' \| 'white'` | `'primary'` | The color variant.                                                 |
| `pill`     | `boolean`                                                                                | `false`     | If true, the badge will have fully rounded corners.                |
| `floating` | `boolean`                                                                                | `false`     | If true, the badge will be positioned absolutely in the top right. |

## Usage

```vue
<template>
  <LBtn label="Notifications">
    <LBadge label="5" floating pill color="negative" />
  </LBtn>
</template>
```
