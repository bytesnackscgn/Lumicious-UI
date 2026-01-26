<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { cn } from '../../utils/cn';
import { 
  bottomSheetOverlayStyles, 
  bottomSheetContainerStyles, 
  bottomSheetHeaderStyles, 
  bottomSheetTitleStyles, 
  bottomSheetCloseButtonStyles, 
  bottomSheetContentStyles, 
  bottomSheetFooterStyles 
} from './styles';
import type { BottomSheetProps, BottomSheetEmits } from './types';

const props = withDefaults(defineProps<BottomSheetProps>(), {
  modelValue: false,
  size: 'md',
  variant: 'glass',
  position: 'bottom',
  closable: true,
  persistent: false,
  overlay: true,
  closeOnOverlay: true,
  closeOnEscape: true,
  maxHeight: '',
  maxWidth: '',
  showCloseButton: true,
  rounded: true,
});

const emit = defineEmits<BottomSheetEmits>();

const isOpen = ref(props.modelValue);
const isTransitioning = ref(false);

const showOverlay = computed(() => props.overlay && isOpen.value);
const showContainer = computed(() => isOpen.value);

const open = () => {
  if (isOpen.value) return;
  
  isTransitioning.value = true;
  isOpen.value = true;
  emit('update:modelValue', true);
  emit('open');
  
  // Focus management
  nextTick(() => {
    const focusableElement = containerRef.value?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElement) {
      (focusableElement as HTMLElement).focus();
    }
  });
};

const close = () => {
  if (!isOpen.value || props.persistent) return;
  
  isTransitioning.value = true;
  isOpen.value = false;
  emit('update:modelValue', false);
  emit('close');
};

const toggle = () => {
  if (isOpen.value) {
    close();
  } else {
    open();
  }
};

const handleOverlayClick = () => {
  if (props.closeOnOverlay && !props.persistent) {
    close();
  }
};

const handleEscape = (event: KeyboardEvent) => {
  if (props.closeOnEscape && !props.persistent && event.key === 'Escape') {
    close();
  }
};

const containerRef = ref<HTMLElement>();
const overlayRef = ref<HTMLElement>();

// Watch for external value changes
watch(() => props.modelValue, (newValue) => {
  if (newValue !== isOpen.value) {
    if (newValue) {
      open();
    } else {
      close();
    }
  }
});

// Handle escape key
onMounted(() => {
  if (props.closeOnEscape) {
    document.addEventListener('keydown', handleEscape);
  }
});

onUnmounted(() => {
  if (props.closeOnEscape) {
    document.removeEventListener('keydown', handleEscape);
  }
});

// Handle transition end
const handleTransitionEnd = () => {
  isTransitioning.value = false;
  if (isOpen.value) {
    emit('opened');
  } else {
    emit('closed');
  }
};

// Expose methods
defineExpose({
  open,
  close,
  toggle,
});
</script>

<template>
  <!-- Overlay -->
  <div
    v-if="showOverlay"
    ref="overlayRef"
    :class="cn(bottomSheetOverlayStyles({ show: isOpen }))"
    @click="handleOverlayClick"
    @transitionend="handleTransitionEnd"
  />

  <!-- Bottom Sheet Container -->
  <div
    ref="containerRef"
    :class="cn(bottomSheetContainerStyles({ 
      position, 
      size, 
      variant, 
      rounded, 
      show: isOpen 
    }))"
    :style="{
      maxHeight: maxHeight || undefined,
      maxWidth: maxWidth || undefined,
    }"
    @transitionend="handleTransitionEnd"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="title ? 'bottom-sheet-title' : undefined"
  >
    <!-- Header -->
    <div v-if="title || showCloseButton" :class="cn(bottomSheetHeaderStyles({ variant }))">
      <h2 v-if="title" :id="'bottom-sheet-title'" :class="cn(bottomSheetTitleStyles())">
        {{ title }}
      </h2>
      <button
        v-if="showCloseButton && closable"
        type="button"
        :class="cn(bottomSheetCloseButtonStyles({ variant }))"
        @click="close"
        aria-label="Close"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Content -->
    <div :class="cn(bottomSheetContentStyles({ maxHeight: !!maxHeight }))">
      <slot />
    </div>

    <!-- Footer -->
    <div v-if="$slots.footer" :class="cn(bottomSheetFooterStyles({ variant }))">
      <slot name="footer" />
    </div>
  </div>
</template>