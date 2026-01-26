# LInput

A standard text input component built on top of `LField`.

## Props

- Inherits all `LField` props.
- `modelValue`: The input value (v-model).
- `type`: HTML input type (text, password, email, etc.).
- `placeholder`: Placeholder text.
- `clearable`: (Feature coming soon) Shows a clear icon.

## Events

- `@update:modelValue`: Emitted when input changes.
- `@clear`: Emitted when clear icon is clicked.
- `@focus`: Focus event.
- `@blur`: Blur event.

## Usage

```vue
<template>
  <LInput
    v-model="username"
    label="Username"
    placeholder="Enter your name"
    hint="Pick a unique name"
  >
    <template #prepend>
      <LIcon name="user" />
    </template>
  </LInput>
</template>
```
