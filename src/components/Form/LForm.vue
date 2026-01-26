<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue';
import { cn } from '../../utils/cn';
import { formStyles, formFieldStyles, formLabelStyles, formErrorStyles } from './styles';
import type { FormProps, FormEmits, FormField } from './types';

const props = withDefaults(defineProps<FormProps>(), {
  variant: 'glass',
  size: 'md',
  layout: 'vertical',
  validateOnChange: true,
});

const emit = defineEmits<FormEmits>();

const formData = reactive<Record<string, any>>({ ...props.modelValue });
const formErrors = reactive<Record<string, string>>({});
const formFields = ref<FormField[]>([]);

const isFormValid = computed(() => {
  return Object.keys(formErrors).length === 0;
});

const isFormDirty = computed(() => {
  return JSON.stringify(formData) !== JSON.stringify(props.modelValue || {});
});

const validateField = (fieldName: string, value: any): true | string => {
  const field = formFields.value.find(f => f.name === fieldName);
  if (!field || !field.rules) return true;

  for (const rule of field.rules) {
    const result = rule(value);
    if (result !== true) {
      return result || 'Invalid value';
    }
  }
  return true;
};

const validateForm = (): boolean => {
  let isValid = true;
  
  formFields.value.forEach(field => {
    const validation = validateField(field.name, formData[field.name]);
    if (validation !== true) {
      formErrors[field.name] = validation;
      isValid = false;
    } else {
      delete formErrors[field.name];
    }
  });

  return isValid;
};

const updateFieldValue = (fieldName: string, value: any) => {
  formData[fieldName] = value;
  
  if (props.validateOnChange) {
    const validation = validateField(fieldName, value);
    if (validation !== true) {
      formErrors[fieldName] = validation;
      emit('error', fieldName, validation as string);
    } else {
      delete formErrors[fieldName];
      emit('valid', fieldName, true);
    }
  }

  emit('change', fieldName, value);
  emit('update:modelValue', { ...formData });
};

const registerField = (field: FormField) => {
  formFields.value.push(field);
  
  // Initialize field value
  if (formData[field.name] === undefined && field.value !== undefined) {
    formData[field.name] = field.value;
  }

  // Set initial validation
  if (field.rules) {
    const validation = validateField(field.name, formData[field.name]);
    if (validation !== true) {
      formErrors[field.name] = validation;
    }
  }
};

const unregisterField = (fieldName: string) => {
  const index = formFields.value.findIndex(f => f.name === fieldName);
  if (index > -1) {
    formFields.value.splice(index, 1);
    delete formData[fieldName];
    delete formErrors[fieldName];
  }
};

const handleSubmit = (event: Event) => {
  event.preventDefault();
  
  if (validateForm()) {
    emit('submit', { ...formData });
  }
};

const resetForm = () => {
  Object.keys(formData).forEach(key => {
    delete formData[key];
  });
  Object.keys(formErrors).forEach(key => {
    delete formErrors[key];
  });
  
  // Reinitialize with default values
  formFields.value.forEach(field => {
    if (field.value !== undefined) {
      formData[field.name] = field.value;
    }
  });
  
  emit('update:modelValue', { ...formData });
};

const clearErrors = () => {
  Object.keys(formErrors).forEach(key => {
    delete formErrors[key];
  });
};

// Expose methods to parent
defineExpose({
  validateForm,
  resetForm,
  clearErrors,
  isFormValid,
  isFormDirty,
  formData,
  formErrors,
});

// Watch for modelValue changes
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    Object.keys(newValue).forEach(key => {
      formData[key] = newValue[key];
    });
  }
}, { deep: true });
</script>

<template>
  <form 
    :class="cn(formStyles({ variant, size, layout }), props.class)"
    @submit="handleSubmit"
    :novalidate="true"
  >
    <slot 
      :register-field="registerField"
      :unregister-field="unregisterField"
      :update-field-value="updateFieldValue"
      :form-data="formData"
      :form-errors="formErrors"
      :is-form-valid="isFormValid"
      :is-form-dirty="isFormDirty"
      :validate-form="validateForm"
      :reset-form="resetForm"
      :clear-errors="clearErrors"
    />
  </form>
</template>