const webpack = require('webpack')
const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-hot-middleware/client',
    './client/src/index'
  ],

  output: {
    path: '/',
    filename: 'index.js',
    publicPath: '/'
  },

  plugins: [
    new extractTextPlugin('index.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'webpack-module-hot-accept'],
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};