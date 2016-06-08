import * as express from 'express';

export default function AccessControlAllowOrigin(req: express.Request, res: express.Response, next: () => {}) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Max-Age', '5');
    next();
}
