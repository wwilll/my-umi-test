import { defineConfig } from 'umi';

export default defineConfig({
  mock: {},
  proxy: {
    '/api': {
      target: 'http://www.baidu.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
