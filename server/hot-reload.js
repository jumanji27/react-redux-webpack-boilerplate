const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

let config = require('./../client/builder/index')


module.exports = (app) => {
  config = config(process.env.NODE_ENV);

  const compiler = webpack(config);

  app.use(
    devMiddleware(
      compiler,
      {
        publicPath: config.output.publicPath,
        historyApiFallback: true,
      }
    )
  );

  app.use(
    hotMiddleware(compiler)
  );
}