<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';
import { cn } from '../../utils/cn';
import { rangeStyles, rangeTrackStyles, rangeSelectionStyles, rangeThumbStyles } from './styles';
import type { RangeProps, RangeValue } from './types';

const props = withDefaults(defineProps<RangeProps>(), {
  modelValue: () => ({ min: 20, max: 80 }),
  min: 0,
  max: 100,
  step: 1,
  label: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: RangeValue): void;
  (e: 'change', value: RangeValue): void;
}>();

const rangeRef = ref<HTMLElement | null>(null);
const activeThumb = ref<'min' | 'max' | null>(null);

const minPercentage = computed(() => {
  const p = ((props.modelValue.min - props.min) / (props.max - props.min)) * 100;
  return Math.min(100, Math.max(0, p));
});

const maxPercentage = computed(() => {
  const p = ((props.modelValue.max - props.min) / (props.max - props.min)) * 100;
  return Math.min(100, Math.max(0, p));
});

const updateValue = (event: MouseEvent | TouchEvent) => {
    if (!rangeRef.value || props.disable || props.readonly || !activeThumb.value) return;

    const rect = rangeRef.value.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0]?.clientX : (event as MouseEvent).clientX;
    if (clientX === undefined) return;
    
    const pos = (clientX - rect.left) / rect.width;
    let newValue = props.min + pos * (props.max - props.min);
    
    if (props.step > 0) {
        newValue = Math.round(newValue / props.step) * props.step;
    }
    
    newValue = Math.min(props.max, Math.max(props.min, newValue));
    
    const updated = { ...props.modelValue };
    if (activeThumb.value === 'min') {
        updated.min = Math.min(newValue, props.modelValue.max);
    } else {
        updated.max = Math.max(newValue, props.modelValue.min);
    }
    
    emit('update:modelValue', updated);
};

const onThumbMouseDown = (thumb: 'min' | 'max', event: MouseEvent | TouchEvent) => {
    activeThumb.value = thumb;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onMouseMove);
    window.addEventListener('touchend', onMouseUp);
};

const onMouseMove = (event: MouseEvent | TouchEvent) => {
    updateValue(event);
};

const onMouseUp = () => {
    activeThumb.value = null;
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
    ref="rangeRef"
    :class="cn(rangeStyles({ disable }), props.class)"
  >
    <div :class="rangeTrackStyles">
        <div 
            :class="rangeSelectionStyles"
            :style="{ 
                left: `${minPercentage}%`, 
                width: `${maxPercentage - minPercentage}%`,
                backgroundColor: color 
            }"
        />
    </div>
    
    <!-- Min Thumb -->
    <div 
        :class="rangeThumbStyles"
        :style="{ left: `${minPercentage}%`, borderColor: color }"
        @mousedown="onThumbMouseDown('min', $event)"
        @touchstart.passive="onThumbMouseDown('min', $event)"
    >
        <div v-if="label" class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass px-2 py-1 rounded text-[10px] font-bold text-white">
            {{ modelValue.min }}
        </div>
    </div>

    <!-- Max Thumb -->
    <div 
        :class="rangeThumbStyles"
        :style="{ left: `${maxPercentage}%`, borderColor: color }"
        @mousedown="onThumbMouseDown('max', $event)"
        @touchstart.passive="onThumbMouseDown('max', $event)"
    >
        <div v-if="label" class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 glass px-2 py-1 rounded text-[10px] font-bold text-white">
            {{ modelValue.max }}
        </div>
    </div>
  </div>
</template>
