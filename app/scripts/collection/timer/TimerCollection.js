define([
	'collection/AbstractCollection',
	'model/timer/TimerModel'
], function(AbstractCollection, TimerModel){

	var TimerCollection = AbstractCollection.extend({
		url : 'timers',
		model : TimerModel
	});

	return TimerCollection;
});