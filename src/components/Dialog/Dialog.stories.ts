import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LDialog from './LDialog.vue';
import { LCard } from '../Card';
import { LBtn } from '../Btn';
import { LText } from '../Text';

const meta: Meta<any> = {
  title: 'Lumicious/Overlays/Dialog',
  component: LDialog,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right', 'center'] },
    persistent: { control: 'boolean' },
  },
  args: {
    modelValue: false,
    position: 'center',
    persistent: false,
  },
  decorators: [
    () => ({
      template: `
        <div class="p-8 bg-slate-900 min-h-screen flex items-center justify-center">
          <story />
        </div>
      `,
    }),
  ],
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

export const PositionExamples: Story = {
  render: () => ({
    components: { LDialog, LCard, LBtn, LText },
    data() {
      return {
        isOpen: false,
        currentPosition: 'center',
      };
    },
    methods: {
      openWith(pos: string) {
        this.currentPosition = pos;
        this.isOpen = true;
      },
    },
    template: `
      <div class="flex flex-col gap-4 w-full max-w-2xl">
        <div class="flex flex-wrap gap-3 justify-center">
          <LBtn label="Center" @click="openWith('center')" />
          <LBtn label="Top" @click="openWith('top')" />
          <LBtn label="Bottom" @click="openWith('bottom')" />
          <LBtn label="Left" @click="openWith('left')" />
          <LBtn label="Right" @click="openWith('right')" />
        </div>
        <LDialog v-model="isOpen" :position="currentPosition">
            <LCard :title="currentPosition.charAt(0).toUpperCase() + currentPosition.slice(1)" subtitle="Position demo" class="w-[400px]">
                <LText class="mt-4">This dialog is positioned at <strong>{{ currentPosition }}</strong>.</LText>
                <template #actions>
                    <LBtn label="Close" variant="ghost" @click="isOpen = false" />
                    <LBtn label="Confirm" @click="isOpen = false" />
                </template>
            </LCard>
        </LDialog>
      </div>
    `,
  }),
};

export const FullWidth: Story = {
  render: (args) => ({
    components: { LDialog, LCard, LBtn, LText },
    setup() { return { args }; },
    template: `
      <div>
        <LBtn label="Open Full Width Dialog" @click="args.modelValue = true" />
        <LDialog v-bind="args" full-width v-model="args.modelValue">
            <LCard title="Cloud Storage" subtitle="Plan renewal" class="w-full">
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

export const FullHeight: Story = {
  render: (args) => ({
    components: { LDialog, LCard, LBtn, LText },
    setup() { return { args }; },
    template: `
      <div>
        <LBtn label="Open Full Height Dialog" @click="args.modelValue = true" />
        <LDialog v-bind="args" full-height v-model="args.modelValue">
            <LCard title="Full Height Dialog" subtitle="Takes full viewport height" class="h-full w-full">
                <LText>This dialog fills the entire viewport height.</LText>
                <template #actions>
                    <LBtn label="Close" variant="ghost" @click="args.modelValue = false" />
                    <LBtn label="Confirm" @click="args.modelValue = false" />
                </template>
            </LCard>
        </LDialog>
      </div>
    `,
  }),
};

export const DialogAsBottomSheet: Story = {
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
            <LCard class="rounded-b-none">
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
