# Avatar Stack

The Avatar Stack component displays a list of avatars stacked together, useful for showing groups of users or participants.

## Usage

```vue
<script setup lang="ts">
import { LAvatarStack } from '@lumicious/ui';

const users = [
  { name: 'John Doe', src: '...' },
  { name: 'Jane Smith', src: '...' },
  // ...
];
</script>

<template>
  <LAvatarStack :items="users" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AvatarProps[]` | `[]` | Array of avatar objects to display. |
| `limit` | `number` | `5` | Maximum number of avatars to show before truncating. |
| `size` | `string \| number` | `'md'` | Size of the avatars (`xs`, `sm`, `md`, `lg`, `xl` or pixel value). |
| `rounded` | `boolean` | `true` | Whether avatars should be fully rounded. |
| `bordered` | `boolean` | `true` | Whether to add a border/ring to separate stacked avatars. |
| `expandOnHover` | `boolean` | `false` | Whether the stack should expand when hovered. |
| `position` | `'right' \| 'left'` | `'right'` | Direction of the stack. |

## Features

### Limit & Overflow
Use the `limit` prop to control how many avatars are visible. Any remaining avatars will be indicated by a counter (e.g., `+3`) at the end of the stack.

```vue
<LAvatarStack :items="users" :limit="3" />
```

### Stacking Direction
Control the visual stacking order using the `position` prop.

```vue
<LAvatarStack :items="users" position="left" />
```

### Expand on Hover
Set `expandOnHover` to `true` to have the avatars spread out when the user hovers over the stack.

```vue
<LAvatarStack :items="users" expandOnHover />
```

### Custom Sizes
You can use standard size presets (`xs` to `xl`) or provide a specific number for pixel sizing.

```vue
<!-- Preset -->
<LAvatarStack :items="users" size="lg" />

<!-- Custom Pixel Size -->
<LAvatarStack :items="users" :size="48" />
```
