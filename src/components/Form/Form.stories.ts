import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from '@storybook/test';
import LForm from './LForm.vue';

const meta: Meta<any> = {
  title: 'Lumodo/Form/Form',
  component: LForm,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['glass', 'solid', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    layout: { control: 'select', options: ['vertical', 'horizontal', 'inline'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    validateOnChange: { control: 'boolean' },
  },
  args: {
    variant: 'glass',
    size: 'md',
    layout: 'vertical',
    loading: false,
    disabled: false,
    validateOnChange: true,
    onSubmit: fn(),
    'onUpdate:modelValue': fn(),
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="bg-slate-900 p-6 min-h-[400px]"><story /></div>',
    }),
  ],
} satisfies Meta<typeof LForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LForm },
    setup() { 
      return { 
        args,
        formData: {
          email: '',
          password: '',
          remember: false
        }
      }; 
    },
    template: `
      <LForm
        v-model="formData"
        v-bind="args"
        @submit="args.onSubmit"
      >
        <template #default="{ registerField, updateFieldValue, formErrors, formData }">
          <div class="space-y-4">
            <div>
              <label class="block text-white/90 mb-2">Email</label>
              <input
                type="email"
                :value="formData.email"
                @input="updateFieldValue('email', $event.target.value)"
                class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                placeholder="Enter your email"
              />
              <div v-if="formErrors.email" class="text-red-400 text-sm mt-1">
                {{ formErrors.email }}
              </div>
            </div>
            
            <div>
              <label class="block text-white/90 mb-2">Password</label>
              <input
                type="password"
                :value="formData.password"
                @input="updateFieldValue('password', $event.target.value)"
                class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                placeholder="Enter your password"
              />
              <div v-if="formErrors.password" class="text-red-400 text-sm mt-1">
                {{ formErrors.password }}
              </div>
            </div>
            
            <div class="flex items-center">
              <input
                type="checkbox"
                :checked="formData.remember"
                @change="updateFieldValue('remember', $event.target.checked)"
                class="mr-2"
              />
              <label class="text-white/90">Remember me</label>
            </div>
            
            <button
              type="submit"
              class="w-full px-4 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              Sign In
            </button>
          </div>
        </template>
      </LForm>
    `,
  }),
};

export const HorizontalLayout: Story = {
  render: (args) => ({
    components: { LForm },
    setup() { 
      return { 
        args,
        formData: {
          firstName: '',
          lastName: ''
        }
      }; 
    },
    template: `
      <LForm 
        v-model="formData"
        v-bind="args"
        :layout="'horizontal'"
      >
        <template #default="{ registerField, updateFieldValue, formErrors, formData }">
          <div class="space-y-4">
            <div>
              <label class="block text-white/90 mb-2">First Name</label>
              <input
                type="text"
                :value="formData.firstName"
                @input="updateFieldValue('firstName', $event.target.value)"
                class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                placeholder="First name"
              />
              <div v-if="formErrors.firstName" class="text-red-400 text-sm mt-1">
                {{ formErrors.firstName }}
              </div>
            </div>
            
            <div>
              <label class="block text-white/90 mb-2">Last Name</label>
              <input
                type="text"
                :value="formData.lastName"
                @input="updateFieldValue('lastName', $event.target.value)"
                class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                placeholder="Last name"
              />
              <div v-if="formErrors.lastName" class="text-red-400 text-sm mt-1">
                {{ formErrors.lastName }}
              </div>
            </div>
          </div>
        </template>
      </LForm>
    `,
  }),
};

export const InlineLayout: Story = {
  render: (args) => ({
    components: { LForm },
    setup() { 
      return { 
        args,
        formData: {
          search: ''
        }
      }; 
    },
    template: `
      <LForm 
        v-model="formData"
        v-bind="args"
        :layout="'inline'"
      >
        <template #default="{ updateFieldValue, formData }">
          <div class="flex items-center space-x-4">
            <input
              type="text"
              :value="formData.search"
              @input="updateFieldValue('search', $event.target.value)"
              class="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
              placeholder="Search..."
            />
            <button
              type="submit"
              class="px-4 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              Search
            </button>
          </div>
        </template>
      </LForm>
    `,
  }),
};

export const WithValidation: Story = {
  render: (args) => ({
    components: { LForm },
    setup() {
      return {
        args,
        formData: {
          email: '',
          age: ''
        }
      };
    },
    template: `
      <LForm
        v-model="formData"
        v-bind="args"
      >
        <template #default="{ registerField, updateFieldValue, formErrors, formData }">
          <div class="space-y-4">
            <div>
              <label class="block text-white/90 mb-2">Email (required)</label>
              <input
                type="email"
                :value="formData.email"
                @input="updateFieldValue('email', $event.target.value)"
                class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                placeholder="Enter your email"
              />
              <div v-if="formErrors.email" class="text-red-400 text-sm mt-1">
                {{ formErrors.email }}
              </div>
            </div>

            <div>
              <label class="block text-white/90 mb-2">Age (18+)</label>
              <input
                type="number"
                :value="formData.age"
                @input="updateFieldValue('age', $event.target.value)"
                class="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                placeholder="Enter your age"
              />
              <div v-if="formErrors.age" class="text-red-400 text-sm mt-1">
                {{ formErrors.age }}
              </div>
            </div>

            <button
              type="submit"
              class="w-full px-4 py-2 rounded-lg bg-green-600/80 hover:bg-green-500 text-white font-medium transition-colors"
            >
              Submit
            </button>
          </div>
        </template>
      </LForm>
    `,
  }),
  args: {
    validateOnChange: true,
  },
};