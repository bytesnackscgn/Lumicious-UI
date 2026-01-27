import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LKnob from './LKnob.vue';

const meta = {
  title: 'Lumodo/Knob',
  component: LKnob,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    size: { control: 'select', options: ['xs', 's', 'md', 'lg', 'xl'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    color: { control: 'select', options: ['primary', 'secondary', 'positive', 'negative', 'info', 'warning', 'white'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    showValue: { control: 'boolean' },
    valuePrecision: { control: 'number' },
    trackWidth: { control: 'number' },
    knobSize: { control: 'number' },
  },
  args: {
    modelValue: 50,
    min: 0,
    max: 100,
    step: 1,
    size: 'md',
    variant: 'glass',
    color: 'primary',
    disabled: false,
    readonly: false,
    showValue: true,
    valuePrecision: 0,
    trackWidth: 8,
    knobSize: 20,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LKnob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    modelValue: 50,
  },
};

export const Volume: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    modelValue: 75,
    color: 'primary',
  },
};

export const Temperature: Story = {
  args: {
    min: -10,
    max: 40,
    step: 1,
    modelValue: 22,
    color: 'info',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    modelValue: 25,
  },
};

export const Small: Story = {
  args: {
    size: 's',
    modelValue: 30,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    modelValue: 70,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    modelValue: 85,
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    modelValue: 40,
    color: 'positive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    modelValue: 60,
    color: 'warning',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    modelValue: 25,
  },
};

export const Readonly: Story = {
  args: {
    readonly: true,
    modelValue: 80,
  },
};

export const NoValue: Story = {
  args: {
    showValue: false,
    modelValue: 90,
  },
};

export const Precision: Story = {
  args: {
    valuePrecision: 1,
    step: 0.1,
    modelValue: 33.3,
  },
};

export const Custom: Story = {
  args: {
    min: 0,
    max: 1000,
    step: 10,
    modelValue: 500,
    trackWidth: 12,
    knobSize: 24,
    color: 'secondary',
  },
};