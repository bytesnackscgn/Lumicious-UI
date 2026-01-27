# LParallax

A Vue 3 component that creates smooth parallax scrolling effects with customizable speed and direction. Perfect for creating engaging visual experiences with depth and movement.

## Features

- 🎯 **Smooth Parallax**: Hardware-accelerated CSS transforms for optimal performance
- 🔄 **Multiple Directions**: Support for up, down, left, and right movements
- ⚡ **Speed Control**: Adjustable speed multiplier (0.1x - 2.0x)
- 🎨 **Glassmorphism Design**: Built with glassmorphism styling
- 📱 **Responsive**: Works on all screen sizes
- ♻️ **Auto Cleanup**: Automatically cleans up event listeners
- 📊 **Scroll Progress**: Emits scroll progress events for advanced animations

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `speed` | `number` | `0.5` | Parallax speed multiplier (0.1-2.0) |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | Direction of parallax movement |
| `disabled` | `boolean` | `false` | Disable parallax effect |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `scroll` | `progress: number` | Emitted with scroll progress (0-1) |

## Slots

| Name | Scope | Description |
|------|-------|-------------|
| `default` | `{}` | Default slot for parallax content |

## Usage

### Basic Usage

```vue
<template>
  <div class="h-64">
    <LParallax class="h-full">
      <div class="h-full glass border-white/20 rounded-xl flex items-center justify-center">
        <h2 class="text-2xl font-bold">Parallax Content</h2>
      </div>
    </LParallax>
  </div>
</template>

<script setup>
import { LParallax } from '@/components';
</script>
```

### With Custom Speed

```vue
<template>
  <div class="h-64">
    <LParallax :speed="1.2" class="h-full">
      <div class="h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 glass border-white/20 rounded-xl flex items-center justify-center">
        <h2 class="text-2xl font-bold">Fast Parallax (1.2x)</h2>
      </div>
    </LParallax>
  </div>
</template>
```

### Different Directions

```vue
<template>
  <div class="space-y-8">
    <!-- Up direction (default) -->
    <LParallax direction="up" class="h-32">
      <div class="h-full bg-red-500/30 glass border-red-400/30 rounded-xl flex items-center justify-center">
        <h3>Up Direction</h3>
      </div>
    </LParallax>
    
    <!-- Down direction -->
    <LParallax direction="down" class="h-32">
      <div class="h-full bg-green-500/30 glass border-green-400/30 rounded-xl flex items-center justify-center">
        <h3>Down Direction</h3>
      </div>
    </LParallax>
    
    <!-- Left direction -->
    <LParallax direction="left" class="h-32">
      <div class="h-full bg-blue-500/30 glass border-blue-400/30 rounded-xl flex items-center justify-center">
        <h3>Left Direction</h3>
      </div>
    </LParallax>
    
    <!-- Right direction -->
    <LParallax direction="right" class="h-32">
      <div class="h-full bg-purple-500/30 glass border-purple-400/30 rounded-xl flex items-center justify-center">
        <h3>Right Direction</h3>
      </div>
    </LParallax>
  </div>
</template>
```

### With Scroll Progress

```vue
<template>
  <div class="h-64">
    <LParallax 
      :speed="0.8" 
      @scroll="handleScroll"
      class="h-full"
    >
      <div class="h-full glass border-white/20 rounded-xl flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-2">Scroll Progress</h2>
          <p>Progress: {{ Math.round(progress * 100) }}%</p>
        </div>
      </div>
    </LParallax>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { LParallax } from '@/components';

const progress = ref(0);

const handleScroll = (scrollProgress) => {
  progress.value = scrollProgress;
};
</script>
```

### Multi-Layer Parallax

```vue
<template>
  <div class="h-96 relative">
    <!-- Background layer (slower) -->
    <LParallax :speed="0.3" class="absolute inset-0">
      <div class="h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 glass border-white/10 rounded-xl"></div>
    </LParallax>
    
    <!-- Middle layer (medium speed) -->
    <LParallax :speed="0.6" class="absolute inset-0">
      <div class="h-full flex items-center justify-center">
        <div class="w-32 h-32 bg-gradient-to-br from-blue-500/40 to-purple-500/40 glass border-white/30 rounded-full"></div>
      </div>
    </LParallax>
    
    <!-- Foreground layer (faster) -->
    <LParallax :speed="1.0" class="absolute inset-0">
      <div class="h-full flex items-center justify-center">
        <div class="text-center">
          <h2 class="text-3xl font-bold mb-2">Multi-Layer Parallax</h2>
          <p class="text-white/60">Different speeds create depth</p>
        </div>
      </div>
    </LParallax>
  </div>
</template>
```

### Disabled State

```vue
<template>
  <div class="h-64">
    <LParallax :disabled="true" class="h-full">
      <div class="h-full bg-gray-500/30 glass border-gray-400/30 rounded-xl flex items-center justify-center">
        <h2 class="text-2xl font-bold">Disabled Parallax</h2>
      </div>
    </LParallax>
  </div>
</template>
```

## Performance Tips

- **Use appropriate speeds**: Lower speeds (0.3-0.7) work well for backgrounds, higher speeds (0.8-1.2) for foreground elements
- **Limit layers**: Use 2-3 parallax layers maximum for optimal performance
- **Disable when not needed**: Set `disabled="true"` when parallax is not appropriate
- **Use hardware acceleration**: The component uses CSS transforms which are GPU-accelerated

## Browser Support

- Chrome 31+
- Firefox 31+
- Safari 9+
- Edge 12+

The component uses modern CSS transforms and Intersection Observer API for optimal performance across all browsers.

## Examples

### Hero Section with Parallax

```vue
<template>
  <section class="relative h-screen">
    <!-- Background parallax -->
    <LParallax :speed="0.4" class="absolute inset-0">
      <div class="h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
    </LParallax>
    
    <!-- Content parallax -->
    <LParallax :speed="0.8" class="absolute inset-0 flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome to Our Site</h1>
        <p class="text-xl text-white/80">Experience the magic of parallax</p>
      </div>
    </LParallax>
  </section>
</template>
```

### Card Gallery with Parallax

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div v-for="card in cards" :key="card.id" class="h-64">
      <LParallax :speed="0.6">
        <div class="h-full glass border-white/20 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
            <p class="text-white/70">{{ card.description }}</p>
          </div>
          <button class="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </LParallax>
    </div>
  </div>
</template>