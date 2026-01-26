import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { LTabs, LTab, LTabPanels, LTabPanel } from './index';

const meta = {
  title: 'Lumodo/Layout/Tabs',
  component: LTabs,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
    vertical: { control: 'boolean' },
  },
  args: {
    modelValue: 'mails',
    align: 'left',
    vertical: false,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 min-h-[400px] text-white w-full max-w-2xl mx-auto"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LTabs, LTab, LTabPanels, LTabPanel },
    setup() { return { args }; },
    template: `
      <div class="glass rounded-2xl overflow-hidden border border-white/10">
        <LTabs v-bind="args" v-model="args.modelValue">
            <LTab name="mails" icon="mail" label="Mails" />
            <LTab name="alarms" icon="bell" label="Alarms" alert="negative" />
            <LTab name="movies" icon="film" label="Movies" />
        </LTabs>

        <LTabPanels v-model="args.modelValue" class="p-6 h-48">
            <LTabPanel name="mails">
                <div class="text-lg font-bold mb-2">My Mailbox</div>
                <p class="text-white/60">You have no new messages.</p>
            </LTabPanel>
            <LTabPanel name="alarms">
                 <div class="text-lg font-bold mb-2">Panic Station</div>
                 <p class="text-white/60">All systems operational.</p>
            </LTabPanel>
            <LTabPanel name="movies">
                 <div class="text-lg font-bold mb-2">Cinema</div>
                 <p class="text-white/60">Showing tonight: Blade Runner.</p>
            </LTabPanel>
        </LTabPanels>
      </div>
    `,
  }),
};

export const Vertical: Story = {
  args: {
    vertical: true,
    modelValue: 'profile',
  },
  render: (args) => ({
    components: { LTabs, LTab, LTabPanels, LTabPanel },
    setup() { return { args }; },
    template: `
      <div class="glass rounded-2xl overflow-hidden border border-white/10 flex h-64">
        <LTabs v-bind="args" v-model="args.modelValue" class="w-48 shrink-0">
            <LTab name="profile" label="Profile" icon="user" />
            <LTab name="security" label="Security" icon="shield" />
            <LTab name="billing" label="Billing" icon="credit-card" />
        </LTabs>

        <LTabPanels v-model="args.modelValue" class="p-6 flex-grow">
            <LTabPanel name="profile">Profile information...</LTabPanel>
            <LTabPanel name="security">Security settings...</LTabPanel>
            <LTabPanel name="billing">Billing overview...</LTabPanel>
        </LTabPanels>
      </div>
    `,
  }),
};
