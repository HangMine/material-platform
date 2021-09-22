module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@vue/babel-plugin-jsx',
    // ['i18next-extract', {
    //   outputPath: 'src/i18n/langs/{{locale}}.json',
    // }],
  ],
  ignore: [
    'src/assets',
  ],
};
