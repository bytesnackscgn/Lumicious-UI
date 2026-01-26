<script setup lang="ts">
import { cn } from '../../utils/cn';
import { itemStyles } from './styles';
import type { ItemProps } from './types';

const props = withDefaults(defineProps<ItemProps>(), {
  clickable: false,
  active: false,
  dense: false,
  disabled: false,
  tag: 'div'
});

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();
</script>

<template>
  <component
    :is="tag"
    :class="cn(itemStyles({ clickable, dense, active, disabled }), props.class)"
    @click="clickable && !disabled && $emit('click', $event)"
  >
    <slot />
  </component>
</template>
