const bodyParser = require("body-parser");
const express = require("express");
const usersRouter = require("./routes/users");
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.get("/", (req, res) => res.send("default route BOY"));
app.use(usersRouter);

app.use((req, res, next) => {
  const error = new Error("Not found BOY");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => {
  console.log("app is listening on:", port);
});
