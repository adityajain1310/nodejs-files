const express = require('express')
const server = express()

server.get('/', function (req, res, next) {
    res.send("Hello World")
})

server.get('/greet/:tod', function (req, res, next) {
    let tod = 'Morning'
    switch(req.params.tod) {
        case 'evening' : tod = "Evening"; break;
        case 'morning' : tod = "Morning"; break;
    }
    let greeting = "Good " + tod + ", " + req.query.name
    res.send(greeting)
})

server.listen(8888)