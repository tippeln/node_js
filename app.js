var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); 

//route定義
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var uploadRouter = require('./routes/upload');
var resultRouter = require('./routes/result');
var logoutRouter = require('./routes/logout');
var helpRouter = require('./routes/help');
//db access test
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var session_opt = {
  secret: 'ncd session',
  resave: false,
  saveUninitialized: false, 
  cookie: { maxAge: 60 * 60 * 1000 } //1時間保持
};
app.use(session(session_opt));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/help', helpRouter);


//session check
app.use((req, res, next) => {
  console.log('ミドルウェア実行:' + req.session.username)
  if (req.session.username) {
    next();
  } else {
    res.redirect('/login');
  }
});

//routing
app.use('/', indexRouter);
app.use('/upload', uploadRouter);
app.use('/result', resultRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
