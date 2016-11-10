var webpack = require('webpack'),
  path = require('path'),
  extractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  output: {
    path: '/',
    filename: 'index.js',
    publicPath: '/',
    contentBase: './client/public'
  },

  devtool: 'source-map',

  plugins: [
      new extractTextPlugin('index.css'),
      new webpack.HotModuleReplacementPlugin()
  ],

  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './client/src/index'
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './client/src'),
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader/webpack',
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader:
          extractTextPlugin.extract(
            ['css','sass']
          )
      }
    ]
  }
};