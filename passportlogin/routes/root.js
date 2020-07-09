const route = require('express').Router()
const Users = require('../db').Users 

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})
route.post('/login', (req, res) => {
    Users.findOne({
        where: {
            username: req.body.username
        }
    }).then((user) => {
        if (!user) {
            return res.send("No such user")
        } 
        if (user.password !== req.body.password) {
            return res.send("Wrong Password")
        }
        return res.send("Hello " + user.firstname)
    })
})
route.post('/signup', (req, res) => {
    Users.create ({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }).then((createdUser) => {
        res.redirect('/login')
    })
})

exports = module.exports = route
