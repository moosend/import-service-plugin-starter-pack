
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

    //required plugin routes
    app.get('/api/plugin/details', detailsGetHandler);

    app.get('/api/plugin/authspec', authspecGetHandler);

    app.post('/api/plugin/auth', authPostHandler);

    app.post('/api/plugin/filterspec', filterspecPostHandler);

    app.post('/api/plugin/memberdata', memberdataPostHandler);

    app.get('/api/plugin/oauth?code=', oauthGetHandler);

    app.post('/api/plugin/oauth', oauthPostHandler);

    //default
    app.get('*', (req: express.Request, res: express.Response, next:(err: Error)=>{}) => {
        return next({message: '404 Not found', status: 404});
    })
}