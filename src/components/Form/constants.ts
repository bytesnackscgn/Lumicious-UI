export const FORM_LAYOUTS = {
  vertical: 'flex flex-col space-y-4',
  horizontal: 'flex flex-row flex-wrap items-center gap-6',
  inline: 'flex flex-row flex-wrap items-center gap-4',
} as const;

export const FORM_LABEL_POSITIONS = {
  top: 'flex-col',
  left: 'flex-row items-start',
  right: 'flex-row items-start flex-row-reverse',
} as const;

export const FORM_SPACING = {
  sm: 'space-y-2',
  md: 'space-y-4',
  lg: 'space-y-6',
} as const;

export const FORM_DEFAULTS = {
  size: 'md' as const,
  layout: 'vertical' as const,
  variant: 'glass' as const,
  validateOn: 'onBlur' as const,
  labelPosition: 'top' as const,
  spacing: 'md' as const,
  showErrors: true as const,
  validateOnChange: true as const,
  validateOnBlur: true as const,
} as const;