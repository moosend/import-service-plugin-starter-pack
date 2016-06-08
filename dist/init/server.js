"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var config = require('config');
var routes_1 = require('../routes/routes');
var accessAllowOrigin_1 = require('../middleware/accessAllowOrigin');
var handleErrors_1 = require('../middleware/handleErrors');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//middleware
app.use(accessAllowOrigin_1["default"]);
//router
routes_1["default"](app);
app.use(handleErrors_1["default"]);
function start(cb) {
    if (cb === void 0) { cb = null; }
    var port = Number(config.get('port'));
    var host = String(config.get('host'));
    var server = app.listen(port, host, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('express app is listening on http://%s:%s', host, port);
        cb && cb();
    });
}
exports.start = start;
