var request = require('request');
var sys = require('sys');
var open = require("open");
var ejs = require('ejs');
var fs = require('fs');


var WebSocket = require('ws');
module.exports = function (app) {

var shivu = require('./shivu');


//If we use more than 1 async function parallely then they will not wait for each other completion, so 
// we can not use return of 1 async function into another
app.get('/async/default', shivu.parallelAsyncFunction);
app.get('/async/nested', shivu.nestedAsyncFunction);
app.get('/callback/pattern', shivu.callbackStylePattern);



app.get('/page', function(req, res, next) {
	res.render('index.html');
});
};

