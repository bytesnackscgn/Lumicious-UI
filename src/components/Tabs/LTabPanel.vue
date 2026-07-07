<script setup lang="ts">
import { inject, computed } from 'vue';
import { cn } from '../../utils/cn';
import type { TabPanelProps } from './types';

const props = defineProps<TabPanelProps>();

const context = inject<{
    currentPanel: any;
} | null>('tabPanelsContext', null);

const isActive = computed(() => context?.currentPanel.value === props.name);
</script>

<template>
  <div 
    v-show="isActive"
    :class="cn('l-tab-panel', props.class)"
  >
    <slot />
  </div>
</template>
