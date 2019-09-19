const express = require('express');
const path = require('path');

const port = process.env.PORT || 4000;
const app = express();
const userRoutes = require('./routes/users')


//Init middleware
app.get('/users', (req, res) => res.send('default route'));

//Body Paser Middlewear
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//users Api routes
app.use('/api', userRoutes);




app.listen(port, () => {
  console.log('app is listening on:', port)
})