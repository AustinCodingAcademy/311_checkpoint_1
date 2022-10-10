const express = require('express')
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');


const port = process.env.PORT || 4000

app.use(usersRouter)


app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})