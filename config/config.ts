import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  dynamicImport: {},
  publicPath: './',
  mock: false,
  routes: routes,
  targets: { ie: 9 },
  proxy: {
    '/api': {
      target: 'http://www.baidu.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
