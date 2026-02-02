import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LParallax from './LParallax.vue';

const meta: Meta<typeof LParallax> = {
  title: 'Lumicious/Parallax',
  component: LParallax,
  tags: ['autodocs'],
  argTypes: {
    speed: { 
      control: 'number', 
      min: 0.1, 
      max: 2, 
      step: 0.1,
      description: 'Parallax speed multiplier'
    },
    direction: { 
      control: 'select', 
      options: ['up', 'down', 'left', 'right'],
      description: 'Parallax direction'
    },
    disabled: { 
      control: 'boolean', 
      description: 'Disable parallax effect'
    },
  },
  args: {
    speed: 0.5,
    direction: 'up',
    disabled: false,
    onScroll: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div class="p-8 bg-slate-900 min-h-screen">
          <div class="h-64 flex items-center justify-center mb-8">
            <div class="text-white/50 text-center">
              Scroll to see parallax effect
            </div>
          </div>
          <div class="h-96 overflow-y-auto">
            <div class="h-64"></div>
            <story />
            <div class="h-64"></div>
          </div>
        </div>
      `,
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  render: (args) => ({
    components: { LParallax },
    setup() { return { args }; },
    template: `
      <div class="h-64">
        <LParallax v-bind="args" class="h-full">
          <div class="h-full glass border-white/20 rounded-xl flex items-center justify-center">
            <div class="text-center">
              <div class="text-2xl font-bold mb-2">Parallax Content</div>
              <div class="text-white/60">Scroll to see the effect</div>
            </div>
          </div>
        </LParallax>
      </div>
    `,
  }),
};

export const WithSpeed: Story = {
  args: {
    speed: 1.2,
  },
  render: (args) => ({
    components: { LParallax },
    setup() { return { args }; },
    template: `
      <div class="h-64">
        <LParallax v-bind="args" class="h-full">
          <div class="h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 glass border-white/20 rounded-xl flex items-center justify-center">
            <div class="text-center">
              <div class="text-2xl font-bold mb-2">Fast Parallax</div>
              <div class="text-white/60">Speed: 1.2x</div>
            </div>
          </div>
        </LParallax>
      </div>
    `,
  }),
};

export const Directions: Story = {
  render: (args) => ({
    components: { LParallax },
    setup() { return { args }; },
    template: `
      <div class="space-y-8">
        <div class="h-32">
          <LParallax direction="up" class="h-full">
            <div class="h-full bg-red-500/30 glass border-red-400/30 rounded-xl flex items-center justify-center">
              <div class="text-center">
                <div class="text-lg font-bold">Up Direction</div>
              </div>
            </div>
          </LParallax>
        </div>
        
        <div class="h-32">
          <LParallax direction="down" class="h-full">
            <div class="h-full bg-green-500/30 glass border-green-400/30 rounded-xl flex items-center justify-center">
              <div class="text-center">
                <div class="text-lg font-bold">Down Direction</div>
              </div>
            </div>
          </LParallax>
        </div>
        
        <div class="h-32">
          <LParallax direction="left" class="h-full">
            <div class="h-full bg-blue-500/30 glass border-blue-400/30 rounded-xl flex items-center justify-center">
              <div class="text-center">
                <div class="text-lg font-bold">Left Direction</div>
              </div>
            </div>
          </LParallax>
        </div>
        
        <div class="h-32">
          <LParallax direction="right" class="h-full">
            <div class="h-full bg-purple-500/30 glass border-purple-400/30 rounded-xl flex items-center justify-center">
              <div class="text-center">
                <div class="text-lg font-bold">Right Direction</div>
              </div>
            </div>
          </LParallax>
        </div>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { LParallax },
    setup() { return { args }; },
    template: `
      <div class="h-64">
        <LParallax v-bind="args" class="h-full">
          <div class="h-full bg-gray-500/30 glass border-gray-400/30 rounded-xl flex items-center justify-center">
            <div class="text-center">
              <div class="text-2xl font-bold mb-2">Disabled Parallax</div>
              <div class="text-white/60">No movement on scroll</div>
            </div>
          </div>
        </LParallax>
      </div>
    `,
  }),
};

export const WithScrollProgress: Story = {
  args: {
    speed: 0.8,
  },
  render: (args) => ({
    components: { LParallax },
    setup() {
      const onScroll = (progress: number) => {
        console.log('Scroll progress:', progress);
      };
      return { args, onScroll };
    },
    template: `
      <div class="h-64">
        <LParallax 
          v-bind="args"
          @scroll="onScroll"
          class="h-full"
        >
          <div class="h-full bg-gradient-to-br from-indigo-500/30 to-pink-500/30 glass border-white/20 rounded-xl flex items-center justify-center">
            <div class="text-center">
              <div class="text-2xl font-bold mb-2">Scroll Progress</div>
              <div class="text-white/60">Check console for scroll progress</div>
            </div>
          </div>
        </LParallax>
      </div>
    `,
  }),
};

export const MultipleLayers: Story = {
  render: (args) => ({
    components: { LParallax },
    setup() { return { args }; },
    template: `
      <div class="h-96 relative">
        <!-- Background layer (slower) -->
        <LParallax :speed="0.3" class="absolute inset-0">
          <div class="h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 glass border-white/10 rounded-xl"></div>
        </LParallax>
        
        <!-- Middle layer (medium speed) -->
        <LParallax :speed="0.6" class="absolute inset-0">
          <div class="h-full flex items-center justify-center">
            <div class="w-32 h-32 bg-gradient-to-br from-blue-500/40 to-purple-500/40 glass border-white/30 rounded-full"></div>
          </div>
        </LParallax>
        
        <!-- Foreground layer (faster) -->
        <LParallax :speed="1.0" class="absolute inset-0">
          <div class="h-full flex items-center justify-center">
            <div class="text-center">
              <div class="text-3xl font-bold mb-2">Multi-Layer Parallax</div>
              <div class="text-white/60">Different speeds create depth</div>
            </div>
          </div>
        </LParallax>
      </div>
    `,
  }),
};
