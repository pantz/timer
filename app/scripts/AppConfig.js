requirejs.config({
	baseUrl: 'scripts',
	paths: {
		'jquery' : 'vendor/jquery/jquery',
		'underscore' : 'vendor/underscore-amd/underscore',
		'backbone' : 'vendor/backbone-amd/backbone',
		'backbone.abstract' : 'vendor/backbone-abstract/backbone.abstract',
		'backbone.layoutmanager' : 'vendor/layoutmanager/backbone.layoutmanager',
		'mustache' : 'vendor/mustache/mustache',
		'json' : 'vendor/json2/json2'
	},
	shim : {
		'backbone' : {
			deps : ['underscore', 'jquery', 'json'],
			exports : 'Backbone'
		},
		'underscore' : {
			exports : '_'
		},
		'backbone.layoutmanager' : {
			deps : ['backbone'],
			exports : 'Backbone.LayoutManager'
		},
		'backbone.abstract' : {
			deps : ['backbone'],
			exports : 'Backbone'
		}
	}
});

requirejs(['App'], function(App){
	App.initialize();
});
