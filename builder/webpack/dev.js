const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    './src/layout/index.jsx',
  ],

  output: {
    path: '/',
    filename: 'index.js',
    publicPath: '',
  },

  devServer: {
    contentBase: './public/',
    historyApiFallback: true,
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
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, '../../src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
          'less-loader',
        ],
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
      }
    ],
  },
};
