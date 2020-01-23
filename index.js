const express = require('express')
const app = express()
const port = process.env.PORT || 4005
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json())
app.use('/users', require('./routes/users'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})