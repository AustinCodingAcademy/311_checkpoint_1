const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const users = require('./routes/users');
const port = process.env.PORT || 4000

app.use(bodyParser.json());
app.use(users);


app.listen(port, (err) => {
  if (err) {
    console.log("Error: ",err);
  }
  console.log('app is listening on:', port)
})