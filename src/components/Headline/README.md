# LHeadline

Standard headline component for titles and subtitles. Supports automatic sizing based on heading level.

## Props

| Name       | Type                         | Default   | Description                                       |
| :--------- | :--------------------------- | :-------- | :------------------------------------------------ |
| `level`    | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `2`       | The heading level (h1-h6).                        |
| `size`     | `HeadlineSize`               | `MapBase` | Override for the font size.                       |
| `gradient` | `boolean`                    | `false`   | If true, applies a premium glass-themed gradient. |

## Usage

```vue
<LHeadline :level="1" gradient>
  Main Page Title
</LHeadline>
```
