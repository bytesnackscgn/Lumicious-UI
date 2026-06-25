<script setup lang="ts">
import { ref, provide, reactive } from "vue";
import {
  ToastInjectionKey,
  type Toast,
  type ToastOptions,
  type ToastPosition,
} from "./types";
import LAlert from "../Banner/LAlert.vue";
import { LBtn } from "../Btn";

interface Props {
  variant?: "list" | "stack";
  stackOverlap?: number;
  stackGap?: number;
  expandOnHover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "list",
  stackOverlap: 40,
  stackGap: 8,
  expandOnHover: true,
});

const toasts = ref<Toast[]>([]);

const hoverStates = reactive<Record<ToastPosition, boolean>>({
  "top-left": false,
  "top-center": false,
  "top-right": false,
  "bottom-left": false,
  "bottom-center": false,
  "bottom-right": false,
});

const add = (options: ToastOptions): string => {
  const id = options.id || crypto.randomUUID();
  const toast: Toast = {
    id,
    message: options.message,
    variant: options.variant || "glass",
    color: options.color || "primary",
    icon: options.icon,
    duration: options.duration ?? 5000,
    position: options.position || "top-right",
    dismissible: options.dismissible ?? true,
    dense: true, // Toasts should always be dense
  };

  toasts.value.push(toast);

  if (toast.duration > 0) {
    setTimeout(() => {
      remove(id);
    }, toast.duration);
  }

  return id;
};

const remove = (id: string) => {
  const index = toasts.value.findIndex((t) => t.id === id);
  if (index !== -1) {
    toasts.value.splice(index, 1);
  }
};

provide(ToastInjectionKey, {
  add,
  remove,
});

// Helper to filter toasts by position
const getToastsByPosition = (position: ToastPosition) => {
  return toasts.value.filter((t) => t.position === position);
};

const positions: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const positionClasses: Record<ToastPosition, string> = {
  "top-left": "top-0 left-0 items-start",
  "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
  "top-right": "top-0 right-0 items-end",
  "bottom-left": "bottom-0 left-0 items-start",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-0 right-0 items-end",
};

const getToastStyle = (index: number, position: ToastPosition) => {
  if (props.variant !== "stack" || index === 0) return {};

  const isHovered = hoverStates[position];
  const isBottom = position.includes("bottom");

  // If expanded (hovered), use gap. Otherwise use negative overlap.
  const spacing =
    isHovered && props.expandOnHover ? props.stackGap : -props.stackOverlap;

  return {
    [isBottom ? "marginBottom" : "marginTop"]: `${spacing}px`,
    zIndex: index, // Ensure newer items are on top
  };
};

const setHover = (position: ToastPosition, isHovered: boolean) => {
  hoverStates[position] = isHovered;
};
</script>

<template>
  <slot />

  <Teleport to="body">
    <template v-for="position in positions" :key="position">
      <div
        v-if="getToastsByPosition(position).length > 0"
        class="fixed z-50 p-4 flex w-full max-w-sm pointer-events-none transition-all duration-300"
        :class="[
          positionClasses[position],
          position.includes('bottom') ? 'flex-col-reverse' : 'flex-col',
          variant === 'list' ? 'gap-2' : '',
        ]"
        @mouseenter="setHover(position, true)"
        @mouseleave="setHover(position, false)"
      >
        <TransitionGroup
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="transform translate-y-2 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform translate-y-2 opacity-0"
          move-class="transition-all duration-300 ease-in-out"
        >
          <div
            v-for="(toast, index) in getToastsByPosition(position)"
            :key="toast.id"
            class="pointer-events-auto w-full transition-all duration-300 ease-in-out"
            :style="getToastStyle(index, position)"
          >
            <LAlert
              :variant="toast.variant"
              :color="toast.color"
              :icon="toast.icon"
              :dense="toast.dense"
              class="shadow-lg backdrop-blur-md"
            >
              <slot name="content" :toast="toast">
                {{ toast.message }}
              </slot>

              <template #actions v-if="toast.dismissible">
                <LBtn
                  icon="x"
                  variant="ghost"
                  size="sm"
                  class="!p-1 h-6 w-6"
                  @click="remove(toast.id)"
                />
              </template>
            </LAlert>
          </div>
        </TransitionGroup>
      </div>
    </template>
  </Teleport>
</template>
