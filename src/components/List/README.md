# LList & LItem

Components for displaying data in a vertical list format.

## LList Props

| Name        | Type      | Default | Description                            |
| :---------- | :-------- | :------ | :------------------------------------- |
| `bordered`  | `boolean` | `false` | Adds a glass border and border radius. |
| `padding`   | `boolean` | `false` | Adds vertical padding.                 |
| `separator` | `boolean` | `false` | Adds dividers between items.           |

## LItem Props

| Name        | Type      | Default | Description                       |
| :---------- | :-------- | :------ | :-------------------------------- |
| `clickable` | `boolean` | `false` | Enables hover and active effects. |
| `active`    | `boolean` | `false` | Higlight item as active.          |
| `dense`     | `boolean` | `false` | Reduces vertical height.          |
| `disabled`  | `boolean` | `false` | Disables interaction.             |

## Usage

```vue
<template>
  <LList bordered separator>
    <LItemLabel header>Settings</LItemLabel>

    <LItem clickable>
      <LItemSection avatar>
        <LIcon name="user" />
      </LItemSection>
      <LItemSection>
        <LItemLabel>Profile</LItemLabel>
        <LItemLabel caption>View your personal info</LItemLabel>
      </LItemSection>
      <LItemSection side>
        <LIcon name="chevron-right" size="xs" />
      </LItemSection>
    </LItem>
  </LList>
</template>
```
