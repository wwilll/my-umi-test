import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  base: '/',
  dynamicImport: {},
  publicPath: '/',
  mock: false,
  routes: routes,
  targets: { ie: 9 },
  antd: {},
});
