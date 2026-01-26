<script setup lang="ts">
import { cn } from '../../utils/cn';
import { cardStyles } from './styles';
import type { CardProps } from './types';
import { LHeadline } from '../Headline';
import { LText } from '../Text';

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'glass',
  padding: 'md'
});
</script>

<template>
  <div :class="cn(cardStyles({ variant, padding }))">
    <div v-if="$slots.header || title" class="mb-4">
      <slot name="header">
        <LHeadline v-if="title" :level="3" size="lg" class="mb-1">{{ title }}</LHeadline>
        <LText v-if="subtitle" size="sm" class="opacity-60">{{ subtitle }}</LText>
      </slot>
    </div>

    <div class="l-card-content">
      <slot />
    </div>

    <div v-if="$slots.actions" class="mt-6 flex justify-end gap-3">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped>
.l-card {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
</style>
