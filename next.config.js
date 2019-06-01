/* eslint-disable @typescript-eslint/no-var-requires */
const { parsed: localEnv } = require('dotenv').config();
// const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
  webpack(config, options) {
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    // config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  target: 'serverless',
  env: {
    GRAPHQL_API_URL: 'xxx',
    ENGINE_API_KEY: 'xxx',
  },
};

module.exports = withTypescript(withBundleAnalyzer(config));
