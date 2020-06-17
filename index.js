const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
//const users = require("./data/index")
const router = require("./Routes/users")


app.use(router)
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('default route'))


// app.get("/users",(req,res)=>{
//   res.json(users)
// })
app.listen(port, () => {
  console.log('app is listening on:', port)
})