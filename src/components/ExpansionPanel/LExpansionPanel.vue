<script setup lang="ts">
import { ref, watch } from 'vue';
import { cn } from '../../utils/cn';
import { expansionStyles, expansionHeaderStyles, expansionContentStyles, expansionBodyStyles } from './styles';
import type { ExpansionPanelProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<ExpansionPanelProps>(), {
  modelValue: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const isOpen = ref(props.modelValue);
const uniqueId = `expansion-${Math.random().toString(36).substring(2, 9)}`;
const headerId = `${uniqueId}-header`;
const contentId = `${uniqueId}-content`;

watch(() => props.modelValue, (val) => {
    isOpen.value = val;
});

const toggle = () => {
    if (props.disable) return;
    isOpen.value = !isOpen.value;
    emit('update:modelValue', isOpen.value);
};

const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
    }
};

const beforeEnter = (el: Element) => {
    (el as HTMLElement).style.height = '0';
    (el as HTMLElement).style.opacity = '0';
};

const enter = (el: Element) => {
    const element = el as HTMLElement;
    // Force reflow
    element.offsetHeight; 
    element.style.height = element.scrollHeight + 'px';
    element.style.opacity = '1';
};

const afterEnter = (el: Element) => {
    const element = el as HTMLElement;
    element.style.height = 'auto';
};

const beforeLeave = (el: Element) => {
    const element = el as HTMLElement;
    element.style.height = element.scrollHeight + 'px';
    element.style.opacity = '1';
};

const leave = (el: Element) => {
    const element = el as HTMLElement;
    // Force reflow
    element.offsetHeight;
    element.style.height = '0';
    element.style.opacity = '0';
};
</script>

<template>
  <div :class="cn(expansionStyles({ disable }), props.class)">
    <div 
        :class="cn(expansionHeaderStyles, headerClass)"
        @click="toggle"
        @keydown="onKeydown"
        role="button"
        :aria-expanded="isOpen"
        :aria-controls="contentId"
        :id="headerId"
        :tabindex="props.disable ? -1 : 0"
    >
        <div v-if="icon || $slots.icon" class="shrink-0">
            <slot name="icon">
                <LIcon :name="icon!" />
            </slot>
        </div>
        
        <div class="flex-grow">
            <div class="text-white font-semibold">{{ label }}</div>
            <div v-if="caption" class="text-white/40 text-xs">{{ caption }}</div>
        </div>

        <div class="shrink-0">
            <LIcon 
                name="chevron-down" 
                class="transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }"
            />
        </div>
    </div>

    <Transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
    >
        <div 
            v-show="isOpen" 
            :id="contentId"
            role="region"
            :aria-labelledby="headerId"
            :class="cn(expansionContentStyles, contentClass)"
        >
            <div :class="expansionBodyStyles">
                <slot />
            </div>
        </div>
    </Transition>
  </div>
</template>
