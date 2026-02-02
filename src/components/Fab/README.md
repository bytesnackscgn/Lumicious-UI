# LFab

A beautiful glassmorphism Floating Action Button component for Lumicious UI. Perfect for primary actions that should be easily accessible.

## Props

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `string` | `'plus'` | Lucide icon name. |
| `label` | `string` | `undefined` | Label text (for extended mode). |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the FAB. |
| `variant` | `'glass' \| 'solid' \| 'outline'` | `'glass'` | The visual variant. |
| `color` | `'primary' \| 'secondary' \| 'positive' \| 'negative' \| 'white'` | `'primary'` | The color variant. |
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left' \| 'center'` | `'bottom-right'` | The position on screen. |
| `disabled` | `boolean` | `false` | Whether the FAB is disabled. |
| `loading` | `boolean` | `false` | Whether the FAB is in loading state. |
| `ripple` | `boolean` | `true` | Whether ripple effect is enabled. |
| `mini` | `boolean` | `false` | Whether to use mini size. |
| `extended` | `boolean` | `false` | Whether to show extended version with label. |

## Events

| Name | Payload | Description |
| :--- | :--- | :--- |
| `click` | `(event: MouseEvent)` | Emitted when the FAB is clicked. |

## Slots

- `default`: Custom content for the FAB.

## Usage

### Basic FAB
```vue
<template>
  <LFab icon="plus" @click="handleAdd" />
</template>

<script setup>
const handleAdd = () => {
  console.log('Add item');
};
</script>
```

### Extended FAB with Label
```vue
<template>
  <LFab 
    icon="plus"
    label="Create New"
    extended
    @click="handleCreate"
  />
</template>

<script setup>
const handleCreate = () => {
  console.log('Create new item');
};
</script>
```

### Different Positions
```vue
<template>
  <div class="relative h-96">
    <LFab 
      position="top-left"
      icon="home"
      label="Home"
      @click="handleHome"
    />
    <LFab 
      position="top-right"
      icon="settings"
      label="Settings"
      @click="handleSettings"
    />
    <LFab 
      position="bottom-left"
      icon="user"
      label="Profile"
      @click="handleProfile"
    />
    <LFab 
      position="bottom-right"
      icon="plus"
      label="Add"
      @click="handleAdd"
    />
  </div>
</template>
```

### Different Sizes
```vue
<template>
  <div class="space-y-4">
    <LFab size="sm" icon="plus" @click="handleAdd" />
    <LFab size="md" icon="edit" @click="handleEdit" />
    <LFab size="lg" icon="save" @click="handleSave" />
  </div>
</template>
```

### Different Variants
```vue
<template>
  <div class="space-y-4">
    <LFab variant="glass" icon="plus" @click="handleAdd" />
    <LFab variant="solid" icon="edit" @click="handleEdit" />
    <LFab variant="outline" icon="save" @click="handleSave" />
  </div>
</template>
```

### Different Colors
```vue
<template>
  <div class="space-y-4">
    <LFab color="primary" icon="plus" @click="handleAdd" />
    <LFab color="secondary" icon="edit" @click="handleEdit" />
    <LFab color="positive" icon="check" @click="handleConfirm" />
    <LFab color="negative" icon="trash-2" @click="handleDelete" />
  </div>
</template>
```

### Loading State
```vue
<template>
  <LFab 
    :loading="isLoading"
    icon="refresh-cw"
    @click="handleRefresh"
  />
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

const handleRefresh = async () => {
  isLoading.value = true;
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 2000));
  isLoading.value = false;
};
</script>
```

### Disabled State
```vue
<template>
  <LFab 
    disabled
    icon="plus"
    @click="handleAdd"
  />
</template>
```

### Mini FAB
```vue
<template>
  <LFab 
    mini
    icon="plus"
    @click="handleAdd"
  />
</template>
```

### No Ripple Effect
```vue
<template>
  <LFab 
    :ripple="false"
    icon="plus"
    @click="handleAdd"
  />
</template>
```

## Examples

### Create Action Button
```vue
<template>
  <LFab 
    icon="plus"
    label="Create"
    extended
    color="positive"
    @click="handleCreate"
  />
</template>

<script setup>
const handleCreate = () => {
  console.log('Create new item');
};
</script>
```

### Edit Action Button
```vue
<template>
  <LFab 
    icon="edit"
    label="Edit"
    extended
    color="primary"
    @click="handleEdit"
  />
</template>

<script setup>
const handleEdit = () => {
  console.log('Edit item');
};
</script>
```

### Delete Action Button
```vue
<template>
  <LFab 
    icon="trash-2"
    label="Delete"
    extended
    color="negative"
    @click="handleDelete"
  />
</template>

<script setup>
const handleDelete = () => {
  if (confirm('Are you sure you want to delete this item?')) {
    console.log('Delete item');
  }
};
</script>
```

### Floating Menu
```vue
<template>
  <div class="relative h-96">
    <LFab 
      position="bottom-right"
      icon="plus"
      label="Add"
      extended
      @click="showMenu = !showMenu"
    />
    
    <div v-if="showMenu" class="absolute bottom-20 right-4 space-y-2">
      <LFab 
        mini
        icon="image"
        @click="handleAddImage"
      />
      <LFab 
        mini
        icon="file-text"
        @click="handleAddDocument"
      />
      <LFab 
        mini
        icon="link"
        @click="handleAddLink"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showMenu = ref(false);

const handleAddImage = () => {
  console.log('Add image');
  showMenu.value = false;
};

const handleAddDocument = () => {
  console.log('Add document');
  showMenu.value = false;
};

const handleAddLink = () => {
  console.log('Add link');
  showMenu.value = false;
};
</script>
