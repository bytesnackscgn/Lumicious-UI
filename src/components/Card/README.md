# LCard

A versatile container component with built-in support for glassmorphism.

## Props

| Name       | Type                                              | Default     | Description           |
| :--------- | :------------------------------------------------ | :---------- | :-------------------- |
| `title`    | `string`                                          | `undefined` | Card title.           |
| `subtitle` | `string`                                          | `undefined` | Card secondary text.  |
| `variant`  | `'glass' \| 'glass-dark' \| 'solid' \| 'outline'` | `'glass'`   | The visual style.     |
| `padding`  | `'none' \| 'sm' \| 'md' \| 'lg'`                  | `'md'`      | The internal padding. |

## Slots

- `default`: Main card content.
- `header`: Custom header area (overrides `title`/`subtitle`).
- `actions`: Bottom action area.

## Usage

```vue
<LCard title="Hello World">
  <LText>This is a card content.</LText>
  <template #actions>
    <LBtn label="OK" />
  </template>
</LCard>
```
