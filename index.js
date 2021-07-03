const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 4000
const userRoute = require('./routes/users')

app.use(bodyParser.json())

app.use(userRoute)

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})