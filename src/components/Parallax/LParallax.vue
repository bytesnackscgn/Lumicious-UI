<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { cn } from '../../utils/cn';
import { parallaxStyles } from './styles';
import type { ParallaxProps } from './types';

const props = withDefaults(defineProps<ParallaxProps>(), {
  speed: 0.5,
  direction: 'up',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'scroll', progress: number): void;
}>();

const elementRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const scrollY = ref(0);
const isVisible = ref(false);

const parallaxStyle = computed(() => {
  if (!isVisible.value || props.disabled) return {};
  
  const progress = Math.min(Math.max(scrollY.value * props.speed, -100), 100);
  
  if (props.direction === 'up') {
    return { transform: `translateY(${progress}px)` };
  } else if (props.direction === 'down') {
    return { transform: `translateY(${-progress}px)` };
  } else if (props.direction === 'left') {
    return { transform: `translateX(${progress}px)` };
  } else if (props.direction === 'right') {
    return { transform: `translateX(${-progress}px)` };
  }
  
  return {};
});

const handleScroll = () => {
  if (!elementRef.value || !containerRef.value || props.disabled) return;
  
  const containerRect = containerRef.value.getBoundingClientRect();
  const elementRect = elementRef.value.getBoundingClientRect();
  
  // Calculate element position relative to viewport
  const elementTop = elementRect.top - containerRect.top;
  const elementHeight = elementRect.height;
  const containerHeight = containerRect.height;
  
  // Calculate scroll progress
  const scrollProgress = (containerHeight - elementTop) / (containerHeight + elementHeight);
  const normalizedProgress = Math.max(0, Math.min(1, scrollProgress));
  
  scrollY.value = normalizedProgress * 100;
  emit('scroll', normalizedProgress);
};

const observer = ref<IntersectionObserver | null>(null);

const setupIntersectionObserver = () => {
  if (!containerRef.value) return;

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting;
        if (isVisible.value) {
          handleScroll();
        }
      });
    },
    { threshold: [0, 0.1, 0.5, 1] }
  );

  observer.value.observe(containerRef.value);
};

onMounted(() => {
  setupIntersectionObserver();
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
  }
  
  // Initial check
  handleScroll();
});

onUnmounted(() => {
  if (observer.value && containerRef.value) {
    observer.value.unobserve(containerRef.value);
  }
  
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  }
});
</script>

<template>
  <div 
    ref="containerRef"
    :class="cn(parallaxStyles({ direction, disabled }), props.class)"
  >
    <div 
      ref="elementRef"
      :style="parallaxStyle"
    >
      <slot />
    </div>
  </div>
</template>