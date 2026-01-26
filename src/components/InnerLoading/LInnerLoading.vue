<script setup lang="ts">
import { cn } from '../../utils/cn';
import { innerLoadingStyles } from './styles';
import type { InnerLoadingProps } from './types';
import { LSpinner } from '../Spinner';

const props = withDefaults(defineProps<InnerLoadingProps>(), {
  showing: false,
  size: 'md'
});
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div 
        v-if="showing"
        :class="cn(innerLoadingStyles({ showing: true }), props.class)"
    >
        <slot>
            <LSpinner :size="size" :color="color" />
            <div v-if="label" class="mt-2 text-white/80 text-sm font-medium">{{ label }}</div>
        </slot>
    </div>
  </Transition>
</template>
