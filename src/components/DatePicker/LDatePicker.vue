<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { cn } from '../../utils/cn';
import { 
  datePickerStyles, 
  calendarGridStyles, 
  dayButtonStyles, 
  navigationButtonStyles 
} from './styles';
import type { DatePickerProps } from './types';
import { 
  formatDate, 
  parseDate, 
  generateMonthDays, 
  getMonthName, 
  getWeekdayName,
  isDateInRange 
} from './utils';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<DatePickerProps>(), {
  modelValue: undefined,
  size: 'md',
  variant: 'glass',
  mode: 'single',
  disabled: false,
  readonly: false,
  placeholder: 'Select date',
  format: 'YYYY-MM-DD',
  locale: 'en',
  startView: 'day',
  weekStartsOn: 1,
  showTimePicker: false,
  timeFormat: '24h',
});

const emit = defineEmits<{
  'update:modelValue': [value: Date | Date[] | { start: Date; end: Date } | undefined];
}>();

const isOpen = ref(false);
const currentDate = ref(new Date());
const selectedDate = ref<Date | null>(null);
const selectedRange = ref<{ start: Date | null; end: Date | null }>({ start: null, end: null });
const selectedDates = ref<Date[]>([]);

const currentView = computed(() => props.startView);
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentDay = computed(() => currentDate.value.getDate());

const today = computed(() => new Date());

const monthDays = computed(() => 
  generateMonthDays(currentYear.value, currentMonth.value, props.weekStartsOn)
);

const weekdays = computed(() => {
  const weekdays = [];
  for (let i = 0; i < 7; i++) {
    const dayIndex = (props.weekStartsOn + i) % 7;
    weekdays.push(getWeekdayName(dayIndex, props.locale, true));
  }
  return weekdays;
});

const displayValue = computed(() => {
  if (!props.modelValue) return props.placeholder;
  
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.length > 0 
      ? props.modelValue.map(d => formatDate(d)).join(' - ')
      : props.placeholder;
  }
  
  if (typeof props.modelValue === 'object' && 'start' in props.modelValue) {
    return `${formatDate(props.modelValue.start)} - ${formatDate(props.modelValue.end)}`;
  }
  
  return formatDate(props.modelValue);
});

const isDateSelected = (date: Date) => {
  if (props.mode === 'single') {
    return selectedDate.value && formatDate(date) === formatDate(selectedDate.value);
  }
  if (props.mode === 'range') {
    return selectedRange.value.start && formatDate(date) === formatDate(selectedRange.value.start) ||
           selectedRange.value.end && formatDate(date) === formatDate(selectedRange.value.end);
  }
  if (props.mode === 'multiple') {
    return selectedDates.value.some(d => formatDate(date) === formatDate(d));
  }
  return false;
};

const isDateInRangeForRange = (date: Date) => {
  if (props.mode !== 'range') return false;
  if (!selectedRange.value.start) return false;
  
  const start = selectedRange.value.start;
  const end = selectedRange.value.end;
  
  if (!end) return date > start && date <= currentDate.value;
  return date > start && date < end;
};

const handleDateClick = (date: Date) => {
  if (props.disabled || props.readonly) return;
  
  if (props.mode === 'single') {
    selectedDate.value = date;
    emit('update:modelValue', date);
    if (!props.readonly) isOpen.value = false;
  } else if (props.mode === 'range') {
    if (!selectedRange.value.start) {
      selectedRange.value.start = date;
    } else if (!selectedRange.value.end) {
      if (date >= selectedRange.value.start) {
        selectedRange.value.end = date;
        emit('update:modelValue', { start: selectedRange.value.start, end: selectedRange.value.end });
      } else {
        selectedRange.value = { start: date, end: null };
      }
    } else {
      selectedRange.value = { start: date, end: null };
    }
    if (!props.readonly) isOpen.value = false;
  } else if (props.mode === 'multiple') {
    const existingIndex = selectedDates.value.findIndex(d => formatDate(d) === formatDate(date));
    if (existingIndex > -1) {
      selectedDates.value.splice(existingIndex, 1);
    } else {
      selectedDates.value.push(date);
    }
    emit('update:modelValue', [...selectedDates.value]);
  }
};

const navigateMonth = (direction: 'prev' | 'next') => {
  if (direction === 'prev') {
    currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
  } else {
    currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
  }
};

