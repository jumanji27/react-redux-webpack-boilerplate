const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')


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
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../../../client/src/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new extractTextPlugin('index.css')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel?presets[]=es2015&presets[]=react'],
        include: path.resolve(__dirname, '../../src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader:
          extractTextPlugin.extract(
            'style',
            [
              'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]&-minimize',
              'postcss',
              'less'
            ]
          )
      }
    ]
  },

  postcss: () => [
    autoprefixer({
      browsers: 'last 5 versions'
    })
  ]
};