const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session'); 
const ExcelJS = require('exceljs');
const fileUpload = require('express-fileupload');
const validator = require('validator');

const fs = require('fs');
const {parse} = require('csv-parse/sync');

//route定義
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const uploadRouter = require('./routes/upload');
const resultRouter = require('./routes/result');
const importRouter = require('./routes/import');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const session_opt = {
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

//app.use(fileUpload({ useTempFiles: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/import', importRouter);

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


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
