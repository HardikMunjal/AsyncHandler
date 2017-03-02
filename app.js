var express = require('express');
var app = express();
var router = express.Router();

//app.set('view engine', 'jade');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var request = require('request');



app.use(require('./routes/corsheaders'));
   
app.use(bodyParser.json({ 
 	limit: '10mb' 
    })); 



app.use(router);
require('./routes')(router);




var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});