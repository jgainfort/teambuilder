/// <referencd path="../../../../typings/tsd.d.ts" />

var requests: any = require('../../utils/requests');
var config: any = require('../../config/config');

export function getAllItems(region: string, callback: Function): void {
    'use strict';
    var url: string = [config.baseUrl, config.paths.item.getAll, config.key_param, config.key, config.paths.item.params].join('');
    var regex: RegExp = /{region}/gi;
    var modUrl: string = url.replace(regex, region);

    requests.sendRequest(modUrl, (err: any, data: any) => {
        if (err) {
            callback(err, null);
        } else {
            if (data.status) {
                callback(data.status, null);
            } else {
                callback(null, data);
            }
        }
    });
}
