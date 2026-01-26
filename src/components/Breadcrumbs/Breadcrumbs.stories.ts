import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LBreadcrumbs from './LBreadcrumbs.vue';

const meta = {
  title: 'Lumodo/Navigation/Breadcrumbs',
  component: LBreadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
  },
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Smartphones' },
    ],
    onClick: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-slate-900 p-6 min-h-[200px]"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomSeparator: Story = {
  args: {
    separator: '→',
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Analytics', href: '/dashboard/analytics' },
      { label: 'Reports' },
    ],
  },
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Restricted', disabled: true },
      { label: 'Final' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Only Page' },
    ],
  },
};