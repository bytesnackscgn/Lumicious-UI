export const FILE_TYPES = {
  images: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
  documents: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  videos: ['video/mp4', 'video/webm', 'video/quicktime'],
  audio: ['audio/mp3', 'audio/wav', 'audio/ogg'],
  text: ['text/plain', 'text/csv', 'application/json'],
  archives: ['application/zip', 'application/x-rar-compressed', 'application/x-7z-compressed'],
} as const;

export const DEFAULT_FILE_ICONS = {
  'image/': 'image',
  'video/': 'video',
  'audio/': 'music',
  'application/pdf': 'file-text',
  'application/msword': 'file-text',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'file-text',
  'text/': 'file-text',
  'application/json': 'code',
  'application/zip': 'archive',
  'application/x-rar-compressed': 'archive',
  'application/x-7z-compressed': 'archive',
  'default': 'file',
} as const;

export const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB'] as const;