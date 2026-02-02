<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '../../utils/cn';
import { fabStyles, fabRippleStyles} from './styles';
import type { FabProps } from './types';
import { FAB_POSITIONS } from './constants';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<FabProps>(), {
  icon: 'plus',
  size: 'md',
  variant: 'glass',
  color: 'primary',
  position: 'bottom-right',
  disabled: false,
  loading: false,
  ripple: true,
  mini: false,
  extended: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const rippleElements = ref<HTMLElement[]>([]);

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return;
  
  emit('click', event);
  
  if (props.ripple) {
    createRipple(event);
  }
};

const createRipple = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  const ripple = document.createElement('span');
  ripple.className = fabRippleStyles();
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
  
  button.style.overflow = 'hidden';
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
};
</script>

<template>
  <button
    :class="cn(
      fabStyles({
        size,
        variant,
        color,
        extended,
        mini
      }),
      FAB_POSITIONS[position]
    )"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Loading state -->
    <div v-if="loading" class="animate-spin">
      <LIcon name="loader-2" :size="size === 'sm' ? 'xs' : 'sm'" />
    </div>
    
    <!-- Icon or content -->
    <template v-else>
      <LIcon 
        v-if="icon && !extended" 
        :name="icon" 
        :size="size === 'sm' ? 'xs' : 'sm'" 
      />
      
      <div v-if="extended" class="flex items-center gap-2">
        <LIcon 
          v-if="icon" 
          :name="icon" 
          :size="size === 'sm' ? 'xs' : 'sm'" 
        />
        <span v-if="label" class="font-medium">{{ label }}</span>
      </div>
    </template>
    
    <!-- Reflex effect for glass variant -->
    <div 
      v-if="variant === 'glass' && !loading"
      class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50" 
    />
  </button>
</template>

<style scoped>
.l-fab {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
