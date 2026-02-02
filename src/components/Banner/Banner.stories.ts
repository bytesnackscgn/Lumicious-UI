import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LBanner from './LBanner.vue';
import { LBtn } from '../Btn';

const meta: Meta<any> = {
  title: 'Lumicious/Feedback/Banner',
  component: LBanner,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    color: { control: 'select', options: ['primary', 'positive', 'negative', 'warning', 'info'] },
    dense: { control: 'boolean' },
  },
  args: {
    label: 'Welcome to the Lumicious UI documentation. Exploring glassmorphism foundations.',
    variant: 'glass',
    color: 'primary',
    dense: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-start justify-center text-white w-full"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'info',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    icon: 'alert-triangle',
    variant: 'solid',
    label: 'Your subscription is about to expire. Please update your billing info.',
  },
  render: (args) => ({
    components: { LBanner, LBtn },
    setup() { return { args }; },
    template: `
      <LBanner v-bind="args">
        <template #actions>
          <LBtn label="Update" size="sm" />
        </template>
      </LBanner>
    `,
  }),
};

export const Negative: Story = {
  args: {
    color: 'negative',
    icon: 'x-circle',
    variant: 'solid',
    label: 'Failed to sync data with the server. Checkout your connection.',
  },
  render: (args) => ({
    components: { LBanner, LBtn },
    setup() { return { args }; },
    template: `
      <LBanner v-bind="args">
        <template #actions>
          <LBtn label="Dismiss" variant="ghost" size="sm" />
          <LBtn label="Retry" size="sm" />
        </template>
      </LBanner>
    `,
  }),
};
