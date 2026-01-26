# LBtnGroup

A container component to group multiple `LBtn` components together into a single, cohesive unit.

## Props

| Name      | Type      | Default | Description                                 |
| :-------- | :-------- | :------ | :------------------------------------------ |
| `spread`  | `boolean` | `false` | If true, children expand to fill the width. |
| `outline` | `boolean` | `false` | Adds an outer border around the group.      |
| `rounded` | `boolean` | `false` | Increases the corner radius.                |

## Usage

```vue
<template>
  <LBtnGroup spread>
    <LBtn label="Left" icon="align-left" />
    <LBtn label="Center" icon="align-center" />
    <LBtn label="Right" icon="align-right" />
  </LBtnGroup>
</template>
```
