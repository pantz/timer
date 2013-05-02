var config = require('./config');
/*
- Load backbone-brode
	- Modify router methods
	- Removes all references to the browser
	- Goal is to have it strictly 
	- Modify sync methods to use <database> instead of ajax
	- Remove dependencies on $
*/

var route = {
	'/timer/:id' : function(){
		console.log('test');
	}
}

var routes = {
	POST : {
		timer : function(){
			return [{id:1},{id:2}];
		}
	},
	GET : {
		timer : function(){
			return [{id:1},{id:2}];
		}
	}
};

var Router = {
	route : function(request){
		var url = request.url,
			 method = request.method;

		url = url.replace('/', '');

		switch(method){
			case('POST'):
				break;
			case('OPTIONS'):
				break;
			case('GET'):
				break;
			case('DELETE'):
				break;
			case('PUT'):
				break;
		}

		//Map this request method to a function
		if(routes[method] && routes[method][url]){
			var cb = routes[method][url];
			if(typeof(cb) === 'function')
				return cb();
			else
				return;
		} else {
			return;
		}
	
	}
};

exports = module.exports = Router;