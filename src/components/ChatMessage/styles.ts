import { cva } from 'class-variance-authority';

export const chatMessageStyles = cva(
  'l-chat-message flex gap-3 max-w-xs lg:max-w-md',
  {
    variants: {
      variant: {
        sent: 'justify-end',
        received: 'justify-start',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'received',
      size: 'md',
    },
  }
);

export const chatMessageBubbleStyles = cva(
  'l-chat-message-bubble relative rounded-2xl px-4 py-2 glass border-white/20 transition-all duration-200',
  {
    variants: {
      variant: {
        sent: 'bg-blue-500/20 border-blue-400/30 text-white',
        received: 'bg-white/10 border-white/20 text-gray-800',
      },
      size: {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-5 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'received',
      size: 'md',
    },
  }
);

export const chatMessageAvatarStyles = cva(
  'l-chat-message-avatar flex-shrink-0 rounded-full overflow-hidden glass border-white/20',
  {
    variants: {
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const chatMessageTimestampStyles = cva(
  'l-chat-message-timestamp text-xs opacity-60 mt-1',
  {
    variants: {
      variant: {
        sent: 'text-right',
        received: 'text-left',
      },
    },
    defaultVariants: {
      variant: 'received',
    },
  }
);

export const chatMessageStatusStyles = cva(
  'l-chat-message-status inline-flex items-center gap-1 ml-2',
  {
    variants: {
      status: {
        sent: 'text-blue-400',
        delivered: 'text-green-400',
        read: 'text-green-500',
        failed: 'text-red-400',
      },
    },
    defaultVariants: {
      status: 'sent',
    },
  }
);