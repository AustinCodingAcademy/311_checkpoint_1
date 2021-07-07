const express = require('express')
const userRoutes = require('./routes/users')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser");

app.get('/', (req, res) => res.send('default route'))

//app.use()
app.use(bodyParser.json ())

//const userRoutes = express.Router()
app.use(userRoutes)

app.listen(port, () => {
  console.log('app is listening on:', port)
})