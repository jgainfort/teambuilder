/// <reference path="../../typings/tsd.d.ts" />

import debugModule = require('debug');
import https = require('https');
var config = require('../../config/config');
var debug = debugModule('teambuilder:champions')

export function getAllChampions(region:string, callback) {
	var url:string = [config.baseUrl, config.paths.champion.getAll, config.key_param, config.key, config.paths.champion.params].join('');
	var regex:RegExp = /{region}/gi;
	var modUrl:string = url.replace(regex, region);
	
	sendRequest(modUrl, function(err, data) {
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

export function getChampionById(id:Number, callback) {
	
};

function sendRequest(url, callback) {
	https.get(url, function(res) {
		var str:string = '';
		
		res.on('data', function(data) {
			str += data;
		});
		
		res.on('end', function() {
			callback(null, JSON.parse(str));
		});
	})
	.on('error', function(err) {
		callback(err, null);
	});
}