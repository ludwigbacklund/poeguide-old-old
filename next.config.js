const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW
      ? require('next/constants')
      : require('next-server/constants');

module.exports = phase => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Fixes bug with now.sh deployment https://git.io/fp2d1
    return {};
  }

  const withTypescript = require('@zeit/next-typescript');
  const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
  const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

  return withTypescript(
    withBundleAnalyzer({
      webpack(config, options) {
        if (options.isServer)
          config.plugins.push(new ForkTsCheckerWebpackPlugin());

        return config;
      },
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html'
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html'
        }
      }
    })
  );
};
