/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');

const publicUtilsPath = path.resolve('./packages/public-utils/src');
module.exports = {
  alias: {
    // _: fs.existsSync('./packages/public-utils/src') ? publicUtilsPath : '@4dst-saas/public-utils/dist',
    _: fs.existsSync(publicUtilsPath) ? publicUtilsPath : '@4dst-saas/public-utils/dist',
    '@': path.join(__dirname, 'src'),
  },
};
