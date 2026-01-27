<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { paginationStyles, paginationButtonStyles, paginationEllipsisStyles, paginationInputStyles, paginationSelectStyles } from './styles';
import type { PaginationProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<PaginationProps>(), {
  pageSize: 10,
  showSizeChanger: false,
  showQuickJumper: false,
  showTotal: true,
  size: 'md',
  color: 'primary',
  shape: 'rounded',
  disabled: false,
  hideOnSinglePage: false,
  ellipsis: true,
});

const emit = defineEmits<{
  (e: 'change', page: number): void;
  (e: 'pageSizeChange', size: number): void;
}>();

const totalPages = computed(() => Math.ceil(props.total / props.pageSize));
const shouldHide = computed(() => props.hideOnSinglePage && totalPages.value <= 1);

const getVisiblePages = () => {
  if (!props.ellipsis || totalPages.value <= 7) {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1);
  }

  const pages: number[] = [];
  const current = props.current;

  // Always show first page
  pages.push(1);

  // Show pages around current page
  if (current <= 3) {
    for (let i = 2; i <= 4; i++) {
      if (i < totalPages.value - 1) pages.push(i);
    }
  } else if (current >= totalPages.value - 2) {
    for (let i = totalPages.value - 3; i <= totalPages.value - 1; i++) {
      if (i > 1) pages.push(i);
    }
  } else {
    for (let i = current - 1; i <= current + 1; i++) {
      if (i > 1 && i < totalPages.value - 1) pages.push(i);
    }
  }

  // Always show last page
  if (totalPages.value > 1) {
    pages.push(totalPages.value);
  }

  // Remove duplicates and sort
  return [...new Set(pages)].sort((a, b) => a - b);
};

const handlePageChange = (page: number) => {
  if (page >= 1 && page <= totalPages.value && page !== props.current && !props.disabled) {
    emit('change', page);
  }
};

const handlePrev = () => {
  if (props.current > 1 && !props.disabled) {
    emit('change', props.current - 1);
  }
};

const handleNext = () => {
  if (props.current < totalPages.value && !props.disabled) {
    emit('change', props.current + 1);
  }
};

const handleFirst = () => {
  if (props.current > 1 && !props.disabled) {
    emit('change', 1);
  }
};

const handleLast = () => {
  if (props.current < totalPages.value && !props.disabled) {
    emit('change', totalPages.value);
  }
};

const handlePageSizeChange = (event: Event) => {
  const select = event.target as HTMLSelectElement;
  const newSize = parseInt(select.value);
  if (newSize !== props.pageSize && !props.disabled) {
    emit('pageSizeChange', newSize);
  }
};

const handleQuickJump = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const page = parseInt(input.value);
  if (page >= 1 && page <= totalPages.value && !props.disabled) {
    emit('change', page);
  }
};

const getRangeText = () => {
  const start = (props.current - 1) * props.pageSize + 1;
  const end = Math.min(props.current * props.pageSize, props.total);
  return `${start}-${end} of ${props.total}`;
};
</script>

<template>
  <div v-if="!shouldHide" :class="cn(paginationStyles({ size, color, shape, disabled }))">
    <!-- Total count -->
    <div v-if="showTotal" class="text-sm text-gray-400">
      {{ getRangeText() }}
    </div>

    <!-- First page button -->
    <button
      v-if="totalPages > 7 && current > 3"
      :class="cn(paginationButtonStyles({ size, color, shape, disabled }))"
      @click="handleFirst"
      :disabled="disabled || current === 1"
    >
      <LIcon name="chevrons-left" size="xs" />
    </button>

    <!-- Previous page button -->
    <button
      :class="cn(paginationButtonStyles({ size, color, shape, disabled }))"
      @click="handlePrev"
      :disabled="disabled || current === 1"
    >
      <LIcon name="chevron-left" size="xs" />
    </button>

    <!-- Page numbers -->
    <template v-for="page in getVisiblePages()" :key="page">
      <button
        v-if="page === '...'"
        :class="cn(paginationEllipsisStyles({ size }))"
      >
        ...
      </button>
      <button
        v-else
        :class="cn(paginationButtonStyles({ 
          size, 
          color, 
          shape, 
          active: page === current, 
          disabled 
        }))"
        @click="handlePageChange(Number(page))"
        :disabled="disabled"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next page button -->
    <button
      :class="cn(paginationButtonStyles({ size, color, shape, disabled }))"
      @click="handleNext"
      :disabled="disabled || current === totalPages"
    >
      <LIcon name="chevron-right" size="xs" />
    </button>

    <!-- Last page button -->
    <button
      v-if="totalPages > 7 && current < totalPages - 2"
      :class="cn(paginationButtonStyles({ size, color, shape, disabled }))"
      @click="handleLast"
      :disabled="disabled || current === totalPages"
    >
      <LIcon name="chevrons-right" size="xs" />
    </button>

    <!-- Page size changer -->
    <div v-if="showSizeChanger" class="flex items-center gap-2">
      <select
        :class="cn(paginationSelectStyles({ size }))"
        @change="handlePageSizeChange"
        :disabled="disabled"
      >
        <option v-for="size in [10, 20, 50, 100]" :key="size" :value="size" :selected="pageSize === size">
          {{ size }} / page
        </option>
      </select>
    </div>

    <!-- Quick jumper -->
    <div v-if="showQuickJumper" class="flex items-center gap-2">
      <span class="text-sm text-gray-400">Go to</span>
      <input
        :class="cn(paginationInputStyles({ size }))"
        type="number"
        :min="1"
        :max="totalPages"
        :value="current"
        @change="handleQuickJump"
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<style scoped>
.l-pagination {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
}

.l-pagination-button {
  position: relative;
  overflow: hidden;
}

.l-pagination-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.l-pagination-button:hover::before {
  transform: translateX(100%);
}

.l-pagination-button.active {
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
}
</style>