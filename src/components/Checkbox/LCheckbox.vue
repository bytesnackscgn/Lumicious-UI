<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { checkboxStyles, checkboxBoxStyles } from './styles';
import type { CheckboxProps } from './types';

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'md',
  dense: false,
  disable: false,
  leftLabel: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.val);
  }
  return props.modelValue === true;
});

const toggle = () => {
  if (props.disable) return;
  
  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue];
    const index = newValue.indexOf(props.val);
    if (index > -1) {
      newValue.splice(index, 1);
    } else {
      newValue.push(props.val);
    }
    emit('update:modelValue', newValue);
  } else {
    emit('update:modelValue', !props.modelValue);
  }
};
</script>

<template>
  <div 
    :class="cn(checkboxStyles({ disable, dense }), props.class)"
    @click="toggle"
  >
    <div v-if="label && leftLabel" class="text-white/80 select-none">
        {{ label }}
    </div>

    <div :class="cn(checkboxBoxStyles({ checked: isChecked, size }))">
        <svg 
            v-if="isChecked"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            stroke-width="4" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            class="w-[70%] h-[70%]"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </div>

    <div v-if="label && !leftLabel" class="text-white/80 select-none">
        {{ label }}
    </div>
  </div>
</template>
