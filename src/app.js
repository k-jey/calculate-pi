const express = require('express')
require('./db/mongoose')
const piRouter = require('./router/pi')

const app = express()

app.use(express.json())
app.use(piRouter)

module.exports = app