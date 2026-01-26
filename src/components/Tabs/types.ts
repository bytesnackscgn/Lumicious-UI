export interface TabsProps {
  modelValue?: any;
  align?: 'left' | 'center' | 'right' | 'justify';
  vertical?: boolean;
  dense?: boolean;
  activeColor?: string;
  indicatorColor?: string;
  class?: string;
}

export interface TabProps {
  name: any;
  label?: string;
  icon?: string;
  disable?: boolean;
  alert?: boolean | string;
  class?: string;
}

export interface TabPanelsProps {
  modelValue: any;
  animated?: boolean;
  vertical?: boolean;
  class?: string;
}

export interface TabPanelProps {
  name: any;
  class?: string;
}
