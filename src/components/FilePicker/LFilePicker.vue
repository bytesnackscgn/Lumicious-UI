<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { cn } from '../../utils/cn';
import { 
  filePickerStyles, 
  fileDropZoneStyles, 
  fileItemStyles, 
  fileButtonStyles 
} from './styles';
import type { FilePickerProps, FileItem } from './types';
import { 
  formatFileSize, 
  getFileIcon, 
  validateFile, 
  getFileItems,
  revokeFileUrls 
} from './utils';
import { LIcon } from '../Icon';

const props = withDefaults(defineProps<FilePickerProps>(), {
  modelValue: undefined,
  size: 'md',
  variant: 'glass',
  disabled: false,
  readonly: false,
  multiple: false,
  accept: undefined,
  maxSize: undefined,
  minSize: undefined,
  placeholder: 'Drop files here or click to browse',
  buttonText: 'Choose Files',
  dragDrop: true,
  clearable: true,
});

const emit = defineEmits<{
  'update:modelValue': [value: File | File[]];
}>();

const inputRef = ref<HTMLInputElement>();
const fileItems = ref<FileItem[]>([]);
const isDragOver = ref(false);
const isFocused = ref(false);

const displayValue = computed(() => {
  if (!fileItems.value.length) return props.placeholder;
  
  if (props.multiple) {
    return `${fileItems.value.length} file${fileItems.value.length > 1 ? 's' : ''} selected`;
  }
  
  return fileItems.value[0]?.name || props.placeholder;
});

const handleFileSelect = (files: FileList | File[]) => {
  if (props.disabled || props.readonly) return;
  
  const newFiles = Array.isArray(files) ? files : Array.from(files);
  const validFiles = newFiles.filter(file => 
    validateFile(file, props.accept, props.maxSize, props.minSize)
  );
  
  if (validFiles.length === 0) return;
  
  const newFileItems = getFileItems(validFiles);
  
  if (props.multiple) {
    fileItems.value = [...fileItems.value, ...newFileItems];
  } else {
    fileItems.value = newFileItems.slice(0, 1);
  }
  
  emitFiles();
};

const emitFiles = () => {
  if (props.multiple) {
    emit('update:modelValue', fileItems.value.map(item => item.file));
  } else {
    emit('update:modelValue', fileItems.value[0]?.file || undefined);
  }
};

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    handleFileSelect(target.files);
  }
  target.value = ''; // Reset input
};

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  isDragOver.value = false;
  
  if (props.disabled || props.readonly || !event.dataTransfer?.files) return;
  
  handleFileSelect(event.dataTransfer.files);
};

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
  if (!props.disabled && !props.readonly) {
    isDragOver.value = true;
  }
};

const handleDragLeave = () => {
  isDragOver.value = false;
};

const removeFile = (index: number) => {
  if (props.disabled || props.readonly) return;
  
  const removedItem = fileItems.value[index];
  fileItems.value.splice(index, 1);
  
  if (removedItem.url) {
    URL.revokeObjectURL(removedItem.url);
  }
  
  emitFiles();
};

const clearFiles = () => {
  if (props.disabled || props.readonly || !props.clearable) return;
  
  revokeFileUrls(fileItems.value);
  fileItems.value = [];
  emitFiles();
};

const triggerFileInput = () => {
  if (!props.disabled && !props.readonly && inputRef.value) {
    inputRef.value.click();
  }
};

const handleClick = () => {
  triggerFileInput();
};

watch(() => props.modelValue, (newValue) => {
  if (!newValue) {
    revokeFileUrls(fileItems.value);
    fileItems.value = [];
  }
}, { immediate: true });

// Cleanup on unmount
watch(() => fileItems.value, (newItems, oldItems) => {
  // Revoke URLs from removed items
  const removedItems = oldItems.filter(oldItem => 
    !newItems.some(newItem => newItem.id === oldItem.id)
  );
  revokeFileUrls(removedItems);
}, { deep: true });
</script>

<template>
  <div class="relative">
    <!-- Hidden file input -->
    <input
      ref="inputRef"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      @change="handleInputChange"
      class="hidden"
    />

    <!-- File picker trigger -->
    <div 
      :class="cn(filePickerStyles({ size, variant, disabled }))"
      @click="handleClick"
      @drop="handleDrop"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      :data-drag-over="isDragOver"
    >
      <div class="flex items-center gap-3">
        <div class="flex-1">
          <div class="text-sm font-medium text-white/90">{{ displayValue }}</div>
          <div class="text-xs text-white/60">
            {{ props.accept ? `Accepted: ${Array.isArray(props.accept) ? props.accept.join(', ') : props.accept}` : 'All files supported' }}
          </div>
        </div>
        <LIcon 
          name="upload" 
          class="text-white/60"
        />
        <LIcon 
          name="chevron-down" 
          class="text-white/60 transition-transform duration-200"
          :class="{ 'rotate-180': isFocused }"
        />
      </div>
    </div>

    <!-- File list -->
    <div v-if="fileItems.length > 0" class="mt-2 space-y-2">
      <div
        v-for="(item, index) in fileItems"
        :key="item.id"
        :class="cn(fileItemStyles({ size }))"
      >
        <div class="flex items-center gap-3 flex-1">
          <LIcon 
            :name="getFileIcon(item.type)" 
            class="text-white/60 flex-shrink-0"
          />
          <div class="flex-1 min-w-0">
            <div class="font-medium text-white/90 truncate">{{ item.name }}</div>
            <div class="text-xs text-white/60">{{ formatFileSize(item.size) }}</div>
          </div>
          <button
            v-if="!disabled && !readonly && clearable"
            @click.stop="removeFile(index)"
            class="p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <LIcon name="x" class="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>
      
      <div v-if="clearable && !disabled && !readonly" class="flex justify-end">
        <button
          @click="clearFiles"
          :class="cn(fileButtonStyles({ size }))"
        >
          Clear All
        </button>
      </div>
    </div>

    <!-- Drag drop overlay -->
    <div
      v-if="dragDrop && isDragOver"
      :class="cn(fileDropZoneStyles({ isDragOver, size }))"
      @click="triggerFileInput"
    >
      <LIcon name="upload-cloud" class="w-8 h-8 text-white/60 mx-auto mb-2" />
      <div class="text-sm font-medium text-white/90">Drop files here</div>
      <div class="text-xs text-white/60 mt-1">Click to browse or drag and drop</div>
    </div>
  </div>
</template>

<style scoped>
.file-picker-enter-active,
.file-picker-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.file-picker-enter-from,
.file-picker-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>