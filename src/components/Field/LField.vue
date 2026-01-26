<script setup lang="ts">
import { cn } from '../../utils/cn';
import { fieldStyles, fieldControlStyles } from './styles';
import type { FieldProps } from './types';
import { LLinearProgress } from '../LinearProgress';

const props = withDefaults(defineProps<FieldProps>(), {
  stackLabel: false,
  error: false,
  loading: false,
  outlined: true,
  dense: false,
  disable: false,
  readonly: false
});

const variant = props.borderless ? 'ghost' : (props.filled ? 'filled' : 'outlined');
</script>

<template>
  <div :class="cn(fieldStyles({ error, disable, dense }), props.class)">
    <!-- Label -->
    <label 
      v-if="label && (stackLabel || $slots.control)" 
      class="l-field__label text-white/50 text-xs font-semibold mb-1 ml-1 select-none"
      :class="{ 'text-red-400': error }"
    >
      {{ label }}
    </label>

    <!-- Control Area -->
    <div :class="cn(fieldControlStyles({ variant: variant as any, error, dense }))">
      <div v-if="$slots.prepend" class="l-field__prepend mr-3 shrink-0 flex items-center">
        <slot name="prepend" />
      </div>

      <div class="l-field__control-container flex-grow relative flex items-center">
        <slot name="control" />
        <slot />
        
        <!-- Placeholder Label (when not stacked) -->
        <span 
            v-if="label && !stackLabel" 
            class="absolute left-0 transition-all pointer-events-none text-white/40"
            :class="dense ? 'text-sm' : 'text-base'"
        >
            {{ label }}
        </span>
      </div>

      <div v-if="$slots.append || loading" class="l-field__append ml-3 shrink-0 flex items-center gap-2">
        <slot name="append" />
        <div v-if="loading" class="animate-spin w-4 h-4 border-2 border-white/20 border-t-white rounded-full" />
      </div>
      
      <!-- Progress Bar (Loading state) -->
      <LLinearProgress 
        v-if="loading" 
        indeterminate 
        class="absolute bottom-0 left-0 right-0 h-[2px]" 
        :rounded="false"
      />
    </div>

    <!-- Messages -->
    <div class="l-field__bottom min-h-[1.5rem] mt-1 pr-3 flex items-start text-[11px]">
      <div v-if="error && errorMessage" class="text-red-400 font-medium">
        {{ errorMessage }}
      </div>
      <div v-else-if="hint" class="text-white/40">
        {{ hint }}
      </div>
      <div class="flex-grow" />
      <slot name="counter" />
    </div>
  </div>
</template>
