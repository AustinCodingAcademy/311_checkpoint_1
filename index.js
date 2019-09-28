const express = require("express");
const app = express();
const bodyParser = require(bodyParser);
const port = process.env.PORT || 4000;

const routerFiles = require(./routes/users);

app.use(bodyParser.json());
app.use(routerFiles);
app.get("/", (req, res) => res.send("default route"));

app.listen(port, () => {
	console.log("Hail Satan on:", port);
});
