import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LBar from './LBar.vue';
import { LToolbar } from '../Toolbar';
import { LBtn } from '../Btn';
import { LHeadline } from '../Headline';

const meta = {
  title: 'Lumodo/Layout/Bar',
  component: LBar,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom'] },
    fixed: { control: 'boolean' },
  },
  args: {
    position: 'top',
    fixed: false,
  },
} satisfies Meta<typeof LBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopBar: Story = {
  render: (args) => ({
    components: { LBar, LToolbar, LBtn, LHeadline },
    setup() { return { args }; },
    template: `
      <div class="h-[200px] w-full bg-slate-900 overflow-hidden relative border border-white/10 rounded-xl">
        <LBar v-bind="args">
            <LToolbar>
                <LBtn icon="menu" variant="ghost" />
                <LHeadline :level="6">Header</LHeadline>
            </LToolbar>
        </LBar>
        <div class="p-8 text-white/40">Page Content scrolls under here...</div>
      </div>
    `,
  }),
};

export const BottomBar: Story = {
  args: {
    position: 'bottom',
  },
  render: (args) => ({
    components: { LBar, LToolbar, LBtn },
    setup() { return { args }; },
    template: `
      <div class="h-[200px] w-full bg-slate-900 overflow-hidden relative border border-white/10 rounded-xl">
        <div class="p-8 text-white/40">Page Content...</div>
        <LBar v-bind="args">
            <LToolbar class="justify-around p-2">
                <LBtn icon="home" variant="ghost" />
                <LBtn icon="search" variant="ghost" />
                <LBtn icon="bell" variant="ghost" />
                <LBtn icon="settings" variant="ghost" />
            </LToolbar>
        </LBar>
      </div>
    `,
  }),
};
