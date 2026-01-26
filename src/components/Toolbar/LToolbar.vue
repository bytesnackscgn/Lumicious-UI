<script setup lang="ts">
import { cn } from '../../utils/cn';
import { toolbarStyles } from './styles';
import type { ToolbarProps } from './types';

const props = withDefaults(defineProps<ToolbarProps>(), {
  inset: false,
  border: false
});
</script>

<template>
  <div :class="cn(toolbarStyles({ inset, border }), props.class)">
    <slot />
  </div>
</template>
