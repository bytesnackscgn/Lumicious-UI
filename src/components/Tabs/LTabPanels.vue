<script setup lang="ts">
import { provide, computed } from 'vue';
import { cn } from '../../utils/cn';
import type { TabPanelsProps } from './types';

const props = withDefaults(defineProps<TabPanelsProps>(), {
  animated: true,
  vertical: false
});

const currentPanel = computed(() => props.modelValue);

provide('tabPanelsContext', {
    currentPanel
});
</script>

<template>
  <div :class="cn('l-tab-panels overflow-hidden relative min-h-0', props.class)">
    <Transition
      mode="out-in"
      enter-active-class="transition-opacity duration-300 ease-out"
      leave-active-class="transition-opacity duration-300 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div :key="props.modelValue">
        <slot />
      </div>
    </Transition>
  </div>
</template>
