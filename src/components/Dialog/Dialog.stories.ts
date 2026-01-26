import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LDialog from './LDialog.vue';
import { LCard } from '../Card';
import { LBtn } from '../Btn';
import { LText } from '../Text';

const meta = {
  title: 'Lumodo/Overlays/Dialog',
  component: LDialog,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['center', 'top', 'bottom'] },
    persistent: { control: 'boolean' },
    maximized: { control: 'boolean' },
  },
  args: {
    modelValue: false,
    position: 'center',
    persistent: false,
  },
} satisfies Meta<typeof LDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LDialog, LCard, LBtn, LText },
    setup() { return { args }; },
    template: `
      <div>
        <LBtn label="Open Standard Dialog" @click="args.modelValue = true" />
        <LDialog v-bind="args" v-model="args.modelValue">
            <LCard title="Cloud Storage" subtitle="Plan renewal" class="w-[400px]">
                <LText>Your subscription is about to expire in 3 days. Would you like to renew now for a 20% discount?</LText>
                <template #actions>
                    <LBtn label="Maybe Later" variant="ghost" @click="args.modelValue = false" />
                    <LBtn label="Renew Now" @click="args.modelValue = false" />
                </template>
            </LCard>
        </LDialog>
      </div>
    `,
  }),
};

export const BottomSheet: Story = {
  args: {
    position: 'bottom',
    fullWidth: true,
  },
  render: (args) => ({
    components: { LDialog, LCard, LBtn, LText },
    setup() { return { args }; },
    template: `
      <div>
        <LBtn label="Open Bottom Sheet" @click="args.modelValue = true" />
        <LDialog v-bind="args" v-model="args.modelValue">
            <LCard class="w-full rounded-b-none">
                <div class="p-4 flex flex-col gap-4">
                    <LBtn label="Share Link" icon="share" variant="ghost" class="justify-start px-0" />
                    <LBtn label="Save for later" icon="bookmark" variant="ghost" class="justify-start px-0" />
                    <LBtn label="Report issue" icon="flag" variant="ghost" class="justify-start px-0" />
                    <LBtn label="Cancel" color="negative" @click="args.modelValue = false" />
                </div>
            </LCard>
        </LDialog>
      </div>
    `,
  }),
};
