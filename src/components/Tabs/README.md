# LTabs & LTabPanels

Components for building tabbed interfaces with smooth glassmorphism transitions.

## LTabs Props

| Name         | Type                                         | Default     | Description           |
| :----------- | :------------------------------------------- | :---------- | :-------------------- |
| `modelValue` | `any`                                        | `undefined` | The active tab name.  |
| `align`      | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'`    | Horizontal alignment. |
| `vertical`   | `boolean`                                    | `false`     | Verical layout.       |

## LTab Props

| Name    | Type                | Default      | Description            |
| :------ | :------------------ | :----------- | :--------------------- |
| `name`  | `any`               | **Required** | The unique identifier. |
| `label` | `string`            | `undefined`  | Display text.          |
| `icon`  | `string`            | `undefined`  | Optional icon.         |
| `alert` | `boolean \| string` | `false`      | Shows an alert dot.    |

## Usage

```vue
<template>
  <LTabs v-model="tab">
    <LTab name="home" label="Home" icon="home" />
    <LTab name="settings" label="Settings" icon="settings" />
  </LTabs>

  <LTabPanels v-model="tab">
    <LTabPanel name="home">Home Content</LTabPanel>
    <LTabPanel name="settings">Settings Content</LTabPanel>
  </LTabPanels>
</template>
```
