<script setup lang="ts">
import { cn } from "../../utils/cn";
import { barStyles, barWrapperStyles } from "./styles";
import type { BarProps } from "./types";

const props = withDefaults(defineProps<BarProps>(), {
  position: "top",
  fixed: false,
  width: 80,
  height: 60,
  rounded: true,
  dense: false,
});
</script>

<template>
  <div :class="cn(barWrapperStyles({position, dense }))">
    <div
      v-if="['top', 'bottom'].includes(position)"
      :class="cn(barStyles({ fixed, dense, rounded}), props.class)"
      :style="{ height: `${height}px` }"
    >
      <slot />
    </div>

    <aside
      v-else-if="['left', 'right'].includes(position)"
      :class="cn(barStyles({ fixed, dense , rounded}), props.class)"
      :style="{ width: `${width}px`, padding: rounded ? '' : '0' }"
    >
      <slot />
    </aside>
  </div>
</template>
