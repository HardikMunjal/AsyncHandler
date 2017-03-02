var request = require('request');
var sys = require('sys');
var open = require("open");
var ejs = require('ejs');
var fs = require('fs');


var WebSocket = require('ws');
module.exports = function (app) {

var shivu = require('./shivu');

app.get('/', shivu.callbackPatternStyle);



app.get('/page', function(req, res, next) {
	res.render('index.html');
});
};

