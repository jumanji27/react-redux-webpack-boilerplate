const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const writeFilePlugin = require('write-file-webpack-plugin')
const webpackUglifyJsPlugin = require('webpack-uglify-js-plugin')


module.exports = {
  entry: [
    './client/src/index'
  ],

  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'index.js',
    publicPath: '/'
  },

  plugins: [
    new writeFilePlugin(),
    new webpackUglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, '../../public/'),
      debug: true,
      minimize: true,
      sourceMap: false,
      output: {
        comments: false
      },
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, '../../src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders:
          [
            'style',
            'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
            'postcss',
            'less'
          ]
      }
    ]
  },

  postcss: () => [
    autoprefixer({
      browsers: 'last 5 versions'
    })
  ]
};