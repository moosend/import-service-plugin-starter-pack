"use strict";
function AccessControlAllowOrigin(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Max-Age', '5');
    next({ message: 'asd', type: 'crueeel', status: 434 });
    //next();
}
exports.__esModule = true;
exports["default"] = AccessControlAllowOrigin;
