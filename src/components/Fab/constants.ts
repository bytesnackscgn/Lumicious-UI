export const FAB_POSITIONS = {
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
} as const;

export const FAB_DEFAULTS = {
  size: 'md' as const,
  variant: 'glass' as const,
  color: 'primary' as const,
  position: 'bottom-right' as const,
  ripple: true as const,
} as const;