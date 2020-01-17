import table from './table/index';
import './a.scss';

const components = [
  table,
];

const install = function install(Vue) {
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  // eslint-disable-next-line no-undef
  version: VERSION,
  table,
};
