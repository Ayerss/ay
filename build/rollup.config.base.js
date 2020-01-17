import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import cjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import requireContext from 'rollup-plugin-require-context';
import { string } from 'rollup-plugin-string';

import autoprefixer from 'autoprefixer';
import CleanCSS from 'postcss-clean';
import sassPostcss from 'rollup-plugin-sass-postcss';

const config = require('../package.json');

export default {
  input: 'packages/index.js',
  plugins: [
    resolve({
      mainFields: ['jsnext', 'main', 'browser'],
    }),
    string({
      include: '**/*.svg',
    }),
    vue({
      css: false,
      style: {
        // postcssPlugins: [autoprefixer],
      },
    }),
    sassPostcss({
      include: [/\.(sass|scss|css)/u],
      sourcemap: false,
      output: 'dist/ay.css',
      plugins: [
        autoprefixer,
        CleanCSS,
      ],
      throwOnError: true,
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    cjs(),
    requireContext(),
    replace({
      VERSION: JSON.stringify(config.version),
    }),
  ],
  watch: {
    include: 'packages/**',
  },
};
