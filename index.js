const express = require("express");
const bodyParser = require("body-parser");

const users = require("./routes/users");

const app = express();
app.use(express.json());
const port = process.env.PORT || 4001;

// app.get("/", (req, res) => res.send("default route"));

app.use(users);

app.listen(port, () => {
	console.log("app is listening on:", port);
});
