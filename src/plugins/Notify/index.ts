import type { App } from 'vue';

export interface NotifyOptions {
  message: string;
  type?: 'positive' | 'negative' | 'warning' | 'info';
  position?: 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  timeout?: number;
}

export const Notify = {
  create(options: NotifyOptions | string) {
    const message = typeof options === 'string' ? options : options.message;
    console.log(`[Lumodo Notify] ${message}`);
    // Real implementation would mount a component or use a store
  },
  
  install(app: App) {
    app.config.globalProperties.$lNotify = this;
    app.provide('lNotify', this);
  }
};

export default Notify;
