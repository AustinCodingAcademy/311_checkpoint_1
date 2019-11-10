// setting up express and linking to routes/body parser
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const userRoutes = require('./routes/users')

// intialize body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// accessing routes
app.use(userRoutes)

app.listen(port, () => {
  console.log("app is listening on:", port);
});
