<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, provide, computed, useSlots, reactive } from 'vue';
import { cn } from '../../utils/cn';
import { carouselStyles, carouselItemStyles, carouselControlsStyles, carouselArrowStyles } from './styles';
import type { CarouselProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<CarouselProps>(), {
  size: 'md',
  variant: 'glass',
  direction: 'horizontal',
  autoplay: false,
  interval: 3000,
  enableIndicators: true,
  showArrows: true,
  loop: true,
  currentIndex: 0,
});

const emit = defineEmits<{
  (e: 'change', index: number): void;
  (e: 'slide', direction: 'next' | 'prev'): void;
}>();

const slots = useSlots();
const currentIndex = ref(props.currentIndex);
const isPlaying = ref(props.autoplay);
const intervalId = ref<ReturnType<typeof setInterval> | null>(null);

const itemsCount = computed(() => props.items?.length || 0);

const nextSlide = () => {
  if (itemsCount.value === 0) return;
  
  const nextIndex = props.loop 
    ? (currentIndex.value + 1) % itemsCount.value
    : Math.min(currentIndex.value + 1, itemsCount.value - 1);
  
  if (nextIndex !== currentIndex.value) {
    currentIndex.value = nextIndex;
    emit('change', nextIndex);
    emit('slide', 'next');
  }
};

const prevSlide = () => {
  if (itemsCount.value === 0) return;
  
  const prevIndex = props.loop 
    ? (currentIndex.value - 1 + itemsCount.value) % itemsCount.value
    : Math.max(currentIndex.value - 1, 0);
  
  if (prevIndex !== currentIndex.value) {
    currentIndex.value = prevIndex;
    emit('change', prevIndex);
    emit('slide', 'prev');
  }
};

const goToSlide = (index: number) => {
  if (itemsCount.value === 0 || index === currentIndex.value) return;
  
  currentIndex.value = index;
  emit('change', index);
};

const startAutoplay = () => {
  if (props.autoplay && props.interval > 0) {
    stopAutoplay(); // Ensure no multiple intervals
    isPlaying.value = true;
    intervalId.value = setInterval(nextSlide, props.interval);
  }
};

const stopAutoplay = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
  isPlaying.value = false;
};

const toggleAutoplay = () => {
  if (isPlaying.value) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
};

// Provide state for sub-components or headless usage
const state = reactive({
  currentIndex,
  isPlaying,
  items: computed(() => props.items || []),
  itemsCount,
  nextSlide,
  prevSlide,
  goToSlide,
  startAutoplay,
  stopAutoplay,
  toggleAutoplay,
  autoplay: computed(() => props.autoplay),
  enableIndicators: computed(() => props.enableIndicators),
  showArrows: computed(() => props.showArrows),
  loop: computed(() => props.loop),
  direction: computed(() => props.direction),
  size: computed(() => props.size),
  variant: computed(() => props.variant),
});

provide('carouselState', state);

defineExpose({
  nextSlide,
  prevSlide,
  goToSlide,
  startAutoplay,
  stopAutoplay,
  toggleAutoplay,
  currentIndex,
  isPlaying,
  itemsCount,
});

watch(() => props.autoplay, (newVal) => {
  if (newVal) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
});

watch(() => props.interval, () => {
  if (isPlaying.value) {
    startAutoplay();
  }
});

watch(() => props.currentIndex, (newVal) => {
  if (newVal !== currentIndex.value) {
    currentIndex.value = newVal;
  }
});

