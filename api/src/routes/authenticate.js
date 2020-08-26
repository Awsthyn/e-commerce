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
    passport.authenticate('local', { failureRedirect: '/login' }), 
    function(req, res) {
    res.redirect('/');
});

server.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
}

server.get('/profile', isAuthenticated, function(req, res){
    res.render('profile', { user: req.user });
});


module.exports = server;