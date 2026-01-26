<script setup lang="ts">
import { cn } from '../../utils/cn';
import { chipStyles } from './styles';
import type { ChipProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'glass',
  size: 'md',
  removable: false
});

defineEmits<{
  (e: 'remove'): void;
}>();
</script>

<template>
  <div :class="cn(chipStyles({ variant, size }))">
    <slot name="prepend">
        <LIcon v-if="icon" :name="icon" :size="size === 'sm' ? 'xs' : 'sm'" />
    </slot>
    <slot>{{ label }}</slot>
    <button 
        v-if="removable" 
        class="hover:opacity-60 transition-opacity cursor-pointer flex items-center justify-center -mr-1"
        @click.stop="$emit('remove')"
    >
        <LIcon name="x" :size="size === 'sm' ? 'xs' : 'sm'" :stroke-width="3" />
    </button>
  </div>
</template>
