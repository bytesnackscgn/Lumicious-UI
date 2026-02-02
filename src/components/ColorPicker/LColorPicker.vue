<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { cn } from '../../utils/cn';
import { colorPickerStyles, colorSwatchStyles, colorInputStyles } from './styles';
import type { ColorPickerProps, ColorFormat } from './types';
import { DEFAULT_PRESET_COLORS, COLOR_FORMATS } from './constants';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<ColorPickerProps>(), {
  modelValue: '#3B82F6',
  format: 'hex',
  size: 'md',
  disabled: false,
  showAlpha: false,
  presetColors: () => DEFAULT_PRESET_COLORS,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  'update:format': [value: ColorFormat];
}>();

const isOpen = ref(false);
const selectedColor = ref(props.modelValue);
const customColor = ref(props.modelValue);

const selectedSwatch = computed(() => {
  return props.presetColors.includes(selectedColor.value);
});

const handleColorSelect = (color: string) => {
  selectedColor.value = color;
  emit('update:modelValue', color);
  isOpen.value = false;
};

const handleCustomColorChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  customColor.value = target.value;
  emit('update:modelValue', target.value);
};

const togglePicker = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};

const closePicker = () => {
  isOpen.value = false;
};

watch(() => props.modelValue, (newValue) => {
  selectedColor.value = newValue;
  customColor.value = newValue;
});
</script>

<template>
  <div class="relative">
    <div 
      :class="cn(colorPickerStyles({ size, disabled }))"
      @click="togglePicker"
    >
      <div class="flex items-center gap-3">
        <div 
          class="w-8 h-8 rounded-lg border-2 border-white/20 transition-all duration-200"
          :style="{ backgroundColor: selectedColor }"
        />
        <div class="flex-1">
          <div class="text-sm font-medium text-white/90">{{ selectedColor }}</div>
          <div class="text-xs text-white/60">Click to select color</div>
        </div>
        <LIcon 
          name="chevron-down" 
          class="text-white/60 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </div>

    <div 
      v-if="isOpen"
      class="absolute top-full left-0 mt-2 z-50 glass border-white/20 rounded-xl shadow-xl overflow-hidden"
      @click.away="closePicker"
    >
      <div class="p-4">
        <!-- Custom Color Input -->
        <div class="mb-4">
          <label class="block text-sm font-medium text-white/90 mb-2">Custom Color</label>
          <div class="flex gap-2">
            <input
              :value="customColor"
              @input="handleCustomColorChange"
              :class="cn(colorInputStyles({ size }))"
              type="color"
              :disabled="disabled"
            />
            <input
              :value="customColor"
              @input="handleCustomColorChange"
              :class="cn(colorInputStyles({ size }))"
              type="text"
              :placeholder="`Enter ${format.toUpperCase()} color`"
              :disabled="disabled"
            />
          </div>
        </div>

        <!-- Preset Colors -->
        <div>
          <label class="block text-sm font-medium text-white/90 mb-2">Preset Colors</label>
          <div class="grid grid-cols-6 gap-2">
            <button
              v-for="color in presetColors"
              :key="color"
              :class="cn(colorSwatchStyles({ selected: color === selectedColor }))"
              :style="{ backgroundColor: color }"
              @click="handleColorSelect(color)"
              :disabled="disabled"
            />
          </div>
        </div>

        <!-- Color Format Options -->
        <div class="mt-4 pt-4 border-t border-white/10">
          <label class="block text-sm font-medium text-white/90 mb-2">Format</label>
          <div class="flex gap-2">
            <button
              v-for="(format, key) in COLOR_FORMATS"
              :key="key"
              :class="cn(
                'px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200',
                key === props.format
                  ? 'bg-white/20 text-white'
                  : 'bg-transparent text-white/60 hover:bg-white/10'
              )"
              @click="$emit('update:format', key as ColorFormat)"
              :disabled="disabled"
            >
              {{ format.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.color-picker-enter-active,
.color-picker-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.color-picker-enter-from,
.color-picker-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>