import { App } from 'vue';
export interface NotifyOptions {
    message: string;
    type?: 'positive' | 'negative' | 'warning' | 'info';
    position?: 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    timeout?: number;
}
export declare const Notify: {
    create(options: NotifyOptions | string): void;
    install(app: App): void;
};
export default Notify;
