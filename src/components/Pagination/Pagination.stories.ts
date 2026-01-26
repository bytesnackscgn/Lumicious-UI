import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LPagination from './LPagination.vue';

const meta = {
  title: 'Lumodo/Navigation/Pagination',
  component: LPagination,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number' },
    max: { control: 'number' },
    maxPages: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disable: { control: 'boolean' },
    input: { control: 'boolean' },
  },
  args: {
    modelValue: 1,
    max: 20,
    maxPages: 7,
    size: 'md',
    disable: false,
    input: false,
    onChange: fn(),
    'onUpdate:modelValue': fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-slate-900 p-6 min-h-[200px] flex justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 5,
    max: 20,
  },
};

export const Small: Story = {
  args: {
    modelValue: 3,
    max: 10,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    modelValue: 8,
    max: 50,
    size: 'lg',
  },
};

export const WithInput: Story = {
  args: {
    modelValue: 5,
    max: 20,
    input: true,
  },
};

export const ManyPages: Story = {
  args: {
    modelValue: 15,
    max: 100,
    maxPages: 5,
  },
};

export const Disabled: Story = {
  args: {
    modelValue: 5,
    max: 20,
    disable: true,
  },
};

export const FirstPage: Story = {
  args: {
    modelValue: 1,
    max: 20,
  },
};

export const LastPage: Story = {
  args: {
    modelValue: 20,
    max: 20,
  },
};

export const FewPages: Story = {
  args: {
    modelValue: 2,
    max: 5,
  },
};