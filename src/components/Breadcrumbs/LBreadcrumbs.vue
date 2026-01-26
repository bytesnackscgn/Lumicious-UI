<script setup lang="ts">
import { cn } from '../../utils/cn';
import { breadcrumbsStyles } from './styles';
import type { BreadcrumbsProps, BreadcrumbItem } from './types';

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  separator: '/',
});

const emit = defineEmits<{
  (e: 'click', item: BreadcrumbItem, index: number): void;
}>();
</script>

<template>
  <nav :class="cn(breadcrumbsStyles(), props.class)">
    <ol class="flex items-center space-x-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center"
      >
        <template v-if="index === items.length - 1">
          <!-- Last item (current page) -->
          <span class="text-white/60">{{ item.label }}</span>
        </template>
        <template v-else>
          <!-- Breadcrumb item with link -->
          <a
            v-if="item.href && !item.disabled"
            :href="item.href"
            class="text-white/80 hover:text-white transition-colors duration-200"
            @click.prevent="$emit('click', item, index)"
          >
            {{ item.label }}
          </a>
          <span
            v-else
            class="text-white/60 cursor-not-allowed"
          >
            {{ item.label }}
          </span>
          <!-- Separator -->
          <span class="text-white/40 mx-2">{{ separator }}</span>
        </template>
      </li>
    </ol>
  </nav>
</template>