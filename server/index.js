const path = require('path')
const express = require('express')

const tasksData = require('./data/tasks')

const hotReload = require('./hot-reload')


const app = express();


app.get(
  '/',
  (req, res) => {
    res.sendFile(path.join(__dirname, './../client/public/index.html'));
  }
);


app.get(
  '/api/tasks',
  (req, res) => {
    setTimeout(
      () => {
        res.send(tasksData);
      },
      3000
    )
  }
);


if (process.env.NODE_ENV === 'development') {
  hotReload(app);
}


app.listen(
  3000,
  () => {
    console.log('Listening at http://localhost:3000/');
  }
);