onMounted(() => {
  if (props.autoplay) {
    startAutoplay();
  }
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <div 
    :class="cn(carouselStyles({ size, variant, direction }))"
    :aria-label="`Carousel with ${itemsCount} items`"
    role="region"
    aria-roledescription="carousel"
  >
    <!-- Headless Slot: If provided, it takes over the entire internal rendering -->
    <slot 
      v-if="slots.default"
      v-bind="state"
    />

    <template v-else>
      <div class="relative w-full h-full overflow-hidden">
        <template v-if="items && items.length > 0">
          <div
            v-for="(item, index) in items"
            :key="item.id"
            :class="cn(carouselItemStyles({ active: index === currentIndex, direction }))"
            :aria-hidden="index !== currentIndex"
            :aria-label="`Slide ${index + 1} of ${items.length}`"
            role="tabpanel"
            :id="`carousel-slide-${index}`"
          >
            <div class="w-full h-full flex items-center justify-center p-4">
              <!-- Item Slot: Custom content for each slide -->
              <slot name="item" :item="item" :index="index">
                <!-- Default Item UI -->
                <div class="glass border-white/20 rounded-xl p-6 max-w-full w-full md:max-w-2xl text-center shadow-xl">
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.title || `Slide ${index + 1}`"
                    class="w-full h-48 md:h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                  <h3 v-if="item.title" class="text-xl md:text-2xl font-bold mb-2 text-white">{{ item.title }}</h3>
                  <p v-if="item.description" class="text-white/70 text-sm md:text-base">{{ item.description }}</p>
                  <div v-if="item.content" class="mt-4 text-white/90" v-html="item.content"></div>
                </div>
              </slot>
            </div>
          </div>
        </template>
        <div v-else class="w-full h-full flex items-center justify-center text-gray-500">
          No items to display
        </div>
      </div>

      <!-- Navigation Arrows -->
      <template v-if="showArrows && itemsCount > 1">
        <button
          :class="cn(
            carouselArrowStyles({ size }), 
            'absolute z-10',
            direction === 'horizontal' 
              ? 'left-4 top-1/2 -translate-y-1/2' 
              : 'top-4 left-1/2 -translate-x-1/2'
          )"
          @click="prevSlide"
          :aria-label="`Previous slide`"
          :aria-disabled="!loop && currentIndex === 0"
          :tabindex="!loop && currentIndex === 0 ? -1 : 0"
        >
          <LIcon :name="direction === 'horizontal' ? 'chevron-left' : 'chevron-up'" :size="size === 'sm' ? 'xs' : 'sm'" />
          <span class="sr-only">Previous</span>
        </button>
        <button
          :class="cn(
            carouselArrowStyles({ size }), 
            'absolute z-10',
            direction === 'horizontal' 
              ? 'right-4 top-1/2 -translate-y-1/2' 
              : 'bottom-4 left-1/2 -translate-x-1/2'
          )"
          @click="nextSlide"
          :aria-label="`Next slide`"
          :aria-disabled="!loop && currentIndex === itemsCount - 1"
          :tabindex="!loop && currentIndex === itemsCount - 1 ? -1 : 0"
        >
          <LIcon :name="direction === 'horizontal' ? 'chevron-right' : 'chevron-down'" :size="size === 'sm' ? 'xs' : 'sm'" />
          <span class="sr-only">Next</span>
        </button>
      </template>

      <!-- Indicators -->
      <template v-if="enableIndicators && itemsCount > 1">
        <slot name="indicators" v-bind="state">
          <div :class="cn(carouselControlsStyles({ direction }), 'z-10')" role="tablist">
            <button
              v-for="(_, index) in items"
              :key="index"
              :class="cn(
                'rounded-full transition-all duration-300',
                'w-2 h-2',
                index === currentIndex 
                  ? (direction === 'horizontal' ? 'bg-white w-6' : 'bg-white h-6')
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
        </slot>
      </template>

      <!-- Autoplay Controls -->
      <div v-if="autoplay" class="absolute top-4 right-4 z-10">
        <button
          :class="cn(
            'glass border-white/20 rounded-full p-1.5 hover:bg-white/20 transition-all duration-200',
            size === 'sm' ? 'w-6 h-6' : 
            size === 'md' ? 'w-8 h-8' : 
            size === 'lg' ? 'w-10 h-10' : 'w-12 h-12'
          )"
          @click="toggleAutoplay"
          :aria-label="isPlaying ? 'Pause autoplay' : 'Start autoplay'"
          :aria-pressed="isPlaying"
        >
          <LIcon 
            :name="isPlaying ? 'pause' : 'play'" 
            :size="size === 'sm' ? 'xs' : 'sm'" 
          />
          <span class="sr-only">{{ isPlaying ? 'Pause' : 'Play' }}</span>
        </button>
      </div>
    </template>

    <!-- Live region for screen readers -->
    <div 
      aria-live="polite" 
      aria-atomic="true"
      class="sr-only"
    >
      <span v-if="itemsCount > 0">
        Slide {{ currentIndex + 1 }} of {{ itemsCount }}
      </span>
    </div>
  </div>
</template>
