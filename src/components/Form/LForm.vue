<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { cn } from '../../utils/cn';
import { 
  formStyles, 
  formFieldStyles, 
  formLabelStyles, 
  formErrorStyles,
  formButtonStyles 
} from './styles';
import type { FormProps, FormField, FormState } from './types';
import { 
  FORM_LAYOUTS, 
  FORM_LABEL_POSITIONS, 
  FORM_SPACING,
  FORM_DEFAULTS 
} from './constants';
import { validateField, validateForm, isFormValid, getFormInitialValues } from './utils';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<FormProps>(), {
  modelValue: () => ({}),
  size: FORM_DEFAULTS.size,
  layout: FORM_DEFAULTS.layout,
  variant: FORM_DEFAULTS.variant,
  disabled: false,
  readonly: false,
  validateOn: FORM_DEFAULTS.validateOn,
  labelPosition: FORM_DEFAULTS.labelPosition,
  spacing: FORM_DEFAULTS.spacing,
  showErrors: FORM_DEFAULTS.showErrors,
  loading: false,
  submitText: 'Submit',
  cancelText: 'Cancel',
  validateOnChange: FORM_DEFAULTS.validateOnChange,
  validateOnBlur: FORM_DEFAULTS.validateOnBlur,
});

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, any>];
  submit: [values: Record<string, any>];
  cancel: [];
  validate: [errors: Record<string, string>];
}>();

const formFields = ref<FormField[]>([]);
const formValues = ref<Record<string, any>>({});
const formErrors = ref<Record<string, string>>({});
const formTouched = ref<Record<string, boolean>>({});
const isSubmitting = ref(false);

const formState = computed<FormState>(() => ({
  values: formValues.value,
  errors: formErrors.value,
  touched: formTouched.value,
  isValid: isFormValid(formErrors.value),
  isDirty: Object.keys(formTouched.value).some(key => formTouched.value[key]),
}));

const registerField = (field: FormField) => {
  formFields.value.push(field);
  if (!formValues.value[field.name]) {
    formValues.value[field.name] = field.value || '';
  }
};

const unregisterField = (fieldName: string) => {
  formFields.value = formFields.value.filter(f => f.name !== fieldName);
  delete formValues.value[fieldName];
  delete formErrors.value[fieldName];
  delete formTouched.value[fieldName];
};

const updateFieldValue = (fieldName: string, value: any) => {
  formValues.value[fieldName] = value;
  emit('update:modelValue', { ...formValues.value });
  
  formTouched.value[fieldName] = true;
  
  if (props.validateOnChange) {
    validateFieldOnField(fieldName);
  }
};

const validateFieldOnField = (fieldName: string) => {
  const field = formFields.value.find(f => f.name === fieldName);
  if (!field) return;
  
  const error = validateField(formValues.value[fieldName], field.rules || []);
  if (error) {
    formErrors.value[fieldName] = error;
  } else {
    delete formErrors.value[fieldName];
  }
  
  emit('validate', formErrors.value);
};

const validateFormFields = () => {
  formErrors.value = validateForm(formValues.value, formFields.value);
  emit('validate', formErrors.value);
  return isFormValid(formErrors.value);
};

const handleFieldBlur = (fieldName: string) => {
  formTouched.value[fieldName] = true;
  
  if (props.validateOnBlur) {
    validateFieldOnField(fieldName);
  }
};

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  
  if (props.disabled || props.readonly || isSubmitting.value) return;
  
  formTouched.value = {};
  formFields.value.forEach(field => {
    formTouched.value[field.name] = true;
  });
  
  const isValid = validateFormFields();
  
  if (isValid) {
    isSubmitting.value = true;
    try {
      emit('submit', { ...formValues.value });
    } finally {
      isSubmitting.value = false;
    }
  }
};

const handleCancel = () => {
  emit('cancel');
};

const resetForm = () => {
  formValues.value = getFormInitialValues(formFields.value);
  formErrors.value = {};
  formTouched.value = {};
  emit('update:modelValue', { ...formValues.value });
};

const clearErrors = () => {
  formErrors.value = {};
  emit('validate', formErrors.value);
};

// Initialize form values
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    formValues.value = { ...newValue };
  }
}, { immediate: true });

// Expose form methods
defineExpose({
  registerField,
  unregisterField,
  updateFieldValue,
  validateFieldOnField,
  validateFormFields,
  handleSubmit,
  handleCancel,
  resetForm,
  clearErrors,
  formState,
});
</script>

