import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import LBottomSheet from './LBottomSheet.vue';
import LBtn from '../Btn/LBtn.vue';

const meta: Meta<any> = {
  title: 'Lumicious/BottomSheet',
  component: LBottomSheet,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    title: { control: 'text' },
    size: { control: 'select', options: ['auto', 'full'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    position: { control: 'select', options: ['bottom', 'top', 'left', 'right'] },
    closable: { control: 'boolean' },
    persistent: { control: 'boolean' },
    overlay: { control: 'boolean' },
    closeOnOverlay: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    maxHeight: { control: 'text' },
    maxWidth: { control: 'text' },
    showCloseButton: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
  args: {
    modelValue: false,
    title: 'Bottom Sheet',
    size: 'auto',
    variant: 'glass',
    position: 'bottom',
    closable: true,
    persistent: false,
    overlay: true,
    closeOnOverlay: true,
    closeOnEscape: true,
    maxHeight: '',
    maxWidth: '',
    showCloseButton: true,
    rounded: true,
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
} satisfies Meta<typeof LBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

function renderSheet(extraArgs: Record<string, unknown> = {}) {
  return (args: any) => ({
    components: { LBottomSheet, LBtn },
    setup() {
      const mergedArgs = { ...args, ...extraArgs };
      const { modelValue, ...restArgs } = mergedArgs;
      const isOpen = ref(modelValue === true);
      return { isOpen, restArgs };
    },
    template: `
      <div>
        <LBtn
          label="Open Bottom Sheet"
          @click="isOpen = true"
          class="mb-4"
        />
        <LBottomSheet v-model="isOpen" v-bind="restArgs">
          <div class="space-y-4">
            <p class="text-white/80">Bottom sheet content goes here.</p>
          </div>
        </LBottomSheet>
      </div>
    `,
  });
}

export const Basic: Story = {
  render: renderSheet({ title: 'Basic Bottom Sheet' }),
};


export const Full: Story = {
  args: {
    modelValue: true
  },

  render: renderSheet({ title: 'Full Height Bottom Sheet', size: 'full' })
};

export const Top: Story = {
  render: renderSheet({ title: 'Top Sheet', position: 'top' }),
};

export const Left: Story = {
  render: renderSheet({ title: 'Left Sheet', position: 'left', size: 'md', maxWidth: '400px' }),
};

export const Right: Story = {
  args: {
    modelValue: true
  },

  render: renderSheet({ title: 'Right Sheet', position: 'right', size: 'md', maxWidth: '400px' })
};

export const Solid: Story = {
  render: renderSheet({ title: 'Solid Variant', variant: 'solid' }),
};

export const Outline: Story = {
  render: renderSheet({ title: 'Outline Variant', variant: 'outline' }),
};

export const NoOverlay: Story = {
  render: renderSheet({ title: 'No Overlay', overlay: false }),
};

export const Persistent: Story = {
  args: {
    modelValue: true
  },

  render: renderSheet({ title: 'Persistent Sheet', persistent: true, closable: false })
};

export const NoCloseButton: Story = {
  render: renderSheet({ title: 'No Close Button', showCloseButton: false, closable: false }),
};

export const CustomSize: Story = {
  args: {
    modelValue: true
  },

  render: renderSheet({ title: 'Custom Size', maxHeight: '300px', maxWidth: '500px' })
};

export const NoRounded: Story = {
  render: renderSheet({ title: 'No Rounded Corners', rounded: false }),
};

function renderSheetWithContent(variant: string = 'glass') {
  return (args: any) => ({
    components: { LBottomSheet, LBtn },
    setup() {
      const mergedArgs = { ...args, variant };
      const { modelValue, ...restArgs } = mergedArgs;
      const isOpen = ref(modelValue === true);
      return { isOpen, restArgs };
    },
    template: `
      <div>
        <LBtn
          label="Open Sheet with Content"
          @click="isOpen = true"
          class="mb-4"
        />
        <LBottomSheet v-model="isOpen" v-bind="restArgs">
          <div class="space-y-4">
            <p class="text-white/80">This is some content in the bottom sheet.</p>
            <div class="flex gap-2">
              <LBtn label="Button 1" size="sm" />
              <LBtn label="Button 2" size="sm" color="positive" />
            </div>
            <div class="p-3 bg-white/10 rounded-lg">
              <p class="text-white/60 text-sm">Some additional content area</p>
            </div>
          </div>
          <template #footer>
            <LBtn label="Confirm" @click="isOpen = false" />
          </template>
        </LBottomSheet>
      </div>
    `,
  });
}

export const WithContent: Story = {
  render: renderSheetWithContent('glass'),
};

export const WithContentSolid: Story = {
  render: renderSheetWithContent('solid'),
};

export const WithContentOutline: Story = {
  render: renderSheetWithContent('outline'),
};