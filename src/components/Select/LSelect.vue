<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { cn } from '../../utils/cn';
import { selectStyles, selectMenuStyles } from './styles';
import type { SelectProps, SelectOption } from './types';
import { LField } from '../Field';
import { LIcon } from '../Icon';
import { LChip } from '../Chip';

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: null,
  multiple: false,
  useChips: false
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const isOpen = ref(false);
const selectRef = ref<HTMLElement | null>(null);

const normalizedOptions = computed((): SelectOption[] => {
  return props.options.map(opt => {
    if (typeof opt === 'string' || typeof opt === 'number') {
      return { label: String(opt), value: opt };
    }
    return opt;
  });
});

const selectedOptions = computed((): SelectOption[] => {
    if (props.multiple) {
        const values = Array.isArray(props.modelValue) ? props.modelValue : [];
        return normalizedOptions.value.filter(opt => values.includes(opt.value));
    }
    const selected = normalizedOptions.value.find(opt => opt.value === props.modelValue);
    return selected ? [selected] : [];
});

const displayValue = computed(() => {
    if (props.multiple) return '';
    return selectedOptions.value[0]?.label || '';
});

const toggleMenu = () => {
    if (!props.disable && !props.readonly) {
        isOpen.value = !isOpen.value;
    }
};

const selectOption = (option: SelectOption) => {
    if (option.disable) return;
    
    if (props.multiple) {
        const current = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
        const index = current.indexOf(option.value);
        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(option.value);
        }
        emit('update:modelValue', current);
    } else {
        emit('update:modelValue', option.value);
        isOpen.value = false;
    }
};

const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
  <div ref="selectRef" :class="cn(selectStyles({ disable }), props.class)">
    <LField
        v-bind="props"
        :stack-label="true"
        @click="toggleMenu"
    >
        <template #control>
            <div class="flex flex-wrap gap-1 w-full min-h-[1.5em] items-center">
                <template v-if="multiple && useChips">
                    <LChip 
                        v-for="opt in selectedOptions" 
                        :key="opt.value"
                        :label="opt.label"
                        size="sm"
                        removable
                        @remove="selectOption(opt)"
                    />
                </template>
                <template v-else-if="multiple">
                    <span v-if="selectedOptions.length" class="text-white text-sm">
                        {{ selectedOptions.length }} selected
                    </span>
                </template>
                <template v-else>
                    <span v-if="displayValue" class="text-white">
                        {{ displayValue }}
                    </span>
                </template>
                
                <span v-if="!selectedOptions.length && placeholder" class="text-white/40">
                    {{ placeholder }}
                </span>
            </div>
        </template>

        <template #append>
            <LIcon 
                name="chevron-down" 
                size="sm" 
                class="transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }"
            />
        </template>
    </LField>

    <!-- Dropdown Menu -->
    <div :class="cn(selectMenuStyles({ showing: isOpen }))">
        <div 
            v-for="opt in normalizedOptions" 
            :key="opt.value"
            class="px-3 py-2 rounded-lg cursor-pointer transition-colors"
            :class="[
                opt.value === modelValue || (Array.isArray(modelValue) && modelValue.includes(opt.value))
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'text-white/80 hover:bg-white/5',
                opt.disable ? 'opacity-30 pointer-events-none' : ''
            ]"
            @click="selectOption(opt)"
        >
            <div class="flex flex-col">
                <span class="text-sm font-medium">{{ opt.label }}</span>
                <span v-if="opt.description" class="text-[10px] opacity-60">{{ opt.description }}</span>
            </div>
        </div>
        <div v-if="!normalizedOptions.length" class="p-4 text-center text-white/40 text-xs">
            No options available
        </div>
    </div>
  </div>
</template>
