<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from "vue";
import { cn } from "../../utils/cn";
import { LBtn } from "../Btn";
import { LHeadline } from "../Headline";
import { LSeparator } from "../Separator";
import {
  bottomSheetOverlayStyles,
  bottomSheetContainerStyles,
  bottomSheetHeaderStyles,
  bottomSheetContentStyles,
  bottomSheetFooterStyles,
} from "./styles";
import type { BottomSheetProps, BottomSheetEmits } from "./types";

const props = withDefaults(defineProps<BottomSheetProps>(), {
  modelValue: false,
  size: "auto",
  variant: "glass",
  position: "bottom",
  closable: true,
  persistent: false,
  overlay: true,
  closeOnOverlay: true,
  closeOnEscape: true,
  maxHeight: "",
  maxWidth: "",
  showCloseButton: true,
  rounded: true,
});

const emit = defineEmits<BottomSheetEmits>();

const isOpen = ref(props.modelValue);
const isTransitioning = ref(false);

const showOverlay = computed(
  () => props.overlay && (isOpen.value || isTransitioning.value),
);

const open = () => {
  if (isOpen.value) return;

  isTransitioning.value = true;
  isOpen.value = true;
  emit("update:modelValue", true);
  emit("open");

  // Focus management
  nextTick(() => {
    const focusableElement = containerRef.value?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (focusableElement) {
      (focusableElement as HTMLElement).focus();
    }
  });
};

const close = () => {
  if (!isOpen.value || props.persistent) return;

  isTransitioning.value = true;
  isOpen.value = false;
  emit("update:modelValue", false);
  emit("close");
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
  if (props.closeOnEscape && !props.persistent && event.key === "Escape") {
    close();
  }
};

const containerRef = ref<HTMLElement>();
const overlayRef = ref<HTMLElement>();

// Watch for external value changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== isOpen.value) {
      if (newValue) {
        open();
      } else {
        close();
      }
    }
  },
);

// Handle escape key — always listen, handler checks the prop
onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
});

// Handle transition end
const handleTransitionEnd = () => {
  isTransitioning.value = false;
  if (isOpen.value) {
    emit("opened");
  } else {
    emit("closed");
  }
};

// Generate a unique ID per sheet instance for the title
const uid = `bottomsheet-${Math.random().toString(36).substring(2, 9)}`;
const titleId = computed(() =>
  props.title ? `bottom-sheet-title-${uid}` : undefined,
);

defineExpose({
  open,
  close,
  toggle,
  overlayRef,
  containerRef,
});
</script>

<template>
  <!-- Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showOverlay"
      ref="overlayRef"
      :class="cn(bottomSheetOverlayStyles(), 'l-bottomsheet')"
      @click="handleOverlayClick"
    />
  </Transition>

  <!-- Bottom Sheet Container -->
  <div
    ref="containerRef"
    :class="
      cn(
        bottomSheetContainerStyles({
          position,
          size,
          variant,
          rounded,
          show: isOpen,
        }),
      )
    "
    :style="{
      maxHeight: maxHeight || undefined,
      maxWidth: maxWidth || undefined,
    }"
    @transitionend="handleTransitionEnd"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="titleId"
  >
    <!-- Header -->
    <div v-if="title || showCloseButton" :class="cn(bottomSheetHeaderStyles())">
      <LHeadline v-if="title" :level="2" size="md" color="white" :id="titleId">
        {{ title }}
      </LHeadline>
      
      <!-- Close-Button -->
      <LBtn
        v-if="showCloseButton && closable"
        icon="x"
        size="md"
        color="white"
        variant="ghost"
        class="w-8 h-8 !p-2"
        @click="close"
        aria-label="Close"
      />
    </div>

    <LSeparator v-if="title || showCloseButton" />

    <!-- Content -->
    <div :class="cn(bottomSheetContentStyles())">
      <slot />
    </div>

    <!-- Footer -->
    <template v-if="$slots.footer">
      <LSeparator />
      <div :class="cn(bottomSheetFooterStyles())">
        <slot name="footer" />
      </div>
    </template>
  </div>
</template>
