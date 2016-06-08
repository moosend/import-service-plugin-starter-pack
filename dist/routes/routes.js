"use strict";
//route handlers
var detailsGetHandler_1 = require('../handlers/detailsGetHandler');
var authspecGetHandler_1 = require('../handlers/authspecGetHandler');
var authPostHandler_1 = require('../handlers/authPostHandler');
var filterspecPostHandler_1 = require('../handlers/filterspecPostHandler');
var memberdataPostHandler_1 = require('../handlers/memberdataPostHandler');
var oauthGetHandler_1 = require('../handlers/oauthGetHandler');
var oauthPostHandler_1 = require('../handlers/oauthPostHandler');
function routes(app) {
    //required plugin routes
    app.get('/api/plugin/details', detailsGetHandler_1["default"]);
    app.get('/api/plugin/authspec', authspecGetHandler_1["default"]);
    app.post('/api/plugin/auth', authPostHandler_1["default"]);
    app.post('/api/plugin/filterspec', filterspecPostHandler_1["default"]);
    app.post('/api/plugin/memberdata', memberdataPostHandler_1["default"]);
    app.get('/api/plugin/oauth?code=', oauthGetHandler_1["default"]);
    app.post('/api/plugin/oauth', oauthPostHandler_1["default"]);
    //default
    app.get('*', function (req, res, next) {
        return next({ message: '404 Not found', status: 404 });
    });
}
exports.__esModule = true;
exports["default"] = routes;