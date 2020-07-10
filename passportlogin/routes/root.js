const route = require('express').Router()
const passport = require('../passport')
const Users = require('../db').Users 

route.get('/login', (req, res) => {
    res.render('login')
})

route.get('/signup', (req, res) => {
    res.render('signup')
})

route.post('/login', passport.authenticate('local', {
    successRedirect: '/private',
    failureRedirect: '/login'
}))

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
