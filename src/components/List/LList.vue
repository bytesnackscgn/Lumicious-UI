<script setup lang="ts">
import { cn } from '../../utils/cn';
import { listStyles } from './styles';
import type { ListProps } from './types';

const props = withDefaults(defineProps<ListProps>(), {
  bordered: false,
  padding: false,
  dense: false,
  separator: false
});
</script>

<template>
  <div 
    :class="cn(
        listStyles({ bordered, padding }), 
        separator && 'l-list--separator',
        props.class
    )"
  >
    <slot />
  </div>
</template>

<style>
.l-list--separator > .l-item:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
