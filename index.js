const express = require('express')
const app = express()
const routes = require ('./routers/users.js')
const port = process.env.PORT || 4000
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('default route'))
app.use(routes)


app.listen(port, () => {
  console.log('app is listening on:', port)
})