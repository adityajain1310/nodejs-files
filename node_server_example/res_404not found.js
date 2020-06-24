const express = require('express')
const server = express()

server.get('/a', (req, res) => res.send("I am In A!..."))
server.get('/b', (req, res) => res.send("I am In B!..."))

server.use((req, res, next) => res.send("<h2>404 Not Found</h2>"))

server.listen(8888)