const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('default route'))

app.use('/users', require('./routes/routesUsers'))

app.listen(port, () => { console.log('listening on:', port) })