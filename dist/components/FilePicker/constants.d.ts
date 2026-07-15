export declare const FILE_TYPES: {
    readonly images: readonly ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];
    readonly documents: readonly ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    readonly videos: readonly ["video/mp4", "video/webm", "video/quicktime"];
    readonly audio: readonly ["audio/mp3", "audio/wav", "audio/ogg"];
    readonly text: readonly ["text/plain", "text/csv", "application/json"];
    readonly archives: readonly ["application/zip", "application/x-rar-compressed", "application/x-7z-compressed"];
};
export declare const DEFAULT_FILE_ICONS: {
    readonly 'image/': "image";
    readonly 'video/': "video";
    readonly 'audio/': "music";
    readonly 'application/pdf': "file-text";
    readonly 'application/msword': "file-text";
    readonly 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': "file-text";
    readonly 'text/': "file-text";
    readonly 'application/json': "code";
    readonly 'application/zip': "archive";
    readonly 'application/x-rar-compressed': "archive";
    readonly 'application/x-7z-compressed': "archive";
    readonly default: "file";
};
export declare const FILE_SIZE_UNITS: readonly ["B", "KB", "MB", "GB", "TB"];
