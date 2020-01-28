const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use('/users', require('./routes/users'));

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})