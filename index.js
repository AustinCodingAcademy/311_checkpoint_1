const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const router = require ("./routes/users");

app.use(router);

app.listen(port, () => {
  console.log('app is listening on:', port)
})


