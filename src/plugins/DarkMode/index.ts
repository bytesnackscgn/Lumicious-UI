import type { App } from 'vue';

export const DarkMode = {
  isActive: false,
  
  toggle() {
    this.isActive = !this.isActive;
    document.documentElement.classList.toggle('dark', this.isActive);
  },
  
  install(app: App) {
    app.config.globalProperties.$lDark = this;
    app.provide('lDark', this);
  }
};

export default DarkMode;
