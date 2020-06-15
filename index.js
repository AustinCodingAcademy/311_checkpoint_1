const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const usersRouter = require('./routes/users')
app.use(usersRouter)

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})