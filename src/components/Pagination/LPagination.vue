<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { paginationStyles, pageButtonStyles } from './styles';
import type { PaginationProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<PaginationProps>(), {
  modelValue: 1,
  max: 1,
  maxPages: 7,
  boundaryNumbers: true,
  directionLinks: true,
  boundaryLinks: true,
  disable: false,
  input: false,
  size: 'md',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
  (e: 'change', value: number): void;
}>();

const currentPage = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
    emit('change', value);
  },
});

const totalPages = computed(() => Math.max(1, props.max));

const canGoPrevious = computed(() => currentPage.value > 1);
const canGoNext = computed(() => currentPage.value < totalPages.value);

const getPageNumbers = () => {
  const pages: number[] = [];
  const current = currentPage.value;
  const total = totalPages.value;
  const maxVisible = props.maxPages!;

  if (total <= maxVisible) {
    // Show all pages if total is less than max visible
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Always show first and last pages
    if (props.boundaryLinks) {
      pages.push(1);
    }

    // Calculate range around current page
    let start = Math.max(2, current - Math.floor(maxVisible / 2));
    let end = Math.min(total - 1, start + maxVisible - 2);

    // Adjust if we're near the beginning or end
    if (end - start < maxVisible - 2) {
      if (start === 2) {
        end = Math.min(total - 1, start + maxVisible - 2);
      } else if (end === total - 1) {
        start = Math.max(2, end - maxVisible + 2);
      }
    }

    // Add ellipsis if needed
    if (start > 2) {
      pages.push(-1); // Ellipsis
    }

    // Add page numbers
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis if needed
    if (end < total - 1) {
      pages.push(-2); // Ellipsis
    }

    if (props.boundaryLinks) {
      pages.push(total);
    }
  }

  return pages;
};

const handlePageClick = (page: number) => {
  if (page > 0 && page <= totalPages.value && !props.disable) {
    currentPage.value = page;
  }
};

const goToPrevious = () => {
  if (canGoPrevious.value && !props.disable) {
    currentPage.value--;
  }
};

const goToNext = () => {
  if (canGoNext.value && !props.disable) {
    currentPage.value++;
  }
};

const handleInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const page = parseInt(input.value);
  
  if (!isNaN(page) && page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  } else {
    input.value = currentPage.value.toString();
  }
};
</script>

<template>
  <nav :class="cn(paginationStyles({ size }), props.class)">
    <!-- Previous Button -->
    <button
      v-if="directionLinks"
      :class="cn(pageButtonStyles({ 
        active: false, 
        size, 
        disable: !canGoPrevious || disable 
      }))"
      @click="goToPrevious"
      :disabled="!canGoPrevious || disable"
    >
      <LIcon name="chevron-left" :size="size === 'sm' ? 'xs' : 'sm'" />
    </button>

    <!-- Page Numbers -->
    <template v-for="page in getPageNumbers()" :key="page">
      <button
        v-if="page > 0"
        :class="cn(pageButtonStyles({ 
          active: page === currentPage, 
          size, 
          disable 
        }))"
        @click="handlePageClick(page)"
        :disabled="disable"
      >
        {{ page }}
      </button>
      
      <!-- Ellipsis -->
      <span
        v-else-if="page === -1 || page === -2"
        class="text-white/40 px-2"
      >
        {{ page === -1 ? '...' : '...' }}
      </span>
    </template>

    <!-- Next Button -->
    <button
      v-if="directionLinks"
      :class="cn(pageButtonStyles({ 
        active: false, 
        size, 
        disable: !canGoNext || disable 
      }))"
      @click="goToNext"
      :disabled="!canGoNext || disable"
    >
      <LIcon name="chevron-right" :size="size === 'sm' ? 'xs' : 'sm'" />
    </button>

    <!-- Page Input -->
    <div v-if="input" class="flex items-center gap-2 ml-4">
      <span class="text-white/60 text-sm">Page</span>
      <input
        type="number"
        :value="currentPage"
        @input="handleInputChange"
        :class="cn(
          'w-16 px-2 py-1 rounded-lg bg-white/10 text-white text-sm text-center',
          'border border-white/20 focus:border-white/40 focus:outline-none'
        )"
        :min="1"
        :max="totalPages"
        :disabled="disable"
      />
      <span class="text-white/60 text-sm">of {{ totalPages }}</span>
    </div>
  </nav>
</template>