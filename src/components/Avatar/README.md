# LAvatar

A glassmorphism avatar component for displaying user profile pictures, initials, or icons.

## Props

| Name       | Type                                             | Default     | Description                                                                     |
| :--------- | :----------------------------------------------- | :---------- | :------------------------------------------------------------------------------ |
| `src`      | `string`                                         | `undefined` | The image URL for the avatar.                                                   |
| `name`     | `string`                                         | `undefined` | The user name (used for initials if `src` is missing).                          |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | `'md'`      | The size of the avatar.                                                         |
| `rounded`  | `boolean`                                        | `true`      | If true, the avatar will be circular. If false, it will be a rounded rectangle. |
| `bordered` | `boolean`                                        | `false`     | If true, adds a glass-themed border/ring around the avatar.                     |
| `icon`     | `string`                                         | `undefined` | Lucide icon name to display if no image or name is provided.                    |

## Usage

```vue
<template>
  <LAvatar src="https://example.com/user.jpg" bordered />
  <LAvatar name="Jane Doe" size="lg" />
  <LAvatar icon="user" size="sm" />
</template>
```
