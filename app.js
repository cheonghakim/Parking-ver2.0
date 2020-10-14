var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');

var app = express();
app.set('port', process.env.PORT || 3000);

//서버 생성
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
  //라우터
  var indexRouter = require('./Server/Common/Routes/index');
  var adminRouter = require('./Server/Admin/Routes/admin');
  var userRouter = require('./Server/Member/Routes/member');

  // view engine setup
  app.set('views', path.join(__dirname, 'Server/views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(express.static(path.join(__dirname, '/public')));
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: false,
    })
  );
  app.use(cookieParser());

  app.use('/zenith', indexRouter);
  app.use('/zenith/admin', adminRouter);
  app.use('/zenith/user', userRouter);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
});

module.exports = app;
