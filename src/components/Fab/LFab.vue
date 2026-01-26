<script setup lang="ts">
import { cn } from '../../utils/cn';
import { fabStyles } from './styles';
import type { FabProps } from './types';
import { LBtn } from '../Btn';

const props = withDefaults(defineProps<FabProps>(), {
  position: 'bottom-right',
  extended: false,
  color: 'primary',
  size: 'lg'
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<template>
  <div :class="cn(fabStyles({ position, extended }), props.class)">
    <LBtn
      v-bind="props"
      variant="solid"
      :class="extended ? 'w-full justify-center' : 'w-14 h-14 p-0 justify-center'"
      @click="handleClick"
    >
      <slot />
    </LBtn>
  </div>
</template>
