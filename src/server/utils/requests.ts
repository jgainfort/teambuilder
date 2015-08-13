/// <reference path="../../../typings/tsd.d.ts" />

import https = require('https');

export function sendRequest(url: string, callback: Function): void {
    'use strict';
    https.get(url, (res: any) => {
        var str: string = '';

        res.on('data', (data: string) => {
            str += data;
        });

        res.on('end', () => {
            callback(null, JSON.parse(str));
        });
    })
        .on('error', (err: string) => {
            callback(err, null);
        });
}
