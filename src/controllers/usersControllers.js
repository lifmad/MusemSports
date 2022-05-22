const {getUsers, writeUsers} = require('../data')

module.exports = {
    login : (req, res) => {
        res.render('login')
    },
    
    register : (req, res) => {
        res.render('register')
    },

    processRegister: (req, res) => {
        res.send(req.body)
    }
}