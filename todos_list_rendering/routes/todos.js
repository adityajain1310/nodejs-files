const route = require('express').Router()

let todos = [
    {task: "Do it Again"},
    {task: "One more task"},
    {task: "Define it"}
]

route.get('/', (req, res) => res.render('todos.hbs', {todos}))

route.post('/', (req, res) => {
    console.log(req.body.newToDo)
    todos.push({
        task: req.body.newToDo
    })
    res.redirect('todos')
})

module.exports = route