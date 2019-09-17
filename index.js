const express = require("express");
const bodyParser = require("body-parser");


const users = require("./routes/users");

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log("YIPPEEE I'm a custom middleware function!");
  next();
});

app.use("/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Resource Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(port);
console.log(`server running on ${port}`);