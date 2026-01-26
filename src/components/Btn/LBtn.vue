<script setup lang="ts">
import { cn } from '../../utils/cn';
import { buttonStyles } from './styles';
import type { ButtonProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'glass',
  size: 'md',
  color: 'primary',
  blur: true
});

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
</script>

<template>
  <button
    :class="cn(buttonStyles({ variant, size, color }))"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <slot name="prepend">
      <LIcon v-if="icon" :name="icon" :size="size === 'sm' ? 'xs' : 'sm'" />
    </slot>
    
    <span v-if="loading" class="animate-spin">
       <LIcon name="loader-2" :size="size === 'sm' ? 'xs' : 'sm'" />
    </span>
    <slot v-else>{{ label }}</slot>
    
    <slot name="append">
       <LIcon v-if="iconRight" :name="iconRight" :size="size === 'sm' ? 'xs' : 'sm'" />
    </slot>
    
    <!-- Reflex effect for glass variant -->
    <div 
      v-if="variant === 'glass'"
      class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50" 
    />
  </button>
</template>

<style scoped>
.l-btn {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
