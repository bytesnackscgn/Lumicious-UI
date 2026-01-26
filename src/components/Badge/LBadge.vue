<script setup lang="ts">
import { cn } from '../../utils/cn';
import { badgeStyles } from './styles';
import type { BadgeProps } from './types';

const props = withDefaults(defineProps<BadgeProps>(), {
  size: 'md',
  variant: 'glass',
  color: 'primary',
  pill: false,
  floating: false
});
</script>

<template>
  <span
    :class="cn(badgeStyles({ 
      variant, 
      size, 
      color: color as any, 
      pill, 
      floating 
    }))"
  >
    <slot>{{ label }}</slot>
  </span>
</template>
