const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;
const userRoutes = require('./routes/users');

// app.use(userRoutes);
app.use(express.static('public'));
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('default route'))
app.use(userRoutes);

app.listen(port, () => {
  console.log('app is listening on:', port)
})