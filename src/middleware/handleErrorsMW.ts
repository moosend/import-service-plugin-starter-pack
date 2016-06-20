import express = require('express');

export default function handleErrorsMW(err: any, req: express.Request, res: express.Response, next: Function) {

    //handle errors as you please, this is just a stupid example
    if(err){
        res.status(err.status);
        res.json(err);
    }else{
        next();
    }

}