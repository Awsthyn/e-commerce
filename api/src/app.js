const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
// // ----> passport --->
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

const {User} = require('./db.js');
// ---> passport ---->
// Configuración de estrategia local de Passport.

// Para configurar la estrategia local de Passport es necesario crear una nueva instancia
// de Strategy pasándole como parámetro una función ("Verify Callback") que reciba las credenciales del usuario
// (Usuario y contraseña) y una función que suele definirse como "done" que debe ser invocada
// de distintas formas según si las credenciales son válidas o no:
//  - Si las credenciales son validas --> done(null, user) (Donde user es el objeto conteniendo los datos del usuario)
//  - Si las credenciales son invalidas --> done(null, false)
//  - Si hubo un error durante la ejecución de esta función --> done(err)

passport.use(new Strategy({
  usernameField: 'email'
},
  function(email, password, done) {
    User.findOne({where: { email: email }})
      .then((user) => {
        if(!user) {
          return done(null, false);
        }
        if(user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      })
    .catch(err => {
      return done(err);
    })
  }));


// Configuración de la persistencia de la sesión autenticada

// Para recuperar los datos de la sesión autenticada Passport necesita dos métodos para
// serializar y deserializar al usuario de la sesión. Para ello la forma más práctica de hacerlo
// es serializando el ID del usuario para luego al deserealizar a partir de dicho ID obtener
// los demás datos de ese usuario. Esto permite que la información almacenada en la sesión sea
// lo más simple y pequeña posible

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// Al deserealizar la información del usuario va a quedar almacenada en req.user

passport.deserializeUser(function(id, done) {
  User.findByPK(id)
    .then((user) => {
      done(null, user.get());
    })
    .catch(err => {
      return done(err);
    })
});
// <--- passport <---

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
// ---> passport --->
server.use(require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

server.use(passport.initialize());
server.use(passport.session());

server.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});
// <--- passport <---

/*server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});*/

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
