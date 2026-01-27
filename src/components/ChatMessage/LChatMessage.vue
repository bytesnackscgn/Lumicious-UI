<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../../utils/cn';
import { 
  chatMessageStyles, 
  chatMessageBubbleStyles, 
  chatMessageAvatarStyles, 
  chatMessageTimestampStyles,
  chatMessageStatusStyles 
} from './styles';
import type { ChatMessageProps } from './types';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<ChatMessageProps>(), {
  variant: 'received',
  size: 'md',
  status: 'sent',
  loading: false,
  showAvatar: true,
  showTimestamp: true,
  showStatus: true,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const timestamp = computed(() => {
  if (!props.timestamp) return '';
  
  const date = props.timestamp instanceof Date ? props.timestamp : new Date(props.timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

const getStatusIcon = () => {
  switch (props.status) {
    case 'sent':
      return 'send';
    case 'delivered':
      return 'check';
    case 'read':
      return 'check-double';
    case 'failed':
      return 'x-circle';
    default:
      return 'send';
  }
};

const getStatusText = () => {
  switch (props.status) {
    case 'sent':
      return 'Sent';
    case 'delivered':
      return 'Delivered';
    case 'read':
      return 'Read';
    case 'failed':
      return 'Failed';
    default:
      return 'Sent';
  }
};
</script>

<template>
  <div :class="cn(chatMessageStyles({ variant, size }))" @click="$emit('click', $event)">
    <!-- Avatar for received messages -->
    <div v-if="variant === 'received' && showAvatar" :class="chatMessageAvatarStyles({ size })">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="username || 'User avatar'"
        class="w-full h-full object-cover"
      />
      <div v-else class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
        {{ username?.charAt(0).toUpperCase() || 'U' }}
      </div>
    </div>

    <!-- Message bubble -->
    <div class="flex flex-col">
      <div :class="cn(chatMessageBubbleStyles({ variant, size }))">
        <!-- Loading state -->
        <div v-if="loading" class="flex items-center gap-2">
          <div class="animate-spin">
            <LIcon name="loader-2" size="sm" />
          </div>
          <span class="opacity-70">Sending...</span>
        </div>
        
        <!-- Message content -->
        <div v-else class="break-words">
          <slot>{{ content }}</slot>
        </div>

        <!-- Status indicator for sent messages -->
        <div v-if="variant === 'sent' && showStatus && !loading" :class="chatMessageStatusStyles({ status })">
          <LIcon :name="getStatusIcon()" :size="size === 'sm' ? 'xs' : 'sm'" />
          <span class="text-xs">{{ getStatusText() }}</span>
        </div>
      </div>

      <!-- Timestamp -->
      <div v-if="showTimestamp && !loading" :class="chatMessageTimestampStyles({ variant })">
        {{ timestamp }}
      </div>
    </div>

    <!-- Avatar for sent messages (optional) -->
    <div v-if="variant === 'sent' && showAvatar" :class="chatMessageAvatarStyles({ size })">
      <div class="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold">
        Me
      </div>
    </div>
  </div>
</template>