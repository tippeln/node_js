var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); 
var ExcelJS = require('exceljs');
var fileUpload = require('express-fileupload');
var validator = require('validator');

const fs = require('fs');
const {parse} = require('csv-parse/sync');

//route定義
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var uploadRouter = require('./routes/upload');
var resultRouter = require('./routes/result');
var importRouter = require('./routes/import');

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

app.use(fileUpload({ useTempFiles: true }));
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



  main()

function main () {
  const source = path.join(__dirname, 'data.csv')
  const buffer = fs.readFileSync(source)
  const options = {escape: '\\'} // <1>
  const {ok, err} = canParse(buffer, options) // <2>

  if (ok) {
    const rows = parse(buffer, options) // <3>
    console.info(rows)
  } else {
    console.error(err)
  }
}

function canParse (data, options) {
  let ok, message

  try {
    parse(data, options)
    return {ok: true, err: null}
  } catch (err) {
    return {ok: false, err}
  }
}


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
