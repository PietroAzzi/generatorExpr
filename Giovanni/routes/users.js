var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router da express
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);

/* Definisce una route con l’oggetto router */
router.get('/', function(req, res, next) {
 res.send('respond with a resource');
});

module.exports = router; //esporta il modulo per poterlo usare in app.js