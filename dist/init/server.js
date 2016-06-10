"use strict";
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var config = require('config');
var routes_1 = require('../routes/routes');
var accessAllowOriginMW_1 = require('../middleware/accessAllowOriginMW');
var handleErrorsMW_1 = require('../middleware/handleErrorsMW');
var app = express();
app.use('/api/doc', express.static(path.join(__dirname, '/../../apidoc')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//middleware
app.use(accessAllowOriginMW_1["default"]);
//router
routes_1["default"](app);
//last middleware in order to handle the errors
app.use(handleErrorsMW_1["default"]);
function start(cb) {
    if (cb === void 0) { cb = null; }
    var port = config.get('port');
    var host = config.get('host');
    var server = app.listen(port, host, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('express app is listening on http://%s:%s', host, port);
        cb && cb();
    });
}
exports.start = start;
