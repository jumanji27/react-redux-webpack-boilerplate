const webpack = require('webpack')
const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')


module.exports = {
  entry: [
    './client/src/index'
  ],

  output: {
    path: '/',
    filename: 'index.js',
    publicPath: '/'
  },

  plugins: [
    new extractTextPlugin('index.css')
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
        loaders: [
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