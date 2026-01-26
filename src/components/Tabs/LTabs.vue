<script setup lang="ts">
import { provide, computed } from 'vue';
import { cn } from '../../utils/cn';
import { tabsStyles } from './styles';
import type { TabsProps } from './types';

const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: null,
  align: 'left',
  vertical: false,
  dense: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const currentTab = computed(() => props.modelValue);

const selectTab = (name: any) => {
    emit('update:modelValue', name);
};

// Provide context to child LTab components
provide('tabsContext', {
    currentTab,
    selectTab,
    vertical: props.vertical
});
</script>

<template>
  <div :class="cn(tabsStyles({ vertical, align }), props.class)">
    <slot />
    
    <!-- Indicator (Simplified for now - CSS-based border handled in LTab) -->
  </div>
</template>
