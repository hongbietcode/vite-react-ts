import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import Inspect from 'vite-plugin-inspect';
import tsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';
import { RouteObject } from 'react-router';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';

const PAGE_SYNC_LIST = [
    '/src/pages/[...all].tsx',
    '/src/pages/admin.tsx',
    '/src/pages/admin/index.tsx',
    '/src/pages/login.tsx',
    '/src/pages/index.tsx',
];

const fs = require('fs');
const lessToJS = require('less-vars-to-js');

const pathResolver = (path: string) => resolve(__dirname, path);
const themeVariables = lessToJS(fs.readFileSync(pathResolver('./config/antdVariables.less'), 'utf8'));
const dev = process.env.NODE_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
    envDir: './env',
    plugins: [
        react(),
        WindiCSS(),
        PkgConfig(),
        OptimizationPersist(),
        Pages({
            exclude: ['**/components/*.**'],
            onRoutesGenerated: (routes: RouteObject[]) => {
                // console.log('routes', routes);
                if (dev) {
                    fs.writeFileSync(pathResolver('./routes.json'), JSON.stringify(routes));
                }
            },
            importMode: (filePath: string) => {
                if (PAGE_SYNC_LIST.findIndex((x) => x == filePath) != -1) {
                    return 'sync';
                }
                return 'async';
            },
            extendRoute(route, parent) {
                if (route.path === 'login') {
                    return route;
                }
                // console.log('route', route);

                return {
                    ...route,
                    meta: { auth: true },
                };
            },
        }),
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
        preprocessorOptions: {
            less: { javascriptEnabled: true, modifyVars: themeVariables },
            scss: { additionalData: `@import "./src/core/scss/_variable.scss";\n` },
        },
    },
    optimizeDeps: {
        exclude: ['@fortawesome/fontawesome-free'],
    },
});
