 # LCarousel

A beautiful glassmorphism carousel component for displaying content in a sliding format with smooth animations and customizable controls.

## Props

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `CarouselItem[]` | `[]` | Array of carousel items to display |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | The size of the carousel |
| `variant` | `'glass' \| 'solid' \| 'outline'` | `'glass'` | The visual style variant |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | The slide direction |
| `autoplay` | `'play' \| 'pause' \| 'stop'` | `'pause'` | Autoplay behavior |
| `interval` | `number` | `3000` | Autoplay interval in milliseconds |
| `showDots` | `boolean` | `true` | Show dot indicators |
| `showArrows` | `boolean` | `true` | Show navigation arrows |
| `loop` | `boolean` | `true` | Enable infinite looping |
| `currentIndex` | `number` | `0` | Current slide index |

## Events

| Name | Parameters | Description |
| :--- | :--- | :--- |
| `change` | `(index: number)` | Emitted when slide changes |
| `slide` | `(direction: 'next' \| 'prev')` | Emitted when sliding direction changes |

## CarouselItem Interface

```typescript
interface CarouselItem {
  id: string | number;
  content?: string;
  image?: string;
  title?: string;
  description?: string;
}
```

## Slots

- `default`: Main content area (overrides automatic item rendering)

## Usage

### Basic Usage

```vue
<template>
  <LCarousel 
    :items="slides"
    variant="glass"
    size="md"
  />
</template>

<script setup>
const slides = [
  {
    id: 1,
    title: 'Slide 1',
    description: 'First slide content',
    image: 'https://via.placeholder.com/400x200?text=Slide+1'
  },
  {
    id: 2,
    title: 'Slide 2',
    description: 'Second slide content',
    image: 'https://via.placeholder.com/400x200?text=Slide+2'
  },
  {
    id: 3,
    title: 'Slide 3',
    description: 'Third slide content',
    image: 'https://via.placeholder.com/400x200?text=Slide+3'
  }
];
</script>
```

### With Custom Content

```vue
<template>
  <LCarousel 
    :items="customSlides"
    :autoplay="'play'"
    :interval="2000"
  />
</template>

<script setup>
const customSlides = [
  {
    id: 1,
    content: '<div class="text-center"><h3 class="text-2xl font-bold">Welcome!</h3><p>Custom HTML content</p></div>'
  },
  {
    id: 2,
    content: '<div class="text-center"><h3 class="text-2xl font-bold">Features</h3><ul><li>✓ Feature 1</li><li>✓ Feature 2</li></ul></div>'
  }
];
</script>
```

### With Event Handlers

```vue
<template>
  <LCarousel 
    :items="slides"
    @change="onSlideChange"
    @slide="onSlideDirection"
  />
</template>

<script setup>
const onSlideChange = (index) => {
  console.log('Slide changed to:', index);
};

const onSlideDirection = (direction) => {
  console.log('Slide direction:', direction);
};
</script>
```

### Vertical Carousel

```vue
<template>
  <LCarousel 
    :items="slides"
    direction="vertical"
    size="lg"
  />
</template>
```

### No Controls

```vue
<template>
  <LCarousel 
    :items="slides"
    :showDots="false"
    :showArrows="false"
    :autoplay="'play'"
  />
</template>
```

## Variants

### Glass (Default)
- Frosted glass background with subtle borders
- Semi-transparent with blur effects
- Best for modern, aesthetic designs

### Solid
- Solid white background
- Clean and professional look
- Best for business applications

### Outline
- Transparent background with borders
- Minimalist design
- Best for overlay contexts

## Sizes

- **sm**: 192px height
- **md**: 256px height (default)
- **lg**: 384px height
- **xl**: 448px height

## Autoplay Controls

The carousel supports three autoplay modes:

- **play**: Automatically advances slides
- **pause**: Stops autoplay (default)
- **stop**: Disables autoplay completely

When autoplay is enabled, a play/pause button appears in the top-right corner for manual control.