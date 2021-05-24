const express = require('express')
const usersRouter = require('./routes/users.js');
const app = express();
app.use(express.json());


const port = process.env.PORT || 4000

app.use(usersRouter)

app.listen(port, () => {
  console.log('app is listening on:', port)
})