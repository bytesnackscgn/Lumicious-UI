<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { spinnerStyles } from './styles';
import type { SpinnerProps } from './types';

const props = withDefaults(defineProps<SpinnerProps>(), {
  size: 'md',
  thickness: 5
});

const inlineStyle = computed(() => {
  if (typeof props.size === 'number') {
    return { width: `${props.size}px`, height: `${props.size}px` };
  }
  return {};
});
</script>

<template>
  <svg
    viewBox="0 0 50 50"
    :class="cn(spinnerStyles({ size: typeof size === 'string' ? (size as any) : undefined }))"
    :style="inlineStyle"
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      :stroke="color || 'currentColor'"
      :stroke-width="thickness"
      stroke-linecap="round"
      class="l-spinner__path"
    />
  </svg>
</template>

<style scoped>
.l-spinner__path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: l-spinner-dash 1.5s ease-in-out infinite;
}

@keyframes l-spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}
</style>
