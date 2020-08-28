const server = require("express").Router();
const { User } = require("../db.js");
const passport = require('passport');





server.get('/', function(req, res) {
    res.render('home', { user: req.user });
});

server.get('/login', function(req, res){
    res.render('login');
});

server.post('/login', 
    passport.authenticate('local'), 
    function(req, res) {
        console.log('inicio de sesion exitoso')
        res.json(req.user)
    // res.redirect('/');
});

server.get('/logout', function(req, res){
    req.logout();
    res.json({})
    console.log('cierre de sesion')
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.json(false);
    }
}

server.get('/profile', isAuthenticated, function(req, res){
    res.json(true)
});



module.exports = server;