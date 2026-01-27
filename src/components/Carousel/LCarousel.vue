<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { cn } from '../../utils/cn';
import { carouselStyles, carouselItemStyles, carouselControlsStyles, carouselArrowStyles } from './styles';
import type { CarouselProps } from './types';
import { LIcon } from '../Icon';

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

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <div 
    :class="cn(carouselStyles({ size, variant, direction }))"
    :aria-label="`Carousel with ${items?.length || 0} items`"
    role="region"
    aria-roledescription="carousel"
  >
    <div class="relative w-full h-full">
      <template v-if="items && items.length > 0">
        <div
          v-for="(item, index) in items"
          :key="item.id"
          :class="cn(carouselItemStyles({ active: index === currentIndex }))"
          :aria-hidden="index !== currentIndex"
          :aria-label="`Slide ${index + 1} of ${items.length}`"
          role="tabpanel"
          :id="`carousel-slide-${index}`"
        >
          <div class="w-full h-full flex items-center justify-center">
            <div class="glass border-white/20 rounded-lg p-6 max-w-md text-center">
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.title || `Slide ${index + 1}`"
                class="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <h3 v-if="item.title" class="text-xl font-semibold mb-2">{{ item.title }}</h3>
              <p v-if="item.description" class="text-gray-600">{{ item.description }}</p>
              <div v-if="item.content" class="mt-4" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </template>
      <div v-else class="w-full h-full flex items-center justify-center text-gray-500">
        No items to display
      </div>
    </div>

    <!-- Navigation Arrows -->
    <template v-if="showArrows && items && items.length > 1">
      <button
        :class="cn(carouselArrowStyles({ size }), 'absolute left-2 top-1/2 transform -translate-y-1/2')"
        @click="prevSlide"
        :aria-label="`Previous slide`"
        :aria-disabled="!loop && currentIndex === 0"
        :tabindex="!loop && currentIndex === 0 ? -1 : 0"
      >
        <LIcon name="chevron-left" size="sm" />
        <span class="sr-only">Previous</span>
      </button>
      <button
        :class="cn(carouselArrowStyles({ size }), 'absolute right-2 top-1/2 transform -translate-y-1/2')"
        @click="nextSlide"
        :aria-label="`Next slide`"
        :aria-disabled="!loop && currentIndex === items.length - 1"
        :tabindex="!loop && currentIndex === items.length - 1 ? -1 : 0"
      >
        <LIcon name="chevron-right" size="sm" />
        <span class="sr-only">Next</span>
      </button>
    </template>

    <!-- Dots Indicator -->
    <template v-if="showDots && items && items.length > 1">
      <div :class="carouselControlsStyles({ direction })" role="tablist">
        <button
          v-for="(_, index) in items"
          :key="index"
          :class="cn(
            'w-2 h-2 rounded-full transition-all duration-200',
            index === currentIndex 
              ? 'bg-white/80 scale-125' 
              : 'bg-white/30 hover:bg-white/50'
          )"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
          :aria-selected="index === currentIndex"
          :tabindex="index === currentIndex ? 0 : -1"
          :id="`carousel-dot-${index}`"
          role="tab"
          :aria-controls="`carousel-slide-${index}`"
        />
      </div>
    </template>

    <!-- Autoplay Controls -->
    <div v-if="autoplay !== 'stop'" class="absolute top-2 right-2">
      <button
        :class="cn(
          'glass border-white/20 rounded-full p-1.5 hover:bg-white/20 transition-all duration-200',
          size === 'sm' ? 'w-6 h-6' : 
          size === 'md' ? 'w-7 h-7' : 
          size === 'lg' ? 'w-8 h-8' : 'w-9 h-9'
        )"
        @click="autoplay === 'play' ? stopAutoplay() : startAutoplay()"
        :aria-label="autoplay === 'play' ? 'Pause autoplay' : 'Start autoplay'"
        :aria-pressed="autoplay === 'play'"
      >
        <LIcon 
          :name="autoplay === 'play' ? 'pause' : 'play'" 
          :size="size === 'sm' ? 'xs' : 'sm'" 
        />
        <span class="sr-only">{{ autoplay === 'play' ? 'Pause' : 'Play' }}</span>
      </button>
    </div>

    <!-- Live region for screen readers -->
    <div 
      aria-live="polite" 
      aria-atomic="true"
      class="sr-only"
    >
      <span v-if="items && items.length > 0">
        Slide {{ currentIndex + 1 }} of {{ items.length }}
      </span>
    </div>
  </div>
</template>