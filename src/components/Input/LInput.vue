<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { cn } from '../../utils/cn';
import { inputBaseStyles } from './styles';
import type { InputProps } from './types';
import { LField } from '../Field';

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  modelValue: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'clear'): void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const onClear = () => {
    emit('update:modelValue', '');
    emit('clear');
    inputRef.value?.focus();
};

onMounted(() => {
  if (props.autofocus) {
    inputRef.value?.focus();
  }
});
</script>

<template>
  <LField
    v-bind="props"
    :stack-label="true"
    class="l-input"
  >
    <!-- Relay slots to LField -->
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    
    <template v-if="$slots.append" #append>
       <slot name="append" />
    </template>

    <template #control>
      <input
        ref="inputRef"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disable"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :class="cn(inputBaseStyles, props.dense ? 'text-sm' : 'text-base')"
        @input="onInput"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </template>
    
    <template v-if="modelValue && !disable && !readonly" #append>
        <button 
            class="hover:opacity-60 transition-opacity cursor-pointer text-white/40"
            @click="onClear"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <slot name="append" />
    </template>
  </LField>
</template>
