const webpack = require('webpack')
const path = require('path')


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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'webpack-module-hot-accept', 'react-hot-loader/webpack'],
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