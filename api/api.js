var http = require('http')
  , director = require('director')
  , requirejs = require('requirejs')
  , config = require('./config');

requirejs.config({
	baseUrl : config.APP_PATH+'scripts',
	paths : {
		'backbone.abstract' : '../../api/backbone.abstract.model',
		'backbone.abstract.model' : 'model/AbstractModel',
		'backbone.abstract.collection' : 'collection/AbstractCollection',
		'backbone.abstract.view' : 'view/AbstractView'
	}
});

var TimerModel = requirejs(config.APP_PATH+'scripts/model/timer/TimerModel.js');
var TimerCollection = requirejs(config.APP_PATH+'scripts/collection/timer/TimerCollection.js');

//Temporary DB store
var timers = new TimerCollection();

function init(){
	var api = http.createServer();
	api.on('request', handleRequest);
	api.listen(config.API_PORT);
	console.log('API running at `'+config.APP_URL+'` on port '+config.API_PORT+' in `'+config.MODE+'` mode');
	return api;
}

function read(id){
	var timer = timers.get(id);
	write(this.res, timer.toJSON());
}

function noop(){
	write(this.res);
}

function update(id){
	var that = this;
	var timer = timers.get(id);
	timer.set(this.req.body);
	timer.save().then(function(){
		write(that.res, timer.toJSON());
	});
}

function create(){
	var that = this;
	var timer = new TimerModel(this.req.body);
	timer.save().then(function(){
		timers.add(timer);
		write(that.res, timer.toJSON());
	});
}

function list(){
	var that = this;
	
	timers.fetch().then(function(){
		write(that.res, timers.toJSON());
	});
}

function write(context, data){
	context.writeHead(200, {
		'Access-Control-Allow-Origin': config.APP_URL.substr(0, (config.APP_URL.length-1)),
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
		'X-Powered-By': 'brode.js'
	});
	if(typeof data !== undefined)
		context.end(JSON.stringify(data), 'utf-8');
	else
		context.end('utf-8');
}

var router = new director.http.Router();
router.get('/timer/:id', read);
router.options('/timer', noop);
router.post('/timer', create);
router.options('/timer/:id', noop);
router.put('/timer/:id', update);
router.get('/timers', list);

function handleRequest(request, response){
	request.chunks = [];
	request.on('data', function(chunk) {
		request.chunks.push(chunk);
	});
	router.dispatch(request, response, function(err){
		if(err){
			response.writeHead(404);
			response.end();
		}
	});
}

exports = module.exports = init();