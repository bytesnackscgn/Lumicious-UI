# LRadio

A glassmorphism radio button component for single-choice selections from a group.

## Props

| Name         | Type                                   | Default      | Description                               |
| :----------- | :------------------------------------- | :----------- | :---------------------------------------- |
| `modelValue` | `any`                                  | **Required** | The bound value (v-model).                |
| `val`        | `any`                                  | **Required** | The value for this specific radio button. |
| `label`      | `string`                               | `undefined`  | The label text.                           |
| `leftLabel`  | `boolean`                              | `false`      | If true, label appears on the left.       |
| `disable`    | `boolean`                              | `false`      | Disables interaction.                     |
| `size`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`       | Size of the radio.                        |

## Usage

```vue
<template>
  <LRadio v-model="gender" val="male" label="Male" />
  <LRadio v-model="gender" val="female" label="Female" />
</template>
```
