# LForm

A powerful form wrapper component that provides validation, state management, and glassmorphism styling for forms.

## Props

| Name               | Type                                     | Default      | Description               |
| :----------------- | :--------------------------------------- | :----------- | :------------------------ |
| `modelValue`       | `Record<string, any>`                    | -            | Form data object.         |
| `variant`          | `'glass' \| 'solid' \| 'outline'`        | `'glass'`    | Visual variant.           |
| `size`             | `'sm' \| 'md' \| 'lg'`                   | `'md'`       | Component size.           |
| `layout`           | `'vertical' \| 'horizontal' \| 'inline'` | `'vertical'` | Form layout.              |
| `loading`          | `boolean`                                | `false`      | Loading state.            |
| `disabled`         | `boolean`                                | `false`      | Disable form.             |
| `validateOnChange` | `boolean`                                | `true`       | Validate on field change. |
| `class`            | `string`                                 | -            | Additional CSS classes.   |

## Events

| Event               | Payload                           | Description                           |
| :------------------ | :-------------------------------- | :------------------------------------ |
| `update:modelValue` | `Record<string, any>`             | Emitted when form data changes.       |
| `submit`            | `Record<string, any>`             | Emitted when form is submitted.       |
| `change`            | `field: string, value: any`       | Emitted when field value changes.     |
| `error`             | `field: string, error: string`    | Emitted when field validation fails.  |
| `valid`             | `field: string, isValid: boolean` | Emitted when field validation passes. |

## Slots

| Name      | Props                                                                                                                                        | Description                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------- |
| `default` | `{ registerField, unregisterField, updateFieldValue, formData, formErrors, isFormValid, isFormDirty, validateForm, resetForm, clearErrors }` | Default slot for form content. |

## Usage

### Basic Form

```vue
<template>
  <LForm v-model="formData" @submit="handleSubmit">
    <template #default="{ updateFieldValue, formErrors, formData }">
      <div class="space-y-4">
        <div>
          <label class="block text-white/90 mb-2">Email</label>
          <input
            type="email"
            :value="formData.email"
            @input="updateFieldValue('email', $event.target.value)"
            class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
            placeholder="Enter your email"
          />
          <div v-if="formErrors.email" class="text-red-400 text-sm mt-1">
            {{ formErrors.email }}
          </div>
        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white font-medium transition-colors"
        >
          Submit
        </button>
      </div>
    </template>
  </LForm>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  email: "",
});

const handleSubmit = (data) => {
  console.log("Form submitted:", data);
  // Handle form submission
};
</script>
```

### Form with Validation

```vue
<template>
  <LForm
    v-model="formData"
    @submit="handleSubmit"
    @error="handleError"
    @valid="handleValid"
  >
    <template #default="{ registerField, updateFieldValue, formErrors }">
      <div class="space-y-4">
        <div>
          <label class="block text-white/90 mb-2">Email (required)</label>
          <input
            type="email"
            :value="formData.email"
            @input="updateFieldValue('email', $event.target.value)"
            class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
            placeholder="Enter your email"
          />
          <div v-if="formErrors.email" class="text-red-400 text-sm mt-1">
            {{ formErrors.email }}
          </div>
        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 rounded-lg bg-green-600/80 hover:bg-green-500 text-white font-medium transition-colors"
        >
          Submit
        </button>
      </div>
    </template>
  </LForm>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  email: "",
});

const handleSubmit = (data) => {
  console.log("Form submitted:", data);
};

const handleError = (field, error) => {
  console.log("Validation error:", field, error);
};

const handleValid = (field, isValid) => {
  console.log("Field validation:", field, isValid);
};
</script>
```

### Different Layouts

#### Horizontal Layout

```vue
<LForm v-model="formData" layout="horizontal">
  <template #default="{ updateFieldValue, formData }">
    <div class="space-y-4">
      <div>
        <label class="block text-white/90 mb-2">First Name</label>
        <input
          type="text"
          :value="formData.firstName"
          @input="updateFieldValue('firstName', $event.target.value)"
          class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
        />
      </div>
      
      <div>
        <label class="block text-white/90 mb-2">Last Name</label>
        <input
          type="text"
          :value="formData.lastName"
          @input="updateFieldValue('lastName', $event.target.value)"
          class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
        />
      </div>
    </div>
  </template>
</LForm>
```

#### Inline Layout

```vue
<LForm v-model="formData" layout="inline">
  <template #default="{ updateFieldValue, formData }">
    <div class="flex items-center space-x-4">
      <input
        type="text"
        :value="formData.search"
        @input="updateFieldValue('search', $event.target.value)"
        class="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
        placeholder="Search..."
      />
      <button
        type="submit"
        class="px-4 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white font-medium transition-colors"
      >
        Search
      </button>
    </div>
  </template>
</LForm>
```

## Features

### Validation

- **Real-time Validation**: Validate fields as they change
- **Custom Rules**: Define custom validation rules
- **Error Display**: Show validation errors with styling
- **Form Validation**: Validate entire form before submission

### State Management

- **Reactive Data**: Automatically syncs with v-model
- **Dirty Tracking**: Track if form has been modified
- **Loading States**: Handle loading states during submission
- **Error States**: Manage and display form errors

### Layout Options

- **Vertical**: Traditional form layout (default)
- **Horizontal**: Side-by-side label and input
- **Inline**: Compact single-row layout

### Styling

- **Glassmorphism**: Beautiful glass-effect styling
- **Responsive**: Adapts to different screen sizes
- **Customizable**: Easy to override with custom classes

## Methods

The component exposes several methods through the slot scope:

- `validateForm()`: Validate all fields
- `resetForm()`: Reset form to initial state
- `clearErrors()`: Clear all validation errors
- `isFormValid`: Computed property for form validity
- `isFormDirty`: Computed property for form changes

## Advanced Usage

### Custom Validation Rules

```vue
<script setup lang="ts">
const validationRules = {
  email: [
    (value) => !!value || "Email is required",
    (value) => /.+@.+\..+/.test(value) || "Email must be valid",
  ],
  age: [
    (value) => !!value || "Age is required",
    (value) => parseInt(value) >= 18 || "Must be 18 or older",
  ],
};

// Register fields with rules
const registerField = (field) => {
  field.rules = validationRules[field.name];
};
</script>
```

### Form Reset

```vue
<template>
  <LForm ref="formRef" v-model="formData">
    <template #default="{ resetForm }">
      <button @click="resetForm">Reset Form</button>
    </template>
  </LForm>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formRef = ref();
const formData = ref({});

const resetForm = () => {
  formRef.value?.resetForm();
};
</script>
```
