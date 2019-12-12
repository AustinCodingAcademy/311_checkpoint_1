const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4002
const routerFiles = require('./routes/users')

app.use(bodyParser.json());
app.use(express.static("public"))
app.use(routerFiles)

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})