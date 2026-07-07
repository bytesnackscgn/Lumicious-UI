import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LBar from './LBar.vue';

const meta = {
  title: 'Components/Bar',
  component: LBar,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    fixed: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    dense: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof LBar>;

export default meta;
type Story = StoryObj<typeof LBar>;

export const Default: Story = {
  args: {
    position: 'top',
    fixed: false,
    rounded: true,
    dense: false,
  },
};

export const RoundedNone: Story = {
  args: {
    position: 'top',
    fixed: false,
    rounded: false,
    dense: false,
  },
};

export const Fixed: Story = {
  args: {
    position: 'top',
    fixed: true,
    rounded: true,
    dense: false,
  },
};

export const LeftPosition: Story = {
  args: {
    position: 'left',
    fixed: false,
    rounded: true,
    dense: false,
    width: 80,
  },
};

export const RightPosition: Story = {
  args: {
    position: 'right',
    fixed: false,
    rounded: true,
    dense: false,
    width: 80,
  },
};

export const Dense: Story = {
  args: {
    position: 'top',
    fixed: false,
    rounded: true,
    dense: true,
  },
};

export const LeftFixed: Story = {
  args: {
    position: 'left',
    fixed: true,
    rounded: true,
    dense: false,
    width: 80,
  },
};