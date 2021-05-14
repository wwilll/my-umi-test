import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // mock: {},
  mock: false,
  routes: routes,
  proxy: {
    '/api': {
      'target': 'http://www.baidu.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
