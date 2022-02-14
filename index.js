const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
dotenv.config()
app.use(cors())
//routes
const usersRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const filmRoute = require('./routes/film')
// env
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_CONNECT,() => {
  console.log('connect to mongoose')
})

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use(express.json({ extended: false }))
app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)
app.use('/api/film', filmRoute)

app.listen(PORT)