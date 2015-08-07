/// <reference path="../../../typings/tsd.d.ts""/>
var ChampionTypes = require('../config/vo/ChampionTypesVO');
var Regions = require('../config/vo/RegionsVO');
var ItemTypes = require('../config/vo/ItemTypesVO');
var debugModule = require('debug');
var debug = debugModule('teambuilder:socket');
var champions = require('../routes/api/champions');
var items = require('../routes/api/items');
var Socket = (function () {
    function Socket(server, engine) {
        this.server = server;
        this.engine = engine;
        this.regions = new Regions();
        this.championTypes = new ChampionTypes();
        this.itemTypes = new ItemTypes();
        this.initSocketServer();
    }
    Socket.prototype.initSocketServer = function () {
        this.socket = this.engine.attach(this.server);
        this.initListeners();
    };
    Socket.prototype.initListeners = function () {
        var self = this;
        self.socket.on('connection', function (socket) {
            debug('User connected: ID = ' + socket.id);
            socket.on('message', function (message) {
                var msg = JSON.parse(message);
                debug('Message received. Type: ' + msg.type);
                switch (msg.type) {
                    case self.championTypes.GET_ALL_CHAMPIONS:
                        champions.getAllChampions(msg.data.region, function (err, data) {
                            if (err) {
                                socket.send(JSON.stringify({ type: self.championTypes.GET_ALL_CHAMPIONS_ERROR, error: err }));
                            }
                            else {
                                socket.send(JSON.stringify({ type: self.championTypes.GET_ALL_CHAMPIONS_SUCCESS, data: data }));
                            }
                        });
                        break;
                    case self.itemTypes.GET_ALL_ITEMS:
                        items.getAllItems(msg.data.region, function (err, data) {
                            if (err) {
                                socket.send(JSON.stringify({ type: self.itemTypes.GET_ALL_ITEMS_ERROR, error: err }));
                            }
                            else {
                                socket.send(JSON.stringify({ type: self.itemTypes.GET_ALL_ITEMS_SUCCESS, data: data }));
                            }
                        });
                        break;
                    default:
                        debug('Message type not recognized.');
                        break;
                }
            });
            socket.on('close', function () {
                debug('User disconnected');
            });
        });
    };
    return Socket;
})();
module.exports = Socket;
