<script setup lang="ts">
import { cn } from '../../utils/cn';
import { itemStyles } from './styles';
import { LIcon } from '../Icon';
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
    <div class="flex items-center gap-3 w-full">
      <LIcon v-if="props.icon" :name="props.icon" size="sm" class="text-white/60" />
      <div class="flex-1 min-w-0">
        <div v-if="props.label" class="text-white font-medium truncate">
          {{ props.label }}
        </div>
        <div v-if="props.caption" class="text-white/50 text-sm truncate">
          {{ props.caption }}
        </div>
        <slot v-if="!props.label && !props.icon && !props.caption" />
      </div>
    </div>
  </component>
</template>
