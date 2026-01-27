<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, provide, computed } from 'vue';
import type { CarouselProps, CarouselItem } from './types';

const props = withDefaults(defineProps<CarouselProps>(), {
  size: 'md',
  variant: 'glass',
  direction: 'horizontal',
  autoplay: 'pause',
  interval: 3000,
  showDots: true,
  showArrows: true,
  loop: true,
  currentIndex: 0,
});

const emit = defineEmits<{
  (e: 'change', index: number): void;
  (e: 'slide', direction: 'next' | 'prev'): void;
}>();

const currentIndex = ref(props.currentIndex);
const intervalId = ref<NodeJS.Timeout | null>(null);

const nextSlide = () => {
  if (!props.items || props.items.length === 0) return;
  
  const nextIndex = props.loop 
    ? (currentIndex.value + 1) % props.items.length
    : Math.min(currentIndex.value + 1, props.items.length - 1);
  
  if (nextIndex !== currentIndex.value) {
    currentIndex.value = nextIndex;
    emit('change', nextIndex);
    emit('slide', 'next');
  }
};

const prevSlide = () => {
  if (!props.items || props.items.length === 0) return;
  
  const prevIndex = props.loop 
    ? (currentIndex.value - 1 + props.items.length) % props.items.length
    : Math.max(currentIndex.value - 1, 0);
  
  if (prevIndex !== currentIndex.value) {
    currentIndex.value = prevIndex;
    emit('change', prevIndex);
    emit('slide', 'prev');
  }
};

const goToSlide = (index: number) => {
  if (!props.items || props.items.length === 0 || index === currentIndex.value) return;
  
  currentIndex.value = index;
  emit('change', index);
};

const startAutoplay = () => {
  if (props.autoplay === 'play' && props.interval > 0) {
    intervalId.value = setInterval(nextSlide, props.interval);
  }
};

const stopAutoplay = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
};

// Expose methods to parent components
defineExpose({
  nextSlide,
  prevSlide,
  goToSlide,
  startAutoplay,
  stopAutoplay,
});

// Provide reactive state to child components
provide('carouselState', {
  currentIndex,
  items: computed(() => props.items || []),
  nextSlide,
  prevSlide,
  goToSlide,
  startAutoplay,
  stopAutoplay,
  autoplay: computed(() => props.autoplay),
  showDots: computed(() => props.showDots),
  showArrows: computed(() => props.showArrows),
  loop: computed(() => props.loop),
});

watch(() => props.autoplay, (newVal) => {
  if (newVal === 'play') {
    startAutoplay();
  } else {
    stopAutoplay();
  }
});

watch(() => props.interval, () => {
  if (props.autoplay === 'play') {
    stopAutoplay();
    startAutoplay();
  }
});

watch(() => props.currentIndex, (newVal) => {
  if (newVal !== currentIndex.value) {
    currentIndex.value = newVal;
  }
});

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <div class="l-carousel-headless">
    <slot 
      :current-index="currentIndex"
      :items="items || []"
      :next-slide="nextSlide"
      :prev-slide="prevSlide"
      :go-to-slide="goToSlide"
      :start-autoplay="startAutoplay"
      :stop-autoplay="stopAutoplay"
    />
  </div>
</template>