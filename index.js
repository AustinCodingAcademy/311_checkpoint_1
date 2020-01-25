const express = require('express')
const app = express()
const bodyParser = ("body-parser");
const port = process.env.PORT || 4000

app.use('/users', require('./routes/users'));
app.use((req, res) => {
  res.send(`Status ${res.statusCode}. Page not found. If you are attempting to modify an existing user, please pass in the User ID.`)
})

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})