export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;

export interface AvatarProps {
  src?: string;
  name?: string; // For initials
  size?: AvatarSize;
  rounded?: boolean;
  square?: boolean;
  bordered?: boolean;
  icon?: string;
  color?: string;
}
