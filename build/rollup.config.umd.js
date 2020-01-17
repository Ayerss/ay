import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'ay',
    file: 'dist/ay.umd.js',
    format: 'umd',
  },
});

export default config;
