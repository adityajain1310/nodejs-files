const express = require('express')
const server = express()

const m1 = function (req, res, next) {
    console.log("We are in m1")
    next()
}

const m2 = function (req, res, next) {
    console.log("We are in m2")
    next()
}

const m3 = function (req, res, next) {
    console.log("We are in m3")
    next()
}

server.use(m1)

server.use(m2)

server.get('/a', (req, res, next) => {res.send("Hello World!")})

server.use(m3)

server.listen(8888)