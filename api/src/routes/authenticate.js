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
    console.info('isAuthenticated')
    if(req.isAuthenticated()) {
        console.info('esta authenticado')
        next();
    } else {
        console.info('no esta authenticado')
        res.json(false);
        //res.redirect(403, '/Login')
    }
}

server.get('/profile', isAuthenticated, function(req, res){
    console.info('en profile autenticado')
    res.json(true)
});



module.exports = server;
module.exports.isAuthenticated = isAuthenticated;

/*function isAdmin(req, res, next) {
    if(req.user.admin === true) {
        next();
    } else {
        res.json(false);
    }
}

server.get('/Admin', isAuthenticated, isAdmin, function(req, res){
    res.json(true)
});*/
