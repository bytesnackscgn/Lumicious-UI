# LChip

Compact information elements, also known as tags. Supports icons and removable actions.

## Props

| Name        | Type                              | Default     | Description                                 |
| :---------- | :-------------------------------- | :---------- | :------------------------------------------ |
| `label`     | `string`                          | `undefined` | The text to display.                        |
| `size`      | `'sm' \| 'md' \| 'lg'`            | `'md'`      | The size of the chip.                       |
| `variant`   | `'glass' \| 'solid' \| 'outline'` | `'glass'`   | The visual style.                           |
| `icon`      | `string`                          | `undefined` | Lucide icon name for the left side.         |
| `removable` | `boolean`                         | `false`     | If true, shows a removal icon on the right. |

## Events

- `@remove`: Emitted when the removal icon is clicked.

## Usage

```vue
<LChip label="Vue.js" icon="code" removable @remove="handleRemove" />
```
