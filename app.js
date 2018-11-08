const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
require('./passport');

const indexRouter = require('./routes/indexRouter');
const imagesRouter = require('./routes/imagesRouter');
const authRouter = require('./routes/authRouter');
const mailRouter = require('./routes/mailRouter');
const contractRouter = require('./routes/contractRouter');
const infoImageRouter = require('./routes/infoImageRouter');

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

app.use('/', indexRouter);
app.use('/api', authRouter);
app.use('/api', infoImageRouter);
app.use('/api', imagesRouter);

app.use('/api', passport.authenticate('jwt', { session: false }), mailRouter);

app.use('/api', passport.authenticate('jwt', { session: false }), contractRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err.stack : err.message;

  res.status(err.status || 500).render('error');
});

module.exports = app;
