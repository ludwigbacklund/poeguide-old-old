const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );
  config = rewireLess(config, env);
  config = rewireStyledComponents(config, env, {
    displayName: true,
  });

  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: `../build-analysis-${env || 'development'}.html`,
      openAnalyzer: false,
    }),
  );

  return config;
};
