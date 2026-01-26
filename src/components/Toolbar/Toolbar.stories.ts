import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LToolbar from './LToolbar.vue';
import { LBtn } from '../Btn';
import { LHeadline } from '../Headline';

const meta = {
  title: 'Lumodo/Layout/Toolbar',
  component: LToolbar,
  tags: ['autodocs'],
  argTypes: {
    inset: { control: 'boolean' },
    border: { control: 'boolean' },
  },
  args: {
    inset: false,
    border: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 min-h-[100px] border border-white/10 rounded-xl overflow-hidden"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LToolbar, LBtn, LHeadline },
    setup() { return { args }; },
    template: `
      <LToolbar v-bind="args" class="glass rounded-lg">
        <LBtn icon="menu" variant="ghost" />
        <LHeadline :level="6" class="m-0">Lumodo UI</LHeadline>
        <div class="flex-grow" />
        <LBtn icon="search" variant="ghost" />
        <LBtn icon="user" variant="ghost" />
      </LToolbar>
    `,
  }),
};

export const Inset: Story = {
  args: {
    inset: true,
  },
  render: (args) => ({
    components: { LToolbar, LBtn, LHeadline },
    setup() { return { args }; },
    template: `
      <LToolbar v-bind="args" class="glass rounded-lg">
        <LHeadline :level="6">App Title</LHeadline>
        <div class="flex-grow" />
        <LBtn label="Login" />
      </LToolbar>
    `,
  }),
};
