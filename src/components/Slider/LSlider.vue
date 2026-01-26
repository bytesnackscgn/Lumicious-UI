<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { cn } from '../../utils/cn';
import { sliderStyles, sliderTrackStyles, sliderSelectionStyles, sliderThumbStyles } from './styles';
import type { SliderProps } from './types';

const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  label: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}>();

const sliderRef = ref<HTMLElement | null>(null);
const isDragging = ref(false);

const percentage = computed(() => {
  const p = ((props.modelValue - props.min) / (props.max - props.min)) * 100;
  return Math.min(100, Math.max(0, p));
});

const updateValue = (event: MouseEvent | TouchEvent) => {
    if (!sliderRef.value || props.disable || props.readonly) return;

    const rect = sliderRef.value.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0]?.clientX : (event as MouseEvent).clientX;
    if (clientX === undefined) return;
    const pos = (clientX - rect.left) / rect.width;
    
    let newValue = props.min + pos * (props.max - props.min);
    
    // Snapping to step
    if (props.step > 0) {
        newValue = Math.round(newValue / props.step) * props.step;
    }
    
    newValue = Math.min(props.max, Math.max(props.min, newValue));
    emit('update:modelValue', newValue);
};

const onMouseDown = (event: MouseEvent | TouchEvent) => {
    isDragging.value = true;
    updateValue(event);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onMouseMove);
    window.addEventListener('touchend', onMouseUp);
};

const onMouseMove = (event: MouseEvent | TouchEvent) => {
    if (isDragging.value) {
        updateValue(event);
    }
};

const onMouseUp = () => {
    isDragging.value = false;
    emit('change', props.modelValue);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('touchmove', onMouseMove);
    window.removeEventListener('touchend', onMouseUp);
};

onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
});
</script>

<template>
  <div 
    ref="sliderRef"
    :class="cn(sliderStyles({ disable }), props.class)"
    @mousedown="onMouseDown"
    @touchstart.passive="onMouseDown"
  >
    <div :class="sliderTrackStyles">
        <div 
            :class="sliderSelectionStyles"
            :style="{ width: `${percentage}%`, backgroundColor: color }"
        />
    </div>
    
    <div 
        :class="sliderThumbStyles"
        :style="{ left: `${percentage}%`, borderColor: color }"
    >
        <!-- Floating Label -->
        <div 
            v-if="label" 
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass px-2 py-1 rounded text-[10px] font-bold text-white whitespace-nowrap animate-in fade-in slide-in-from-bottom-1 duration-200"
        >
            {{ labelValue ?? modelValue }}
        </div>
    </div>
  </div>
</template>
