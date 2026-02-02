# LFilePicker

A beautiful glassmorphism file picker component for Lumicious UI. Supports drag-and-drop, file validation, and multiple selection modes.

## Props

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `modelValue` | `File \| File[]` | `undefined` | The selected file(s). |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the file picker. |
| `variant` | `'glass' \| 'solid' \| 'outline'` | `'glass'` | The visual variant. |
| `disabled` | `boolean` | `false` | Whether the file picker is disabled. |
| `readonly` | `boolean` | `false` | Whether the file picker is readonly. |
| `multiple` | `boolean` | `false` | Whether multiple files can be selected. |
| `accept` | `string \| string[]` | `undefined` | Accepted file types. |
| `maxSize` | `number` | `undefined` | Maximum file size in bytes. |
| `minSize` | `number` | `undefined` | Minimum file size in bytes. |
| `placeholder` | `string` | `'Drop files here or click to browse'` | Placeholder text. |
| `buttonText` | `string` | `'Choose Files'` | Button text. |
| `dragDrop` | `boolean` | `true` | Whether drag-and-drop is enabled. |
| `clearable` | `boolean` | `true` | Whether files can be cleared. |

## Events

| Name | Payload | Description |
| :--- | :--- | :--- |
| `update:modelValue` | `(value: File \| File[])` | Emitted when the selected file(s) change. |

## Slots

- `default`: Custom content for the file picker trigger.

## Usage

### Basic File Selection
```vue
<template>
  <LFilePicker v-model="selectedFile" />
</template>

<script setup>
import { ref } from 'vue';

const selectedFile = ref<File | undefined>();
</script>
```

### Multiple File Selection
```vue
<template>
  <LFilePicker 
    v-model="selectedFiles"
    multiple
    placeholder="Select multiple files"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedFiles = ref<File[]>([]);
</script>
```

### File Type Restrictions
```vue
<template>
  <LFilePicker 
    v-model="imageFile"
    accept="image/*"
    placeholder="Select images only"
  />
</template>

<script setup>
import { ref } from 'vue';

const imageFile = ref<File | undefined>();
</script>
```

### File Size Restrictions
```vue
<template>
  <LFilePicker 
    v-model="document"
    accept=".pdf,.doc,.docx"
    :max-size="10 * 1024 * 1024"  // 10MB
    placeholder="Select documents (max 10MB)"
  />
</template>

<script setup>
import { ref } from 'vue';

const document = ref<File | undefined>();
</script>
```

### Different Variants
```vue
<template>
  <div class="space-y-4">
    <LFilePicker v-model="file" variant="glass" />
    <LFilePicker v-model="file" variant="solid" />
    <LFilePicker v-model="file" variant="outline" />
  </div>
</template>
```

### Different Sizes
```vue
<template>
  <div class="space-y-4">
    <LFilePicker v-model="file" size="sm" />
    <LFilePicker v-model="file" size="md" />
    <LFilePicker v-model="file" size="lg" />
  </div>
</template>
```

## Examples

### Basic Usage
```vue
<template>
  <LFilePicker v-model="selectedFile" />
</template>

<script setup>
import { ref } from 'vue';

const selectedFile = ref<File | undefined>();
</script>
```

### Multiple Files with Validation
```vue
<template>
  <LFilePicker 
    v-model="files"
    multiple
    accept=".jpg,.jpeg,.png,.gif"
    :max-size="5 * 1024 * 1024"
    placeholder="Select images (max 5MB each)"
  />
</template>

<script setup>
import { ref } from 'vue';

const files = ref<File[]>([]);
</script>
```

### Document Upload
```vue
<template>
  <LFilePicker 
    v-model="documents"
    multiple
    accept=".pdf,.doc,.docx,.txt"
    placeholder="Upload documents"
  />
</template>

<script setup>
import { ref } from 'vue';

const documents = ref<File[]>([]);
</script>
```

### Disabled State
```vue
<template>
  <LFilePicker 
    v-model="file"
    disabled
  />
</template>
```

### No Drag and Drop
```vue
<template>
  <LFilePicker 
    v-model="file"
    :drag-drop="false"
    placeholder="Click to browse files"
  />
</template>
```

### Non-Clearable Files
```vue
<template>
  <LFilePicker 
    v-model="file"
    :clearable="false"
    placeholder="Files cannot be removed"
  />
</template>
