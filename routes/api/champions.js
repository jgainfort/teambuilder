/// <reference path="../../typings/tsd.d.ts" />
var debugModule = require('debug');
var https = require('https');
var config = require('../../config/config');
var debug = debugModule('teambuilder:champions');
function getAllChampions(region, callback) {
    var url = [config.baseUrl, config.paths.champion.getAll, config.key_param, config.key, config.paths.champion.params].join('');
    var regex = /{region}/gi;
    var modUrl = url.replace(regex, region);
    sendRequest(modUrl, function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            if (data.status) {
                callback(data.status, null);
            }
            else {
                callback(null, data);
            }
        }
    });
}
exports.getAllChampions = getAllChampions;
;
function getChampionById(id, callback) {
}
exports.getChampionById = getChampionById;
;
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
