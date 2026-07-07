<script setup lang="ts">
import { computed } from 'vue';
import * as lucideIcons from 'lucide-vue-next';
import { cn } from '../../utils/cn';
import { iconStyles } from './styles';
import type { IconProps } from './types';

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
  color: 'white',
  strokeWidth: 2,
  tag: 'i'
});

const IconComponent = computed(() => {
  // Convert kebab-case to PascalCase for Lucide naming
  const pascalName = props.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
    
  return (lucideIcons as any)[pascalName] || (lucideIcons as any)[props.name];
});

const computedSize = computed(() => {
  const sizes: Record<string, number> = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48
  };
  return typeof props.size === 'number' ? props.size : sizes[props.size as string] || 24;
});
</script>

<template>
  <component
    :is="tag"
    :class="cn(iconStyles({ size: typeof size === 'string' ? (size as any) : undefined, color }), 'not-italic')"
    class="flex items-center justify-center"
  >
    <component
      :is="IconComponent"
      v-if="IconComponent"
      :size="computedSize"
      :stroke-width="strokeWidth"
    />
    <slot v-else />
  </component>
</template>
