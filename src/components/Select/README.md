# LSelect

A premium selection component with a floating glassmorphism menu. Supports single, multiple, and chips variants.

## Props

| Name          | Type       | Default      | Description                                                |
| :------------ | :--------- | :----------- | :--------------------------------------------------------- |
| `modelValue`  | `any`      | `null`       | The bound value.                                           |
| `options`     | `Option[]` | **Required** | Array of objects `{ label, value, description, disable }`. |
| `multiple`    | `boolean`  | `false`      | Enable multiple selections.                                |
| `useChips`    | `boolean`  | `false`      | Display selections as chips.                               |
| `placeholder` | `string`   | `undefined`  | Placeholder when empty.                                    |

## Usage

```vue
<template>
  <LSelect
    v-model="country"
    :options="['USA', 'Germany', 'Japan']"
    label="Country"
  />

  <LSelect
    v-model="tags"
    multiple
    use-chips
    :options="tagOptions"
    label="Tags"
  />
</template>
```
