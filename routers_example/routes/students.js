const route = require('express').Router()

let students = [
    {name: "Aditya", college: "JIIT", Year: "IV"},
    {name: "Dhruv", college: "JIIT", Year: "IV"},
    {name: "Rohit", college: "Jaat College", Year: "I"},
    {name: "Vidhi", college: "Knowledge Park", Year: "III"}
]

route.get('/', (req, res) => res.send(students))
route.get('/add', (req, res) => {
    students.push({
        name: req.query.name,
        college: req.query.college,
        Year: req.query.year
    })
    res.send(students)
})
route.get('/:id', (req, res) => res.send(students[req.params.id]))

module.exports = route