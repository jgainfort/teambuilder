/// <reference path="../../../typings/tsd.d.ts" />

import express = require('express');
import debugModule = require('debug');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
	res.sendFile('index.html');
});

export = router;