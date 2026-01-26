<script setup lang="ts">
import { ref, watch } from 'vue';
import { cn } from '../../utils/cn';
import { btnDropdownStyles } from './styles';
import type { BtnDropdownProps } from './types';
import { LBtn } from '../Btn';
import { LBtnGroup } from '../BtnGroup';
import { LMenu } from '../Menu';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<BtnDropdownProps>(), {
  modelValue: false,
  split: false,
  noCaret: false,
  autoClose: true
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'click', event: MouseEvent): void;
}>();

const isOpen = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
    isOpen.value = val;
});

const toggle = () => {
    isOpen.value = !isOpen.value;
    emit('update:modelValue', isOpen.value);
};

const handleButtonClick = (event: MouseEvent) => {
    if (props.split) {
        emit('click', event);
    } else {
        toggle();
    }
};

const handleCaretClick = () => {
    if (props.split) toggle();
};
</script>

<template>
  <div :class="cn(btnDropdownStyles({ split }), props.class)">
    <LBtnGroup v-if="split" class="w-full">
        <LBtn 
            v-bind="props" 
            :class="props.class"
            @click="handleButtonClick"
        >
            <slot name="label">{{ label }}</slot>
        </LBtn>
        <LBtn 
            v-bind="props" 
            :class="props.class"
            icon="chevron-down"
            @click="handleCaretClick"
        />
    </LBtnGroup>
    
    <LBtn 
        v-else 
        v-bind="props"
        :class="props.class"
        @click="handleButtonClick"
    >
        <div class="flex items-center gap-2">
            <slot name="label">{{ label }}</slot>
            <LIcon v-if="!noCaret" name="chevron-down" size="xs" :class="{ 'rotate-180': isOpen }" class="transition-transform duration-300" />
        </div>
    </LBtn>

    <LMenu 
        v-model="isOpen" 
        :persistent="persistent" 
        class="min-w-full mt-1"
        @update:model-value="val => emit('update:modelValue', val)"
    >
        <div @click="autoClose && (isOpen = false)">
            <slot />
        </div>
    </LMenu>
  </div>
</template>
