<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { cn } from '../../utils/cn';
import { menuStyles } from './styles';
import type { MenuProps } from './types';

const props = withDefaults(defineProps<MenuProps>(), {
  modelValue: false,
  persistent: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const isOpen = ref(props.modelValue);
const menuRef = ref<HTMLElement | null>(null);

watch(() => props.modelValue, (val) => {
    isOpen.value = val;
});

const close = () => {
    isOpen.value = false;
    emit('update:modelValue', false);
};

const handleClickOutside = (event: MouseEvent) => {
    if (props.persistent) return;
    if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
        // Delay closing slightly if it might be the trigger
        setTimeout(() => {
             if (isOpen.value) close();
        }, 10);
    }
};

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
  <div 
    v-if="isOpen"
    ref="menuRef" 
    :class="cn(menuStyles({ showing: true }), props.class)"
    @click.stop
  >
    <slot />
  </div>
</template>
