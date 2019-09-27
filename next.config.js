/* eslint-disable @typescript-eslint/no-var-requires */
// const { parsed: localEnv } = require('dotenv').config();
// const webpack = require('webpack');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

require('dotenv').config();

const config = {
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
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    ENGINE_API_KEY: process.env.ENGINE_API_KEY,
  },
};

module.exports = withBundleAnalyzer(config);
