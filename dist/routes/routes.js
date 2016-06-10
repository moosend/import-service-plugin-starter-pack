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
    /**
     *  For 'api', 'oauth2-api' and 'file' type plugins
     *
     * @api {get} /api/plugin/details Request Plugin Details
     *
     * @apiName GetDetails
     * @apiGroup Plugin Info
     * @apiVersion 0.0.1
     *
     * @apiSuccess {String} Name Name of the plugin.
     * @apiSuccess {String} Description  Description of the plugin.
     * @apiSuccess {String} Image  Image thumbnail.
     * @apiSuccess {Boolean} NeedsAuth   true.
     * @apiSuccess {Boolean} HasFilters   true.
     * @apiSuccess {String} PluginType   '1'.
     * @apiSuccess {String} PluginTypeDescription   'oauth2-api'.
     *
     *  @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *          "Name": "Salesforce Plugin",
     *          "Description": "Plugin Description",
     *          "Image": "",
     *          "NeedsAuth": true,
     *          "HasFilters": true,
     *          "PluginType": 3,
     *          "PluginTypeDescription": "oauth2-api"
     *     }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Server Error
     *     {
     *          "message": "Server Error",
     *          "status": "500"
     *     }
     *
     */
    app.get('/api/plugin/details', detailsGetHandler_1["default"]);
    /**
     *  For 'api', 'oauth2-api' and 'file' type plugins
     */
    app.get('/api/plugin/authspec', authspecGetHandler_1["default"]);
    /**
     *  For 'api', 'oauth2-api' and 'file' type plugins
     */
    app.post('/api/plugin/filterspec', filterspecPostHandler_1["default"]);
    /**
     *  For 'api', 'oauth2-api' and 'file' type plugins
     */
    app.post('/api/plugin/memberdata', memberdataPostHandler_1["default"]);
    /**
     *  For 'oauth2-api' type plugin
     */
    app.get('/api/plugin/oauth?code=', oauthGetHandler_1["default"]);
    /**
     *  For 'api' type plugin
     */
    app.post('/api/plugin/auth', authPostHandler_1["default"]);
    /**
    *  For 'oauth2-api' type plugin
    */
    app.post('/api/plugin/oauth', oauthPostHandler_1["default"]);
    //default
    app.get('*', function (req, res, next) {
        return next({ message: '404 Not found', status: 404 });
    });
}
exports.__esModule = true;
exports["default"] = routes;
