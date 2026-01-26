# LToggle

A premium glassmorphism toggle switch component.

## Props

| Name            | Type                                   | Default      | Description                         |
| :-------------- | :------------------------------------- | :----------- | :---------------------------------- |
| `modelValue`    | `boolean`                              | **Required** | The bound value (v-model).          |
| `label`         | `string`                               | `undefined`  | The label text.                     |
| `leftLabel`     | `boolean`                              | `false`      | If true, label appears on the left. |
| `disable`       | `boolean`                              | `false`      | Disables interaction.               |
| `size`          | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`       | Size of the toggle.                 |
| `icon`          | `string`                               | `undefined`  | Icon to show inside the thumb.      |
| `checkedIcon`   | `string`                               | `undefined`  | Icon to show when checked.          |
| `uncheckedIcon` | `string`                               | `undefined`  | Icon to show when unchecked.        |

## Usage

```vue
<template>
  <LToggle v-model="notifications" label="Enable Notifications" />

  <LToggle v-model="darkMode" checked-icon="moon" unchecked-icon="sun" />
</template>
```
