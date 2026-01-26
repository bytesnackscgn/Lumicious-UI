# LBanner

A top-level banner component for displaying important messages or alerts with glassmorphism aesthetics.

## Props

| Name      | Type                                                           | Default     | Description        |
| :-------- | :------------------------------------------------------------- | :---------- | :----------------- |
| `label`   | `string`                                                       | `undefined` | The message text.  |
| `variant` | `'glass' \| 'solid' \| 'outline'`                              | `'glass'`   | The visual style.  |
| `color`   | `'primary' \| 'positive' \| 'negative' \| 'warning' \| 'info'` | `'primary'` | The color palette. |
| `icon`    | `string`                                                       | `undefined` | Lucide icon name.  |
| `dense`   | `boolean`                                                      | `false`     | Reduces padding.   |

## Slots

- `default`: Main content.
- `avatar`: Left-side area (usually for icon/avatar).
- `actions`: Right-side/Bottom area for buttons.

## Usage

```vue
<template>
  <LBanner icon="cloud-off" color="negative">
    Your internet connection was lost.
    <template #actions>
      <LBtn label="Retry" variant="ghost" />
    </template>
  </LBanner>
</template>
```
