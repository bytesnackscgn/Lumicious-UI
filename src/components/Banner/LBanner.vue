<script setup lang="ts">
import { cn } from '../../utils/cn';
import { bannerStyles } from './styles';
import type { BannerProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<BannerProps>(), {
  variant: 'glass',
  color: 'primary',
  dense: false,
  inline: false
});
</script>

<template>
  <div :class="cn(bannerStyles({ variant, color, dense }), props.class)">
    <div v-if="$slots.avatar || icon" class="l-banner__avatar shrink-0">
      <slot name="avatar">
        <LIcon :name="icon!" size="md" />
      </slot>
    </div>

    <div class="l-banner__content flex-grow py-1">
      <slot>{{ label }}</slot>
    </div>

    <div v-if="$slots.actions" class="l-banner__actions flex gap-2 pt-1">
      <slot name="actions" />
    </div>
  </div>
</template>
