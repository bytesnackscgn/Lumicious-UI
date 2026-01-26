# LImg

An enhanced image component with loading states, error handling, and glassmorphism styling.

## Props

| Name      | Type                                             | Default   | Description                 |
| :-------- | :----------------------------------------------- | :-------- | :-------------------------- |
| `src`     | `string`                                         | -         | Image source URL.           |
| `alt`     | `string`                                         | -         | Alt text for accessibility. |
| `width`   | `number \| string`                               | -         | Image width.                |
| `height`  | `number \| string`                               | -         | Image height.               |
| `size`    | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'`    | Preset size.                |
| `variant` | `'glass' \| 'solid' \| 'outline' \| 'ghost'`     | `'glass'` | Visual variant.             |
| `fit`     | `'contain' \| 'cover' \| 'fill' \| 'none'`       | `'cover'` | Object fit behavior.        |
| `rounded` | `boolean`                                        | `false`   | Apply rounded corners.      |
| `loading` | `'lazy' \| 'eager'`                              | `'lazy'`  | Loading strategy.           |
| `class`   | `string`                                         | -         | Additional CSS classes.     |

## Events

| Event   | Payload | Description                            |
| :------ | :------ | :------------------------------------- |
| `load`  | `Event` | Emitted when image loads successfully. |
| `error` | `Event` | Emitted when image fails to load.      |

## Usage

```vue
<template>
  <!-- Basic image -->
  <LImg src="https://example.com/image.jpg" alt="Description" />

  <!-- Custom size and variant -->
  <LImg src="https://example.com/image.jpg" size="lg" variant="solid" rounded />

  <!-- With custom dimensions -->
  <LImg
    src="https://example.com/image.jpg"
    width="300"
    height="200"
    fit="contain"
  />

  <!-- Handle events -->
  <LImg
    src="https://example.com/image.jpg"
    @load="handleImageLoad"
    @error="handleImageError"
  />
</template>

<script setup lang="ts">
const handleImageLoad = (event) => {
  console.log("Image loaded:", event);
};

const handleImageError = (event) => {
  console.log("Image failed to load:", event);
};
</script>
```

## Features

### Loading States

- **Loading Indicator**: Shows a spinning loader while the image is loading
- **Error State**: Displays error message with retry button
- **Retry Functionality**: Users can retry failed image loads

### Visual Variants

- **Glass**: Glassmorphism effect with blur and transparency
- **Solid**: Semi-transparent solid background
- **Outline**: Border-only style
- **Ghost**: Transparent background

### Size Options

- **xs**: 4rem × 4rem
- **sm**: 6rem × 6rem
- **md**: 8rem × 8rem (default)
- **lg**: 12rem × 12rem
- **xl**: 16rem × 16rem
- **full**: 100% width and height

### Object Fit

- **contain**: Image fits within container, maintaining aspect ratio
- **cover**: Image covers container, may be cropped
- **fill**: Image stretches to fill container
- **none**: Image maintains original size

## Examples

### Different Sizes

```vue
<LImg size="xs" src="https://example.com/small.jpg" />
<LImg size="sm" src="https://example.com/medium.jpg" />
<LImg size="md" src="https://example.com/medium.jpg" />
<LImg size="lg" src="https://example.com/large.jpg" />
<LImg size="xl" src="https://example.com/large.jpg" />
```

### Gallery Layout

```vue
<template>
  <div class="grid grid-cols-3 gap-4">
    <LImg
      v-for="image in images"
      :key="image.id"
      :src="image.url"
      :alt="image.title"
      size="md"
      rounded
      @click="selectImage(image)"
    />
  </div>
</template>
```

### Error Handling

```vue
<template>
  <LImg :src="currentImage" @error="handleError" />
</template>

<script setup lang="ts">
const currentImage = ref("https://example.com/image.jpg");
const fallbackImage = "https://example.com/fallback.jpg";

const handleError = () => {
  currentImage.value = fallbackImage;
};
</script>
```

## Performance

- **Lazy Loading**: Images load only when they come into view
- **Optimized Rendering**: Efficient state management
- **Memory Management**: Proper cleanup of event listeners

## Accessibility

- **Alt Text**: Required for screen readers
- **Loading States**: Visual feedback for all users
- **Keyboard Navigation**: Focus management for error states
