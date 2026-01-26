# LBreadcrumbs

A navigation breadcrumb component that shows the current page location in a hierarchical structure.

## Props

| Name        | Type     | Default | Description                         |
| :---------- | :------- | :------ | :---------------------------------- |
| `items`     | `Array`  | -       | Array of breadcrumb items.          |
| `separator` | `string` | `'/'`   | Separator between breadcrumb items. |

## Breadcrumb Item

Each item in the `items` array can have the following properties:

| Name       | Type      | Default | Description                      |
| :--------- | :-------- | :------ | :------------------------------- |
| `label`    | `string`  | -       | Display text for the breadcrumb. |
| `href`     | `string`  | -       | URL for navigation (optional).   |
| `disabled` | `boolean` | `false` | Whether the item is disabled.    |

## Usage

```vue
<template>
  <!-- Basic breadcrumbs -->
  <LBreadcrumbs
    :items="[
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Smartphones' },
    ]"
    @click="handleBreadcrumbClick"
  />

  <!-- Custom separator -->
  <LBreadcrumbs :items="breadcrumbs" separator="→" />
</template>

<script setup lang="ts">
const breadcrumbs = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analytics", href: "/dashboard/analytics" },
  { label: "Reports" },
];

const handleBreadcrumbClick = (item, index) => {
  console.log("Clicked breadcrumb:", item, "at index:", index);
};
</script>
```

## Events

| Event   | Payload         | Description                                |
| :------ | :-------------- | :----------------------------------------- |
| `click` | `(item, index)` | Emitted when a breadcrumb item is clicked. |

## Examples

### Disabled Items

```vue
<LBreadcrumbs
  :items="[
    { label: 'Home', href: '/' },
    { label: 'Restricted', disabled: true },
    { label: 'Final' },
  ]"
/>
```

### Single Item

```vue
<LBreadcrumbs :items="[{ label: 'Only Page' }]" />
```
