const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/scss/index.scss'),
      ],
    });
}

module.exports = {
  chainWebpack: (config) => {
    // prepend global scss files
    const scssTypes = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    scssTypes.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));

    // init svg inline loader
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
