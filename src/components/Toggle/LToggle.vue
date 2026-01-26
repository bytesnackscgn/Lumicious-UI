<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { toggleStyles, toggleTrackStyles, toggleThumbStyles } from './styles';
import type { ToggleProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<ToggleProps>(), {
  size: 'md',
  dense: false,
  disable: false,
  leftLabel: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const toggle = () => {
  if (props.disable) return;
  emit('update:modelValue', !props.modelValue);
};

const currentIcon = computed(() => {
  if (props.modelValue && props.checkedIcon) return props.checkedIcon;
  if (!props.modelValue && props.uncheckedIcon) return props.uncheckedIcon;
  return props.icon;
});
</script>

<template>
  <div 
    :class="cn(toggleStyles({ disable, dense }), props.class)"
    @click="toggle"
  >
    <div v-if="label && leftLabel" class="text-white/80 select-none">
        {{ label }}
    </div>

    <div :class="cn(toggleTrackStyles({ checked: modelValue, size }))">
        <div :class="cn(toggleThumbStyles({ checked: modelValue, size }))">
            <LIcon 
                v-if="currentIcon" 
                :name="currentIcon" 
                :size="size === 'xs' ? 'xs' : 'sm'" 
                class="text-slate-900"
            />
        </div>
    </div>

    <div v-if="label && !leftLabel" class="text-white/80 select-none">
        {{ label }}
    </div>
  </div>
</template>
