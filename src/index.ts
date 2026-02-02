import type { App } from 'vue';
import * as components from './components';
import * as directives from './directives';
import * as plugins from './plugins';

export * from './components';
export * from './directives';
export * from './plugins';
export * from './composables';
export * from './utils';

export const Lumicious = {
  install(app: App) {
    // Install Components
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component as any);
    });

    // Install Directives
    Object.entries(directives).forEach(([name, directive]) => {
      app.directive(name.toLowerCase(), directive as any);
    });

    // Install Plugins
    Object.entries(plugins).forEach(([name, plugin]) => {
      if ((plugin as any).install) {
        app.use(plugin as any);
      }
    });
  }
};

export default Lumicious;
