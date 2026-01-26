<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { cn } from '../../utils/cn';
import { dialogBackdropStyles, dialogContentStyles } from './styles';
import type { DialogProps } from './types';

const props = withDefaults(defineProps<DialogProps>(), {
  modelValue: false,
  persistent: false,
  position: 'center'
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'hide'): void;
}>();

const isOpen = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
    isOpen.value = val;
    if (val) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
        emit('hide');
    }
});

const close = () => {
    if (props.persistent) return;
    emit('update:modelValue', false);
};

onUnmounted(() => {
    document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <Transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
    >
        <div 
            v-if="isOpen" 
            :class="cn(dialogBackdropStyles({ position }))"
            @click.self="close"
        >
            <Transition
                appear
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in"
                :enter-from-class="props.position === 'center' ? 'opacity-0 scale-95' : 'translate-y-full opacity-0'"
                :leave-to-class="props.position === 'center' ? 'opacity-0 scale-95' : 'translate-y-full opacity-0'"
            >
                <div :class="cn(dialogContentStyles({ maximized, fullWidth }), props.class)">
                    <slot />
                </div>
            </Transition>
        </div>
    </Transition>
  </Teleport>
</template>
