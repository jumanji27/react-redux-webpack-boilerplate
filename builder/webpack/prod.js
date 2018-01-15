const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    './src/layout/index.jsx',
  ],

  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'index.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../../src/layout/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin({
      filename: 'index.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        loaders: ['babel-loader'],
        include: path.resolve(__dirname, '../../src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader:
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]&-minimize',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    autoprefixer({
                      browsers: 'last 5 versions',
                    }),
                  ],
                },
              },
              'less-loader',
            ],
          }),
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
      {
        test: /vendor[\\|/].+\.(js)$/,
        loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window',
      },
    ],
  },
};
