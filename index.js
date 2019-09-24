const express = require('express');
const app = express();
const bodyparsen = require('body-parser');
const port = process.env.PORT || 4000;

const routerFiles = require('./routes/users');

app.use(bodyparsen.json());

app.use(routerFiles);

app.get('/', (req, res) => res.send('default route'));

app.listen(port, () => {
  console.log('app is listening on:', port);
});
