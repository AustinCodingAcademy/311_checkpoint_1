const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const users = require('./data/index');
const routes = require('./routes/users');

app.use(bodyParser.json());
app.use(routes)
app.get('/', (req, res) => res.send('default route'))


const port = process.env.PORT || 4000


app.listen(port, () => {
  console.log('app is listening on:', port)
})