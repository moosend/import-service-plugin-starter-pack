
import * as express from 'express';
import {Error} from '../util/errors/Errors';

//route handlers
import detailsGetHandler from '../handlers/detailsGetHandler';
import authspecGetHandler from '../handlers/authspecGetHandler';
import authPostHandler from '../handlers/authPostHandler';
import filterspecPostHandler from '../handlers/filterspecPostHandler';
import memberdataPostHandler from '../handlers/memberdataPostHandler';
import oauthGetHandler from '../handlers/oauthGetHandler';
import oauthPostHandler from '../handlers/oauthPostHandler';

export default function routes(app){

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
    app.get('/api/plugin/details', detailsGetHandler);

    /**
     *  For 'api', 'oauth2-api' and 'file' type plugins
     */
    app.get('/api/plugin/authspec', authspecGetHandler);

    /**
     *  For 'api', 'oauth2-api' and 'file' type plugins
     */
    app.post('/api/plugin/filterspec', filterspecPostHandler);

    /**
     *  For 'api', 'oauth2-api' and 'file' type plugins
     */
    app.post('/api/plugin/memberdata', memberdataPostHandler);

    /**
     *  For 'oauth2-api' type plugin
     */
    app.get('/api/plugin/oauth?code=', oauthGetHandler);

    /**
     *  For 'api' type plugin
     */
    app.post('/api/plugin/auth', authPostHandler);


    /**
    *  For 'oauth2-api' type plugin
    */
    app.post('/api/plugin/oauth', oauthPostHandler);

    //default
    app.get('*', (req: express.Request, res: express.Response, next:(err: Error) => any) => {
        return next({message: '404 Not found', status: 404});
    });
}