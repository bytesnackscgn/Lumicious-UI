import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { LList, LItem, LItemSection, LItemLabel } from './index';
import { LIcon } from '../Icon';

const meta: Meta<any> = {
  title: 'Lumicious/Layout/List',
  component: LList,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 min-h-[400px] flex items-start justify-center text-white"><div class="w-full max-w-sm"><story /></div></div>',
    }),
  ],
} satisfies Meta<typeof LList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: (args) => ({
    components: { LList, LItem, LItemSection, LItemLabel, LIcon },
    setup() { return { args }; },
    template: `
      <LList v-bind="args" bordered separator padding>
        <LItemLabel header>User Management</LItemLabel>
        
        <LItem clickable>
          <LItemSection avatar>
            <LIcon name="user" />
          </LItemSection>
          <LItemSection>
            <LItemLabel>Account Settings</LItemLabel>
            <LItemLabel caption>Email, password and visibility</LItemLabel>
          </LItemSection>
          <LItemSection side>
            <LIcon name="chevron-right" size="xs" />
          </LItemSection>
        </LItem>

        <LItem clickable active>
          <LItemSection avatar>
            <LIcon name="shield" />
          </LItemSection>
          <LItemSection>
            <LItemLabel>Security</LItemLabel>
            <LItemLabel caption>2FA and session management</LItemLabel>
          </LItemSection>
          <LItemSection side>
             <LIcon name="chevron-right" size="xs" />
          </LItemSection>
        </LItem>

        <LItem clickable disabled>
          <LItemSection avatar>
            <LIcon name="credit-card" />
          </LItemSection>
          <LItemSection>
            <LItemLabel>Billing</LItemLabel>
            <LItemLabel caption>Upgrade your plan (Locked)</LItemLabel>
          </LItemSection>
        </LItem>
      </LList>
    `,
  }),
};