import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    name: 'ay',
    file: 'dist/ay.esm.js',
    format: 'es',
  },
  external: [],
});

export default config;
