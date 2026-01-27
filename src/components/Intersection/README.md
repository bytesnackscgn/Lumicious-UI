# LIntersection

A Vue 3 component that detects when an element intersects with the viewport using the Intersection Observer API. Perfect for lazy loading, scroll-triggered animations, and performance optimization.

## Features

- 🎯 **Intersection Detection**: Uses native Intersection Observer API for optimal performance
- 🔄 **Flexible Thresholds**: Configurable intersection thresholds (0-1)
- 📏 **Custom Margins**: Set root margin for early/late detection
- ⚡ **Once Mode**: Trigger intersection only once for performance
- 🎨 **Glassmorphism Design**: Built with glassmorphism styling
- 📱 **Responsive**: Works on all screen sizes
- ♻️ **Auto Cleanup**: Automatically cleans up observers when component unmounts

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `threshold` | `number \| number[]` | `0.1` | Intersection threshold (0-1) |
| `rootMargin` | `string` | `'0px'` | Root margin for intersection observer |
| `once` | `boolean` | `true` | Trigger intersection only once |
| `fallback` | `boolean` | `false` | Show fallback state initially |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `intersect` | `IntersectionObserverEntry` | Emitted when element intersects |
| `intersectOnce` | `IntersectionObserverEntry` | Emitted once when element intersects (if `once=true`) |
| `leave` | `IntersectionObserverEntry` | Emitted when element leaves viewport |

## Slots

| Name | Scope | Description |
|------|-------|-------------|
| `default` | `{ isVisible: boolean }` | Default slot with visibility state |

## Usage

### Basic Usage

```vue
<template>
  <LIntersection v-slot="{ isVisible }">
    <div class="p-6 glass border-white/20 rounded-xl">
      <h2 class="text-xl font-bold">Content appears when scrolled into view</h2>
      <p v-if="isVisible">This content is now visible!</p>
    </div>
  </LIntersection>
</template>

<script setup>
import { LIntersection } from '@/components';
</script>
```

### With Custom Threshold

```vue
<template>
  <LIntersection 
    :threshold="0.5" 
    v-slot="{ isVisible }"
    @intersect="onIntersect"
  >
    <div class="p-6 glass border-white/20 rounded-xl">
      <h2>50% threshold</h2>
      <p>Visible: {{ isVisible }}</p>
    </div>
  </LIntersection>
</template>

<script setup>
import { LIntersection } from '@/components';

const onIntersect = (entry) => {
  console.log('Element intersected:', entry);
};
</script>
```

### Continuous Tracking

```vue
<template>
  <LIntersection 
    :once="false" 
    v-slot="{ isVisible }"
    @leave="onLeave"
  >
    <div class="p-6 glass border-white/20 rounded-xl">
      <h2>Continuous tracking</h2>
      <p>Status: {{ isVisible ? 'Visible' : 'Hidden' }}</p>
    </div>
  </LIntersection>
</template>

<script setup>
import { LIntersection } from '@/components';

const onLeave = (entry) => {
  console.log('Element left viewport:', entry);
};
</script>
```

### With Fallback

```vue
<template>
  <LIntersection :fallback="true" v-slot="{ isVisible }">
    <div class="p-6 glass border-white/20 rounded-xl">
      <div v-if="!isVisible" class="animate-pulse">
        <div class="h-4 bg-white/20 rounded mb-2"></div>
        <div class="h-4 bg-white/20 rounded w-3/4"></div>
      </div>
      <div v-else>
        <h2>Content loaded!</h2>
        <p>This content was lazy loaded.</p>
      </div>
    </div>
  </LIntersection>
</template>
```

## Performance Considerations

- **Use `once: true`** for one-time animations to avoid unnecessary observer callbacks
- **Adjust threshold** based on your needs (0.1 for early detection, 0.5 for middle, 1 for full visibility)
- **Use root margin** to trigger loading before the element is fully visible
- **Clean up observers** automatically when component unmounts

## Examples

### Lazy Loading Images

```vue
<template>
  <LIntersection v-slot="{ isVisible }" @intersectOnce="loadImage">
    <div class="relative">
      <img 
        v-if="imageLoaded" 
        :src="imageSrc" 
        alt="Lazy loaded image"
        class="w-full h-64 object-cover rounded-xl glass border-white/20"
      />
      <div v-else class="w-full h-64 bg-white/10 rounded-xl animate-pulse"></div>
    </div>
  </LIntersection>
</template>

<script setup>
import { ref } from 'vue';
import { LIntersection } from '@/components';

const imageLoaded = ref(false);
const imageSrc = ref('/placeholder.jpg');

const loadImage = () => {
  // Simulate image loading
  setTimeout(() => {
    imageLoaded.value = true;
  }, 1000);
};
</script>
```

### Scroll Animations

```vue
<template>
  <div class="space-y-8">
    <LIntersection 
      v-for="(item, index) in items" 
      :key="index"
      v-slot="{ isVisible }"
      :once="false"
    >
      <div 
        class="p-6 glass border-white/20 rounded-xl transition-all duration-500"
        :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </LIntersection>
  </div>
</template>
```

## Browser Support

The Intersection Observer API is supported in all modern browsers:

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

For older browsers, consider using a polyfill.