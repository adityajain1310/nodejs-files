const route = require('express').Router()

route.get('/', (req, res) => {
    if (req.user) {
        res.send("visible to only logged in users")
    } else {
        res.redirect('/login')
    }
    
})

exports = module.exports = route