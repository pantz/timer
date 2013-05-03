requirejs.config({
	baseUrl: 'scripts',
	paths: {
		'jquery' : 'vendor/jquery/jquery',
		'underscore' : 'vendor/underscore/underscore',
		'backbone' : 'vendor/backbone/backbone',
		'backbone.abstract' : 'vendor/backbone-abstract/backbone.abstract',
		'backbone.layoutmanager' : 'vendor/layoutmanager/backbone.layoutmanager',
		'mustache' : 'vendor/mustache/mustache',
		'json' : 'vendor/json2/json2',
		'backbone.abstract.model' : 'model/AbstractModel',
		'backbone.abstract.collection' : 'collection/AbstractCollection',
		'backbone.abstract.view' : 'view/AbstractView'
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
