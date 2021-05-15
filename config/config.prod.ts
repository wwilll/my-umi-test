import { defineConfig } from 'umi';

export default defineConfig({
  base: '/dist/',
  chunks: ['vendors', 'umi'],
  chainWebpack: function (config, { webpack }) {
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          minChunks: 1,
          test({ resource }: { resource: any }) {
            return /[\\/]node_modules[\\/]/.test(resource);
          },
          priority: 10,
        },
        styles: {
          name: 'styles',
          test: /\.(css|less)$/,
          chunks: 'async',
          minChunks: 1,
          minSize: 0,
        }
      },
      // chunks: 'all',
      // minSize: 30000,
      // minChunks: 3,
      // automaticNameDelimiter: '.',
      // cacheGroups: {
      //   // 组件库相关
      //   react: {
      //     name: "react",
      //     chunks: "all",
      //     test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|moment|antd|@ant-design)[\\/]/,
      //     priority: 12,
      //   },
      //   // 工具库相关
      //   utils: {
      //     name: "utils",
      //     chunks: "all",
      //     test: /[\\/]node_modules[\\/](lodash|ramda)[\\/]/,
      //     priority: 11,
      //   },
      //   // 图表库相关
      //   charts: {
      //     name: "charts",
      //     chunks: "all",
      //     test: /[\\/]node_modules[\\/](echarts|bizcharts|@antv)[\\/]/,
      //     priority: 11,
      //   },
      //   vendors: {
      //     name: "vendors",
      //     chunks: "all",
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: 10,
      //   },
      // },
    });
  },
});
