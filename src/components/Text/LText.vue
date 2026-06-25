<script setup lang="ts">
import { cn } from '../../utils/cn';
import { textStyles } from './styles';
import type { TextProps } from './types';

const props = withDefaults(defineProps<TextProps>(), {
  tag: 'p',
  size: 'md',
  weight: 'normal',
  color: 'white',
  gradient: false,
  gradientDirection: 'to-r'
});
</script>

<template>
  <component
    :is="tag"
    :class="cn(textStyles({ size, weight, color, gradient }))"
  >
    <slot />
  </component>
</template>
