const express = require('express')
const app = express()
const port = process.env.PORT || 4000
// Requerir las rutas
const usersRoutes = require('./routes/users');


// MIDDLEWARE
//  El body-parser que ya viene incluido en Express
app.use(express.json());

// Las rutas esenciales
app.use(usersRoutes);

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})