<script setup lang="ts">
import { cn } from '../../utils/cn';
import { breadcrumbsStyles, breadcrumbItemStyles, separatorStyles } from './styles';
import type { BreadcrumbsProps, BreadcrumbItem } from './types';

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  size: 'md',
  color: 'primary',
  separator: '/',
  maxItems: 0,
  ellipsis: true,
});

const emit = defineEmits<{
  (e: 'click', item: BreadcrumbItem, index: number): void;
}>();

const handleClick = (item: BreadcrumbItem, index: number) => {
  if (!item.disabled && item.href) {
    emit('click', item, index);
  }
};

const getVisibleItems = () => {
  const items = props.items;
  const maxItems = props.maxItems;
  
  if (!maxItems || items.length <= maxItems) {
    return items;
  }

  if (props.ellipsis) {
    const firstItems = items.slice(0, Math.floor(maxItems / 2));
    const lastItems = items.slice(-(maxItems - Math.floor(maxItems / 2) - 1));
    return [
      ...firstItems,
      { label: '...', href: undefined, disabled: true },
      ...lastItems,
    ];
  }

  return items.slice(0, maxItems);
};
</script>

<template>
  <nav :class="cn(breadcrumbsStyles({ size, color }))" aria-label="Breadcrumbs">
    <ol class="flex items-center space-x-1">
      <li
        v-for="(item, index) in getVisibleItems()"
        :key="index"
        class="flex items-center"
      >
        <span
          v-if="index > 0"
          :class="cn(separatorStyles({ size }))"
          class="mx-2"
        >
          {{ props.separator }}
        </span>
        
        <button
          v-if="item.href && !item.disabled"
          :class="cn(breadcrumbItemStyles({ size, color, disabled: item.disabled }))"
          @click="handleClick(item, index)"
        >
          {{ item.label }}
        </button>
        
        <span
          v-else
          :class="cn(breadcrumbItemStyles({ size, color, disabled: item.disabled }))"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.l-breadcrumbs {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}

.l-breadcrumb-item {
  position: relative;
}

.l-breadcrumb-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.2s ease;
}

.l-breadcrumb-item:hover::after {
  width: 100%;
}
</style>