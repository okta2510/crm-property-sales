module.exports = {
  crossorigin: 'use-credentials',
  publicPath: "/",
  devServer: {
    disableHostCheck: true,
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
    port: 9100
  }, chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
}