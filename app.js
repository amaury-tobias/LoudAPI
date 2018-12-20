const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
require('./passport');

const indexRouter = require('./routes/indexRouter');
const imagesRouter = require('./routes/imagesRouter');
const authRouter = require('./routes/authRouter');
const mailRouter = require('./routes/mailRouter');
const contractRouter = require('./routes/contractRouter');
const infoImageRouter = require('./routes/infoImageRouter');
const usersRouter = require('./routes/usersRouter');

var dbURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/loud';

//mongoose.connect(dbURL, { useNewUrlParser: true });
//mongoose.set('useCreateIndex', true);
//mongoose.connection.on('error', error => console.log(error));

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8080'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', authRouter);
app.use('/api', infoImageRouter);
app.use('/api', imagesRouter);

app.use('/api', passport.authenticate('jwt', { session: false }), usersRouter);

app.use('/api', passport.authenticate('jwt', { session: false }), mailRouter);

app.use('/api', passport.authenticate('jwt', { session: false }), contractRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.status = err.status;
  res.locals.error = req.app.get('env') === 'development' ? err.stack : err.message;

  res.status(err.status || 500).render('error');
  //res.status(err.status || 500).json(err);
});

module.exports = app;
