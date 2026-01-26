# LMenu

A floating glassmorphism menu component that appears contextually.

## Props

| Name         | Type      | Default | Description                                     |
| :----------- | :-------- | :------ | :---------------------------------------------- |
| `modelValue` | `boolean` | `false` | Menu visibility.                                |
| `persistent` | `boolean` | `false` | If true, clicking outside won't close the menu. |

## Usage

```vue
<template>
  <div class="relative">
    <LBtn label="Open Menu" @click="menu = true" />
    <LMenu v-model="menu">
      <LList dense>
        <LItem clickable label="Action 1" />
        <LItem clickable label="Action 2" />
      </LList>
    </LMenu>
  </div>
</template>
```
