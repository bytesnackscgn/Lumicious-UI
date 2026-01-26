<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { circularProgressStyles } from './styles';
import type { CircularProgressProps } from './types';

const props = withDefaults(defineProps<CircularProgressProps>(), {
  value: 0,
  size: '48px',
  thickness: 3,
  indeterminate: false,
  color: '#3b82f6',
  trackColor: 'rgba(255, 255, 255, 0.1)'
});

const radius = 20;
const circumference = 2 * Math.PI * radius;

const offset = computed(() => {
  if (props.indeterminate) return circumference * 0.75;
  const progress = Math.min(100, Math.max(0, props.value));
  return circumference - (progress / 100) * circumference;
});

const computedSize = computed(() => {
  return typeof props.size === 'number' ? `${props.size}px` : props.size;
});
</script>

<template>
  <div 
    :class="cn(circularProgressStyles({ indeterminate }), props.class)"
    :style="{ width: computedSize, height: computedSize }"
  >
    <svg 
        viewBox="0 0 50 50" 
        class="w-full h-full -rotate-90"
    >
      <!-- Track -->
      <circle
        cx="25"
        cy="25"
        :r="radius"
        fill="none"
        :stroke="trackColor"
        :stroke-width="thickness"
      />
      <!-- Progress -->
      <circle
        cx="25"
        cy="25"
        :r="radius"
        fill="none"
        :stroke="color"
        :stroke-width="thickness"
        stroke-linecap="round"
        class="transition-all duration-300 ease-in-out"
        :style="{ 
            strokeDasharray: circumference, 
            strokeDashoffset: offset 
        }"
      />
    </svg>
    
    <div v-if="$slots.default" class="absolute inset-0 flex items-center justify-center">
        <slot />
    </div>
  </div>
</template>
