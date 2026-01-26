<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { linearProgressStyles } from './styles';
import type { LinearProgressProps } from './types';

const props = withDefaults(defineProps<LinearProgressProps>(), {
  value: 0,
  indeterminate: false,
  query: false,
  color: 'primary',
  height: '4px',
  rounded: true
});

const progressWidth = computed(() => {
  if (props.indeterminate || props.query) return '100%';
  return `${Math.min(1, Math.max(0, props.value)) * 100}%`;
});

const colorClass = computed(() => {
  const colors: Record<string, string> = {
    primary: 'bg-blue-500',
    positive: 'bg-green-500',
    negative: 'bg-red-500',
    warning: 'bg-amber-500',
    info: 'bg-cyan-500',
    white: 'bg-white'
  };
  return colors[props.color] || '';
});

const customStyle = computed(() => {
    if (!colorClass.value) return { backgroundColor: props.color };
    return {};
});
</script>

<template>
  <div 
    :class="cn(linearProgressStyles({ rounded }), props.class)"
    :style="{ height, backgroundColor: trackColor || 'rgba(255, 255, 255, 0.1)' }"
  >
    <div
      :class="cn(
          'l-linear-progress__bar h-full transition-all duration-300',
          colorClass,
          indeterminate && 'l-linear-progress__bar--indeterminate',
          query && 'l-linear-progress__bar--query'
      )"
      :style="{ width: progressWidth, ...customStyle }"
    />
  </div>
</template>

<style scoped>
.l-linear-progress__bar--indeterminate {
  width: 100%;
  animation: l-linear-progress-indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  transform-origin: left;
}

@keyframes l-linear-progress-indeterminate {
  0% { transform: translateX(-100%) scaleX(0.1); }
  50% { transform: translateX(0%) scaleX(0.5); }
  100% { transform: translateX(100%) scaleX(0.1); }
}

.l-linear-progress__bar--query {
  width: 100%;
  animation: l-linear-progress-query 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  transform-origin: right;
}

@keyframes l-linear-progress-query {
  0% { transform: translateX(100%) scaleX(0.1); }
  50% { transform: translateX(0%) scaleX(0.5); }
  100% { transform: translateX(-100%) scaleX(0.1); }
}
</style>
