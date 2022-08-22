/// <reference types="vite/client" />

declare module 'vite';

declare module '@vitejs/plugin-vue';

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const componentEnv: DefineComponent<{}, {}, any>;
    export default componentEnv;
}
