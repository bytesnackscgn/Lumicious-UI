# LExpansionPanel

An accordion-style component for collapsing and expanding content sections.

## Props

| Name         | Type      | Default     | Description                          |
| :----------- | :-------- | :---------- | :----------------------------------- |
| `modelValue` | `boolean` | `false`     | Initial state.                       |
| `label`      | `string`  | `undefined` | The header title.                    |
| `caption`    | `string`  | `undefined` | The header subtitle.                 |
| `icon`       | `string`  | `undefined` | Icon on the left side of the header. |
| `disable`    | `boolean` | `false`     | Disables interaction.                |

## Usage

```vue
<template>
  <LExpansionPanel label="General Settings" icon="settings">
    <LText>Setting content goes here...</LText>
  </LExpansionPanel>
</template>
```
