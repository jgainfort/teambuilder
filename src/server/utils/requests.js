/// <reference path="../../../typings/tsd.d.ts" />
var https = require('https');
var debugModule = require('debug');
var debug = debugModule('teambuilder:requests');
function sendRequest(url, callback) {
    https.get(url, function (res) {
        var str = '';
        res.on('data', function (data) {
            str += data;
        });
        res.on('end', function () {
            callback(null, JSON.parse(str));
        });
    })
        .on('error', function (err) {
        callback(err, null);
    });
}
exports.sendRequest = sendRequest;
