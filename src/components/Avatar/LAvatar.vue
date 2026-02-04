<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { cn } from '../../utils/cn';
import { avatarStyles } from './styles';
import type { AvatarProps } from './types';
import { LIcon } from '../Icon';
import { LImg } from '../Img';

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'md',
  rounded: true,
  bordered: false
});

const imageLoadFailed = ref(false);

watch(() => props.src, () => {
  imageLoadFailed.value = false;
});

const initials = computed(() => {
  if (!props.name) return '';
  return props.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

const inlineSize = computed(() => {
  if (typeof props.size === 'number') return { width: `${props.size}px`, height: `${props.size}px` };
  return {};
});
</script>

<template>
  <div
    :class="cn(avatarStyles({ 
      size: typeof size === 'string' ? (size as any) : undefined, 
      rounded, 
      bordered 
    }))"
    :style="inlineSize"
  >
    <LImg
      v-if="src && !imageLoadFailed"
      :src="src"
      :alt="name"
      size="full"
      variant="ghost"
      @error="imageLoadFailed = true"
    />
    <div v-else-if="name" class="font-bold text-white opacity-80 select-none">
      {{ initials }}
    </div>
    <LIcon
      v-else-if="icon"
      :name="icon"
      :size="size === 'xs' ? 'xs' : (size === 'sm' ? 'sm' : 'md')"
    />
    <div v-else class="w-full h-full bg-white/5 flex items-center justify-center">
        <LIcon name="user" size="sm" />
    </div>

    <!-- Shine effect -->
    <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
  </div>
</template>
