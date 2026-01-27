<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { cn } from '../../utils/cn';
import { intersectionStyles } from './styles';
import type { IntersectionProps } from './types';

const props = withDefaults(defineProps<IntersectionProps>(), {
  threshold: 0.1,
  rootMargin: '0px',
  once: true,
  fallback: false,
});

const emit = defineEmits<{
  (e: 'intersect', entry: IntersectionObserverEntry): void;
  (e: 'intersectOnce', entry: IntersectionObserverEntry): void;
  (e: 'leave', entry: IntersectionObserverEntry): void;
}>();

const isVisible = ref(false);
const observer = ref<IntersectionObserver | null>(null);
const elementRef = ref<HTMLElement | null>(null);

const setupIntersectionObserver = () => {
  if (!elementRef.value) return;

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          emit('intersect', entry);
          
          if (props.once) {
            emit('intersectOnce', entry);
            if (observer.value) {
              observer.value.unobserve(elementRef.value!);
            }
          }
        } else {
          isVisible.value = false;
          emit('leave', entry);
        }
      });
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin,
    }
  );

  observer.value.observe(elementRef.value);
};

const resetObserver = () => {
  if (observer.value && elementRef.value) {
    observer.value.unobserve(elementRef.value);
    observer.value.disconnect();
    observer.value = null;
  }
  if (props.fallback) {
    isVisible.value = false;
  }
};

watch(
  () => [props.threshold, props.rootMargin, props.once],
  () => {
    resetObserver();
    setupIntersectionObserver();
  },
  { deep: true }
);

onMounted(() => {
  setupIntersectionObserver();
});

onUnmounted(() => {
  resetObserver();
});
</script>

<template>
  <div
    ref="elementRef"
    :class="cn(intersectionStyles({ isVisible }), props.class)"
  >
    <slot :isVisible="isVisible" />
  </div>
</template>