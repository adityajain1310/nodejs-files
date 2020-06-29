const express = require('express')
const server = express()

const todoRoute = require('./routes/todos')

server.set('view engine', 'hbs')
server.set('views', __dirname + "/views")
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use('/todos', todoRoute)

server.listen(3456)