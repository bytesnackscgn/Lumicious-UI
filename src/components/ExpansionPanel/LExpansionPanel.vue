<script setup lang="ts">
import { ref, watch } from 'vue';
import { cn } from '../../utils/cn';
import { expansionStyles, expansionHeaderStyles, expansionContentStyles } from './styles';
import type { ExpansionPanelProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<ExpansionPanelProps>(), {
  modelValue: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const isOpen = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
    isOpen.value = val;
});

const toggle = () => {
    if (props.disable) return;
    isOpen.value = !isOpen.value;
    emit('update:modelValue', isOpen.value);
};
</script>

<template>
  <div :class="cn(expansionStyles({ disable }), props.class)">
    <div 
        :class="cn(expansionHeaderStyles, headerClass)"
        @click="toggle"
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
        enter-active-class="transition-[max-height,opacity] duration-300 ease-out"
        leave-active-class="transition-[max-height,opacity] duration-200 ease-in"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[1000px] opacity-100"
        leave-from-class="max-h-[1000px] opacity-100"
        leave-to-class="max-h-0 opacity-0"
    >
        <div v-if="isOpen" :class="cn(expansionContentStyles, contentClass)">
            <div class="p-6 pt-0 border-t border-white/5">
                <slot />
            </div>
        </div>
    </Transition>
  </div>
</template>
