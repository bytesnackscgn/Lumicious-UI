# LSkeleton

A placeholder component for visualizing content structures while data is loading.

## Props

| Name        | Type                          | Default     | Description              |
| :---------- | :---------------------------- | :---------- | :----------------------- |
| `type`      | `SkeletonType`                | `'rect'`    | Shape of the skeleton.   |
| `animation` | `'wave' \| 'pulse' \| 'none'` | `'wave'`    | Animation style.         |
| `width`     | `string`                      | `undefined` | Width of the component.  |
| `height`    | `string`                      | `undefined` | Height of the component. |
| `size`      | `string`                      | `undefined` | Size (for circles).      |
| `bordered`  | `boolean`                     | `false`     | Adds a slight border.    |

## Usage

```vue
<template>
  <div class="flex gap-4">
    <LSkeleton type="circle" size="48px" />
    <div class="flex-grow">
      <LSkeleton type="text" width="60%" />
      <LSkeleton type="text" />
    </div>
  </div>
</template>
```
