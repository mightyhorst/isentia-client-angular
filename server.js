var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

/**
*
* Alternative strategy is to serve the API from the Express App rather than use API Gateway + Lambda
* This would be easier but would miss the opportunity to benefit from the security, scalability, performance and modularity of the full AWS suite
*
**/
var apiRouter = require('./routes/photo');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
*
* Angular App 
* The Angular app is served as a static page from the build directory 
*
**/
app.use(express.static(path.join(__dirname, 'dist/isentia-client-angular')));
app.use('/', express.static(path.join(__dirname, 'dist/isentia-client-angular')));


/**
*
* Angular App redirects
* This is a shortcut to setting up the production server correctly
* See here: https://angular.io/guide/deployment#production-servers
*
* For the sake of brevity, if the link is copy pasted or bookmarked we need to reduct them to the home page to load the angular app
* After the angular app is loaded it will use Html5 paths to control the routes inside the SPA 
*
**/
app.get('/photo', function(req, res) {
	res.redirect('/');
})
app.get('/photo/:any', function(req, res) {
	res.redirect('/');
})


/**
*
* Express API 
* This is an alternative to the API Gateway that is left here as an example, but is not used by the Angular App
*
**/
app.use('/api', apiRouter);

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
  res.send(err.status);
});

module.exports = app;