/// <reference path="../../../typings/tsd.d.ts""/>
import ChampionTypes = require('../config/vo/ChampionTypesVO');
import Regions = require('../config/vo/RegionsVO');
import ItemTypes = require('../config/vo/ItemTypesVO');
import debugModule = require('debug');
import http = require('http');

var debug: debugModule.Debugger = debugModule('teambuilder:socket');
var champions: any = require('../routes/api/champions');
var items: any = require('../routes/api/items');

class Socket {
    server: http.Server;
    engine: any;
    socket: any;
    regions: Regions;
    championTypes: ChampionTypes;
    itemTypes: ItemTypes;
    debug: debugModule.Debugger;

    constructor() {
        this.regions = new Regions();
        this.championTypes = new ChampionTypes();
        this.itemTypes = new ItemTypes();
        this.debug = debug;
    }

    init(server: http.Server, engine: any): void {
        this.server = server;
        this.engine = engine;
        this.socket = this.engine.attach(this.server);
        this.initListeners();
    }

    initListeners(): void {
        var self: any = this;
        self.socket.on('connection', function(socket: any): void {
            self.debug('User connected: ID = ' + socket.id);

            socket.on('message', function(message: string): void {
                var msg: any = JSON.parse(message);
                self.debug('Message received. Type: ' + msg.type);

                switch (msg.type) {
                    case self.championTypes.GET_ALL_CHAMPIONS:
                        champions.getAllChampions(msg.data.region, (err: any, data: any) => {
                            if (err) {
                                socket.send(JSON.stringify({ type: self.championTypes.GET_ALL_CHAMPIONS_ERROR, error: err }));
                            } else {
                                socket.send(JSON.stringify({ type: self.championTypes.GET_ALL_CHAMPIONS_SUCCESS, data: data }));
                            }
                        });
                        break;
                    case self.itemTypes.GET_ALL_ITEMS:
                        items.getAllItems(msg.data.region, (err: any, data: any) => {
                            if (err) {
                                socket.send(JSON.stringify({ type: self.itemTypes.GET_ALL_ITEMS_ERROR, error: err }));
                            } else {
                                socket.send(JSON.stringify({ type: self.itemTypes.GET_ALL_ITEMS_SUCCESS, data: data }));
                            }
                        });
                        break;
                    default:
                        debug('Message type not recognized.');
                        break;
                }
            });

            socket.on('close', () => {
                debug('User disconnected');
            });
        });
    }
}

export = Socket;
