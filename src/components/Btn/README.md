# LBtn

The primary action component for Lumodo UI. Highly customizable with glass and solid variants.

## Props

| Name        | Type                                                              | Default     | Description                          |
| :---------- | :---------------------------------------------------------------- | :---------- | :----------------------------------- |
| `label`     | `string`                                                          | `undefined` | The text to display.                 |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl'`                                    | `'md'`      | The size of the button.              |
| `variant`   | `'glass' \| 'solid' \| 'outline' \| 'ghost'`                      | `'glass'`   | The visual style.                    |
| `color`     | `'primary' \| 'secondary' \| 'positive' \| 'negative' \| 'white'` | `'primary'` | The color variant.                   |
| `loading`   | `boolean`                                                         | `false`     | Shows a loading spinner.             |
| `disabled`  | `boolean`                                                         | `false`     | Disables the button.                 |
| `icon`      | `string`                                                          | `undefined` | Lucide icon name for the left side.  |
| `iconRight` | `string`                                                          | `undefined` | Lucide icon name for the right side. |

## Slots

- `default`: Main content (overrides `label`).
- `prepend`: content before the label.
- `append`: content after the label.

## Usage

```vue
<LBtn label="Click Me" variant="glass" icon="zap" />
```
