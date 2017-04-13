var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var bodyParser = require('body-parser')
var knex = require('./db/connection')
var dotenv = require('dotenv').config()
var methodOverride = require('method-override')
var hbs = require('hbs');
var app = express();

// ======== PATHS & SUCH =========
var index = require('./routes/index')
var movies = require('./routes/movies')


// ======== VIEW ENGINE SETUP ========
hbs.registerPartials(__dirname + '/views/shared')
hbs.registerPartials(__dirname + '/views/movies/shared')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// dirname is basically the equivalent of "pwd" at the command line
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

app.use('/', index)
app.use('/movies', movies);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ======== ERROR HANDLER ========
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
