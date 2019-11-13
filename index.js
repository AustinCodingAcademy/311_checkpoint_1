const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require('body-parser');

let routes = require('./routes/users')


app.use(bodyParser.json());
app.use(routes);














app.get('/', (req, res) => res.send('default route'))


app.listen(port, () => {
  console.log('app is listening on:', port)
})