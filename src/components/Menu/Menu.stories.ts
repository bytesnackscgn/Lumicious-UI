import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LMenu from './LMenu.vue';
import { LBtn } from '../Btn';
import { LList, LItem, LItemSection, LItemLabel } from '../List';
import { LIcon } from '../Icon';

const meta = {
  title: 'Lumodo/Overlays/Menu',
  component: LMenu,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-24 bg-slate-900 min-h-[400px] flex items-start justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LMenu, LBtn, LList, LItem, LItemSection, LItemLabel, LIcon },
    setup() { return { args }; },
    template: `
      <div class="relative">
        <LBtn label="Account Menu" @click="args.modelValue = !args.modelValue" />
        <LMenu v-model="args.modelValue" class="w-48 mt-2">
            <LList dense padding>
                <LItem clickable>
                    <LItemSection side><LIcon name="user" size="xs" /></LItemSection>
                    <LItemSection><LItemLabel>Profile</LItemLabel></LItemSection>
                </LItem>
                <LItem clickable>
                    <LItemSection side><LIcon name="settings" size="xs" /></LItemSection>
                    <LItemSection><LItemLabel>Settings</LItemLabel></LItemSection>
                </LItem>
                <div class="h-[1px] bg-white/5 my-1" />
                <LItem clickable class="text-red-400">
                    <LItemSection side><LIcon name="log-out" size="xs" /></LItemSection>
                    <LItemSection><LItemLabel>Logout</LItemLabel></LItemSection>
                </LItem>
            </LList>
        </LMenu>
      </div>
    `,
  }),
  args: {
    modelValue: true,
  }
};
