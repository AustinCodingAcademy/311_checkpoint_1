const express = require('express')
const bodyParser = require('body-parser')
const users = require("./routers/users")
const app = express()
const port = process.env.PORT || 4000



app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
/* BEGIN - create routes here */

app.use(users)

//_________________________________________

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))