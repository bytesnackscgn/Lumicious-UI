<script setup lang="ts">
import { ref, computed } from 'vue';
import { cn } from '../../utils/cn';
import { ratingStyles, ratingIconStyles } from './styles';
import type { RatingProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<RatingProps>(), {
  modelValue: 0,
  max: 5,
  icon: 'star',
  size: 'md',
  color: '#eab308' // Yellow-500
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const hoverValue = ref(0);

const displayValue = computed(() => hoverValue.value || props.modelValue);

const selectValue = (val: number) => {
    if (!props.disable && !props.readonly) {
        emit('update:modelValue', val);
    }
};

const onMouseEnter = (val: number) => {
    if (!props.disable && !props.readonly) {
        hoverValue.value = val;
    }
};

const onMouseLeave = () => {
    hoverValue.value = 0;
};
</script>

<template>
  <div 
    :class="cn(ratingStyles({ disable }), props.class)"
    @mouseleave="onMouseLeave"
  >
    <div 
        v-for="i in max" 
        :key="i"
        :class="cn(ratingIconStyles)"
        @mouseenter="onMouseEnter(i)"
        @click="selectValue(i)"
    >
        <LIcon 
            :name="i <= displayValue ? (iconSelected || icon) : icon"
            :size="size"
            :color="i <= displayValue ? color : 'rgba(255,255,255,0.1)'"
            :stroke-width="i <= displayValue ? 2 : 1"
        />
    </div>
  </div>
</template>
