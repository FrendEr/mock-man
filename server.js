var express = require('express');
var vhost = require('vhost');

var app = express();
var main = express();

main.use('/', function(req, res) {
    res.end('main page');
});

app.listen(3000);
