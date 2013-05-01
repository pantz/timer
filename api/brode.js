var connect = require('connect')
  , http = require('http')
  , config = require('./config')
  , app = require('./app');

//Initialize app with config

//Show logs if APIMODE is debug

//Start API server

//Match any requests to routes

//run controller on route
	
	//load model, save data in some format, return

//return result of controller

//output result based on what was requested (json or xml)





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
}).listen(config.API_PORT);
console.log('API running at `'+config.BASEURL+'` on port '+config.API_PORT+' in `'+config.MODE+'` mode');

//Simple static file server for the front end.
connect.createServer(connect.static(config.BASEPATH+'app/')).listen(config.APP_PORT);
console.log('WEB running at `'+config.BASEURL+'` on port '+config.APP_PORT+' in `'+config.MODE+'` mode');