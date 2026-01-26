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
  <div :class="cn('l-tab-panels overflow-hidden relative', props.class)">
    <slot />
  </div>
</template>
