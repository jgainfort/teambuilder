declare var eio: any;
var socket: any = new eio.Socket({ host: 'localhost', port: 3000 });

export class SocketService {
    socket: any;

    constructor() {
        this.socket = socket;
        this.initListeners();
    }

    emit(type: string, data: Object, callback: Function): void {
        this.socket.send(JSON.stringify({ type: type, data: data }));
        this.socket.on('message', (message: string) => {
            var msg: any = JSON.parse(message);
            if (msg.type === (type + '::success') || msg.type === (type + '::error')) {
                if (msg.error) {
                    callback(msg.error);
                } else {
                    callback(msg.data);
                }
            }
        });
    }

    initListeners(): void {
        this.socket.on('open', (data: any) => {
            console.log('Socket connection opened. Data = ', data);
        });
        this.socket.on('close', (data: any) => {
            console.error('Socket connection closed. Data = ', data);
        });
    }
}
