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
			'timer_update/:id' : 'updateTimer',
			'' : 'showDashboard'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('route:showTimers', function(){
			var timers = window.app.timerCollection;
			timers.fetch().done(function(data){
				console.log(data);
			});
		});

		app_router.on('route:showTimer', function(id){
			var timer = new TimerModel();
			timer.set('Id', id);
			timer.fetch().done(function(data){
				console.log(timer.toJSON());
			});
		});

		app_router.on('route:createTimer', function(){
			var timer = new TimerModel();
			timer.set('Name', 'This is my test timer.');
			timer.save().done(function(data){
				console.log(data);
			});
		});

		app_router.on('route:updateTimer', function(id){
			var timer = new TimerModel({Id:id});
			//timer.fetch().done(function(){
				timer.save().done(function(data){
					console.log(data);
				});
			//});
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