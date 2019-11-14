const express = require("express");
const app = express();
app.use(express.static('public'))
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const userRoutes = require('./routes/users')



app.use(userRoutes)
app.use(bodyParser.json());


app.listen(port, () => {
  console.log("app is listening on:", port);
});