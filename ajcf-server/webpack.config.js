const path = require('path');
const slsw = require('serverless-webpack');
const webpack = require('webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  devtool: "eval",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,

        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: 'babel-loader',
      },
      {
        test: /\.graphql/,
        exclude: /node_modules/,
        use: "graphql-tag/loader"
      }
    ],
  },
  optimization: {
    splitChunks: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
  },
  stats: false,
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/),
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
  ],
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    pathinfo: false,
  },
};

