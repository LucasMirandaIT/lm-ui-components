import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    output: {
        sourcemap: true,
        format: 'es',
        name: 'mySvelteLibrary',
        dir: 'dist',
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into a separate file — better for performance
            css: css => {
                css.write('dist/bundle.css');
            },
        }),
        resolve({
            browser: true,
            dedupe: ['svelte'],
        }),
        commonjs(),
        json(),
        production && terser(),
    ],
};