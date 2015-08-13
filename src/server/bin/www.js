/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
require('typescript-require');
/**
 * module dependecies
 */
var app = require('../app');
var debugModule = require('debug');
var http = require('http');
var Socket = require('../utils/Socket');
var debug = debugModule('teambuilder:server');
var engine = require('engine.io');
/**
 * get port from environment and store it in Express
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
/**
 * create HTTP server
 */
var server = http.createServer(app);
/**
 * listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * init engine.io
 */
var socketServer = new Socket();
socketServer.init(server, engine);
function normalizePort(val) {
    'use strict';
    var p = parseInt(val, 10);
    if (isNaN(p)) {
        // named pipe
        return val;
    }
    if (p >= 0) {
        // port number
        return p;
    }
    return false;
}
/**
 * event listener for HTTP server "error" event.
 */
function onError(error) {
    'use strict';
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * event listener for HTTP server "listening" event.
 */
function onListening() {
    'use strict';
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
