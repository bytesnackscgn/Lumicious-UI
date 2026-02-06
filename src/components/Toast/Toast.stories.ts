import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LToastProvider from './LToastProvider.vue';
import { useToast } from './useToast';
import { LBtn } from '../Btn';
import { defineComponent } from 'vue';

const ToastDemo = defineComponent({
  components: { LBtn },
  setup() {
    const toast = useToast();

    const showToast = (position: any = 'top-right') => {
      toast.add({
        message: `Notification at ${position}`,
        position,
        variant: 'glass',
        color: 'primary',
        icon: 'info',
      });
    };

    const showVariant = (color: any) => {
      toast.add({
        message: `This is a ${color} message`,
        color,
        variant: 'solid',
        icon: 'check-circle',
      });
    };

    return { showToast, showVariant };
  },
  template: `
    <div class="flex flex-col gap-8 items-start">
      <div class="flex flex-col gap-2">
        <h3 class="text-white text-lg font-bold">Positions</h3>
        <div class="flex flex-wrap gap-2">
          <LBtn @click="showToast('top-left')" label="Top Left" size="sm" variant="outline" />
          <LBtn @click="showToast('top-center')" label="Top Center" size="sm" variant="outline" />
          <LBtn @click="showToast('top-right')" label="Top Right" size="sm" variant="outline" />
        </div>
        <div class="flex flex-wrap gap-2">
          <LBtn @click="showToast('bottom-left')" label="Bottom Left" size="sm" variant="outline" />
          <LBtn @click="showToast('bottom-center')" label="Bottom Center" size="sm" variant="outline" />
          <LBtn @click="showToast('bottom-right')" label="Bottom Right" size="sm" variant="outline" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="text-white text-lg font-bold">Variants</h3>
        <div class="flex flex-wrap gap-2">
          <LBtn @click="showVariant('primary')" label="Primary" color="primary" size="sm" />
          <LBtn @click="showVariant('positive')" label="Positive" color="positive" size="sm" />
          <LBtn @click="showVariant('negative')" label="Negative" color="negative" size="sm" />
          <LBtn @click="showVariant('warning')" label="Warning" color="warning" size="sm" />
          <LBtn @click="showVariant('info')" label="Info" color="info" size="sm" />
        </div>
      </div>
    </div>
  `
});

const meta: Meta<typeof LToastProvider> = {
  title: 'Lumicious/Feedback/Toast',
  component: LToastProvider,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      components: { LToastProvider, story },
      template: `
        <LToastProvider>
          <div class="p-8 bg-slate-900 min-h-[400px] w-full flex items-center justify-center">
            <story />
          </div>
        </LToastProvider>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => ({
    components: { ToastDemo },
    template: '<ToastDemo />',
  }),
};
