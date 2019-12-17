const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userroutes = require("./routes/users")
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(userroutes);
// app.get("/", (req, res) => res.send("default route"));

app.listen(port, () => {
  console.log("app is listening on:", port);
});
