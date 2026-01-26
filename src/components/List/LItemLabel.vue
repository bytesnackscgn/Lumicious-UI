<script setup lang="ts">
import { cn } from '../../utils/cn';

interface Props {
  header?: boolean;
  caption?: boolean;
  overline?: boolean;
  lines?: number | string;
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div 
    :class="cn(
      'l-item-label',
      header ? 'text-white/40 text-xs font-bold uppercase tracking-widest pt-4 pb-2' : '',
      caption ? 'text-white/50 text-xs mt-1' : '',
      overline ? 'text-white/40 text-[10px] uppercase tracking-tighter mb-1' : '',
      !header && !caption && !overline ? 'text-base font-medium text-white' : '',
      props.class
    )"
    :style="lines ? { 
        display: '-webkit-box', 
        '-webkit-box-orient': 'vertical', 
        '-webkit-line-clamp': lines, 
        overflow: 'hidden' 
    } : {}"
  >
    <slot />
  </div>
</template>
