# LFab

A floating action button that stays fixed on the screen, typically used for primary actions.

## Props

| Name       | Type                                                           | Default          | Description                          |
| :--------- | :------------------------------------------------------------- | :--------------- | :----------------------------------- |
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom-right'` | Screen position.                     |
| `extended` | `boolean`                                                      | `false`          | If true, shows label alongside icon. |
| `icon`     | `string`                                                       | `undefined`      | Lucide icon name.                    |
| `label`    | `string`                                                       | `undefined`      | Button text (for extended FAB).      |
| `color`    | `ButtonColor`                                                  | `'primary'`      | Color theme.                         |

## Usage

```vue
<template>
  <!-- Simple FAB -->
  <LFab icon="plus" @click="createNew" />

  <!-- Extended FAB -->
  <LFab icon="edit" label="New Post" extended position="bottom-right" />
</template>
```
