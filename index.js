const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser");

// activate our bodyparser for JSON requests
app.use(bodyParser.json());

// set our path for the router
app.use(require('./routes/users'));

app.listen(port, () => {
  console.log('app is listening on:', port)
})