<script setup lang="ts">
import { cn } from '../../utils/cn';
import { optionGroupStyles } from './styles';
import type { OptionGroupProps } from './types';
import { LCheckbox } from '../Checkbox';
import { LRadio } from '../Radio';
import { LToggle } from '../Toggle';

const props = withDefaults(defineProps<OptionGroupProps>(), {
  type: 'radio',
  inline: false,
  dense: false,
  disable: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const updateValue = (val: any) => {
    emit('update:modelValue', val);
};
</script>

<template>
  <div :class="cn(optionGroupStyles({ inline }), props.class)">
    <template v-for="opt in options" :key="opt.value">
        <!-- Radio Case -->
        <LRadio
            v-if="type === 'radio'"
            :model-value="modelValue"
            :val="opt.value"
            :label="opt.label"
            :disable="disable || opt.disable"
            :dense="dense"
            :left-label="leftLabel"
            :color="color"
            :size="size"
            @update:model-value="updateValue"
        />

        <!-- Checkbox Case -->
        <LCheckbox
            v-else-if="type === 'checkbox'"
            :model-value="modelValue"
            :val="opt.value"
            :label="opt.label"
            :disable="disable || opt.disable"
            :dense="dense"
            :left-label="leftLabel"
            :color="color"
            :size="size"
            @update:model-value="updateValue"
        />

        <!-- Toggle Case -->
        <LToggle
            v-else-if="type === 'toggle'"
            :model-value="Array.isArray(modelValue) ? modelValue.includes(opt.value) : modelValue === opt.value"
            :label="opt.label"
            :disable="disable || opt.disable"
            :dense="dense"
            :left-label="leftLabel"
            :color="color"
            :size="size"
            @update:model-value="(val) => {
                if (Array.isArray(modelValue)) {
                    const newValue = [...modelValue];
                    const index = newValue.indexOf(opt.value);
                    if (val && index === -1) newValue.push(opt.value);
                    else if (!val && index > -1) newValue.splice(index, 1);
                    updateValue(newValue);
                } else {
                    updateValue(val ? opt.value : null);
                }
            }"
        />
    </template>
  </div>
</template>
