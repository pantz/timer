define([
	'collection/AbstractCollection',
	'model/timer/TimerModel'
], function(AbstractCollection, TimerModel){

	var TimerCollection = AbstractCollection.extend({
		model : TimerModel
	});

	return TimerCollection;
});