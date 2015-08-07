/// <reference path="../../../typings/tsd.d.ts" />

import https = require('https');
import http = require('http');
import debugModule = require('debug');
var debug = debugModule('teambuilder:requests');

export function sendRequest(url:string, callback:Function) {
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