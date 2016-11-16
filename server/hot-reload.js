const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const config = require('./../client/builder/index')


module.exports = (app) => {
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