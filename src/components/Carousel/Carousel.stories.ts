import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LCarousel from './LCarousel.vue';

const meta = {
  title: 'Lumodo/Carousel',
  component: LCarousel,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    autoplay: { control: 'select', options: ['play', 'pause', 'stop'] },
    showDots: { control: 'boolean' },
    showArrows: { control: 'boolean' },
    loop: { control: 'boolean' },
  },
  args: {
    size: 'md',
    variant: 'glass',
    direction: 'horizontal',
    autoplay: 'pause',
    interval: 3000,
    showDots: true,
    showArrows: true,
    loop: true,
    onChange: fn(),
    onSlide: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 flex items-center justify-center"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: [
      {
        id: 1,
        title: 'Slide 1',
        description: 'This is the first slide',
        image: 'https://via.placeholder.com/400x200?text=Slide+1',
      },
      {
        id: 2,
        title: 'Slide 2',
        description: 'This is the second slide',
        image: 'https://via.placeholder.com/400x200?text=Slide+2',
      },
      {
        id: 3,
        title: 'Slide 3',
        description: 'This is the third slide',
        image: 'https://via.placeholder.com/400x200?text=Slide+3',
      },
    ],
  },
};

export const WithContent: Story = {
  args: {
    items: [
      {
        id: 1,
        content: '<div class="text-center"><h3 class="text-2xl font-bold mb-2">Welcome!</h3><p class="text-gray-600">This is a custom content slide</p></div>',
      },
      {
        id: 2,
        content: '<div class="text-center"><h3 class="text-2xl font-bold mb-2">Features</h3><ul class="text-left text-gray-600"><li>✓ Glassmorphism design</li><li>✓ Smooth animations</li><li>✓ Responsive layout</li></ul></div>',
      },
      {
        id: 3,
        content: '<div class="text-center"><h3 class="text-2xl font-bold mb-2">Get Started</h3><p class="text-gray-600">Start using Lumodo today!</p></div>',
      },
    ],
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    items: [
      {
        id: 1,
        title: 'Feature 1',
        description: 'Amazing feature description',
      },
      {
        id: 2,
        title: 'Feature 2',
        description: 'Another amazing feature',
      },
      {
        id: 3,
        title: 'Feature 3',
        description: 'Final amazing feature',
      },
    ],
  },
};

export const Autoplay: Story = {
  args: {
    autoplay: 'play',
    interval: 2000,
    items: [
      {
        id: 1,
        title: 'Auto Slide 1',
        description: 'This auto-advances',
      },
      {
        id: 2,
        title: 'Auto Slide 2',
        description: 'This auto-advances too',
      },
      {
        id: 3,
        title: 'Auto Slide 3',
        description: 'This auto-advances as well',
      },
    ],
  },
};

export const SolidVariant: Story = {
  args: {
    variant: 'solid',
    items: [
      {
        id: 1,
        title: 'Solid Design',
        description: 'Clean and modern look',
      },
      {
        id: 2,
        title: 'Professional',
        description: 'Business ready components',
      },
    ],
  },
};

export const NoControls: Story = {
  args: {
    showDots: false,
    showArrows: false,
    items: [
      {
        id: 1,
        title: 'Minimal',
        description: 'No controls shown',
      },
      {
        id: 2,
        title: 'Clean',
        description: 'Just the content',
      },
    ],
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LCarousel },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-8">
        <LCarousel :items="args.items" size="sm" />
        <LCarousel :items="args.items" size="md" />
        <LCarousel :items="args.items" size="lg" />
        <LCarousel :items="args.items" size="xl" />
      </div>
    `,
  }),
  args: {
    items: [
      {
        id: 1,
        title: 'Small',
        description: 'Small carousel',
      },
      {
        id: 2,
        title: 'Medium',
        description: 'Medium carousel',
      },
    ],
  },
};

export const LoadingState: Story = {
  render: () => ({
    components: { LSkeleton: import('../Skeleton/LSkeleton.vue').then(m => m.default) },
    template: `
      <div class="space-y-8">
        <h3 className="text-lg font-semibold mb-4">Loading States</h3>
        <LSkeleton />
        <LSkeleton size="sm" />
        <LSkeleton size="lg" variant="solid" />
        <LSkeleton direction="vertical" />
      </div>
    `,
  }),
};

export const HeadlessExample: Story = {
  render: () => ({
    components: { LCarouselHeadless: import('./LCarouselHeadless.vue').then(m => m.default) },
    setup() {
      const items = [
        {
          id: 1,
          title: 'Custom Slide 1',
          description: 'Fully customized content',
        },
        {
          id: 2,
          title: 'Custom Slide 2',
          description: 'Complete control over presentation',
        },
        {
          id: 3,
          title: 'Custom Slide 3',
          description: 'Tailored to your needs',
        },
      ];

      return {
        items,
        currentIndex: 0,
        onSlideChange: (index: number) => console.log('Slide changed to:', index),
      };
    },
    template: `
      <div class="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Headless Carousel</h3>
        <LCarouselHeadless 
          :items="items"
          :current-index="currentIndex"
          @change="currentIndex = $event"
          @slide="onSlideChange"
        >
          <template #default="{ currentSlide, nextSlide, prevSlide, goToSlide }">
            <div class="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-white p-8">
                <div class="text-center">
                  <h2 class="text-3xl font-bold mb-4">{{ currentSlide.title }}</h2>
                  <p class="text-lg opacity-90">{{ currentSlide.description }}</p>
                  <div class="mt-6 flex gap-4 justify-center">
                    <button 
                      @click="prevSlide"
                      class="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
                    >
                      Previous
                    </button>
                    <button 
                      @click="nextSlide"
                      class="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <button
                  v-for="(_, index) in items"
                  :key="index"
                  @click="goToSlide(index)"
                  :class="[
                    'w-3 h-3 rounded-full transition-all',
                    index === currentIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/75'
                  ]"
                />
              </div>
            </div>
          </template>
        </LCarouselHeadless>
      </div>
    `,
  }),
};

export const AccessibilityExample: Story = {
  args: {
    items: [
      {
        id: 1,
        title: 'Accessible Slide 1',
        description: 'This slide demonstrates proper accessibility features',
        image: 'https://via.placeholder.com/400x200?text=Accessible+1',
      },
      {
        id: 2,
        title: 'Accessible Slide 2',
        description: 'Keyboard navigation and screen reader support',
        image: 'https://via.placeholder.com/400x200?text=Accessible+2',
      },
      {
        id: 3,
        title: 'Accessible Slide 3',
        description: 'ARIA attributes and focus management',
        image: 'https://via.placeholder.com/400x200?text=Accessible+3',
      },
    ],
    showDots: true,
    showArrows: true,
    loop: true,
  },
  parameters: {
    a11y: {
      config: {
        rules: {
          label: {
            enabled: false,
          },
        },
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    items: [],
  },
  render: (args) => ({
    components: { LCarousel },
    setup() { return { args }; },
    template: `
      <div class="p-8">
        <LCarousel :items="args.items" />
        <div class="mt-4 text-sm text-gray-500">
          Empty state - no items to display
        </div>
      </div>
    `,
  }),
};

export const PerformanceExample: Story = {
  args: {
    items: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Slide ${i + 1}`,
      description: `Performance test slide ${i + 1}`,
      image: `https://picsum.photos/400/200?random=${i}`,
    })),
    autoplay: 'play',
    interval: 1000,
  },
  parameters: {
    docs: {
      description: {
        story: 'This example tests performance with 10 slides and fast transitions',
      },
    },
  },
};