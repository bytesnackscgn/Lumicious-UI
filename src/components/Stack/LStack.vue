<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { cn } from '../../utils/cn';
import { stackStyles, stackItemStyles } from './styles';
import type { StackProps } from './types';

const props = withDefaults(defineProps<StackProps>(), {
  direction: 'horizontal',
  overlap: 0,
  gap: 0,
  playable: false,
  interval: 2000,
  pauseOnHover: true,
  disableHover: false,
  items: () => [],
  stackOrder: 'normal'
});

const emit = defineEmits<{
  (e: 'update:active-index', index: number): void;
  (e: 'play'): void;
  (e: 'pause'): void;
}>();

const activeIndex = ref(0);
const isPaused = ref(false);
const isHovered = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;

const startPlay = () => {
  if (!props.playable || timer) return;
  emit('play');
  timer = setInterval(() => {
    if (isPaused.value) return;
    activeIndex.value = (activeIndex.value + 1) % props.items.length;
    emit('update:active-index', activeIndex.value);
  }, props.interval);
};

const stopPlay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    emit('pause');
  }
};

const handleMouseEnter = () => {
  isHovered.value = true;
  if (props.playable && props.pauseOnHover) {
    isPaused.value = true;
  }
};

const handleMouseLeave = () => {
  isHovered.value = false;
  if (props.playable && props.pauseOnHover) {
    isPaused.value = false;
  }
};

watch(() => props.playable, (newValue) => {
  if (newValue) startPlay();
  else stopPlay();
});

onMounted(() => {
  if (props.playable) startPlay();
});

onUnmounted(() => {
  stopPlay();
});

const getMargin = (index: number) => {
  if (index === 0) return {};

  const isHorizontal = props.direction === 'horizontal';
  const marginProp = isHorizontal ? 'marginLeft' : 'marginTop';
  
  // Logic: 
  // If stack is hovered or in playable mode (and active), we might want to expand to 'gap'.
  // Otherwise we use 'overlap' (negative margin).
  // "gap: which gap is arranged after focus/hover"
  
  // If isHovered -> use gap
  // Else -> use -overlap
  
  // Note: If playable is active, and NOT hovered, we might still want overlap?
  // But if playable is active, the active item usually needs space.
  // Let's interpret: 
  // Base state: -overlap
  // Expanded state (Hover): gap
  
  // If playable is true, we disable hover expansion automatically.
  // Also disable if disableHover prop is true.
  const shouldUseGap = isHovered.value && !props.playable && !props.disableHover;
  
  let value = shouldUseGap ? props.gap : -props.overlap;
  
  return {
    [marginProp]: `${value}px`
  };
};

const getZIndex = (index: number) => {
  // If playable, active item is highest z-index
  if (props.playable) {
    return activeIndex.value === index ? 50 : 10;
  }
  
  if (props.stackOrder === 'reverse') {
      return (props.items?.length || 50) - index;
  }

  // Standard flex stack: usually regular DOM order. 
  // If overlap is used, usually we want later items on top? Or earlier items on top?
  // Common avatar stack: earlier items on top (z-index: items.length - index)
  // or later items on top (default).
  // Let's stick to default unless specified.
  return index;
};

</script>

<template>
  <div
    :class="cn(stackStyles({ direction }))"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Render Items from Props (Scoped Slot) -->
    <template v-if="items.length > 0">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="cn(stackItemStyles({ 
          active: playable ? activeIndex === index : false,
          isPlayable: playable
        }), props.itemClass)"
        :style="{ 
          ...getMargin(index), 
          zIndex: getZIndex(index)
        }"
        @click="activeIndex = index; emit('update:active-index', index)"
      >
        <slot name="item" :item="item" :index="index" :active="activeIndex === index">
          <!-- Fallback: try to render item if it's a component or primitive -->
           <component :is="item.component" v-bind="item.props" v-if="item.component" />
           <div v-else>{{ item }}</div>
        </slot>
      </div>
    </template>

    <slot v-else />
  </div>
</template>
