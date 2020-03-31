const express = require('express');
const users = require('./routes/users');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(users);

app.get('/', (req, res) => res.send('default route'))

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('app is listening on:', port)
})