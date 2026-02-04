<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { avatarStackStyles, avatarItemStyles } from './styles';
import type { AvatarStackProps } from './types';
import { LAvatar } from '../Avatar';

const props = withDefaults(defineProps<AvatarStackProps>(), {
  limit: 5,
  size: 'md',
  rounded: true,
  bordered: true, // Default to true for stack separation
  expandOnHover: false,
  position: 'right',
  items: () => []
});

const visibleItems = computed(() => {
  if (!props.items) return [];
  return props.items.slice(0, props.limit);
});

const remainingCount = computed(() => {
  if (!props.items) return 0;
  return Math.max(0, props.items.length - props.limit);
});

// Calculate z-index for stacking order
const getZIndex = (index: number) => {
  // If position is right, first item is bottom (or top depending on design).
  // Usually in "right" stack (1 2 3), 1 is on top of 2? Or 3 on top of 2?
  // Tailwind -space-x causes next element to overlap previous.
  // So 2 overlaps 1.
  // If we want 1 to overlap 2, we need z-index descending.
  
  if (props.position === 'right') {
     return 50 - index * 10;
  }
  return index * 10;
};

</script>

<template>
  <div :class="cn(avatarStackStyles({ 
      size: typeof size === 'string' && ['xs', 'sm', 'md', 'lg', 'xl'].includes(size) ? (size as any) : undefined, 
      expandOnHover, 
      position 
    }))"
    :style="typeof size === 'number' ? { gap: `-${size / 3}px` } : {}"
  >
    <div
      v-for="(item, index) in visibleItems"
      :key="index"
      :class="cn(avatarItemStyles({ hover: true }), 'rounded-full')" 
      :style="{ zIndex: getZIndex(index) }"
    >
        <LAvatar
            v-bind="item"
            :size="size"
            :rounded="rounded"
            :bordered="false"
            class="ring-2 ring-slate-900"
        />
    </div>

    <!-- Remaining Count Indicator -->
    <div
      v-if="remainingCount > 0"
      :class="cn(avatarItemStyles({ hover: true }), 'rounded-full')"
      :style="{ zIndex: getZIndex(visibleItems.length) }"
    >
      <div 
        :class="cn(
            'flex items-center justify-center bg-slate-800 text-white font-bold ring-2 ring-slate-900',
            rounded ? 'rounded-full' : 'rounded-xl',
             // Map sizes to dimensions
             size === 'xs' ? 'w-6 h-6 text-[10px]' :
             size === 'sm' ? 'w-8 h-8 text-xs' :
             size === 'md' ? 'w-12 h-12 text-sm' :
             size === 'lg' ? 'w-16 h-16 text-base' :
             size === 'xl' ? 'w-24 h-24 text-xl' : '',
             typeof size === 'number' ? '' : '' 
        )"
        :style="typeof size === 'number' ? { width: `${size}px`, height: `${size}px`, fontSize: `${size/3}px` } : {}"
      >
        +{{ remainingCount }}
      </div>
    </div>
  </div>
</template>
