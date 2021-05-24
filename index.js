const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const router = require("./routes/users")

app.use(router)

app.listen(port, () => {
  console.log('app is listening on:', port)
})