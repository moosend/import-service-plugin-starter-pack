"use strict";
var NotFoundError = (function () {
    function NotFoundError(message, status) {
        this.message = message;
        this.status = status;
    }
    return NotFoundError;
}());
exports.NotFoundError = NotFoundError;
