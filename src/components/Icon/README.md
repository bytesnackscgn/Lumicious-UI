# LIcon

A flexible icon component powered by Lucide Icons.

## Props

| Name          | Type                                             | Default      | Description                                              |
| :------------ | :----------------------------------------------- | :----------- | :------------------------------------------------------- |
| `name`        | `string`                                         | **Required** | The name of the icon (e.g., 'home', 'user', 'settings'). |
| `size`        | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'`       | The size of the icon.                                    |
| `color`       | `string`                                         | `undefined`  | The color of the icon.                                   |
| `strokeWidth` | `number`                                         | `2`          | The stroke width of the icon.                            |

## Usage

```vue
<template>
  <LIcon name="activity" color="cyan" size="lg" />
</template>
```
