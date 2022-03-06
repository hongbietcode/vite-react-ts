import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
            },
        },
    },
    plugins: [],
});