<template>
  <form 
    :class="cn(formStyles({ size, variant, layout, disabled }))"
    @submit="handleSubmit"
  >
    <slot 
      name="fields"
      :register-field="registerField"
      :unregister-field="unregisterField"
      :update-field-value="updateFieldValue"
      :validate-field-on-field="validateFieldOnField"
      :handle-field-blur="handleFieldBlur"
      :form-values="formValues"
      :form-errors="formErrors"
      :form-touched="formTouched"
      :form-state="formState"
    >
      <!-- Default field rendering -->
      <div
        v-for="field in formFields"
        :key="field.name"
        :class="cn(formFieldStyles({ 
          size, 
          labelPosition: field.label ? labelPosition : 'top',
          spacing 
        }))"
      >
        <label
          v-if="field.label"
          :class="cn(formLabelStyles({ 
            size, 
            required: field.required 
          }))"
        >
          {{ field.label }}
        </label>
        
        <div class="flex-1">
          <input
            v-if="field.type === 'text' || field.type === 'email' || field.type === 'url'"
            :value="formValues[field.name]"
            @input="(e) => updateFieldValue(field.name, (e.target as HTMLInputElement).value)"
            @blur="handleFieldBlur(field.name)"
            :type="field.type"
            :placeholder="field.placeholder"
            :disabled="disabled || field.disabled"
            :readonly="readonly || field.readonly"
            :class="cn(
              'glass border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50',
              { 'border-red-400': formErrors[field.name] && formTouched[field.name] }
            )"
          />
          
          <textarea
            v-else-if="field.type === 'textarea'"
            :value="formValues[field.name]"
            @input="(e) => updateFieldValue(field.name, (e.target as HTMLTextAreaElement).value)"
            @blur="handleFieldBlur(field.name)"
            :placeholder="field.placeholder"
            :disabled="disabled || field.disabled"
            :readonly="readonly || field.readonly"
            :rows="3"
            :class="cn(
              'glass border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50',
              { 'border-red-400': formErrors[field.name] && formTouched[field.name] }
            )"
          />
          
          <select
            v-else-if="field.type === 'select'"
            :value="formValues[field.name]"
            @change="(e) => updateFieldValue(field.name, (e.target as HTMLSelectElement).value)"
            @blur="handleFieldBlur(field.name)"
            :disabled="disabled || field.disabled"
            :readonly="readonly || field.readonly"
            :class="cn(
              'glass border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50',
              { 'border-red-400': formErrors[field.name] && formTouched[field.name] }
            )"
          >
            <option value="">Select an option</option>
            <slot 
              name="options"
              :field="field"
              :value="formValues[field.name]"
            >
              <!-- Default options would go here -->
            </slot>
          </select>
          
          <input
            v-else
            :value="formValues[field.name]"
            @input="(e) => updateFieldValue(field.name, (e.target as HTMLInputElement).value)"
            @blur="handleFieldBlur(field.name)"
            type="text"
            :placeholder="field.placeholder"
            :disabled="disabled || field.disabled"
            :readonly="readonly || field.readonly"
            :class="cn(
              'glass border-white/20 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-white/50',
              { 'border-red-400': formErrors[field.name] && formTouched[field.name] }
            )"
          />
        </div>
        
        <div 
          v-if="showErrors && formErrors[field.name] && formTouched[field.name]"
          :class="cn(formErrorStyles({ size }))"
        >
          {{ formErrors[field.name] }}
        </div>
      </div>
    </slot>
    
    <!-- Form actions -->
    <div 
      v-if="$slots.actions || submitText || cancelText"
      :class="cn(
        'flex gap-4 justify-end pt-4 border-t border-white/10',
        { 'mt-6': layout === 'vertical', 'ml-auto': layout !== 'vertical' }
      )"
    >
      <slot 
        name="actions"
        :submit="handleSubmit"
        :cancel="handleCancel"
        :reset="resetForm"
        :loading="isSubmitting"
        :disabled="disabled || readonly"
      >
        <button
          v-if="cancelText"
          type="button"
          :disabled="disabled || readonly"
          :class="cn(formButtonStyles({ size, variant: 'secondary' }))"
          @click="handleCancel"
        >
          {{ cancelText }}
        </button>
        
        <button
          type="submit"
          :disabled="disabled || readonly || isSubmitting || !formState.isValid"
          :class="cn(formButtonStyles({ size, variant: 'primary' }))"
        >
          <LIcon 
            v-if="isSubmitting" 
            name="loader-2" 
            class="animate-spin mr-2" 
          />
          {{ submitText }}
        </button>
      </slot>
    </div>
  </form>
</template>