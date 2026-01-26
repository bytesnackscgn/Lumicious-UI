<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { cn } from '../../utils/cn';
import { 
  knobContainerStyles, 
  knobTrackStyles, 
  knobProgressStyles, 
  knobKnobStyles, 
  knobValueStyles, 
  knobIndicatorStyles 
} from './styles';
import type { KnobProps, KnobEmits } from './types';

const props = withDefaults(defineProps<KnobProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  size: 'md',
  variant: 'glass',
  color: 'primary',
  disabled: false,
  readonly: false,
  showValue: true,
  valuePrecision: 0,
  trackWidth: 8,
  knobSize: 20,
});

const emit = defineEmits<KnobEmits>();

const containerRef = ref<HTMLElement>();
const knobRef = ref<HTMLElement>();
const isDragging = ref(false);
const startAngle = ref(0);
const currentValue = ref(props.modelValue);

const normalizedValue = computed(() => {
  const range = props.max - props.min;
  const normalized = ((currentValue.value - props.min) / range) * 360;
  return Math.max(0, Math.min(360, normalized));
});

const displayValue = computed(() => {
  return currentValue.value.toFixed(props.valuePrecision);
});

const trackSize = computed(() => {
  switch (props.size) {
    case 'sm': return 80;
    case 'md': return 100;
    case 'lg': return 120;
    default: return 100;
  }
});

const knobSizePx = computed(() => {
  return props.knobSize;
});

const progressSize = computed(() => {
  return trackSize.value - props.trackWidth;
});

const handleMouseDown = (event: MouseEvent) => {
  if (props.disabled || props.readonly) return;
  
  isDragging.value = true;
  startAngle.value = getAngleFromEvent(event);
  updateValueFromAngle(startAngle.value);
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging.value) return;
  
  const angle = getAngleFromEvent(event);
  updateValueFromAngle(angle);
};

const handleMouseUp = () => {
  if (!isDragging.value) return;
  
  isDragging.value = false;
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
};

const handleTouchStart = (event: TouchEvent) => {
  if (props.disabled || props.readonly) return;
  
  event.preventDefault();
  isDragging.value = true;
  const touch = event.touches[0];
  startAngle.value = getAngleFromTouch(touch!);
  updateValueFromAngle(startAngle.value);
  
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', handleTouchEnd);
};

const handleTouchMove = (event: TouchEvent) => {
  if (!isDragging.value) return;
  
  event.preventDefault();
  const touch = event.touches[0];
  const angle = getAngleFromTouch(touch!);
  updateValueFromAngle(angle);
};

const handleTouchEnd = () => {
  if (!isDragging.value) return;
  
  isDragging.value = false;
  document.removeEventListener('touchmove', handleTouchMove);
  document.removeEventListener('touchend', handleTouchEnd);
};

const getAngleFromEvent = (event: MouseEvent): number => {
  if (!containerRef.value) return 0;
  
  const rect = containerRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const deltaX = event.clientX - centerX;
  const deltaY = event.clientY - centerY;
  
  let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  angle = (angle + 90 + 360) % 360; // Adjust for knob orientation
  
  return angle;
};

const getAngleFromTouch = (touch: Touch): number => {
  if (!containerRef.value) return 0;
  
  const rect = containerRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const deltaX = touch.clientX - centerX;
  const deltaY = touch.clientY - centerY;
  
  let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  angle = (angle + 90 + 360) % 360; // Adjust for knob orientation
  
  return angle;
};

const updateValueFromAngle = (angle: number) => {
  const range = props.max - props.min;
  const percentage = angle / 360;
  let newValue = props.min + (percentage * range);
  
  // Apply step
  newValue = Math.round(newValue / props.step) * props.step;
  
  // Clamp to min/max
  newValue = Math.max(props.min, Math.min(props.max, newValue));
  
  if (newValue !== currentValue.value) {
    currentValue.value = newValue;
    emit('update:modelValue', newValue);
    emit('input', newValue);
  }
};

const handleClick = () => {
  if (props.disabled || props.readonly) return;
  
  // Cycle through values on click
  const range = props.max - props.min;
  const step = props.step || 1;
  const nextValue = currentValue.value + step;
  
  if (nextValue > props.max) {
    currentValue.value = props.min;
  } else {
    currentValue.value = nextValue;
  }
  
  emit('update:modelValue', currentValue.value);
  emit('change', currentValue.value);
  emit('input', currentValue.value);
};

// Watch for external value changes
watch(() => props.modelValue, (newValue) => {
  if (newValue !== currentValue.value) {
    currentValue.value = newValue;
  }
});

// Clean up event listeners
onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
  document.removeEventListener('touchmove', handleTouchMove);
  document.removeEventListener('touchend', handleTouchEnd);
});
</script>

<template>
  <div
    ref="containerRef"
    :class="cn(knobContainerStyles({ size, disabled }))"
    @mousedown="handleMouseDown"
    @touchstart="handleTouchStart"
    @click="handleClick"
  >
    <!-- Track -->
    <div
      :class="cn(knobTrackStyles({ variant, color: color as any }))"
      :style="{
        width: `${trackSize}px`,
        height: `${trackSize}px`,
      }"
    />
    
    <!-- Progress arc -->
    <div
      :class="cn(knobProgressStyles())"
      :style="{
        width: `${progressSize}px`,
        height: `${progressSize}px`,
        background: `conic-gradient(
          rgba(255, 255, 255, 0.3) 0deg,
          rgba(255, 255, 255, 0.3) ${normalizedValue}deg,
          transparent ${normalizedValue}deg
        )`,
        borderRadius: '50%',
        top: `${(trackSize - progressSize) / 2}px`,
        left: `${(trackSize - progressSize) / 2}px`,
      }"
    />
    
    <!-- Knob -->
    <div
      ref="knobRef"
      :class="cn(knobKnobStyles({ variant, color: color as any }))"
      :style="{
        width: `${knobSizePx}px`,
        height: `${knobSizePx}px`,
        transform: `rotate(${normalizedValue}deg)`,
        top: `${(trackSize - knobSizePx) / 2}px`,
        left: `${(trackSize - knobSizePx) / 2}px`,
      }"
    >
      <!-- Indicator -->
      <div
        :class="cn(knobIndicatorStyles())"
        :style="{
          top: '2px',
          left: '50%',
          transform: 'translateX(-50%)',
        }"
      />
    </div>
    
    <!-- Value display -->
    <div
      :class="cn(knobValueStyles({ size, showValue }))"
      :style="{
        top: `${trackSize + 8}px`,
      }"
    >
      {{ displayValue }}
    </div>
  </div>
</template>