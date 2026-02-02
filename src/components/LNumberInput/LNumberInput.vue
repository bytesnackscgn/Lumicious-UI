<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { inputBaseStyles, buttonBaseStyles } from './styles';
import type { NumberInputProps } from './types';
import { LField } from '../Field';

const props = withDefaults(defineProps<NumberInputProps>(), {
  modelValue: 0,
  min: -Infinity,
  max: Infinity,
  step: 1,
  layout: 'right',
  type: 'number' // Default type for LField/Input
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const isDisabled = computed(() => props.disable || props.loading);

const increment = () => {
  if (isDisabled.value) return;
  const newValue = (props.modelValue || 0) + props.step;
  if (newValue <= props.max) {
    emit('update:modelValue', newValue);
  }
};

const decrement = () => {
  if (isDisabled.value) return;
  const newValue = (props.modelValue || 0) - props.step;
  if (newValue >= props.min) {
    emit('update:modelValue', newValue);
  }
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let newValue = parseFloat(target.value);

  if (isNaN(newValue)) {
    // If invalid, revert to current prop value (visual reset on next tick if Vue handles it, 
    // but explicit force update might be needed in some cases. 
    // For now, just don't emit garbage.)
    return; 
  }

  // Clamp value
  if (newValue > props.max) newValue = props.max;
  if (newValue < props.min) newValue = props.min;
  
  emit('update:modelValue', newValue);
};

</script>

<template>
  <LField
    v-bind="props"
    :stack-label="true"
    class="l-number-input"
  >
    <!-- Prepend Slot -->
    <template #prepend>
      <div v-if="layout === 'left'" class="flex flex-col gap-0.5">
         <button :disabled="isDisabled" :class="cn(buttonBaseStyles, 'rounded-t-sm h-4 text-[10px] leading-none px-1 py-0')" @click="increment" aria-label="Increment">+</button>
         <button :disabled="isDisabled" :class="cn(buttonBaseStyles, 'rounded-b-sm h-4 text-[10px] leading-none px-1 py-0')" @click="decrement" aria-label="Decrement">-</button>
      </div>
      <button v-else-if="layout === 'split'" :disabled="isDisabled" :class="cn(buttonBaseStyles, 'rounded-md')" @click="decrement" aria-label="Decrement">-</button>
      <slot name="prepend" />
    </template>

    <!-- Control Slot -->
    <template #control>
      <input
        type="number"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :readonly="readonly"
        :class="cn(inputBaseStyles, props.dense ? 'text-sm' : 'text-base')"
        @input="onInput"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </template>

    <!-- Append Slot -->
    <template #append>
       <div v-if="layout === 'right'" class="flex flex-col gap-0.5">
         <button :disabled="isDisabled" :class="cn(buttonBaseStyles, 'rounded-t-sm h-4 text-[10px] leading-none px-1 py-0')" @click="increment" aria-label="Increment">+</button>
         <button :disabled="isDisabled" :class="cn(buttonBaseStyles, 'rounded-b-sm h-4 text-[10px] leading-none px-1 py-0')" @click="decrement" aria-label="Decrement">-</button>
      </div>
      <button v-else-if="layout === 'split'" :disabled="isDisabled" :class="cn(buttonBaseStyles, 'rounded-md')" @click="increment" aria-label="Increment">+</button>
      <slot name="append" />
    </template>
  </LField>
</template>
