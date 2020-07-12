const express = require('express');
const fareUtils = require('./fareutils.js')
const path = require('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/calcfare', (req, res) => {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    let fare = fareUtils.calcFare(km, min)

    res.send({fare: fare})
})

app.get('/rates', (req, res) => {
    res.send(fareUtils.rate)
})

app.listen('8888', () => console.log('server running on https://localhost:8888'))