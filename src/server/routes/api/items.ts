/// <referencd path="../../../../typings/tsd.d.ts" />

import debugModule = require('debug');
import https = require('https');
var requests = require('../../utils/requests');
var config = require('../../config/config');
var debug = debugModule('teambuilder:items');

export function getAllItems(region:string, callback:Function):void {
	var url:string = [config.baseUrl, config.paths.item.getAll, config.key_param, config.key, config.paths.item.params].join('');
	var regex:RegExp = /{region}/gi;
	var modUrl:string = url.replace(regex, region);
	
	requests.sendRequest(modUrl, (err, data) => {
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

export function getItemById(regions:string, id:number, callback:Function):void {
	
}