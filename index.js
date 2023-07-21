const express = require('express')
const usersRouter = require('./routes/users')
const app = express()
const PORT = process.env.PORT || 4000


app.use(express())
app.use(express.json())
app.use('/', usersRouter)

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`)
})