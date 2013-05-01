define([
	'jquery',
	'underscore',
	'backbone',
	'model/timer/TimerModel'
], function($, _, Backbone, TimerModel, TimerCollection){

	var AppRouter = Backbone.Router.extend({
		routes: {
			'timers' : 'showTimers',
			'timer/:id' : 'showTimer',
			'timer_create' : 'createTimer',
			'' : 'showDashboard'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('route:showTimers', function(){
			var timers = window.app.timerCollection;
			console.log('Showing timer page');
		});

		app_router.on('route:showTimer', function(id){
			var timer = new TimerModel();
			timer.set('Id', id);
			console.log(timer.toJSON())
		});

		app_router.on('route:createTimer', function(id){
			var timer = new TimerModel();
			timer.set('Name', 'This is my test timer.');
			console.log(timer.toJSON());
		});

		app_router.on('route:showDashboard', function(){
			console.log('show dashboard');
		});

		Backbone.history.start();

	};

	return {
		initialize: initialize
	};

});