import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import Inspect from 'vite-plugin-inspect';
import tsconfigPaths from 'vite-tsconfig-paths';

const fs = require('fs');
const lessToJS = require('less-vars-to-js');

const pathResolver = (path: string) => resolve(__dirname, path);
const themeVariables = lessToJS(fs.readFileSync(pathResolver('./config/antdVariables.less'), 'utf8'));

// https://vitejs.dev/config/
export default defineConfig({
    envDir: './env',
    plugins: [
        react(),
        tsconfigPaths(),
        Inspect(),
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: (name) => {
                        if (name === 'col' || name === 'row') {
                            return 'antd/lib/style/index.less';
                        }
                        return `antd/es/${name}/style/index.less`;
                    },
                },
            ],
        }),
    ],
    css: {
        modules: { localsConvention: 'camelCase', scopeBehaviour: 'local' },
        preprocessorOptions: {
            scss: { additionalData: `@import "./src/core/scss/_variable.scss";\n` },
            less: { javascriptEnabled: true, modifyVars: themeVariables },
        },
    },
    optimizeDeps: {
        exclude: ['@fortawesome/fontawesome-free'],
    },
});
