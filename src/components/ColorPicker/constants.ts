export const DEFAULT_PRESET_COLORS = [
  '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
  '#EC4899', '#6366F1', '#14B8A6', '#F97316', '#84CC16',
  '#06B6D4', '#A855F7', '#F43F5E', '#0EA5E9', '#22C55E'
];

export const COLOR_FORMATS = {
  hex: { label: 'HEX', pattern: /^#[0-9A-F]{6}$/i },
  rgb: { label: 'RGB', pattern: /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i },
  hsl: { label: 'HSL', pattern: /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/i }
} as const;