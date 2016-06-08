import express = require('express');
import {Error} from '../util/errors/Errors';

export default function handleErrors(err: Error, req: express.Request, res: express.Response, next: Function) {

    if(err){
        res.status(err.status);
        res.json(err);
    }else{
        next();
    }


}