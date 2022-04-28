const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const usersRouter = require('./routes/users');
const port = process.env.PORT || 4000;

const idCounter = 10;
global.idCounter = idCounter;

app.use(bodyparser.json());
app.use('/users', usersRouter);
app.get('/', (req, res) => res.send('default route'));


app.listen(port, () => {
  console.log('app is listening on:', port)
})