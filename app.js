var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

var passport = require('passport');

require('./passport');

var indexRouter = require('./routes/index');
const auth = require('./routes/auth');

var dbURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/loud';

mongoose.connect(dbURL, { useNewUrlParser: true });
mongoose.connection.on('error', error => console.log(error));

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', auth);
app.use('/api', passport.authenticate('jwt', { session: false }), indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    status: err.status,
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : {}
  })
});

module.exports = app;
