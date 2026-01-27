export type PopupProxyTrigger = 'click' | 'hover';
export type PopupProxyPlacement = 
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface PopupProxyProps {
  trigger?: PopupProxyTrigger;
  placement?: PopupProxyPlacement;
  offset?: number;
  autoClose?: boolean;
  disabled?: boolean;
  triggerText?: string;
  triggerClass?: string;
  popupClass?: string;
}

export interface PopupProxySlots {
  default: {
    isOpen: boolean;
    close: () => void;
  };
  trigger: {
    isOpen: boolean;
    toggle: () => void;
  };
}

export type PopupProxyEmits = {
  open: [];
  close: [];
  toggle: [isOpen: boolean];
};

export type PopupProxyObserverProps = PopupProxyProps;