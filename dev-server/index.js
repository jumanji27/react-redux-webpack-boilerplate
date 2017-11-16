const express = require('express');
const path = require('path');

const entity = require('./data/entity');


const app = express();


app.post('/api/v1/entity', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  setTimeout(() => {
    res.send(entity);
  }, 300);
});


if (process.env.NODE_ENV === 'production') {
  app.use(
    express.static('public')
  );

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../public/index.html')
    );
  });
}

app.listen(3000, () => {
  console.log('Listening at http://localhost:3000/');
});
