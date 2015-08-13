/// <reference path="../../../typings/tsd.d.ts" />

'use strict';
require('typescript-require');

/**
 * module dependecies
 */

import app = require('../app');
import debugModule = require('debug');
import http = require('http');
import Socket = require('../utils/Socket');

var debug: debugModule.Debugger = debugModule('teambuilder:server');
var engine: any = require('engine.io');

/**
 * get port from environment and store it in Express
 */

var port: Number = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * create HTTP server
 */

var server: http.Server = http.createServer(app);

/**
 * listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * init engine.io
 */
var socketServer: Socket = new Socket();
socketServer.init(server, engine);

function normalizePort(val: any): any {
    'use strict';
    var p: any = parseInt(val, 10);

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

function onError(error: any): void {
    'use strict';
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind: any = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

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

function onListening(): void {
    'use strict';
    var addr: any = server.address();
    var bind: any = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
