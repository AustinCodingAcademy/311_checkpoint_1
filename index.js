const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const users = require("./routes/users");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('default route'))

app.use(users);

app.use((req, res, next) => {
  const error = new Error("User not found");
  error.status = 404;
  next(error);
});


app.listen(port, () => {
  console.log('app is listening on:', port)
})
//hello