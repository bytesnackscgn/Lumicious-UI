# LCheckbox

A premium glassmorphism checkbox component. Supports single boolean values and array-based multiple selections.

## Props

| Name         | Type                                   | Default     | Description                                     |
| :----------- | :------------------------------------- | :---------- | :---------------------------------------------- |
| `modelValue` | `boolean \| any[]`                     | `undefined` | The bound value (v-model).                      |
| `val`        | `any`                                  | `undefined` | The value to use when `modelValue` is an array. |
| `label`      | `string`                               | `undefined` | The label text.                                 |
| `leftLabel`  | `boolean`                              | `false`     | If true, label appears on the left.             |
| `disable`    | `boolean`                              | `false`     | Disables interaction.                           |
| `size`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`      | Size of the checkbox.                           |

## Usage

```vue
<template>
  <LCheckbox v-model="terms" label="I accept the terms" />

  <LCheckbox v-model="hobbies" val="coding" label="Coding" />
  <LCheckbox v-model="hobbies" val="gaming" label="Gaming" />
</template>
```
