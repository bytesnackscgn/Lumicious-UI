export type MenuAnchor = 'top left' | 'top middle' | 'top right' | 'bottom left' | 'bottom middle' | 'bottom right';

export interface MenuProps {
  modelValue?: boolean;
  anchor?: MenuAnchor;
  self?: MenuAnchor;
  offset?: [number, number];
  fit?: boolean;
  cover?: boolean;
  persistent?: boolean;
  class?: string;
}
