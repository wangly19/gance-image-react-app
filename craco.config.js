const CracoLessPlugin = require('craco-less');
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

//modifyVars: { '@primary-color': '#1DA57A' },
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': pathResolve('src')
    }
  },
  style: {
    sass: {
      loaderOptions: ({
        prependData: `@import "~@/assets/scss/global.scss";`
      })
    },
    postcss: {
      plugins: [
        require('postcss-px-to-viewport')({
          unitToConvert: 'px',
          viewportWidth: 375,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          mediaQuery: false,
          minPixelValue: 4
        })
      ]
    }
  },
  devServer: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://api.wangfanghua.top:7300/mock/5ee981b8216d1377dea9bedf/example',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
