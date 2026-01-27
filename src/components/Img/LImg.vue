<script setup lang="ts">
import { ref, watch } from 'vue';
import { cn } from '../../utils/cn';
import { imgStyles, imgContainerStyles } from './styles';
import type { ImgProps } from './types';

const props = withDefaults(defineProps<ImgProps>(), {
  size: 'md',
  variant: 'glass',
  fit: 'cover',
  loading: 'lazy',
  rounded: false,
});

const emit = defineEmits<{
  (e: 'load', event: Event): void;
  (e: 'error', event: Event): void;
}>();

const isLoading = ref(true);
const hasError = ref(false);
const imageSrc = ref(props.src);

const handleLoad = (event: Event) => {
  isLoading.value = false;
  hasError.value = false;
  emit('load', event);
};

const handleError = (event: Event) => {
  isLoading.value = false;
  hasError.value = true;
  emit('error', event);
};

const retryLoad = () => {
  isLoading.value = true;
  hasError.value = false;
  imageSrc.value = props.src + '?retry=' + Date.now();
};


watch(() => props.src, (newSrc, oldSrc) => {
  if (newSrc !== oldSrc) {
    isLoading.value = true;
    hasError.value = false;
    imageSrc.value = newSrc;
  }
});
</script>

<template>
  <div :class="cn(imgContainerStyles({ size }), props.class)">
    <!-- Loading State -->
    <div
      v-if="isLoading && !hasError"
      :class="cn(
        'absolute inset-0 flex items-center justify-center',
        'bg-white/10 animate-pulse'
      )"
    >
      <div class="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
    </div>

    <!-- Error State -->
    <div
      v-if="hasError && !isLoading"
      :class="cn(
        'absolute inset-0 flex flex-col items-center justify-center',
        'bg-red-500/20 text-red-300'
      )"
    >
      <div class="text-4xl mb-2">⚠️</div>
      <div class="text-sm text-center px-2">Failed to load image</div>
      <button
        @click="retryLoad"
        class="mt-2 px-3 py-1 text-xs bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
      >
        Retry
      </button>
    </div>

    <!-- Image -->
    <img
      v-show="!isLoading && !hasError" 
      :src="imageSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :class="cn(
        imgStyles({ 
          size, 
          variant, 
          fit, 
          rounded 
        }),
        'block w-full h-full'
      )"
      @load="handleLoad"
      @error="handleError"
    />

    <!-- Overlay for glass effect -->
    <div
      v-if="variant === 'glass'"
      class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50"
    />
  </div>
</template>