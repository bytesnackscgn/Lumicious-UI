<script setup lang="ts">
import { cn } from '../../utils/cn';
import { textStyles } from './styles';
import type { TextProps } from './types';

const props = withDefaults(defineProps<TextProps>(), {
  tag: 'p',
  size: 'md',
  weight: 'normal',
  gradient: false
});
</script>

<template>
  <component
    :is="tag"
    :class="cn(textStyles({ size, weight, gradient }))"
  >
    <slot />
  </component>
</template>
