<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { cn } from '../../utils/cn';
import { filePickerStyles, fileInputStyles, fileDisplayStyles, fileListStyles, fileItemStyles, fileNameStyles, fileSizeStyles, removeButtonStyles } from './styles';
import type { FilePickerProps, FilePickerEmits, FileItem } from './types';

const props = withDefaults(defineProps<FilePickerProps>(), {
  accept: '*',
  multiple: false,
  disabled: false,
  placeholder: 'Choose files...',
  maxFiles: 10,
  maxSize: 10 * 1024 * 1024, // 10MB
});

const emit = defineEmits<FilePickerEmits>();

const inputRef = ref<HTMLInputElement>();
const selectedFiles = ref<FileItem[]>([]);

const acceptString = computed(() => {
  if (Array.isArray(props.accept)) {
    return props.accept.join(',');
  }
  return props.accept;
});

const hasFiles = computed(() => selectedFiles.value.length > 0);

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const generateFileId = (file: File): string => {
  return `${file.name}-${file.size}-${file.lastModified}-${Date.now()}`;
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = Array.from(target.files || []);

  if (props.disabled) return;

  // Validate file count
  if (props.multiple && selectedFiles.value.length + files.length > props.maxFiles) {
    alert(`Maximum ${props.maxFiles} files allowed`);
    return;
  }

  // Validate file size
  const oversizedFiles = files.filter(file => file.size > props.maxSize);
  if (oversizedFiles.length > 0) {
    alert(`Some files exceed the maximum size of ${formatFileSize(props.maxSize)}`);
    return;
  }

  // Process files
  const newFiles: FileItem[] = files.map(file => ({
    file,
    id: generateFileId(file),
    name: file.name,
    size: file.size,
    type: file.type,
    url: URL.createObjectURL(file),
  }));

  if (props.multiple) {
    selectedFiles.value = [...selectedFiles.value, ...newFiles];
  } else {
    // Clear previous files and add new one
    selectedFiles.value.forEach(f => f.url && URL.revokeObjectURL(f.url));
    selectedFiles.value = newFiles.slice(0, 1);
  }

  emit('update:modelValue', files);
  emit('change', files);
  emit('select', files);

  // Reset input
  target.value = '';
};

const removeFile = (fileId: string) => {
  const fileIndex = selectedFiles.value.findIndex(f => f.id === fileId);
  if (fileIndex > -1) {
    const removedFile = selectedFiles.value[fileIndex];
    if (removedFile?.url) {
      URL.revokeObjectURL(removedFile.url);
    }
    selectedFiles.value.splice(fileIndex, 1);
    emit('update:modelValue', selectedFiles.value.map(f => f.file));
  }
};

const triggerFileInput = () => {
  if (!props.disabled && inputRef.value) {
    inputRef.value.click();
  }
};

// Clean up object URLs when component unmounts
watch(() => selectedFiles.value, (newFiles, oldFiles) => {
  // Clean up URLs from removed files
  const removedIds = new Set(oldFiles.map(f => f.id).filter(id => !newFiles.find(f => f.id === id)));
  removedIds.forEach(id => {
    const file = oldFiles.find(f => f.id === id);
    if (file?.url) {
      URL.revokeObjectURL(file.url);
    }
  });
}, { deep: true });
</script>

<template>
  <div :class="cn(filePickerStyles({ disabled, size: 'md' }))">
    <input
      ref="inputRef"
      type="file"
      :accept="acceptString"
      :multiple="multiple"
      :disabled="disabled"
      @change="handleFileSelect"
      :class="cn(fileInputStyles())"
    />

    <div
      :class="cn(fileDisplayStyles({ hasFiles }))"
      @click="triggerFileInput"
    >
      <div class="flex items-center justify-center">
        <svg
          v-if="!hasFiles"
          class="w-8 h-8 text-white/40 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <span class="text-white/80 font-medium">
          {{ hasFiles ? `${selectedFiles.length} file${selectedFiles.length > 1 ? 's' : ''} selected` : placeholder }}
        </span>
      </div>
    </div>

    <div v-if="hasFiles" :class="cn(fileListStyles())">
      <div
        v-for="fileItem in selectedFiles"
        :key="fileItem.id"
        :class="cn(fileItemStyles())"
      >
        <div class="flex-1 min-w-0">
          <div :class="cn(fileNameStyles())">{{ fileItem.name }}</div>
          <div :class="cn(fileSizeStyles())">{{ formatFileSize(fileItem.size) }}</div>
        </div>
        <button
          type="button"
          :class="cn(removeButtonStyles())"
          @click.stop="removeFile(fileItem.id)"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>