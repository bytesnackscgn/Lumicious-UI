# LOptionGroup

A component to group multiple selection elements (Radio, Checkbox, or Toggle) into a single logical unit.

## Props

| Name         | Type                                   | Default      | Description                                                    |
| :----------- | :------------------------------------- | :----------- | :------------------------------------------------------------- |
| `modelValue` | `any`                                  | **Required** | The bound value. Array for checkboxes, single value for radio. |
| `options`    | `OptionItem[]`                         | **Required** | Array of `{ label, value, disable }`.                          |
| `type`       | `'radio' \| 'checkbox' \| 'toggle'`    | `'radio'`    | Selection element style.                                       |
| `inline`     | `boolean`                              | `false`      | Displays items side-by-side.                                   |
| `size`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`       | Size of the elements.                                          |

## Usage

```vue
<template>
  <LOptionGroup
    v-model="selected"
    :options="[
      { label: 'Option 1', value: 'opt1' },
      { label: 'Option 2', value: 'opt2' },
    ]"
    type="checkbox"
    inline
  />
</template>
```
