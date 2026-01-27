<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { cn } from '../../utils/cn';
import { popupProxyStyles } from './styles';
import type { PopupProxyProps } from './types';

const props = withDefaults(defineProps<PopupProxyProps>(), {
  trigger: 'click',
  placement: 'bottom',
  offset: 8,
  autoClose: true,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'open'): void;
  (e: 'close'): void;
  (e: 'toggle', isOpen: boolean): void;
}>();

const isOpen = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const popupRef = ref<HTMLElement | null>(null);

const popupStyle = computed(() => {
  if (!isOpen.value || !triggerRef.value || !popupRef.value) return {};
  
  const triggerRect = triggerRef.value.getBoundingClientRect();
  const popupRect = popupRef.value.getBoundingClientRect();
  
  const style: Record<string, string> = {
    position: 'absolute',
    zIndex: '1000',
  };
  
  // Calculate position based on placement
  switch (props.placement) {
    case 'top':
      style.bottom = `${window.innerHeight - triggerRect.top + props.offset}px`;
      style.left = `${triggerRect.left + (triggerRect.width - popupRect.width) / 2}px`;
      break;
    case 'top-start':
      style.bottom = `${window.innerHeight - triggerRect.top + props.offset}px`;
      style.left = `${triggerRect.left}px`;
      break;
    case 'top-end':
      style.bottom = `${window.innerHeight - triggerRect.top + props.offset}px`;
      style.left = `${triggerRect.right - popupRect.width}px`;
      break;
    case 'bottom':
      style.top = `${triggerRect.bottom + props.offset}px`;
      style.left = `${triggerRect.left + (triggerRect.width - popupRect.width) / 2}px`;
      break;
    case 'bottom-start':
      style.top = `${triggerRect.bottom + props.offset}px`;
      style.left = `${triggerRect.left}px`;
      break;
    case 'bottom-end':
      style.top = `${triggerRect.bottom + props.offset}px`;
      style.left = `${triggerRect.right - popupRect.width}px`;
      break;
    case 'left':
      style.top = `${triggerRect.top + (triggerRect.height - popupRect.height) / 2}px`;
      style.right = `${window.innerWidth - triggerRect.left + props.offset}px`;
      break;
    case 'left-start':
      style.top = `${triggerRect.top}px`;
      style.right = `${window.innerWidth - triggerRect.left + props.offset}px`;
      break;
    case 'left-end':
      style.top = `${triggerRect.bottom - popupRect.height}px`;
      style.right = `${window.innerWidth - triggerRect.left + props.offset}px`;
      break;
    case 'right':
      style.top = `${triggerRect.top + (triggerRect.height - popupRect.height) / 2}px`;
      style.left = `${triggerRect.right + props.offset}px`;
      break;
    case 'right-start':
      style.top = `${triggerRect.top}px`;
      style.left = `${triggerRect.right + props.offset}px`;
      break;
    case 'right-end':
      style.top = `${triggerRect.bottom - popupRect.height}px`;
      style.left = `${triggerRect.right + props.offset}px`;
      break;
  }
  
  return style;
});

const openPopup = () => {
  if (props.disabled) return;
  isOpen.value = true;
  emit('open');
  emit('toggle', true);
};

const closePopup = () => {
  if (props.disabled) return;
  isOpen.value = false;
  emit('close');
  emit('toggle', false);
};

const togglePopup = () => {
  if (isOpen.value) {
    closePopup();
  } else {
    openPopup();
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    !props.disabled &&
    isOpen.value &&
    triggerRef.value &&
    popupRef.value &&
    !triggerRef.value.contains(event.target as Node) &&
    !popupRef.value.contains(event.target as Node)
  ) {
    closePopup();
  }
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closePopup();
  }
};

const handleTriggerClick = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  if (props.trigger === 'click') {
    togglePopup();
  }
};

const handleTriggerHover = () => {
  if (props.trigger === 'hover' && !isOpen.value) {
    openPopup();
  }
};

const handleTriggerLeave = () => {
  if (props.trigger === 'hover' && isOpen.value && !props.autoClose) {
    setTimeout(() => {
      if (isOpen.value) closePopup();
    }, 200);
  }
};

watch(
  () => props.disabled,
  (newDisabled) => {
    if (newDisabled && isOpen.value) {
      closePopup();
    }
  }
);

onMounted(() => {
  if (typeof window !== 'undefined') {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscape);
  }
});
</script>

<template>
  <div class="l-popup-proxy relative inline-block">
    <!-- Trigger Element -->
    <div
      ref="triggerRef"
      :class="cn('cursor-pointer', props.triggerClass)"
      @click="handleTriggerClick"
      @mouseenter="handleTriggerHover"
      @mouseleave="handleTriggerLeave"
    >
      <slot name="trigger" :isOpen="isOpen" :toggle="togglePopup">
        <button class="px-4 py-2 glass border-white/20 rounded-lg">
          {{ triggerText || 'Open' }}
        </button>
      </slot>
    </div>
    
    <!-- Popup Content -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="popupRef"
        :class="cn(popupProxyStyles({ placement }), props.popupClass)"
        :style="popupStyle"
      >
        <div class="glass border-white/20 rounded-xl shadow-xl">
          <slot :isOpen="isOpen" :close="closePopup" />
        </div>
      </div>
    </Teleport>
  </div>
</template>