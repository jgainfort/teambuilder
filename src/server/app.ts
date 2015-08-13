/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
// import path = require('path');
// import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');


// routing
import routes = require('./routes/index');

var app: express.Express = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./src/client/'));

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: any) => {
    var err: Error = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

/**
 * error handlers
 */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req: express.Request, res: express.Response, next: any) => {
        res.status(err['status'] || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stack traces leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: any) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

export = app;
