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

    // https://github.com/storybookjs/presets/issues/177
    // https://github.com/storybookjs/storybook/issues/3062#issuecomment-504550789
    // Feedback loop is atrocious due to super-slow builds - thus disabling Storybook's HMR
    webpackConfig.entry = webpackConfig.entry.filter(singleEntry => !singleEntry.includes('/webpack-hot-middleware/'))
    return webpackConfig
  }
}
