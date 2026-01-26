<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { radioStyles, radioCircleStyles } from './styles';
import type { RadioProps } from './types';

const props = withDefaults(defineProps<RadioProps>(), {
  size: 'md',
  dense: false,
  disable: false,
  leftLabel: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const isChecked = computed(() => props.modelValue === props.val);

const select = () => {
  if (props.disable) return;
  emit('update:modelValue', props.val);
};
</script>

<template>
  <div 
    :class="cn(radioStyles({ disable, dense }), props.class)"
    @click="select"
  >
    <div v-if="label && leftLabel" class="text-white/80 select-none">
        {{ label }}
    </div>

    <div :class="cn(radioCircleStyles({ checked: isChecked, size }))">
        <div 
            v-if="isChecked"
            class="w-[60%] h-[60%] bg-blue-500 rounded-full animate-in zoom-in-50 duration-200"
        />
    </div>

    <div v-if="label && !leftLabel" class="text-white/80 select-none">
        {{ label }}
    </div>
  </div>
</template>
