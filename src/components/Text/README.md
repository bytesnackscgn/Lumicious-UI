# LText

Minimalist typography component for body text, paragraphs, and small labels.

## Props

| Name       | Type                                                                 | Default    | Description                                    |
| :--------- | :------------------------------------------------------------------- | :--------- | :--------------------------------------------- |
| `tag`      | `string`                                                             | `'p'`      | The HTML tag to render.                        |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'`                      | `'md'`     | The font size.                                 |
| `weight`   | `'light' \| 'normal' \| 'medium' \| 'semibold' \| 'bold' \| 'black'` | `'normal'` | The font weight.                               |
| `gradient` | `boolean`                                                            | `false`    | If true, applies a glass-themed text gradient. |

## Usage

```vue
<LText size="lg" weight="medium">
  This is a large medium-weight paragraph.
</LText>
```
