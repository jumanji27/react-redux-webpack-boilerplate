const express = require('express');
const path = require('path');

const entity = require('./data/entity');


const app = express();


app.post('/api/v1/entity', (req, res) => {
  setTimeout(() => {
    res.send(entity);
  }, 300);
});


if (process.env.NODE_ENV === 'production') {
  app.use(
    express.static('client/public')
  );

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../client/public/index.html')
    );
  });
}

app.listen(3000, () => {
  console.log('Listening at http://localhost:3000/');
});