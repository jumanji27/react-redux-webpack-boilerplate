const path = require('path')
const webpack = require('webpack')
const express = require('express')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')

const config = require('./../client/webpack.config')

const tasksData = require('./data/tasks.json')

const app = express();


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


app.get(
  '/',
  (req, res) => {
    res.sendFile(path.join(__dirname, './../client/public/index.html'));
  }
);

app.get(
  '/api/tasks',
  (req, res) => {
    res.send(tasksData);
  }
);


app.listen(
  3000,
  () => {
    console.log('Listening at http://localhost:3000/');
  }
);