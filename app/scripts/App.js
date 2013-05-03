define([
	'jquery', 
	'underscore', 
	'backbone',
	'backbone.layoutmanager',
	'mustache',
	'AppRouter',
	'collection/timer/TimerCollection'
], function($, _, Backbone, LayoutManager, Mustache, Router, TimerCollection){
	return { 
		initialize: function() {

			window.app = that = this;

			_.extend(this, {
				router : null,
				config : null,
				timerCollection: new TimerCollection(),
				loaded : false,
				layout : null
			});

			this.router = Router;
			this.router.initialize();

			//Setup layout manager
			Backbone.Layout.configure({
				manage : true,
				prefix : 'templates/',
				fetch : function(path){
					var done = this.async();
					$.get(path+'.mustache', done);
				},
				render : function(template, context) {
					return Mustache.render(template);
				}
			});

			//Setup the main view
			this.layout = new Backbone.Layout({
				template : 'mainLayout'
			});

			//Attach the main layout
			$('.body').empty().append(this.layout.el);

			//Render the layout
			this.layout.render();

		}
	};
});