import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LIntersection from './LIntersection.vue';

const meta = {
  title: 'Lumodo/Intersection',
  component: LIntersection,
  tags: ['autodocs'],
  argTypes: {
    threshold: { 
      control: 'number', 
      min: 0, 
      max: 1, 
      step: 0.1,
      description: 'Intersection threshold (0-1)'
    },
    rootMargin: { 
      control: 'text', 
      description: 'Root margin for intersection observer'
    },
    once: { 
      control: 'boolean', 
      description: 'Trigger intersection only once'
    },
    fallback: { 
      control: 'boolean', 
      description: 'Show fallback state initially'
    },
  },
  args: {
    threshold: 0.1,
    rootMargin: '0px',
    once: true,
    fallback: false,
    onIntersect: fn(),
    onIntersectOnce: fn(),
    onLeave: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div class="p-8 bg-slate-900 min-h-screen">
          <div class="h-64 flex items-center justify-center mb-8">
            <div class="text-white/50 text-center">
              Scroll down to see the intersection component
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
} satisfies Meta<typeof LIntersection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
  template: `
    <div class="p-8 bg-white/10 glass border-white/20 rounded-xl">
      <div class="text-center">
        <div class="text-2xl font-bold mb-2">Intersection Component</div>
        <div class="text-white/60">
          Status: {{ isVisible ? 'Visible' : 'Hidden' }}
        </div>
      </div>
    </div>
  `,
  setup() {
    const isVisible = ref(false);
    return { isVisible };
  },
};

export const WithThreshold: Story = {
  args: {
    threshold: 0.5,
  },
  template: `
    <div class="p-8 bg-blue-500/20 glass border-blue-400/30 rounded-xl">
      <div class="text-center">
        <div class="text-xl font-bold mb-2">50% Threshold</div>
        <div class="text-blue-100">
          Status: {{ isVisible ? 'Visible (50%+)' : 'Hidden' }}
        </div>
      </div>
    </div>
  `,
  setup() {
    const isVisible = ref(false);
    return { isVisible };
  },
};

export const Continuous: Story = {
  args: {
    once: false,
  },
  template: `
    <div class="p-8 bg-green-500/20 glass border-green-400/30 rounded-xl">
      <div class="text-center">
        <div class="text-xl font-bold mb-2">Continuous Tracking</div>
        <div class="text-green-100">
          Status: {{ isVisible ? 'Visible' : 'Hidden' }}
        </div>
        <div class="text-sm text-green-200 mt-2">
          Watch the status change as you scroll
        </div>
      </div>
    </div>
  `,
  setup() {
    const isVisible = ref(false);
    return { isVisible };
  },
};

export const WithFallback: Story = {
  args: {
    fallback: true,
  },
  template: `
    <div class="p-8 bg-purple-500/20 glass border-purple-400/30 rounded-xl">
      <div class="text-center">
        <div class="text-xl font-bold mb-2">With Fallback</div>
        <div class="text-purple-100">
          Status: {{ isVisible ? 'Visible' : 'Loading...' }}
        </div>
      </div>
    </div>
  `,
  setup() {
    const isVisible = ref(false);
    return { isVisible };
  },
};

export const MultipleComponents: Story = {
  render: (args) => ({
    components: { LIntersection },
    setup() { return { args }; },
    template: `
      <div class="space-y-4">
        <LIntersection v-slot="{ isVisible: isVisible1 }">
          <div class="p-4 bg-red-500/20 glass border-red-400/30 rounded-lg">
            <div class="text-center">
              <div class="text-lg font-bold">Component 1</div>
              <div class="text-red-100">Visible: {{ isVisible1 }}</div>
            </div>
          </div>
        </LIntersection>
        
        <LIntersection v-slot="{ isVisible: isVisible2 }" :threshold="0.3">
          <div class="p-4 bg-yellow-500/20 glass border-yellow-400/30 rounded-lg">
            <div class="text-center">
              <div class="text-lg font-bold">Component 2 (30% threshold)</div>
              <div class="text-yellow-100">Visible: {{ isVisible2 }}</div>
            </div>
          </div>
        </LIntersection>
        
        <LIntersection v-slot="{ isVisible: isVisible3 }" :once="false">
          <div class="p-4 bg-indigo-500/20 glass border-indigo-400/30 rounded-lg">
            <div class="text-center">
              <div class="text-lg font-bold">Component 3 (Continuous)</div>
              <div class="text-indigo-100">Visible: {{ isVisible3 }}</div>
            </div>
          </div>
        </LIntersection>
      </div>
    `,
  }),
};