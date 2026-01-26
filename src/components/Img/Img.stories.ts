import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LImg from './LImg.vue';

const meta = {
  title: 'Lumodo/Media/Img',
  component: LImg,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline', 'ghost'] },
    fit: { control: 'select', options: ['contain', 'cover', 'fill', 'none'] },
    rounded: { control: 'boolean' },
    loading: { control: 'select', options: ['lazy', 'eager'] },
  },
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    alt: 'Sample image',
    size: 'md',
    variant: 'glass',
    fit: 'cover',
    rounded: false,
    loading: 'lazy',
    onLoad: fn(),
    onError: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-slate-900 p-6 min-h-[400px] flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop',
  },
};

export const Large: Story = {
  args: {
    size: 'xl',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
  },
};

export const DifferentVariants: Story = {
  render: (args) => ({
    components: { LImg },
    setup() { return { args }; },
    template: `
      <div class="flex flex-wrap gap-4">
        <LImg variant="glass" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" />
        <LImg variant="solid" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" />
        <LImg variant="outline" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" />
        <LImg variant="ghost" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" />
      </div>
    `,
  }),
};

export const DifferentFits: Story = {
  render: (args) => ({
    components: { LImg },
    setup() { return { args }; },
    template: `
      <div class="flex flex-wrap gap-4">
        <LImg fit="contain" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop" />
        <LImg fit="cover" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop" />
        <LImg fit="fill" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop" />
        <LImg fit="none" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop" />
      </div>
    `,
  }),
};

export const Rounded: Story = {
  args: {
    rounded: true,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
  },
};

export const WithCustomSize: Story = {
  args: {
    width: 200,
    height: 150,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop',
  },
};

export const LoadingStates: Story = {
  render: (args) => ({
    components: { LImg },
    setup() { return { args }; },
    template: `
      <div class="flex flex-wrap gap-4">
        <LImg src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" />
        <LImg src="invalid-image-url" />
      </div>
    `,
  }),
};