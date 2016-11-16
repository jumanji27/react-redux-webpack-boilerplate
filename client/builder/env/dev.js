const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
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
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../../../client/src/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel?presets[]=es2015&presets[]=react',
          'webpack-module-hot-accept',
          'react-hot-loader/webpack'
        ],
        include: path.resolve(__dirname, '../../src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
          'less'
        ]
      }
    ]
  }
};