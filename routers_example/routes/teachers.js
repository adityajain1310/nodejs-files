const route = require('express').Router()

let teachers = [
    {name: "Vijay", subject: "Math"},
    {name: "Andrew NG", subject: "Machine Learning"}
]

route.get('/', (req, res) => res.send(teachers))
route.post('/', (req, res) => {
    teachers.push({
        name: req.body.name,
        subject: req.body.subject
    })
    res.send(teachers)
})
route.get('/add', (req, res) => {
    teachers.push({
        name: req.query.name,
        subject: req.query.subject
    })
    res.send(teachers)
})
route.get('/:id', (req, res) => {
    /*if(isNaN(parseInt(req.params.id))) {                      Add this if /add is added after /:id
        next();
    }*/
    res.send(teachers[req.params.id])
})
    

module.exports = route