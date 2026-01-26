import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LFab from './LFab.vue';

const meta = {
  title: 'Lumodo/Actions/Fab',
  component: LFab,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'] },
    extended: { control: 'boolean' },
    color: { control: 'select', options: ['primary', 'secondary', 'positive', 'negative', 'white'] },
  },
  args: {
    icon: 'plus',
    position: 'bottom-right',
    extended: false,
    onClick: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="relative bg-slate-900 min-h-[400px] w-full overflow-hidden"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LFab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Extended: Story = {
  args: {
    extended: true,
    label: 'Create New',
    icon: 'plus',
  },
};

export const Positions: Story = {
  render: (args) => ({
    components: { LFab },
    setup() { return { args }; },
    template: `
      <div>
        <LFab icon="bell" position="top-left" />
        <LFab icon="settings" position="top-right" />
        <LFab icon="message-circle" position="bottom-left" />
        <LFab icon="plus" position="bottom-right" color="positive" />
      </div>
    `,
  }),
};
