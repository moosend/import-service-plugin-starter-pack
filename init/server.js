var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(path.join(__dirname, 'assets')));

module.exports = () => {
    var port = 9090;
    app.listen(port);
    console.log("Server is Up and Running at Port : " + port);
};

