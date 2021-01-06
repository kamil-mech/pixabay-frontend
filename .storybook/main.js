const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ],
  // https://github.com/storybookjs/storybook/issues/9514#issuecomment-679350377
  webpackFinal: (webpackConfig) => {
    const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
      ({ constructor }) =>
        constructor && constructor.name === 'ModuleScopePlugin',
    )

    webpackConfig.resolve.plugins.splice(scopePluginIndex, 1)
    return webpackConfig
  }
}
