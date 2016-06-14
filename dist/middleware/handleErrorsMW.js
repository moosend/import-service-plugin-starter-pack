"use strict";
function handleErrorsMW(err, req, res, next) {
    if (err) {
        res.status(err.status);
        res.json(err);
    }
    else {
        next();
    }
}
exports.__esModule = true;
exports["default"] = handleErrorsMW;
