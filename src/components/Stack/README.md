# Stack Component

The `LStack` component is a flexible layout container that can stack items horizontally or vertically with customizable overlap, expanded gaps, and auto-play capabilities.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import { LStack, LAvatar } from '@lumicious/ui';

const items = [
  { component: LAvatar, props: { name: 'A' } },
  { component: LAvatar, props: { name: 'B' } },
];
</script>

<template>
  <LStack :items="items" :overlap="10" />
</template>
```

### Overlap & Expand on Hover

Use `overlap` to define how much items overlap by default (tightness). Use `gap` to define the spacing when the stack is hovered or active (looseness).

```vue
<LStack 
  :items="items" 
  :overlap="15" 
  :gap="10" 
/>
```
In this example, items will overlap by 15px normally, but spread out to 10px gap when hovered.

### Disabling Hover Expansion

If you want to maintain the overlapped state even when hovered, use the `disableHover` prop.

```vue
<LStack 
  :items="items" 
  :overlap="15" 
  :gap="10" 
  disableHover
/>
```

### Playable (Auto-Focus)

Enable `playable` mode to automatically cycle focus through the items.

**Note:** When `playable` is enabled:
1. Hover expansion is automatically disabled to keep focus clear.
2. The active item is highlighted (scaled up, z-index boosted).
3. Inactive items are dimmed (blurred and grayscale).

```vue
<LStack 
  :items="items" 
  playable 
  :interval="2000" 
  :overlap="20"
/>
```

### Custom Content via Slots

For full control over rendering, use the scoped `item` slot.

```vue
<LStack :items="cards" playable :overlap="50" :gap="20">
  <template #item="{ item, active, index }">
    <div :class="['card', active ? 'active' : '']">
      {{ item.title }}
    </div>
  </template>
</LStack>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Stacking direction. |
| `overlap` | `number` | `0` | Amount of overlap between items (negative margin). |
| `gap` | `number` | `0` | Spacing between items when expanded (hover/focus). |
| `disableHover` | `boolean` | `false` | Disables the expansion effect on hover. |
| `playable` | `boolean` | `false` | Enables auto-play focus cycling. Automatically disables hover expansion. |
| `interval` | `number` | `2000` | Time in ms between focus changes in playable mode. |
| `pauseOnHover` | `boolean` | `true` | Pauses auto-play when hovering the stack. |
| `items` | `any[]` | `[]` | Array of items to render. |

## Events

- `update:active-index`: Emitted when the active item changes (in playable mode or click).
- `play`: Emitted when auto-play starts.
- `pause`: Emitted when auto-play pauses.
