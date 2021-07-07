const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 4000;
const usersRouter = require('./routes/users');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('default route'));

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log('app is listening on:', port)
})