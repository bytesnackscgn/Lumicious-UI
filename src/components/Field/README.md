# LField

A base wrapper component for all form inputs. It provides the glassmorphism shell, labels, hints, and error messages.

## Props

| Name           | Type      | Default     | Description                                |
| :------------- | :-------- | :---------- | :----------------------------------------- |
| `label`        | `string`  | `undefined` | The label text.                            |
| `stackLabel`   | `boolean` | `false`     | If true, label stays above the input area. |
| `hint`         | `string`  | `undefined` | Assistant text below the input.            |
| `errorMessage` | `string`  | `undefined` | Error text to display.                     |
| `error`        | `boolean` | `false`     | Sets error state.                          |
| `loading`      | `boolean` | `false`     | Shows a loading state.                     |
| `outlined`     | `boolean` | `true`      | Standard glass border style.               |
| `filled`       | `boolean` | `false`     | Filled background with bottom border.      |
| `dense`        | `boolean` | `false`     | Reduces vertical height.                   |

## Slots

- `control`: The main input area.
- `prepend`: Left-side icons/actions.
- `append`: Right-side icons/actions.
- `counter`: Custom counter area.
