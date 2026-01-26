<script setup lang="ts">
import { cn } from '../../utils/cn';
import { barStyles } from './styles';
import type { BarProps } from './types';

const props = withDefaults(defineProps<BarProps>(), {
  position: 'top',
  fixed: false,
  blur: true
});
</script>

<template>
  <header
    v-if="position === 'top'"
    :class="cn(barStyles({ position, fixed }), props.class)"
  >
    <slot />
  </header>
  <footer
    v-else
    :class="cn(barStyles({ position, fixed }), props.class)"
  >
    <slot />
  </footer>
</template>