const navigateYear = (direction: 'prev' | 'next') => {
  if (direction === 'prev') {
    currentDate.value = new Date(currentYear.value - 1, currentMonth.value, 1);
  } else {
    currentDate.value = new Date(currentYear.value + 1, currentMonth.value, 1);
  }
};

const togglePicker = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
  }
};

const closePicker = () => {
  isOpen.value = false;
};

const clearSelection = () => {
  selectedDate.value = null;
  selectedRange.value = { start: null, end: null };
  selectedDates.value = [];
  emit('update:modelValue', undefined);
};

watch(() => props.modelValue, (newValue) => {
  if (!newValue) {
    selectedDate.value = null;
    selectedRange.value = { start: null, end: null };
    selectedDates.value = [];
  }
}, { immediate: true });
</script>

<template>
  <div class="relative">
    <div 
      :class="cn(datePickerStyles({ size, variant, disabled }))"
      @click="togglePicker"
    >
      <div class="flex items-center gap-3">
        <div class="flex-1">
          <div class="text-sm font-medium text-white/90">{{ displayValue }}</div>
          <div class="text-xs text-white/60">Click to select date</div>
        </div>
        <LIcon 
          name="calendar" 
          class="text-white/60"
        />
        <LIcon 
          name="chevron-down" 
          class="text-white/60 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </div>

    <div 
      v-if="isOpen"
      class="absolute top-full left-0 mt-2 z-50 glass border-white/20 rounded-xl shadow-xl overflow-hidden"
      @click.away="closePicker"
    >
      <div class="p-4">
        <!-- Calendar Header -->
        <div class="flex items-center justify-between mb-4">
          <button
            :class="cn(navigationButtonStyles({ size }))"
            @click="navigateYear('prev')"
            :disabled="disabled"
          >
            <LIcon name="chevron-left" class="w-4 h-4" />
          </button>
          <button
            :class="cn(navigationButtonStyles({ size }))"
            @click="navigateMonth('prev')"
            :disabled="disabled"
          >
            <LIcon name="chevron-left" class="w-4 h-4" />
          </button>
          
          <div class="text-center">
            <div class="font-semibold text-white">{{ getMonthName(currentMonth, locale) }}</div>
            <div class="text-sm text-white/60">{{ currentYear }}</div>
          </div>
          
          <button
            :class="cn(navigationButtonStyles({ size }))"
            @click="navigateMonth('next')"
            :disabled="disabled"
          >
            <LIcon name="chevron-right" class="w-4 h-4" />
          </button>
          <button
            :class="cn(navigationButtonStyles({ size }))"
            @click="navigateYear('next')"
            :disabled="disabled"
          >
            <LIcon name="chevron-right" class="w-4 h-4" />
          </button>
        </div>

        <!-- Weekday Headers -->
        <div :class="cn(calendarGridStyles({ size }))">
          <div
            v-for="weekday in weekdays"
            :key="weekday"
            class="text-center font-medium text-white/60 py-2"
          >
            {{ weekday }}
          </div>
        </div>

        <!-- Calendar Grid -->
        <div :class="cn(calendarGridStyles({ size }))">
          <button
            v-for="date in monthDays"
            :key="date.toString()"
            :class="cn(dayButtonStyles({
              size,
              isCurrentMonth: date.getMonth() === currentMonth,
              isToday: formatDate(date) === formatDate(today),
              isSelected: isDateSelected(date),
              isInRange: isDateInRangeForRange(date),
              isDisabled: disabled || !isDateInRange(date, props.minDate, props.maxDate)
            }))"
            @click="handleDateClick(date)"
            :disabled="disabled || !isDateInRange(date, props.minDate, props.maxDate)"
          >
            {{ date.getDate() }}
          </button>
        </div>

        <!-- Actions -->
        <div class="flex justify-between mt-4 pt-4 border-t border-white/10">
          <button
            v-if="props.modelValue"
            :class="cn(navigationButtonStyles({ size }))"
            @click="clearSelection"
            :disabled="disabled"
          >
            Clear
          </button>
          <div></div>
          <button
            :class="cn(navigationButtonStyles({ size }))"
            @click="closePicker"
            :disabled="disabled"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.date-picker-enter-active,
.date-picker-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.date-picker-enter-from,
.date-picker-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>