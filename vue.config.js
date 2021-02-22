module.exports = {
  crossorigin: 'use-credentials',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://54.179.9.67:8000',
        ws: true,
        changeOrigin: true
        // pathRewrite: { '^/app': '' }
      }
    },
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8001
  }, chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
}