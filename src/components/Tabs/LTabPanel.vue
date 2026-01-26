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
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    leave-active-class="transition-opacity duration-200 ease-in absolute inset-0"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div 
        v-if="isActive"
        :class="cn('l-tab-panel', props.class)"
    >
        <slot />
    </div>
  </Transition>
</template>
