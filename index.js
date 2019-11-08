// setting up express and linking to routes/body parser
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const routes = require('./routes/users')

// intialize body parser
app.use(bodyParser.json());

// accessing routes
app.use(routes)

app.listen(port, () => {
  console.log("app is listening on:", port);
});
