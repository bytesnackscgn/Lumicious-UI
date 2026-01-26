# LDialog

A modal dialog component that overlays the screen with a premium glassmorphism backdrop.

## Props

| Name         | Type                            | Default    | Description                                   |
| :----------- | :------------------------------ | :--------- | :-------------------------------------------- |
| `modelValue` | `boolean`                       | `false`    | Dialog visibility.                            |
| `persistent` | `boolean`                       | `false`    | If true, user cannot click backdrop to close. |
| `position`   | `'center' \| 'top' \| 'bottom'` | `'center'` | Where the dialog content appears.             |
| `maximized`  | `boolean`                       | `false`    | If true, fills the entire viewport.           |

## Usage

```vue
<template>
  <LBtn label="Open Dialog" @click="dialog = true" />

  <LDialog v-model="dialog">
    <LCard title="Greetings">
      <LText>This is a modal dialog content.</LText>
      <template #actions>
        <LBtn label="Close" @click="dialog = false" />
      </template>
    </LCard>
  </LDialog>
</template>
```
