const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const users = require('./Routes/users')
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(users)

app.listen(port, () => {
  console.log('app is listening on:', port)
})
