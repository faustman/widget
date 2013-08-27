
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/my/endpoint', function(req, res){
  res.json({'foo': '1423423myMockJSON'});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
