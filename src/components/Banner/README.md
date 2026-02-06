# LAlert

A top-level Alert component for displaying important messages or alerts with glassmorphism aesthetics.

## Props

| Name      | Type                                                           | Default     | Description                                      |
| :-------- | :------------------------------------------------------------- | :---------- | :----------------------------------------------- |
| `label`   | `string`                                                       | `undefined` | The message text.                                |
| `variant` | `'glass' \| 'solid' \| 'outline'`                              | `'glass'`   | The visual style.                                |
| `color`   | `'primary' \| 'positive' \| 'negative' \| 'warning' \| 'info'` | `'primary'` | The color palette.                               |
| `icon`    | `string`                                                       | `undefined` | Lucide icon name.                                |
| `dense`   | `boolean`                                                      | `false`     | Reduces padding (p-3 vs p-4).                    |
| `inline`  | `boolean`                                                      | `false`     | *Reserved for future inline display logic.*      |
| `class`   | `string`                                                       | `undefined` | Custom classes to merge with default styles.     |

## Slots

- `default`: Main content.
- `icon`: Left-side area (replaces the default icon).
- `actions`: Right-side/Bottom area for buttons or links.

## Usage

### Basic Usage

```vue
<template>
  <LAlert 
    icon="cloud-off" 
    color="negative" 
    variant="solid"
    label="Your internet connection was lost."
  >
    <template #actions>
      <LBtn label="Retry" variant="ghost" size="sm" />
    </template>
  </LAlert>
</template>
```

### Variants

The component supports three visual variants:

- **Glass** (Default): Subtle translucent background with a light border.
- **Solid**: Opaque background with stronger colors.
- **Outline**: Transparent background with colored borders.

```vue
<LAlert variant="glass" color="info" label="Glass Variant" />
<LAlert variant="solid" color="positive" label="Solid Variant" />
<LAlert variant="outline" color="warning" label="Outline Variant" />
```
