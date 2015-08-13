/// <referencd path="../../../../typings/tsd.d.ts" />
var requests = require('../../utils/requests');
var config = require('../../config/config');
function getAllItems(region, callback) {
    'use strict';
    var url = [config.baseUrl, config.paths.item.getAll, config.key_param, config.key, config.paths.item.params].join('');
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
exports.getAllItems = getAllItems;
