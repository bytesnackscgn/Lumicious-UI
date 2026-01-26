# LToolbar

A flex container for action buttons and titles, usually placed inside an `LBar`.

## Props

| Name     | Type      | Default | Description                    |
| :------- | :-------- | :------ | :----------------------------- |
| `inset`  | `boolean` | `false` | Adds extra horizontal padding. |
| `border` | `boolean` | `false` | Adds a bottom border.          |

## Usage

```vue
<template>
  <LBar>
    <LToolbar>
      <LBtn icon="menu" variant="ghost" />
      <LHeadline :level="6">App Title</LHeadline>
      <div class="flex-grow" />
      <LBtn icon="user" variant="ghost" />
    </LToolbar>
  </LBar>
</template>
```
