# LBtnDropdown

A button with a built-in dropdown menu. Can be configured as a single button or a split button.

## Props

| Name         | Type      | Default          | Description                                      |
| :----------- | :-------- | :--------------- | :----------------------------------------------- |
| `label`      | `string`  | `undefined`      | The button text.                                 |
| `split`      | `boolean` | `false`          | If true, separates the action from the dropdown. |
| `hideIcon`   | `boolean` | `false`          | Hides the dropdown arrow icon.                   |
| `icon`       | `string`  | `'chevron-down'` | The dropdown arrow icon.                         |
| `persistent` | `boolean` | `false`          | If true, clicking outside/inside won't close.    |

## Usage

```vue
<template>
  <LBtnDropdown label="Filters" icon="filter">
    <LList dense>
      <LItem clickable label="By Date" />
      <LItem clickable label="By Size" />
    </LList>
  </LBtnDropdown>
</template>
```
