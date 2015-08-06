var socket = new eio.Socket({ host: 'localhost', port: 3000 });
var SocketService = (function () {
    function SocketService() {
        this.socket = socket;
        this.initListeners();
    }
    SocketService.prototype.emit = function (type, data, callback) {
        this.socket.send(JSON.stringify({ type: type, data: data }));
        this.socket.on('message', function (message) {
            var msg = JSON.parse(message);
            if (msg.type === (type + '::success') || msg.type === (type + '::error')) {
                if (msg.error) {
                    callback(msg.error);
                }
                else {
                    callback(msg.data);
                }
            }
        });
    };
    SocketService.prototype.initListeners = function () {
        this.socket.on('open', function (data) {
            console.log('Socket connection opened. Data = ', data);
        });
        this.socket.on('close', function (data) {
            console.error('Socket connection closed. Data = ', data);
        });
    };
    return SocketService;
})();
exports.SocketService = SocketService;
