<script setup lang="ts">
import { cn } from "../../utils/cn";
import { alertStyles } from "./styles";
import type { AlertProps } from "./types";
import { LIcon } from "../Icon";

const props = withDefaults(defineProps<AlertProps>(), {
  variant: "glass",
  color: "primary",
  dense: false,
  inline: false,
});
</script>

<template>
  <div :class="cn(alertStyles({ variant, color, dense }), props.class)">
    <div v-if="$slots.icon || icon" class="icon shrink-0">
      <slot name="icon">
        <LIcon :name="icon!" size="md" />
      </slot>
    </div>

    <div class="content flex-grow py-1">
      <slot>{{ label }}</slot>
    </div>

    <div v-if="$slots.actions" class="actions flex gap-2 pt-1">
      <slot name="actions" />
    </div>
  </div>
</template>
