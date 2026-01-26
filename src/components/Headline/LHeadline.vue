<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { headlineStyles } from './styles';
import type { HeadlineProps, HeadlineSize } from './types';

const props = withDefaults(defineProps<HeadlineProps>(), {
  level: 2,
  gradient: false
});

const sizeMap: Record<number, HeadlineSize> = {
  1: '4xl',
  2: '3xl',
  3: '2xl',
  4: 'xl',
  5: 'lg',
  6: 'md'
};

const defaultSize = computed(() => props.size || sizeMap[props.level]);
</script>

<template>
  <component
    :is="`h${level}`"
    :class="cn(headlineStyles({ size: defaultSize, gradient }))"
  >
    <slot />
  </component>
</template>

<style scoped>
.l-headline {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
</style>
