<script setup lang="ts">
import { cn } from '../../utils/cn';
import { btnGroupStyles } from './styles';
import type { BtnGroupProps } from './types';

const props = withDefaults(defineProps<BtnGroupProps>(), {
  spread: false,
  outline: false,
  rounded: false
});
</script>

<template>
  <div :class="cn(btnGroupStyles({ spread, outline, rounded }), props.class)">
    <slot />
  </div>
</template>

<style>
.l-btn-group > .l-btn {
  border-radius: 0;
  border-left-width: 0;
  flex-grow: v-bind('spread ? 1 : 0');
}

.l-btn-group > .l-btn:first-child {
  border-left-width: 0;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}

.l-btn-group > .l-btn:last-child {
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}

.l-btn-group > .l-btn:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
