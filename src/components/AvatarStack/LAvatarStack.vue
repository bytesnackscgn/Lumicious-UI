<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import type { AvatarStackProps } from './types';
import type { AvatarProps } from '../Avatar/types';
import { LAvatar } from '../Avatar';
import { LStack } from '../Stack';

const props = withDefaults(defineProps<AvatarStackProps>(), {
  limit: 5,
  size: 'md',
  rounded: true,
  bordered: true, // Default to true for stack separation
  expandOnHover: false,
  position: 'right',
  items: () => []
});

const SIZE_MAP: Record<string, number> = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96
};

const overlap = computed(() => {
  const sizeVal = typeof props.size === 'number' ? props.size : SIZE_MAP[props.size] || 48;
  return sizeVal / 3;
});

const remainingCount = computed(() => {
  if (!props.items) return 0;
  return Math.max(0, props.items.length - props.limit);
});

const stackItems = computed(() => {
  const items = props.items ? props.items.slice(0, props.limit) : [];
  
  type StackItem = 
    | { type: 'avatar'; props: AvatarProps; id: number }
    | { type: 'counter'; props: { count: number }; id: string };

  const mappedItems: StackItem[] = items.map((item, index) => ({
    type: 'avatar',
    props: item,
    id: index
  }));
  
  if (remainingCount.value > 0) {
    mappedItems.push({
      type: 'counter',
      props: { count: remainingCount.value },
      id: 'counter'
    });
  }
  
  return mappedItems;
});

const counterSizeClass = computed(() => {
   if (typeof props.size === 'number') return '';
   switch (props.size) {
     case 'xs': return 'w-6 h-6 text-[10px]';
     case 'sm': return 'w-8 h-8 text-xs';
     case 'md': return 'w-12 h-12 text-sm';
     case 'lg': return 'w-16 h-16 text-base';
     case 'xl': return 'w-24 h-24 text-xl';
     default: return 'w-12 h-12 text-sm';
   }
});

const counterStyle = computed(() => {
  if (typeof props.size === 'number') {
    return { 
      width: `${props.size}px`, 
      height: `${props.size}px`, 
      fontSize: `${props.size/3}px` 
    };
  }
  return {};
});

</script>

<template>
  <LStack
    :items="stackItems"
    :overlap="overlap"
    :gap="0"
    :disable-hover="!expandOnHover"
    :stack-order="position === 'right' ? 'reverse' : 'normal'"
    :class="cn(
      position === 'left' && 'flex-row-reverse'
    )"
    :item-class="cn(
        'rounded-full', 
        'hover:z-50 hover:scale-110 transition-all duration-300'
    )"
  >
    <template #item="{ item }">
       <template v-if="item.type === 'avatar'">
          <LAvatar
            v-bind="item.props"
            :size="size"
            :rounded="rounded"
            :bordered="false"
            class="ring-2 ring-slate-900"
          />
       </template>
       
       <template v-else-if="item.type === 'counter'">
          <div 
            :class="cn(
                'flex items-center justify-center bg-slate-800 text-white font-bold ring-2 ring-slate-900',
                rounded ? 'rounded-full' : 'rounded-xl',
                counterSizeClass
            )"
            :style="counterStyle"
          >
            +{{ item.props.count }}
          </div>
       </template>
    </template>
  </LStack>
</template>
