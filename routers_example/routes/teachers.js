const route = require('express').Router()

let teachers = [
    {name: "Vijay", subject: "Math"},
    {name: "Andrew NG", subject: "Machine Learning"}
]

route.get('/', (req, res) => res.send(teachers))
route.get('/add', (req, res) => {
    teachers.push({
        name: req.query.name,
        subject: req.query.subject
    })
    res.send(teachers)
})
route.get('/:id', (req, res) => res.send(teachers[req.params.id]))

module.exports = route