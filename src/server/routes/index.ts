/// <reference path="../../../typings/tsd.d.ts" />

import express = require('express');
var router: express.Router = express.Router();

/* GET home page */
router.get('/', function(req: express.Request, res: express.Response, next: any): void {
    res.sendFile('index.html');
});

export = router;
