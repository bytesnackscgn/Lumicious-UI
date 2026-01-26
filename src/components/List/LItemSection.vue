<script setup lang="ts">
import { cn } from '../../utils/cn';
import { itemSectionStyles } from './styles';
import type { ItemSectionProps } from './types';

const props = withDefaults(defineProps<ItemSectionProps>(), {
  side: false,
  top: false,
  avatar: false
});
</script>

<template>
  <div :class="cn(itemSectionStyles({ side, top, avatar }), props.class)">
    <slot />
  </div>
</template>
