/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import path = require('path');
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');


// Routing
import routes = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('./src/client/'));

app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found');
	err['status'] = 404;
	next(err);
});

/**
 * Error handlers
 */

// Development error handler
// Will print stacktrace
if (app.get('env') === 'development') {
	app.use((err: any, req ,res, next) => {
		res.status(err['status'] || 500);
		res.json({
			message: err.message,
			error: err
		})
	});
}

// Production error handler
// No stack traces leaked to user
app.use((err: any, req, res, next) => {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: {}
	})
});

export = app;