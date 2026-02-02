import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LPagination from './LPagination.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Pagination',
  component: LPagination,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'secondary', 'white'] },
    shape: { control: 'select', options: ['rounded', 'square'] },
    disabled: { control: 'boolean' },
    showSizeChanger: { control: 'boolean' },
    showQuickJumper: { control: 'boolean' },
    showTotal: { control: 'boolean' },
    hideOnSinglePage: { control: 'boolean' },
    ellipsis: { control: 'boolean' },
  },
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
    showSizeChanger: false,
    showQuickJumper: false,
    showTotal: true,
    size: 'md',
    color: 'primary',
    shape: 'rounded',
    disabled: false,
    hideOnSinglePage: false,
    ellipsis: true,
    onChange: fn(),
    onPageSizeChange: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    total: 100,
    current: 1,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    total: 50,
    current: 1,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    total: 200,
    current: 1,
  },
};

export const SecondaryColor: Story = {
  args: {
    color: 'secondary',
    total: 75,
    current: 1,
  },
};

export const WhiteColor: Story = {
  args: {
    color: 'white',
    total: 100,
    current: 1,
  },
};

export const SquareShape: Story = {
  args: {
    shape: 'square',
    total: 100,
    current: 1,
  },
};

export const WithSizeChanger: Story = {
  args: {
    showSizeChanger: true,
    total: 100,
    current: 1,
  },
};

export const WithQuickJumper: Story = {
  args: {
    showQuickJumper: true,
    total: 100,
    current: 1,
  },
};

export const WithAllFeatures: Story = {
  args: {
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: true,
    total: 100,
    current: 1,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    total: 100,
    current: 1,
  },
};

export const ManyPages: Story = {
  args: {
    total: 1000,
    current: 5,
    pageSize: 10,
  },
};

export const FewPages: Story = {
  args: {
    total: 5,
    current: 1,
    hideOnSinglePage: true,
  },
};

export const NoEllipsis: Story = {
  args: {
    total: 100,
    current: 1,
    ellipsis: false,
  },
};

export const CurrentPageMiddle: Story = {
  args: {
    total: 100,
    current: 5,
  },
};

export const CurrentPageEnd: Story = {
  args: {
    total: 100,
    current: 10,
  },
};