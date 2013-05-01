var http = require('http');
var connect = require('connect');
var fs = require('fs');

var config = JSON.parse(fs.readFileSync('config.json'));

//Handles all api requests, using the same domain but a different port. Helps with allow origin requests
http.createServer(function (request, response) {
	var headers = {
		'Access-Control-Allow-Origin': config.BASEURL.substr(0, (config.BASEURL.length-1)),
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
		'X-Powered-By': 'brode.js'
	};
	response.writeHead(200, headers);
	var out = JSON.stringify({Response:"Test"});
	response.end(out, 'utf-8');
}).listen(1337);
console.log('API running at `'+config.BASEURL+'` on port 1337 in `'+config.MODE+'` mode');

//Simple static file server for the front end.
connect.createServer(connect.static(__dirname+'/../app/')).listen(80);
console.log('WEB running at `'+config.BASEURL+'` on port 80 in `'+config.MODE+'` mode');