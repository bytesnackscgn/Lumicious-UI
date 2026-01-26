<script setup lang="ts">
import { inject, computed } from 'vue';
import { cn } from '../../utils/cn';
import { tabStyles } from './styles';
import type { TabProps } from './types';
import { LIcon } from '../Icon';

const props = defineProps<TabProps>();

const context = inject<{
    currentTab: any;
    selectTab: (name: any) => void;
    vertical: boolean;
} | null>('tabsContext', null);

const isActive = computed(() => context?.currentTab.value === props.name);

const handleClick = () => {
    if (!props.disable && context) {
        context.selectTab(props.name);
    }
};
</script>

<template>
  <div 
    :class="cn(tabStyles({ 
        active: isActive, 
        vertical: context?.vertical, 
        disable 
    }), props.class)"
    @click="handleClick"
  >
    <LIcon v-if="icon" :name="icon" size="sm" />
    <slot>{{ label }}</slot>
    
    <!-- Pulse/Alert point -->
    <div 
        v-if="alert"
        class="w-2 h-2 rounded-full absolute top-2 right-4"
        :class="typeof alert === 'string' ? `bg-${alert}` : 'bg-red-500'"
    />

    <!-- Indicator Line -->
    <div 
        v-if="isActive"
        class="absolute bg-blue-500 transition-all duration-300"
        :class="context?.vertical 
            ? 'left-0 top-2 bottom-2 w-1 rounded-r-full' 
            : 'bottom-0 left-4 right-4 h-1 rounded-t-full'"
    />
  </div>
</template>
