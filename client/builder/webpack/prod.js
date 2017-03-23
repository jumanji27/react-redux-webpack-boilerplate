const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    './client/src/layout/index.jsx',
  ],

  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'index.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../../../client/src/layout/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin('index.css'),
  ],

  module: {
    loaders: [
      {
        test: /\.js|.jsx$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, '../../src'),
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader:
          ExtractTextPlugin.extract(
            'style',
            [
              'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]&-minimize',
              'postcss',
              'less',
            ]
          )
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
      {
        test: /vendor[\\|/].+\.(js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window',
      }
    ]
  },

  postcss: () => [
    autoprefixer({
      browsers: 'last 5 versions',
    }),
  ],
};
