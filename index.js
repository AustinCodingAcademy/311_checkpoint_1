const express = require('express')

const bodyParser = require("body-parser");
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())

const userRoutes = require('./routes/users')

const port = process.env.PORT || 4000

app.use(userRoutes)


app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})