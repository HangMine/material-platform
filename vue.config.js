/* eslint-disable @typescript-eslint/no-var-requires */

const nodeSassJsonImporter = require('node-sass-json-importer');
const {
  disableTsChecker, setAlias,
  // enableResolvePlugin,
  enableUselessFilesPlugin, enableServer,
  disableEslintChecker, sdScopedSourceMap,
  getPublicAndOutputDirBaseOnEnvs,
} = require('@4dst-saas/cli/dist/utils/vue-config-utils');

const isBuild = process.env.NODE_ENV === 'production';
process.env.APP_ENV = 'browser';

const config = {
  ...isBuild ? getPublicAndOutputDirBaseOnEnvs({
    publicPath: process.env.PUBLIC_PATH,
    moduleName: process.env.VUE_APP_IS_SUBMODULE ? process.env.VUE_APP_MODULE_NAME : '',
  }) : {},
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          importer: nodeSassJsonImporter(),
        },
        prependData: `
          @import "@/styles/variables.scss";
          @import "@/styles/_extends.scss";
        `,
      },
    },
  },
  chainWebpack(_config) {
    disableTsChecker(_config);
    setAlias(_config);
    if (isBuild) {
      disableEslintChecker(_config);
      // const { VUE_APP_VERSION_HASH, VUE_APP_MODULE_NAME, VUE_APP_MODE } = process.env;
      // const sourceMapPublicPath = `//192.168.19.10:${['uat', 'production'].includes(VUE_APP_MODE)
      //   ? '38082' : '38081'}/${VUE_APP_MODULE_NAME}/${VUE_APP_VERSION_HASH}/`;
      // sdScopedSourceMap(_config, sourceMapPublicPath);
    } else {
      _config
        .devtool('source-map');
      // enableResolvePlugin(_config);
      enableUselessFilesPlugin(_config);
      enableServer(_config, {
        proxyBaseUrl: process.env.VUE_APP_API_PROXY_BASE_URL,
      });
    }
  },
  devServer: {
    https: ['uat', 'production'].includes(process.env.mode),
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/xh': {
        target: 'http://192.168.13.54:50001',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/xh': '',
        },
      },
      '/yw': {
        target: 'http://192.168.13.7:60001/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/yw': '',
        },
      },
    },
  },
};

module.exports = config;
