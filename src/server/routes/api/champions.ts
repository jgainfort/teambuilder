/// <reference path="../../../../typings/tsd.d.ts" />

import debugModule = require('debug');
import https = require('https');
var requests = require('../../utils/requests');
var config = require('../../config/config');
var debug = debugModule('teambuilder:champions')

export function getAllChampions(region:string, callback:Function):void {
	var url:string = [config.baseUrl, config.paths.champion.getAll, config.key_param, config.key, config.paths.champion.params].join('');
	var regex:RegExp = /{region}/gi;
	var modUrl:string = url.replace(regex, region);
	
	requests.sendRequest(modUrl, function(err, data) {
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
};

export function getChampionById(id:Number, callback:Function):void {
	
};