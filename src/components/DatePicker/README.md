# LDatePicker

A beautiful glassmorphism date picker component for Lumicious UI. Supports single date, date range, and multiple date selection modes.

## Props

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `modelValue` | `Date \| Date[] \| { start: Date; end: Date }` | `undefined` | The selected date(s). |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the date picker. |
| `variant` | `'glass' \| 'solid' \| 'outline'` | `'glass'` | The visual variant. |
| `mode` | `'single' \| 'range' \| 'multiple'` | `'single'` | The selection mode. |
| `disabled` | `boolean` | `false` | Whether the date picker is disabled. |
| `readonly` | `boolean` | `false` | Whether the date picker is readonly. |
| `placeholder` | `string` | `'Select date'` | Placeholder text. |
| `format` | `string` | `'YYYY-MM-DD'` | Date format string. |
| `locale` | `string` | `'en'` | Locale for display. |
| `startView` | `'day' \| 'month' \| 'year'` | `'day'` | Initial view mode. |
| `minDate` | `Date` | `undefined` | Minimum selectable date. |
| `maxDate` | `Date` | `undefined` | Maximum selectable date. |
| `weekStartsOn` | `0-6` | `1` | Day of week to start on (0=Sunday). |
| `showTimePicker` | `boolean` | `false` | Whether to show time picker. |
| `timeFormat` | `'12h' \| '24h'` | `'24h'` | Time format. |

## Events

| Name | Payload | Description |
| :--- | :--- | :--- |
| `update:modelValue` | `(value: Date \| Date[] \| { start: Date; end: Date })` | Emitted when the selected date changes. |

## Slots

- `default`: Custom content for the date picker trigger.

## Usage

### Single Date Selection
```vue
<template>
  <LDatePicker v-model="selectedDate" />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref(new Date());
</script>
```

### Date Range Selection
```vue
<template>
  <LDatePicker 
    v-model="dateRange"
    mode="range"
    placeholder="Select date range"
  />
</template>

<script setup>
import { ref } from 'vue';

const dateRange = ref({ start: null, end: null });
</script>
```

### Multiple Date Selection
```vue
<template>
  <LDatePicker 
    v-model="selectedDates"
    mode="multiple"
    placeholder="Select multiple dates"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDates = ref([]);
</script>
```

### With Date Restrictions
```vue
<template>
  <LDatePicker 
    v-model="selectedDate"
    :min-date="minDate"
    :max-date="maxDate"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref(new Date());
const minDate = ref(new Date(2024, 0, 1));
const maxDate = ref(new Date(2024, 11, 31));
</script>
```

### Different Variants
```vue
<template>
  <div class="space-y-4">
    <LDatePicker v-model="date" variant="glass" />
    <LDatePicker v-model="date" variant="solid" />
    <LDatePicker v-model="date" variant="outline" />
  </div>
</template>
```

### Different Sizes
```vue
<template>
  <div class="space-y-4">
    <LDatePicker v-model="date" size="sm" />
    <LDatePicker v-model="date" size="md" />
    <LDatePicker v-model="date" size="lg" />
  </div>
</template>
```

## Examples

### Basic Usage
```vue
<template>
  <LDatePicker v-model="selectedDate" />
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref(new Date());
</script>
```

### Range Selection
```vue
<template>
  <LDatePicker 
    v-model="dateRange"
    mode="range"
    placeholder="Select check-in and check-out dates"
  />
</template>

<script setup>
import { ref } from 'vue';

const dateRange = ref({ start: null, end: null });
</script>
```

### With Custom Week Start
```vue
<template>
  <LDatePicker 
    v-model="selectedDate"
    :week-starts-on="0"  // Start on Sunday
  />
</template>
```

### Disabled State
```vue
<template>
  <LDatePicker 
    v-model="selectedDate"
    disabled
  />
</template>