// Import
declare var eio;
var socket = new eio.Socket({host: 'localhost', port: 3000});

export class SocketService {
	socket:any;
	callback:any;
	
	constructor() {
		this.socket = socket;
		this.initListeners();
	}
	
	emit(type:string, data:Object, callback) {
		this.socket.send(JSON.stringify({type: type, data: data}));
		this.socket.on('message', (message) => {
			var msg = JSON.parse(message);
			if (msg.error) {
				callback(msg.error);
			} else {
				callback(msg.data)
			}
		});
	}
	
	initListeners() {
		this.socket.on('open', (data) => {
			console.log('Socket connection opened. Data = ', data);
		})
		this.socket.on('close', (data) => {
			console.error('Socket connection closed. Data = ', data);
		});
	}
}
