"use strict";
var uuid = require('node-uuid');
function generateGuid() {
    var timeString = uuid.v4();
    return timeString.replace(/\./g, '');
}
exports.generateGuid = generateGuid;
