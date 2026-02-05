<script setup lang="ts">
import { ref, watch, useId } from 'vue';
import { cn } from '../../utils/cn';
import { btnDropdownStyles, btnDropdownMenuStyles, btnDropdownLabelContainerStyles, btnDropdownIconStyles } from './styles';
import type { BtnDropdownProps } from './types';
import { LBtn } from '../Btn';
import { LBtnGroup } from '../BtnGroup';
import { LMenu } from '../Menu';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<BtnDropdownProps>(), {
  modelValue: false,
  split: false,
  hideIcon: false,
  autoClose: true,
  icon: 'chevron-down'
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'click', event: MouseEvent): void;
}>();

const isOpen = ref(props.modelValue);
const menuId = useId();

watch(() => props.modelValue, (val) => {
    isOpen.value = val;
});

const toggle = (event?: MouseEvent) => {
    // If the event came from a click, stop propagation to prevent immediate closing by outside click handlers
    if (event) {
        event.stopPropagation();
    }
    isOpen.value = !isOpen.value;
    emit('update:modelValue', isOpen.value);
};

const handleButtonClick = (event: MouseEvent) => {
    if (props.split) {
        emit('click', event);
    } else {
        toggle(event);
    }
};

const handleCaretClick = (event: MouseEvent) => {
    if (props.split) toggle(event);
};

const handleMenuClick = (event: MouseEvent) => {
    // Only close if clicking directly on the menu container, not on interactive elements
    if (props.autoClose && event.target === event.currentTarget) {
        isOpen.value = false;
        emit('update:modelValue', false);
    }
};
</script>

<template>
  <div :class="cn(btnDropdownStyles({ split }), props.class)">
    <LBtnGroup v-if="split" class="w-full">
        <LBtn 
            v-bind="props" 
            :class="props.class"
            :icon="undefined"
            @click="handleButtonClick"
        >
            <slot name="label">{{ label }}</slot>
        </LBtn>
        <LBtn 
            v-bind="props" 
            :class="props.class"
            :icon="icon"
            @click="handleCaretClick"
            @mousedown.stop
            aria-haspopup="true"
            :aria-expanded="isOpen"
            :aria-controls="menuId"
            :aria-label="label ? `${label} menu` : 'Menu'"
        />
    </LBtnGroup>
    
    <LBtn 
        v-else 
        v-bind="props"
        :class="props.class"
        :icon="undefined"
        @click="handleButtonClick"
        @mousedown.stop
        aria-haspopup="true"
        :aria-expanded="isOpen"
        :aria-controls="menuId"
    >
        <div :class="btnDropdownLabelContainerStyles()">
            <slot name="label">{{ label }}</slot>
            <LIcon v-if="!hideIcon" :name="icon" size="xs" :class="btnDropdownIconStyles({ isOpen })" />
        </div>
    </LBtn>

    <LMenu
        :id="menuId"
        v-model="isOpen"
        :persistent="persistent"
        :class="btnDropdownMenuStyles()"
        role="menu"
        @update:model-value="val => emit('update:modelValue', val)"
    >
        <div
            @click="handleMenuClick"
            class="outline-none"
        >
            <slot />
        </div>
    </LMenu>
  </div>
</template>
