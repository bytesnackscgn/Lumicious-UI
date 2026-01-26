<script setup lang="ts">
import { cn } from '../../utils/cn';
import { separatorStyles } from './styles';
import type { SeparatorProps } from './types';

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: 'horizontal',
  inset: false,
  color: 'white'
});
</script>

<template>
  <div
    role="separator"
    :aria-orientation="orientation"
    :class="cn(separatorStyles({ orientation, color, inset }))"
  />
</template>
