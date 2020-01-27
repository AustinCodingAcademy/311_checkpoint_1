const express = require('express');
const bodyParser = require("body-parser");
let userRoutes = require("./routes/users");
let usernameRoutes = require("./routes/usernames");
let contactRoutes = require("./routes/contact");
let locationRoutes = require("./routes/locations");
let companyRoutes = require("./routes/companies");


// define app, json res
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// define port
const port = process.env.PORT || 4000

app.use(userRoutes);
app.use(usernameRoutes);
app.use(contactRoutes);
app.use(locationRoutes);
app.use(companyRoutes);



// open port
app.listen(port, () => {
  console.log('app is listening on:', port)
})