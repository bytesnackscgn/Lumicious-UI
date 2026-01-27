import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LBreadcrumbs from './LBreadcrumbs.vue';

const meta = {
  title: 'Lumodo/Breadcrumbs',
  component: LBreadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'secondary', 'white'] },
    separator: { control: 'text' },
    maxItems: { control: 'number' },
    ellipsis: { control: 'boolean' },
  },
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Breadcrumbs', href: '/components/breadcrumbs' },
    ],
    size: 'md',
    color: 'primary',
    separator: '/',
    maxItems: 0,
    ellipsis: true,
    onClick: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Breadcrumbs', href: '/components/breadcrumbs' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Analytics', href: '/dashboard/analytics' },
      { label: 'Reports', href: '/dashboard/analytics/reports' },
    ],
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Settings', href: '/settings' },
    ],
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Profile', href: '/profile' },
      { label: 'Edit', href: '/profile/edit' },
    ],
  },
};

export const SecondaryColor: Story = {
  args: {
    color: 'secondary',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
};

export const WhiteColor: Story = {
  args: {
    color: 'white',
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    separator: '→',
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details', href: '/products/details' },
    ],
  },
};

export const WithEllipsis: Story = {
  args: {
    maxItems: 3,
    ellipsis: true,
    items: Array.from({ length: 8 }, (_, i) => ({
      label: `Page ${i + 1}`,
      href: `/page/${i + 1}`,
    })),
  },
};

export const DisabledItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Disabled', href: '/disabled', disabled: true },
      { label: 'Active', href: '/active' },
    ],
  },
};

export const NoLinks: Story = {
  args: {
    items: [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
    ],
  },
};