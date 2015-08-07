/// <reference path="../../../../typings/tsd.d.ts" />
var debugModule = require('debug');
var requests = require('../../utils/requests');
var config = require('../../config/config');
var debug = debugModule('teambuilder:champions');
function getAllChampions(region, callback) {
    var url = [config.baseUrl, config.paths.champion.getAll, config.key_param, config.key, config.paths.champion.params].join('');
    var regex = /{region}/gi;
    var modUrl = url.replace(regex, region);
    requests.sendRequest(modUrl, function (err, data) {
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
