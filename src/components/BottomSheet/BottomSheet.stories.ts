import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import LBottomSheet from './LBottomSheet.vue';

const meta: Meta<any> = {
  title: 'Lumodo/BottomSheet',
  component: LBottomSheet,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    title: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
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
    size: 'md',
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
    (story) => ({
      components: { story },
      template: `
        <div class="p-8 bg-slate-900 min-h-screen flex items-center justify-center">
          <button 
            @click="story.open = true" 
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Open Bottom Sheet
          </button>
          <story />
        </div>
      `,
      setup() {
        return { story };
      },
    }),
  ],
} satisfies Meta<typeof LBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Basic Bottom Sheet',
  },
};

export const Small: Story = {
  args: {
    title: 'Small Bottom Sheet',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    title: 'Large Bottom Sheet',
    size: 'lg',
  },
};

export const Full: Story = {
  args: {
    title: 'Full Height Bottom Sheet',
    size: 'full',
  },
};

export const Top: Story = {
  args: {
    title: 'Top Sheet',
    position: 'top',
  },
};

export const Left: Story = {
  args: {
    title: 'Left Sheet',
    position: 'left',
    size: 'md',
    maxWidth: '400px',
  },
};

export const Right: Story = {
  args: {
    title: 'Right Sheet',
    position: 'right',
    size: 'md',
    maxWidth: '400px',
  },
};

export const Solid: Story = {
  args: {
    title: 'Solid Variant',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    title: 'Outline Variant',
    variant: 'outline',
  },
};

export const NoOverlay: Story = {
  args: {
    title: 'No Overlay',
    overlay: false,
  },
};

export const Persistent: Story = {
  args: {
    title: 'Persistent Sheet',
    persistent: true,
    closable: false,
  },
};

export const NoCloseButton: Story = {
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    closable: false,
  },
};

export const CustomSize: Story = {
  args: {
    title: 'Custom Size',
    maxHeight: '300px',
    maxWidth: '500px',
  },
};

export const NoRounded: Story = {
  args: {
    title: 'No Rounded Corners',
    rounded: false,
  },
};

export const WithContent: Story = {
  args: {
    title: 'Content Example',
  },
  render: (args) => ({
    components: { LBottomSheet },
    setup() {
      const open = ref(false);
      return { open, args };
    },
    template: `
      <div>
        <button
          @click="open = true"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mb-4"
        >
          Open Sheet with Content
        </button>
        <LBottomSheet
          v-model="open"
          v-bind="args"
        >
          <div class="space-y-4">
            <p class="text-white/80">This is some content in the bottom sheet.</p>
            <div class="flex gap-2">
              <button class="px-3 py-1 bg-blue-500 text-white rounded text-sm">Button 1</button>
              <button class="px-3 py-1 bg-green-500 text-white rounded text-sm">Button 2</button>
            </div>
            <div class="p-3 bg-white/10 rounded-lg">
              <p class="text-white/60 text-sm">Some additional content area</p>
            </div>
          </div>
          <template #footer>
            <button
              @click="open = false"
              class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Confirm
            </button>
          </template>
        </LBottomSheet>
      </div>
    `,
  }),
};