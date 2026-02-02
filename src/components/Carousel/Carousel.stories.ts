import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LCarousel from './LCarousel.vue';
import LCard from '../Card/LCard.vue';

const meta: Meta<any> = {
  title: 'Lumicious/Carousel',
  component: LCarousel,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    autoplay: { control: 'boolean' },
    enableIndicators: { control: 'boolean' },
    showArrows: { control: 'boolean' },
    loop: { control: 'boolean' },
  },
  args: {
    size: 'md',
    variant: 'glass',
    direction: 'horizontal',
    autoplay: false,
    interval: 3000,
    enableIndicators: true,
    showArrows: true,
    loop: true,
    onChange: fn(),
    onSlide: fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="p-8 bg-slate-900 min-h-[400px] flex items-center justify-center"><story /></div>',
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
        image: 'https://picsum.photos/800/400?random=1',
      },
      {
        id: 2,
        title: 'Slide 2',
        description: 'This is the second slide',
        image: 'https://picsum.photos/800/400?random=2',
      },
      {
        id: 3,
        title: 'Slide 3',
        description: 'This is the third slide',
        image: 'https://picsum.photos/800/400?random=3',
      },
    ],
  },
};

export const CustomCards: Story = {
  render: (args) => ({
    components: { LCarousel, LCard },
    setup() { return { args }; },
    template: `
      <LCarousel v-bind="args">
        <template #item="{ item }">
          <LCard class="w-full max-w-md mx-auto" variant="glass">
            <template #header>
              <h3 class="text-xl font-bold">{{ item.title }}</h3>
            </template>
            <div class="p-4">
              <p class="text-white/80">{{ item.description }}</p>
              <button class="mt-4 px-4 py-2 bg-blue-500 rounded-lg text-white">Action</button>
            </div>
          </LCard>
        </template>
      </LCarousel>
    `,
  }),
  args: {
    items: [
      { id: 1, title: 'Card 1', description: 'Custom card content' },
      { id: 2, title: 'Card 2', description: 'Another custom card' },
      { id: 3, title: 'Card 3', description: 'Third custom card' },
    ],
  },
};

export const CustomIndicators: Story = {
  render: (args) => ({
    components: { LCarousel },
    setup() { return { args }; },
    template: `
      <LCarousel v-bind="args">
        <template #indicators="{ currentIndex, goToSlide, itemsCount }">
          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10">
            <button 
              v-for="i in itemsCount" 
              :key="i"
              @click="goToSlide(i-1)"
              class="px-3 py-1 rounded-lg transition-all"
              :class="currentIndex === i-1 ? 'bg-white text-black' : 'text-white/60 hover:text-white'"
            >
              {{ i }}
            </button>
          </div>
        </template>
      </LCarousel>
    `,
  }),
  args: {
    items: [
      { id: 1, title: 'Custom 1', description: 'Custom indicators' },
      { id: 2, title: 'Custom 2', description: 'Numbered buttons' },
      { id: 3, title: 'Custom 3', description: 'Total control' },
    ],
  },
};

export const Headless: Story = {
  render: (args) => ({
    components: { LCarousel },
    setup() { return { args }; },
    template: `
      <LCarousel v-bind="args" v-slot="{ currentIndex, nextSlide, prevSlide, items }">
        <div class="relative w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl overflow-hidden flex items-center justify-center text-white">
          <div class="text-center p-8">
            <h2 class="text-4xl font-black mb-2">{{ items[currentIndex]?.title }}</h2>
            <p class="text-xl opacity-80">{{ items[currentIndex]?.description }}</p>
            
            <div class="mt-8 flex gap-4 justify-center">
              <button @click="prevSlide" class="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                ← Prev
              </button>
              <button @click="nextSlide" class="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                Next →
              </button>
            </div>
          </div>
          
          <div class="absolute bottom-4 flex gap-2">
            <div 
              v-for="(_, i) in items" 
              :key="i"
              class="w-2 h-2 rounded-full transition-all"
              :class="i === currentIndex ? 'bg-white w-8' : 'bg-white/30'"
            />
          </div>
        </div>
      </LCarousel>
    `,
  }),
  args: {
    items: [
      { id: 1, title: 'Headless 1', description: 'Complete control' },
      { id: 2, title: 'Headless 2', description: 'No default styles' },
      { id: 3, title: 'Headless 3', description: 'Pure logic' },
    ],
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    items: [
      { id: 1, title: 'Vertical 1', description: 'Sliding up/down' },
      { id: 2, title: 'Vertical 2', description: 'Smooth transitions' },
      { id: 3, title: 'Vertical 3', description: 'Try it out' },
    ],
  },
};

export const Autoplay: Story = {
  args: {
    autoplay: true,
    interval: 2000,
    items: [
      { id: 1, title: 'Auto 1', description: 'Wait for it...' },
      { id: 2, title: 'Auto 2', description: 'Moving automatically' },
      { id: 3, title: 'Auto 3', description: 'Looping back' },
    ],
  },
};

export const Sizes: Story = {
  render: (args) => ({
    components: { LCarousel },
    setup() { return { args }; },
    template: `
      <div class="flex flex-col gap-8 w-full max-w-4xl">
        <div class="space-y-2">
          <span class="text-white/50 text-xs uppercase tracking-wider">Small (h-48)</span>
          <LCarousel v-bind="args" size="sm" />
        </div>
        <div class="space-y-2">
          <span class="text-white/50 text-xs uppercase tracking-wider">Medium (h-64)</span>
          <LCarousel v-bind="args" size="md" />
        </div>
        <div class="space-y-2">
          <span class="text-white/50 text-xs uppercase tracking-wider">Large (h-96)</span>
          <LCarousel v-bind="args" size="lg" />
        </div>
      </div>
    `,
  }),
  args: {
    items: [
      { id: 1, title: 'Size Test', description: 'Testing different heights' },
      { id: 2, title: 'Responsive', description: 'Adapts to container width' },
    ],
  },
};
