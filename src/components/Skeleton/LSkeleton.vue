<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { skeletonStyles } from './styles';
import type { SkeletonProps } from './types';

const props = withDefaults(defineProps<SkeletonProps>(), {
  type: 'rect',
  animation: 'wave',
  square: false,
  bordered: false
});

const computedStyle = computed(() => {
  const style: Record<string, string> = {};
  
  if (props.width) style.width = props.width;
  if (props.height) style.height = props.height;
  
  if (props.type === 'circle') {
      const size = props.size || props.width || '48px';
      style.width = size;
      style.height = size;
      style.borderRadius = '50%';
  } else if (props.type === 'text') {
      style.height = props.height || '1em';
      style.width = props.width || '100%';
      style.marginTop = '0.35em';
      style.marginBottom = '0.35em';
  } else if (props.type === 'QBtn') {
      style.width = props.width || '90px';
      style.height = props.height || '36px';
      style.borderRadius = '12px';
  }

  return style;
});
</script>

<template>
  <div
    :class="cn(skeletonStyles({ animation, square, bordered }), props.class)"
    :style="computedStyle"
  />
</template>

<style>
.l-skeleton--wave::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.05),
    transparent
  );
  animation: l-skeleton-wave 1.5s infinite;
}

@keyframes l-skeleton-wave {
  100% {
    transform: translateX(100%);
  }
}
</style>
