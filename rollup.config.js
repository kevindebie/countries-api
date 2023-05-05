import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json";

export default {
    input: 'src/js/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'es'
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        json(),
    ],
};