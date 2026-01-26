<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { cn } from '../../utils/cn';
import { tooltipStyles } from './styles';
import type { TooltipProps } from './types';

const props = withDefaults(defineProps<TooltipProps>(), {
  modelValue: false,
  delay: 300,
  hideDelay: 0
});

const isVisible = ref(props.modelValue);
const tooltipRef = ref<HTMLElement | null>(null);
let timer: any = null;

const show = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        isVisible.value = true;
    }, props.delay);
};

const hide = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        isVisible.value = false;
    }, props.hideDelay);
};

onMounted(() => {
    const parent = tooltipRef.value?.parentElement;
    if (parent) {
        parent.addEventListener('mouseenter', show);
        parent.addEventListener('mouseleave', hide);
        // Ensure parent is relative for positioning
        if (getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative';
        }
    }
});

onUnmounted(() => {
    const parent = tooltipRef.value?.parentElement;
    if (parent) {
        parent.removeEventListener('mouseenter', show);
        parent.removeEventListener('mouseleave', hide);
    }
    clearTimeout(timer);
});
</script>

<template>
  <div 
    ref="tooltipRef"
    :class="cn(
        tooltipStyles({ showing: isVisible }), 
        'bottom-full left-1/2 -translate-x-1/2 mb-2',
        props.class
    )"
  >
    <slot />
  </div>
</template>
