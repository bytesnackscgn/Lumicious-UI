
import type { GradientDirection } from "@/components";
import { gradientColors } from "@/constants/ui/gradients";

export const getGradientClass = (color: string = 'white', direction: GradientDirection = 'to-r') => {
  return `bg-gradient-${direction} ${gradientColors[color]} bg-clip-text text-transparent`;
};
