const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const usersRouter = require('./routes/users');

const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use('/', usersRouter)

app.use(function (req, res, next) {
  res.status(404).send("Error 404. Sorry can't find that!");
  res.status(400).send("Error 400. User does not exist!");
})

app.listen(port, () => {
  console.log('app is listening on:', port)
})