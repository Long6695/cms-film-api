const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()
dotenv.config()
app.use(cors())
const usersRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const filmRoute = require('./routes/film')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect(process.env.DB_CONNECT,() => {
  console.log('connect to mongoose')
})

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)
app.use('/api/film', filmRoute)

app.listen(PORT, () => {
  console.log('server is running')
})